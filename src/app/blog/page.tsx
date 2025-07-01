import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {slug: "focushub", title: "Building FocusHub: My Deep Dive Into Real-Time Django, WebSockets & Productivity Design", description: "A breakdown of the journey building FocusHub—a real-time virtual study room platform with live chat, Pomodoro sessions, lo-fi music, and gamified study tracking—powered by Django, PostgreSQL, Channels, and Render."},
    {slug: "ipl-predictor", title: "Beyond the Boundary: Building a Machine Learning IPL Match Predictor with Advanced ELO Rating System", description: "How I created a sophisticated cricket match prediction model combining custom ELO ratings, player form analysis, and machine learning to predict IPL match outcomes with remarkable accuracy."},
    { slug: "dive-into-ML", title: "My Gradual Dive into Machine Learning", description: "A journey through the basics and advancements in Machine Learning." },
    { slug: "useful-py", title: "Scripting My Way Through Life: A collection of Useful Python Scripts", description: "A compilation of Python scripts that make life easier." },
    {slug: "intern-interview", title: "My Technical Interview Experience", description: "Reflecting on an on-call technical interview for a data engineering intern role."},
    {slug: "hello-world", title: "Why I Love Python", description: "My first post here dedicated to Python"}
  ];

  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">my blog.</h1>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:border-blue-500"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">
              {post.title}
              <span className="inline-block transition-transform group-hover:translate-x-1"> →</span>
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </article>
  );
}
