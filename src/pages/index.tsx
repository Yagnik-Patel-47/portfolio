import Seo from "../components/Seo";
import { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import AppLink from "../components/AppLink";
import ProjectBar from "../components/ProjectBar";
import { motion } from "framer-motion";

const Home: FC = () => {
  const title = "Hello 👋🏻, I’m \n Yagnik Patel.";

  return (
    <>
      <Seo />
      <div className="flex flex-col md:flex-row md:pl-32 md:pt-20 md:h-full w-full bg-bg text-textPr">
        <div
          style={{ flexBasis: "40%" }}
          className="px-6 py-8 md:pt-0 md:px-0 flex flex-col justify-between pb-12"
        >
          <div className="flex flex-col space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {title}
            </h1>
            <p className="leading-loose text-textSc text-base">
              I’m an 11th-grade student as a self-taught web developer. Since I
              am learning web development, I’m curious and passionate about it
              and love to learn new stuff. Looking for a helping community,
              which can help me grow further.
            </p>
          </div>
          <div className="flex space-x-8 items-center mt-8 md:mt-0">
            <AppLink title="Github" link="https://github.com/CodeAddicted0">
              <AiFillGithub size="1.5rem" title="Github" />
            </AppLink>
            <AppLink title="Twitter" link="https://twitter.com/YagnikP26385066">
              <AiOutlineTwitter size="1.5rem" title="Twitter" />
            </AppLink>
          </div>
        </div>
        <div style={{ flexBasis: "60%" }} className="pb-6 relative">
          <ProjectBar />
        </div>
      </div>
    </>
  );
};

export default Home;
