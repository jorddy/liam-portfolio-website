import { GetStaticProps } from "next";
import { getMarkdown, getSingleMarkdown } from "@/utils/markdown";
import { Project, Site } from "@/utils/types";
import Layout from "@/components/layout";
import ProjectCard from "@/components/project-card";
import Hero from "@/components/hero";
import Profile from "@/components/profile";

export const getStaticProps: GetStaticProps = () => {
  const site = getSingleMarkdown("site");
  const projects = getMarkdown("projects");
  const featured = projects.filter(project => project.data.featured);

  return {
    props: { site, featured: featured[0], projects }
  };
};

export default function Index({
  site,
  featured,
  projects
}: {
  site: Site;
  featured: Project;
  projects: Project[];
}) {
  return (
    <Layout site={site} projectPage={false}>
      <Hero
        heading={site.data.heroHeading}
        description={site.data.heroDescription}
        buttonText={site.data.heroButton}
      />

      <p className='text-2xl font-semibold text-center mb-6'>
        Checkout my latest project
      </p>
      <ProjectCard project={featured} featured={true} />

      <Profile
        heading={site.data.aboutHeading}
        subHeading={site.data.aboutSubHeading}
        bio={site.data.aboutBio}
        image={site.data.aboutImage}
        logo={site.data.logo}
      />

      <section id='work' className='relative'>
        <h2 className='mb-12'>My Work</h2>
        <img
          className='hidden absolute opacity-20 -rotate-12 -scale-x-100 -right-[35rem] 
          w-[50rem] h-[50rem] md:block'
          src={site.data.logo}
          alt='Liam Johnston logo'
        />

        <div className='grid gap-16'>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
