import { FC, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  title: string;
  techTitle: string;
  description: string;
  demoLink: string;
  repoLink: string;
  index: number;
}

const ProjectCard: FC<Props> = ({
  title,
  techTitle,
  description,
  demoLink,
  repoLink,
  index,
}: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    console.log(inView);
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      initial="hidden"
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: index % 2 === 0 ? 50 : -50, opacity: 0 },
      }}
      transition={{
        duration: 0.4,
        delay: index + 1 !== 1 ? (index + 1) / 10 : 0,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{ scale: 1.05, transition: { delay: 0 } }}
      whileTap={{ scale: 0.95, transition: { delay: 0 } }}
      className="bg-surface px-10 py-8 flex flex-col space-y-2"
      ref={ref}
    >
      <p className="text-textSc uppercase font-medium tracking-widest text-sm">
        {techTitle}
      </p>
      <h3 className="font-semibold text-xl tracking-wider">{title}</h3>
      <p className="text-textSc">{description}</p>
      <div className="flex items-center space-x-2 font-black text-xs !mt-6">
        <a
          href={demoLink}
          target="_blank"
          className="uppercase py-2 px-4 rounded-md"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 255, 255, 0.15), rgba(196,196,196, 0.15))",
          }}
        >
          Demo
        </a>
        <a href={repoLink} target="_blank" className="uppercase py-2 px-4">
          Repository
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
