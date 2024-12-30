var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { Redis } from "@upstash/redis";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { getEmbeddingsCollection, getVectorStore } from "../src/lib/vectordb";
function generateEmbeddings() {
    return __awaiter(this, void 0, void 0, function () {
        var vectorStore, routeLoader, routes, routesSplitter, splitRoutes, dataLoader, data, dataSplitter, splitData, postLoader, posts, postSplitter, splitPosts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getVectorStore()];
                case 1:
                    vectorStore = _a.sent();
                    return [4 /*yield*/, getEmbeddingsCollection()];
                case 2:
                    // clear existing data
                    (_a.sent()).deleteMany({});
                    return [4 /*yield*/, Redis.fromEnv()];
                case 3:
                    (_a.sent()).flushdb();
                    routeLoader = new DirectoryLoader("src/app", {
                        ".tsx": function (path) { return new TextLoader(path); },
                    }, true);
                    return [4 /*yield*/, routeLoader.load()];
                case 4:
                    routes = (_a.sent())
                        .filter(function (route) { return route.metadata.source.endsWith("page.tsx"); })
                        .map(function (route) {
                        var url = route.metadata.source
                            .replace(/\\/g, "/") // replace "\\" with "/"
                            .split("/src/app")[1]
                            .split("/page.tsx")[0] || "/";
                        var pageContentTrimmed = route.pageContent
                            .replace(/^import.*$/gm, "") // remove all import statements
                            .replace(/ className=(["']).*?\1| className={.*?}/g, "") // remove all className props
                            .replace(/^\s*[\r]/gm, "") // remove empty lines
                            .trim();
                        return { pageContent: pageContentTrimmed, metadata: { url: url } };
                    });
                    routesSplitter = RecursiveCharacterTextSplitter.fromLanguage("html");
                    return [4 /*yield*/, routesSplitter.splitDocuments(routes)];
                case 5:
                    splitRoutes = _a.sent();
                    dataLoader = new DirectoryLoader("src/data", {
                        ".json": function (path) { return new TextLoader(path); },
                    });
                    return [4 /*yield*/, dataLoader.load()];
                case 6:
                    data = _a.sent();
                    dataSplitter = RecursiveCharacterTextSplitter.fromLanguage("js");
                    return [4 /*yield*/, dataSplitter.splitDocuments(data)];
                case 7:
                    splitData = _a.sent();
                    postLoader = new DirectoryLoader("content", {
                        ".mdx": function (path) { return new TextLoader(path); },
                    }, true);
                    return [4 /*yield*/, postLoader.load()];
                case 8:
                    posts = (_a.sent())
                        .filter(function (post) { return post.metadata.source.endsWith(".mdx"); })
                        .map(function (post) {
                        var pageContentTrimmed = post.pageContent.split("---")[1]; // only want the frontmatter
                        return { pageContent: pageContentTrimmed, metadata: post.metadata };
                    });
                    postSplitter = RecursiveCharacterTextSplitter.fromLanguage("markdown");
                    return [4 /*yield*/, postSplitter.splitDocuments(posts)];
                case 9:
                    splitPosts = _a.sent();
                    return [4 /*yield*/, vectorStore.addDocuments(splitRoutes)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, vectorStore.addDocuments(splitData)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, vectorStore.addDocuments(splitPosts)];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
generateEmbeddings();
