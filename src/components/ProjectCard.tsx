import { FC } from "react";
import { animated, useSpring } from "@react-spring/web";

interface Props {
  title: string;
  techTitle: string;
  description: string;
  demoLink: string;
  repoLink: string;
}

const ProjectCard: FC<Props> = ({
  title,
  techTitle,
  description,
  demoLink,
  repoLink,
}: Props) => {
  const [hoverSpring, set] = useSpring(() => ({
    scale: 1,
    config: { mass: 5, tension: 2000, friction: 200, duration: 150 },
  }));

  return (
    <animated.div
      style={hoverSpring}
      className="bg-surface px-10 py-8 flex flex-col space-y-2"
      onMouseEnter={() => {
        set({ scale: 1.1 });
      }}
      onMouseLeave={() => {
        set({ scale: 1 });
      }}
      onMouseDown={() => {
        set({
          scale: 0.95,
          config: { mass: 5, tension: 2000, friction: 200, duration: 100 },
        });
      }}
      onMouseUp={() => {
        set({
          scale: 1,
          config: { mass: 5, tension: 2000, friction: 200, duration: 150 },
        });
      }}
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
    </animated.div>
  );
};

export default ProjectCard;
