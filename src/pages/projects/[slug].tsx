import { GetStaticPaths, GetStaticProps } from "next";
import { getMarkdown, getSingleMarkdown } from "@/utils/markdown";
import { Project, Site } from "@/utils/types";
import Layout from "@/components/layout";
import ProjectCard from "@/components/project-card";

export const getStaticPaths: GetStaticPaths = () => {
  const projects = getMarkdown("projects");
  const slugs = projects.map(project => {
    return { params: { slug: project.slug } };
  });

  return {
    paths: slugs,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const site = getSingleMarkdown("site");
  const project = getSingleMarkdown(`projects/${params?.slug}`);
  const projects = getMarkdown("projects");
  const randomProject = projects[Math.floor(Math.random() * projects.length)];

  return {
    props: { site, project, randomProject }
  };
};

export default function SingleProject({
  site,
  project,
  randomProject
}: {
  site: Site;
  project: Project;
  randomProject: Project;
}) {
  return (
    <Layout
      title={`${project.data.title} | Liam Johnston Creative Marketer`}
      description={project.data.summary}
      site={site}
      projectPage={true}
    >
      <section
        className='my-16 p-12 space-y-6 animate-fade-up md:p-24'
        style={{
          background: `linear-gradient(hsla(225, 5%, 15%, 0.8), hsla(225, 5%, 15%, 0.8)), url(${project.data.image})`,
          backgroundSize: "cover"
        }}
      >
        <h1 className='text-yellow-400'>
          {project.data.title} - {project.data.brand}
        </h1>
        <p>{project.data.summary}</p>
        <div className='flex flex-col gap-12 md:flex-row'>
          <div>
            <p className='text-yellow-400 font-semibold'>Timeline</p>
            <p>{new Date(project.data.date).toLocaleDateString()}</p>
          </div>
          <div>
            <p className='text-yellow-400 font-semibold'>Project Roles</p>
            <p>{project.data.roles.join(", ")}</p>
          </div>
        </div>
      </section>

      <section className='space-y-6'>
        <h2>Aim of the project</h2>
        <p>{project.data.aim}</p>
      </section>

      <article
        className='my-16 space-y-12'
        dangerouslySetInnerHTML={{ __html: project.content }}
      />

      <section className='space-y-12'>
        <h3>See more of my work...</h3>
        <ProjectCard project={randomProject} featured={true} />
      </section>
    </Layout>
  );
}
