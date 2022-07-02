import Image from "next/future/image";
import Link from "next/link";
import { FC } from "react";
import { Project } from "@/utils/types";

const ProjectCard: FC<{ project: Project; featured?: boolean }> = ({
  project,
  featured
}) => {
  return (
    <article
      className={`flex flex-col p-8 items-center gap-12 lg:flex-row bg-slate-900 
      z-10 md:p-8 md:px-12 ${featured ? "rounded-br-[4rem]" : ""}`}
    >
      <div className='space-y-4'>
        <p>
          {project.data.brand} - {project.data.type}
        </p>
        <h3 className='max-w-2xl md:text-4xl md:leading-[1.5]'>
          {project.data.title}
        </h3>
        <Link
          href={`/projects/${project.slug}`}
          className='block text-xl text-yellow-500 underline'
        >
          Read the case study
        </Link>
      </div>
      <Image
        className='object-cover w-full'
        src={project.data.image}
        alt={project.data.title}
      />
    </article>
  );
};

export default ProjectCard;
