import { FC } from "react";
import projects from "../data";
import ProjectCard from "./ProjectCard";
import Trail from "./Trail";

const ProjectBar: FC = () => {
  return (
    <div className="flex flex-col px-6 space-y-8 w-full h-full md:px-20 custom-scrollbar">
      <h3 className="text-4xl font-bold">Projects.</h3>
      <Trail>
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            techTitle={project.techTitle}
            description={project.description}
            demoLink={project.demoLink}
            repoLink={project.repoLink}
            key={project.demoLink}
          />
        ))}
      </Trail>
    </div>
  );
};

export default ProjectBar;
