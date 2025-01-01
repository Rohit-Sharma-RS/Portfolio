import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="prose mx-auto my-8 text-white dark:text-black">
      {/* Post Header */}
      <header className="mb-6">
        <h1 className="text-4xl text-black dark:text-white">A Technical Interview Experience at Olcademy</h1>
        <p className="text-gray-300 dark:text-gray-700">
          Reflecting on one of my first on-call technical interview for a data engineering role.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-600">Published on: January 1, 2025</p>
      </header>

      {/* Featured Image */}
      <div className="mb-8">
        <Image
          src="/interview.jpg"
          alt="Technical Interview Experience"
          width={800}
          height={450}
          className="rounded-lg"
        />
      </div>

      {/* Post Content */}
      <section>
        <p>
          Last week, I had the opportunity to attend an on-call technical interview for a data engineering intern role at Olcademy. It was a unique and enlightening experience, marking an important milestone in my career journey. I’m sharing this post to reflect on the questions asked during the process and the insights I gained.
        </p>

        <h2>Questions Asked</h2>
        <ol>
          <li>What is data engineering?</li>
          <li>Which automation tools are you proficient in?</li>
          <li>
            Describe an automation project you worked on. What challenges did you face, and how did you overcome them?
          </li>
          <li>What is regression in the context of machine learning?</li>
          <li>What is the difference between linear regression and logistic regression?</li>
          <li>What is ETL?</li>
          <li>What is data pipelining?</li>
          <li>
            If tasked with building a machine learning project, what steps would you take, and which libraries would you use?
          </li>
        </ol>

        <h2>Reflections on the Experience</h2>
        <p>
          This interview was a remarkable experience as it allowed me to engage in a professional dialogue about data engineering. I appreciated the opportunity to discuss technical concepts and real-world applications. It was a valuable learning moment that highlighted both my strengths and areas for growth.
        </p>

        <h2>Conclusion</h2>
        <p>
          Participating in the interview was a rewarding experience that gave me insights into the expectations for a data engineering role. I’m grateful for this opportunity and look forward to exploring more challenges in this field.
        </p>
        <p className="italic">— Rohit</p>
      </section>
    </article>
  );
}
