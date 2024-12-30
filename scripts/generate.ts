import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { DocumentInterface } from "@langchain/core/documents";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const routesSplitter = new RecursiveCharacterTextSplitter();
const dataSplitter = new RecursiveCharacterTextSplitter();
const postSplitter = new RecursiveCharacterTextSplitter();

async function generateEmbeddings() {
  // clear existing data
  // Removed Redis related code

  const routeLoader = new DirectoryLoader(
    "src/app",
    {
      ".tsx": (path) => new TextLoader(path),
    },
    true,
  );

  // routes
  const routes = (await routeLoader.load())
    .filter((route) => route.metadata.source.endsWith("page.tsx"))
    .map((route): DocumentInterface => {
      const url =
        route.metadata.source
          .replace(/\\/g, "/") // replace "\\" with "/"
          .split("/src/app")[1]
          .split("/page.tsx")[0] || "/";

      const pageContentTrimmed = route.pageContent
        .replace(/^import.*$/gm, "") // remove all import statements
        .replace(/ className=(["']).*?\1| className={.*?}/g, "") // remove all className props
        .replace(/^\s*[\r]/gm, "") // remove empty lines
        .trim();

      return { pageContent: pageContentTrimmed, metadata: { url } };
    });

  // console.log(routes);

  await routesSplitter.splitDocuments(routes);
  await routesSplitter.splitDocuments(routes);

  // resume data
  const dataLoader = new DirectoryLoader("src/data", {
    ".json": (path) => new TextLoader(path),
  });

  const data = await dataLoader.load();

  // console.log(data);

  await dataSplitter.splitDocuments(data);
  await dataSplitter.splitDocuments(data);

  // blog posts
  const postLoader = new DirectoryLoader(
    "content",
    {
      ".mdx": (path) => new TextLoader(path),
    },
    true,
  );

  const posts = (await postLoader.load())
    .filter((post) => post.metadata.source.endsWith(".mdx"))
    .map((post): DocumentInterface => {
      const pageContentTrimmed = post.pageContent.split("---")[1]; // only want the frontmatter

      return { pageContent: pageContentTrimmed, metadata: post.metadata };
    });

  // console.log(posts);

  await postSplitter.splitDocuments(posts);
  await postSplitter.splitDocuments(posts);

  // Further processing of splitRoutes, splitData, and splitPosts can be done here
}

generateEmbeddings();
