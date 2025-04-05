import Experience from "../components/Experience";
import LinkWithIcon from "../components/LinkWithIcon";
import Posts from "../components/Posts";
import Projects from "../components/Projects";
import Socials from "../components/Socials";
import { Button } from "../components/ui/Button";
import { getPosts } from "../lib/posts";
import {
  ArrowDownRight,
  ArrowRightIcon,
  FileDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const ROHIT_BIRTH_YEAR = 2003;
const LIMIT = 2; // max show 2

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-full w-45 h-45 object-cover"
          src="/ro.jpg"
          alt="Photo"
          width={128}
          height={128}
          priority
        />
        <div className="flex flex-col">
        <h1 className="title text-5xl font-bold">Hi! Rohit here 👋</h1>
          <p className="mt-4 font-light">
        {new Date().getFullYear() - ROHIT_BIRTH_YEAR-1}
        -year-old aspiring Python developer from India 🇮🇳.
          </p>
          <p className="mt-2 font-light">
        I like to develop interactive applications, drink instant coffee, and explore new
        prospects in data science and machine learning.
          </p>
          <section className="mt-8 flex items-center gap-8">
        <Link href="/resume.pdf" target="_blank">
          <Button variant="outline">
            <span className="font-semibold">Resume</span>
            <FileDown className="ml-2 size-5" />
          </Button>
        </Link>
        <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col items-center gap-12">
      <h2 className="title text-4xl text-left font-semibold">Technologies I Use and Love</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
        {/* Machine Learning Section */}
        <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center sm:text-left">
        Machine Learning
      </h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <Image src="/icons/tensorflow.svg" alt="TensorFlow" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">TensorFlow & Keras</span>
        </li>
        <li className="flex items-center gap-3">
          <Image src="/icons/pytorch.svg" alt="PyTorch" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">PyTorch</span>
        </li>
        <li className="flex items-center gap-3">
          <Image src="/icons/sklearn.svg" alt="Scikit-learn" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">Scikit-learn</span>
        </li>
      </ul>
        </div>

        {/* Data Visualization Section */}
        <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center sm:text-left">
        Data Visualization
      </h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <Image src="/icons/matplotlib.svg" alt="Matplotlib" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">Matplotlib</span>
        </li>
        <li className="flex items-center gap-3">
          <Image src="/icons/seaborn.svg" alt="Seaborn" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">Seaborn</span>
        </li>
      </ul>
        </div>

        {/* Programming Languages Section */}
        <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center sm:text-left">
        Languages
      </h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <Image src="/icons/python.svg" alt="Python" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">Python</span>
        </li>
        <li className="flex items-center gap-3">
          <Image src="/icons/sql.svg" alt="SQL" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">SQL</span>
        </li>
        <li className="flex items-center gap-3">
          <Image src="/icons/javascript.svg" alt="JavaScript" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">JavaScript</span>
        </li>
      </ul>
        </div>

        {/* Web Development Section */}
        <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center sm:text-left">
        Web Development
      </h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <Image src="/icons/flask.svg" alt="Flask" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">Flask</span>
        </li>
        <li className="flex items-center gap-3">
          <Image src="/icons/django.svg" alt="Django" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">Django</span>
        </li>
        <li className="flex items-center gap-3">
          <Image src="/icons/bootstrap.svg" alt="Tailwind CSS" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">Bootstrap</span>
        </li>
      </ul>
        </div>

        {/* Automation Section */}
        <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center sm:text-left">
        Automation
      </h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <Image src="/icons/selenium.svg" alt="Selenium" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">Selenium</span>
        </li>
        <li className="flex items-center gap-3">
          <Image src="/icons/bs4.svg" alt="BeautifulSoup" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">BeautifulSoup</span>
        </li>
      </ul>
        </div>

        {/* API Development Section */}
        <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center sm:text-left">
        API Development
      </h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <Image src="/icons/rest.svg" alt="REST APIs" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">REST APIs</span>
        </li>
        <li className="flex items-center gap-3">
          <Image src="/icons/flask.svg" alt="Flask" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">Flask</span>
        </li>
        <li className="flex items-center gap-3">
          <Image src="/icons/fastapi.svg" alt="Flask" width={30} height={30} />
          <span className="text-gray-900 dark:text-gray-50">FastApi</span>
        </li>
      </ul>
        </div>
      </div>
    </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl font-semibold">Featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl font-semibold">Featured posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section>
    </article>
  );
}
