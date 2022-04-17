<script lang="ts">
  import Navbar from "$lib/components/navbar.svelte";
  import ProjectCard from "$lib/components/project-card.svelte";

  export let content: Site;
  export let project: Project;
  export let randomProject: Project;
</script>

<svelte:head>
  <title>{project.data.title} |Liam Johnston Creative Marketer</title>
  <meta name="description" content={project.data.summary} />
</svelte:head>

<Navbar {content} projectPage={true} />

<section
  class="hero animate-fade-up flow"
  style:background={`linear-gradient(hsla(225, 5%, 15%, 0.8), hsla(225, 5%, 15%, 0.8)), url(${project.data.image})`}
  style:background-size="cover"
>
  <h1>{project.data.title} - {project.data.brand}</h1>
  <p>{project.data.summary}</p>
  <div>
    <div>
      <p>Timeline</p>
      <p>{project.data.date}</p>
    </div>
    <div>
      <p>Project Roles</p>
      <p>{project.data.roles.join(", ")}</p>
    </div>
  </div>
</section>

<section class="intro flow">
  <h2>Aim of the project</h2>
  <p>{project.data.aim}</p>
</section>

<article class="flow">
  {@html project.content}
</article>

<section class="flow">
  <h2>Interested in reading more...</h2>
  <ProjectCard project={randomProject} featured={true} />
</section>

<style>
  .hero {
    margin: var(--spacing-60) 0;
    padding: var(--spacing-60);
  }
  .hero > *,
  .intro > * {
    max-width: 75%;
  }
  .hero > h1 {
    color: var(--colour-brand);
  }
  .hero > div {
    display: flex;
    gap: var(--spacing-32);
  }
  .hero > div > div > p:first-of-type {
    color: var(--colour-brand);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .hero {
      margin: var(--spacing-32);
      padding: var(--spacing-24);
    }
    .hero > *,
    .intro > * {
      max-width: 100%;
    }
    .hero > div {
      flex-direction: column;
    }
    article {
      margin: var(--spacing-32) 0;
    }
  }

  .flow {
    --flow-spacing: var(--spacing-32);
  }

  article {
    margin: var(--spacing-60) 0;
    background-color: var(--colour-bg-muted);
    padding: var(--spacing-24);
    border-bottom-right-radius: var(--radius-base);
  }
</style>
