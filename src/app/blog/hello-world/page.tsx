import Image from "next/image";

export default function BlogPost() {
  return (
<article className="prose prose-lg mx-auto my-8 
  text-gray-800 dark:text-gray-200 
  prose-headings:text-black dark:prose-headings:text-white
  prose-p:text-gray-800 dark:prose-p:text-gray-300
  prose-li:text-gray-800 dark:prose-li:text-gray-300
  prose-a:text-blue-600 dark:prose-a:text-blue-400
">
      {/* Post Header */}
      <header className="mb-6">
        <h1 className="text-4xl text-black dark:text-white">Why I Love Python</h1>
        <p className="text-gray-700 dark:text-gray-300">My first post here dedicated to Python</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Published on: December 19, 2024</p>
      </header>

      {/* Featured Image */}
      <div className="mb-8">
        <Image
          src="/python-ds.jpg"
          alt="Python and Data Science"
          width={800}
          height={450}
          className="rounded-lg"
        />
      </div>

      {/* Post Content */}
      <section>
        <p>
          I’m using this post to explain why Python stands out as my favorite programming language and how it guided me toward data science and machine learning. From versatile libraries to an amazing community, Python has been at the core of my learning and growth.
        </p>

        <h2>What’s This About?</h2>
        <p>
          This blog will serve as a way for me to share my journey in data science. I’m focusing on why Python became my language of choice and how it shaped my decision to dive into machine learning. 
          I also find areas like NLP, computer vision, and deep learning fascinating because they make computers feel almost human in their ability to interpret language and images.
        </p>
        <p>
          I’ve compiled various machine learning and deep learning projects in my{" "}
          <a
            href="https://github.com/Rohit-Sharma-RS/ML-and-DL"
            className="text-blue-500 dark:text-blue-400 underline"
          >
            GitHub repository
          </a>
          . Feel free to explore them for more insights on my learning process.
        </p>

        <h2>Why Python?</h2>
        <ul>
          <li>Simple syntax that keeps the focus on logic</li>
          <li>Rich ecosystem of libraries like NumPy, Pandas, and scikit-learn</li>
          <li>Supportive community and countless resources for learning</li>
        </ul>

        <h2>My Path to Data Science</h2>
        <ol>
          <li>Interest in problem-solving and analytics</li>
          <li>Exposure to Python’s data-centric libraries</li>
          <li>Transition into machine learning for real-world solutions</li>
          <li>Ongoing exploration of NLP, CV, and deep learning</li>
        </ol>

        <h2>The Python Journey</h2>
        <ol>
          <li>My fascination with Python started when I experimented with simple automation scripts.</li>
          <li>Over time, I realized Python’s readability allowed me to learn new libraries at a faster pace.</li>
          <li>The supportive community offered a wealth of tutorials and forums for troubleshooting.</li>
          <li>I began dabbling in data visualization tools like Matplotlib and Seaborn.</li>
          <li>Soon, I saw how easy it was to manipulate large datasets with Pandas.</li>
          <li>This led me to explore broader analytics tasks and eventually machine learning.</li>
          <li>The transition to using scikit-learn felt natural due to Python’s consistent syntax.</li>
          <li>I started building classification and regression models to solve real-world problems.</li>
          <li>My curiosity drove me to study the math behind these algorithms, like linear regression and decision trees.</li>
          <li>Data science workflows became second nature as I practiced on various datasets.</li>
          <li>I then discovered TensorFlow and PyTorch for deep learning.</li>
          <li>Writing neural networks in Python made the process surprisingly accessible.</li>
          <li>Projects involving image classification using convolutional neural networks captured my interest.</li>
          <li>This opened the door to computer vision techniques that interpret pixel-level details.</li>
          <li>I expanded into natural language processing by exploring embeddings and recurrent networks.</li>
          <li>The potential for modern NLP to handle sentiment analysis or language translation amazed me.</li>
          <li>Deep learning’s performance improvements gave me confidence in applying advanced methods.</li>
          <li>I also learned about ethical AI and creating responsible data-driven solutions.</li>
          <li>That thought process encouraged me to be careful with data and model evaluation.</li>
          <li>Experimenting with Kaggle competitions provided real-world data challenges.</li>
          <li>Each new domain offered fresh lessons in optimization and tuning.</li>
          <li>Feedback loops from community forums sparked continuous revision of my approaches.</li>
          <li>I started to appreciate Python’s design philosophy of simplicity and pragmatism.</li>
          <li>My repository now holds an eclectic mix of scripts and notebooks.</li>
          <li>Sometimes, they’re messy experiments exploring one technique or another.</li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          I hope this post gives you a glimpse into my journey with Python and data science. Feel free to reach out if you have any questions or want to discuss more about machine learning and deep learning. I’m always excited to connect with fellow enthusiasts and share insights on this fascinating field.
        </p>
        <p className="italic">— Rohit</p>
      </section>
    </article>
  );
}
