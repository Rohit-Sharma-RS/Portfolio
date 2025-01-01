import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="prose mx-auto my-8 text-white dark:text-black">
      {/* Post Header */}
      <header className="mb-6">
        <h1 className="text-4xl text-black dark:text-white">
          Scripting My Way Through Life: A Collection of Useful Python Scripts
        </h1>
        <p className="text-gray-300">
          Python scripts I wrote that make everyday life simpler and more fun.
        </p>
        <p className="text-sm text-gray-400">Published on: December 28, 2024</p>
      </header>

      {/* Featured Image */}
      <div className="mb-8">
        <Image
          src="/py-scrips.jpg"
          alt="Useful Python Scripts"
          width={800}
          height={450}
          className="rounded-lg"
        />
      </div>

      {/* Post Content */}
      <section>
        <p>
          Python has always been my go-to tool for automating tedious tasks and solving real-world problems. Over time, I’ve built several small but powerful scripts that make everyday life simpler. Here’s a look at some of my favorite Python projects, along with the inspiration behind them.
        </p>

        <h2>1. Restaurant Scraper</h2>
        <p>
          <strong>The Backstory:</strong> It was my friend’s birthday, and we wanted to celebrate at a cozy cafe with good food and a reasonable budget. However, finding a place that ticked all the boxes was a nightmare. That’s when I decided to build a script to scrape restaurant reviews and budgets, making it easier to shortlist options.
        </p>
        <p>
          <strong>The Script:</strong> This scraper pulls data from restaurant websites to generate a list of top-rated places in your area based on budget and reviews. Now, I never have to spend hours looking for the perfect spot again!
        </p>

        <h2>2. ATM System Simulator</h2>
        <p>
          A complete Python-based ATM system that supports basic banking operations like deposits, withdrawals, and balance checks. This script was a fun exercise in learning file handling and user authentication.
        </p>

        <h2>3. All Video Downloader</h2>
        <p>
          A universal video downloader script that supports multiple platforms. It’s my go-to tool for saving videos offline, whether it’s a lecture, tutorial, or just some entertainment.
        </p>

        <h2>4. Audio Recognition Tool</h2>
        <p>
          This script uses deep learning to recognize audio inputs. It’s a powerful tool for analyzing and organizing audio data.
        </p>

        <h2>5. Hotel Management System</h2>
        <p>
          A project aimed at simplifying hotel operations like booking, billing, and guest management. It was a great way to apply Python to solve real-world business problems.
        </p>

        <h2>6. Image Generation API</h2>
        <p>
          This API generates customized images using Python. It’s ideal for quick design tasks, and I’ve even used it to create placeholders for web development projects.
        </p>

        <h2>7. QR Code Generator</h2>
        <p>
          A fully customizable QR code generator script that allows you to create personalized QR codes for URLs, text, or even entire contact cards.
        </p>

        <h2>8. Screenshot to Text</h2>
        <p>
          This script combines OCR technology with an Imgur uploader to convert screenshots into editable text. It’s a lifesaver for pulling text from images quickly.
        </p>

        <h2>9. WiFi Manager</h2>
        <p>
          A simple yet powerful script to manage WiFi connections, allowing you to connect, disconnect, or check connection status directly from the command line.
        </p>

        <h2>10. Encrypting Folder</h2>
        <p>
          A robust program to encrypt files and folders, adding an extra layer of security to your personal data.
        </p>

        <h2>11. File Hiding Script</h2>
        <p>
          A lightweight script to hide private text files or other sensitive documents on your system.
        </p>

        <h2>12. Hand Volume Control</h2>
        <p>
          This fun project lets you control system volume using hand gestures, combining Python with computer vision for an intuitive interface.
        </p>

        <h2>13. Python OCR System</h2>
        <p>
          Built using Tesseract, this script extracts text from images with remarkable accuracy.
        </p>

        <h2>14. Screenshot Reader</h2>
        <p>
          An enhanced OCR-based tool for reading text from image inputs, complete with an easy-to-use interface.
        </p>

        <h2>15. Torrent Downloader</h2>
        <p>
          A versatile downloader script that supports torrents without relying on libtorrent, making it lightweight and efficient.
        </p>

        <h2>16. WiFi Password Retriever</h2>
        <p>
          Ever forgotten a saved WiFi password? This script retrieves all saved passwords on your device in seconds.
        </p>

        <h2>Conclusion</h2>
        <p>
          These Python scripts are a testament to how coding can simplify everyday challenges and automate mundane tasks. Whether it’s managing files, extracting text, or finding a great restaurant, Python has been my ultimate toolkit.
        </p>
        <p>
          Feel free to check out these projects on my{" "}
          <a
            href="https://github.com/Rohit-Sharma-RS/Useful-py-scripts"
            className="text-blue-400 underline"
          >
            GitHub repository
          </a>
          . Let me know how they work for you or if you have ideas for new scripts I could build!
        </p>
        <p className="italic">— Rohit</p>
      </section>
    </article>
  );
}
