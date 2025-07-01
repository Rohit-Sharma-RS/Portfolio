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
        <h1 className="text-4xl text-black dark:text-white">My Gradual Dive into Machine Learning</h1>
        <p className="text-gray-800 dark:text-gray-300">
          Sharing my journey into the world of ML, starting from foundational concepts and
          advancing through exciting projects over time.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-400">Published on: December 30, 2024</p>
      </header>

      {/* Featured Image */}
      <div className="mb-8">
        <Image
          src="/ml-journey.jpg"
          alt="Journey into Machine Learning"
          width={800}
          height={450}
          className="rounded-lg"
        />
      </div>

      {/* Post Content */}
      <section>
        <p className="text-gray-800 dark:text-gray-300">
          Machine learning wasn’t an overnight fascination for me—it was a gradual evolution. Starting with the basics of algorithms and datasets, I transitioned from simple regression models to exploring neural networks, NLP, and advanced AI techniques.
        </p>
        <p className="text-gray-800 dark:text-gray-300">
          In this post, I’ll walk you through my journey, highlighting the projects that shaped my growth in ML and DL.
        </p>

        <h2 className="text-gray-900 dark:text-gray-100">The Early Days: Exploring Basics</h2>
        <p className="text-gray-800 dark:text-gray-300">
          I started with projects that helped me understand data handling, basic algorithms, and foundational ML concepts:
        </p>
        <ul className="text-gray-800 dark:text-gray-300">
          <li>
            <strong>Titanic Survival Prediction</strong>: A beginner’s data science project analyzing passenger data to predict survival using logistic regression and ensemble models. This project taught me data preprocessing, feature engineering, and evaluation metrics.
          </li>
          <li>
            <strong>K-Nearest Neighbors (KNN)</strong>: Built a simple classification model to predict outcomes based on the nearest neighbors in feature space.
          </li>
          <li>
            <strong>Naive Bayes Classifier</strong>: Explored probabilistic models to classify text, gaining insights into NLP basics.
          </li>
          <li>
            <strong>Random Forest Classifier</strong>: Combined multiple decision trees to solve classification problems, appreciating the power of ensemble learning.
          </li>
        </ul>

        <h2 className="text-gray-900 dark:text-gray-100">Intermediate Steps: Building Momentum</h2>
        <p className="text-gray-800 dark:text-gray-300">
          Once I gained confidence in basic ML, I moved to intermediate projects, exploring diverse applications:
        </p>
        <ul className="text-gray-800 dark:text-gray-300">
          <li>
            <strong>Human Emotion Detection</strong>: A classifier to detect emotions from structured datasets, improving my understanding of feature importance.
          </li>
          <li>
            <strong>SOM for Fraud Detection</strong>: Implemented a Self-Organizing Map to detect fraudulent transactions, providing an interactive and insightful project experience.
          </li>
          <li>
            <strong>Stock Price Prediction using LSTM</strong>: Leveraged recurrent networks to model temporal patterns, with a focus on financial data.
          </li>
          <li>
            <strong>Autoencoder for MNIST Dataset Noise Removal</strong>: Implemented an autoencoder to compress and reconstruct images from the MNIST dataset, effectively removing 40% noise.
          </li>
        </ul>

        <h2 className="text-gray-900 dark:text-gray-100">Exploring Creativity: Advancing to GANs and Image Generation</h2>
        <p className="text-gray-800 dark:text-gray-300">
          I then shifted my focus toward generative models, combining creativity with computation:
        </p>
        <ul className="text-gray-800 dark:text-gray-300">
          <li>
            <strong>GANs for Image Generation</strong>: Created synthetic images using Generative Adversarial Networks, diving into adversarial training.
          </li>
          <li>
            <strong>Training Checkpoints</strong>: Experimented with saving GAN training states, optimizing model performance for long sessions.
          </li>
          <li>
            <strong>Image from Prompts Project</strong>: Used Hugging Face to generate images from given prompts, exploring the intersection of NLP and computer vision.
          </li>
        </ul>

        <h2 className="text-gray-900 dark:text-gray-100">Delving Deeper: Advanced NLP and AI Projects</h2>
        <p className="text-gray-800 dark:text-gray-300">
          Next, I started working on advanced NLP and AI models, honing my understanding of cutting-edge techniques:
        </p>
        <ul className="text-gray-800 dark:text-gray-300">
          <li>
            <strong>OCR CAPTCHA Cracker</strong>: Combined computer vision and NLP to crack CAPTCHAs, saving models for real-world deployment.
          </li>
          <li>
            <strong>Skimmer NLP Project</strong>: Built a deep NLP model to classify sentences from research abstracts into predefined categories.
          </li>
          <li>
            <strong>Fine-Tuning Large Language Models (LLMs)</strong>: Adapted LLMs like GPT-2 for niche tasks, showcasing the adaptability of pre-trained architectures.
          </li>
          <li>
            <strong>RAG for PDF Question Answering</strong>: Developed a Retrieval-Augmented Generation (RAG) model to answer questions from PDF documents, integrating document retrieval with generative response capabilities.
          </li>
        </ul>

        <h2 className="text-gray-900 dark:text-gray-100">Pushing Boundaries: Reinforcement Learning and Simulation</h2>
        <p className="text-gray-800 dark:text-gray-300">
          In the latest phase of my journey, I tackled reinforcement learning and simulation-based tasks:
        </p>
        <ul className="text-gray-800 dark:text-gray-300">
          <li>
            <strong>Self-Driving Car AI</strong>: Developed an AI agent using a softmax-based approach to navigate autonomously, utilizing Deep Q-Learning.
          </li>
        </ul>

        <h2 className="text-gray-900 dark:text-gray-100">Conclusion</h2>
        <p className="text-gray-800 dark:text-gray-300">
          From basics to in-depth, my ML journey has been a rewarding experience of constant learning and exploration. Whether it’s regression, classification, NLP, or reinforcement learning, each project added a layer of understanding.
        </p>
        <p className="text-gray-800 dark:text-gray-300">
          I invite you to explore{" "}
          <a
            href="https://github.com/Rohit-Sharma-RS/ML-and-DL"
            className="text-blue-600 underline"
          >
            my ML and DL projects
          </a>
          , where I’ve shared these projects and more. Feel free to connect if you’d like to discuss machine learning—it’s a field with endless possibilities!
        </p>
        <p className="italic text-gray-800 dark:text-gray-300">— Rohit</p>
      </section>
    </article>
  );
}
