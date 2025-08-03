import { FaDownload } from "react-icons/fa";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 px-4 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 transition-colors duration-200 min-h-screen">
      <Image
        src="/profile.jpeg"
        alt="Binayak Joshi"
        className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg"
        width={160}
        height={160}
        priority
      />
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Binayak Joshi
      </h1>
      <p className="text-xl max-w-2xl mb-8 text-gray-700 dark:text-gray-300">
        Welcome to my portfolio! I&apos;m a Full Stack Developer passionate
        about building clean, scalable, and interactive web applications.
      </p>
      <a
        href="/resume.pdf"
        download
        className="bg-white dark:bg-zinc-700 text-black dark:text-gray-100 border border-gray-300 dark:border-zinc-500 rounded-lg px-6 py-3 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 font-medium"
      >
        Download Resume
        <FaDownload className="ml-2.5 text-lg" />
      </a>
    </div>
  );
};

export default Home;
