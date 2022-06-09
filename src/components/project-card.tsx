import Image from "next/image";
import { Project } from "@/utils/types";

export default function ProjectCard({
  project,
  featured
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex flex-col py-8 px-12 items-center gap-12 lg:flex-row bg-slate-900 z-10 ${
        featured ? "rounded-br-[4rem]" : ""
      }`}
    >
      <div className='space-y-4'>
        <p>
          {project.data.brand} - {project.data.type}
        </p>
        <h3 className='max-w-2xl md:text-4xl md:leading-[1.5]'>
          {project.data.title}
        </h3>
        <a
          href={`/projects/${project.slug}`}
          className='block text-xl text-yellow-400 underline'
        >
          Read the case study
        </a>
      </div>
      <Image
        src={project.data.image}
        alt={project.data.title}
        width={600}
        height={400}
        objectFit='cover'
      />
    </article>
  );
}
