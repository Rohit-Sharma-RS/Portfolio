import Link from "next/link";

export default function BlogPage() {
  const posts = [
    { slug: "dive-into-ML", title: "My Gradual Dive into Machine Learning", description: "A journey through the basics and advancements in Machine Learning." },
    { slug: "useful-py", title: "Scripting My Way Through Life: A collection of Useful Python Scripts", description: "A compilation of Python scripts that make life easier." },
    {slug: "intern-interview", title: "My Technical Interview Experience", description: "Reflecting on an on-call technical interview for a data engineering intern role."},
    {slug: "hello-world", title: "Why I Love Python", description: "My first post here dedicated to Python"},

  ];

  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title text-3xl font-bold mb-4">my blog.</h1>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 text-black dark:text-white">
            <Link href={`/blog/${post.slug}`} legacyBehavior>
              <a className="underline">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              </a>
            </Link>
            <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
