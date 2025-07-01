import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="prose prose-lg mx-auto my-8 text-black dark:text-white">
      {/* Post Header */}
      <header className="mb-6">
        <h1 className="text-4xl text-black dark:text-white">
          Building FocusHub: My Deep Dive Into Real-Time Django, WebSockets & Productivity Design
        </h1>
        <p className="text-gray-800 dark:text-gray-300">
          A breakdown of the journey building FocusHub—a real-time virtual study room platform with live chat, Pomodoro sessions, lo-fi music, and gamified study tracking—powered by Django, PostgreSQL, Channels, and Render.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-400">Published on: July 1, 2025</p>
      </header>

      {/* Featured Image */}
      <div className="mb-8">
        <Image
          src="/focushub-preview.jpg"
          alt="FocusHub Preview"
          width={800}
          height={450}
          className="rounded-lg"
        />
      </div>

      {/* Intro */}
      <section>
        <p className="text-gray-800 dark:text-gray-300">
          Building{" "}
          <a
            href="https://focushub-5sq5.onrender.com/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            FocusHub
          </a>{" "}
          wasn’t a weekend hack project—it was an end-to-end crash course in designing production-ready web apps with real-time components. From setting up Django Channels to deploying WebSocket-enabled apps on Render, I hit every wall, fought every 403, and learned more in 3 weeks than most textbooks could teach in a semester.
        </p>
        <p className="text-gray-800 dark:text-gray-300">
          This post walks through what I built, how it works, and what it taught me.
        </p>
      </section>

      {/* What is FocusHub */}
      <section>
        <h2>🎯 What is FocusHub?</h2>
        <p className="text-gray-800 dark:text-gray-300">
          FocusHub is a virtual productivity space where users can:
        </p>
        <ul>
          <li>Join <strong>real-time study rooms</strong> and chat with others via WebSockets</li>
          <li>Use a <strong>Pomodoro timer</strong> to track sessions</li>
          <li><strong>Listen to lo-fi music</strong> embedded from curated static tracks</li>
          <li><strong>Rate their productivity</strong> via session-end prompts & visual dashboards</li>
          <li>View <strong>session history</strong>, notes, and time breakdowns</li>
          <li>Track <strong>weekly study progress</strong> and heatmaps</li>
        </ul>
      </section>

      {/* Major Features */}
      <section>
        <h2>🔧 Major Features and How They Work</h2>

        <h3>💬 Real-Time Study Rooms (Django Channels + ASGI)</h3>
        <p>
          This was my first dive into <strong>ASGI</strong> with Django for WebSockets. Traditional WSGI just wouldn’t cut it.
        </p>
        <ul>
          <li>Used <strong>Daphne</strong> instead of Gunicorn</li>
          <li>Set up <code>rooms.routing</code> for WebSocket logic</li>
          <li>Chat functionality via channel layers and async consumers</li>
        </ul>
        <p><strong>Lesson:</strong> ASGI needs a whole different setup—`asgi.py`, middleware, routing—debugging async stack traces was brutal but worth it.</p>

        <h3>⏲️ Pomodoro Timer & Session Logs</h3>
        <p>
          Each session is logged with a model tracking start and end time, auto-calculating duration. The timer frontend syncs with backend logs.
        </p>
        <p><strong>Lesson:</strong> I nearly cried over “False min” showing up in the dashboard—fixed it with a clean `@property` decorator and proper `total_seconds()` handling.</p>

        <h3>🎵 Lo-fi Music Integration</h3>
        <ul>
          <li>Static MP3 tracks served from assets</li>
          <li>Used <strong>WhiteNoise</strong> for static file serving on Render</li>
          <li>Fixed a bunch of 404s from incorrect paths</li>
        </ul>
        <p><strong>Lesson:</strong> Never forget to configure `STATICFILES_DIRS`, `STATIC_ROOT`, and run `collectstatic`. Ever.</p>

        <h3>🧠 Gamified Productivity Ratings</h3>
        <ul>
          <li>Streak tracking and session streaks</li>
          <li>Leaderboards for most productive rooms and users</li>
          <li>Study consistency visualized via heatmaps</li>
          <li>Weekly stats: hours, session counts, and durations</li>
        </ul>
        <p><strong>Lesson:</strong> Little visual nudges (like streak counters) go a long way in engagement and habit-building.</p>

        <h3>📊 Recent Sessions Timeline</h3>
        <p>
          The dashboard shows your most recent sessions including room title, duration, and notes—great for accountability.
        </p>
      </section>

      {/* Deployment Section */}
      <section>
        <h2>🏗️ The Deployment Journey (aka The Struggles)</h2>
        <ul>
          <li><code>ModuleNotFoundError: app</code> – from Render’s default `gunicorn app:app`</li>
          <li>404s from missing <code>collectstatic</code></li>
          <li><code>web: command not found</code> – due to `web:` in `startCommand`</li>
          <li><code>403 CSRF</code> – fixed with `CSRF_TRUSTED_ORIGINS`</li>
          <li><code>auth_user does not exist</code> – forgot `migrate` 🤦‍♂️</li>
          <li>No predeploy scripts – so I hacked <code>migrate</code> into `asgi.py`</li>
        </ul>
        <p><strong>Lesson:</strong> Render’s free tier is amazing but has limitations. You learn dirty deployment hacks fast—and that’s a superpower in itself.</p>
      </section>

      {/* Tech Stack */}
      <section>
        <h2>🧠 Tech Stack</h2>
        <ul>
          <li><strong>Frontend</strong>: HTML, TailwindCSS, JS</li>
          <li><strong>Backend</strong>: Django, Channels, PostgreSQL</li>
          <li><strong>Real-Time</strong>: ASGI, Daphne, WebSockets</li>
          <li><strong>Hosting</strong>: Render (free tier)</li>
          <li><strong>Static Files</strong>: WhiteNoise</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section>
        <h2>💡 Final Thoughts</h2>
        <p>
          This project made me appreciate how much goes into building even a “simple” platform. From backend logic to UI to deployment and devops—everything matters.
        </p>
        <p>
          You can try the live site 👉{" "}
          <a
            href="https://focushub-5sq5.onrender.com"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            FocusHub
          </a>
        </p>
        <p>
          Or check out the code on{" "}
          <a
            href="https://github.com/Rohit-Sharma-RS/focushub"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          (or DM me on{" "}
          <a
            href="https://www.linkedin.com/in/rohit-sharma-b26200282/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ).
        </p>
        <p className="italic text-gray-800 dark:text-gray-300">— Rohit</p>
      </section>
    </article>
  );
}
