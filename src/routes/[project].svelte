<script lang="ts">
  import ProjectCard from "$lib/components/project-card.svelte";

  export let project: Project;
  export let randomProject: Project;
</script>

<svelte:head>
  <title>{project.data.title} |Liam Johnston Creative Marketer</title>
  <meta name="description" content={project.data.summary} />
</svelte:head>

<section class="animate-fade-up">
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

<section>
  <h2>Aim of the project</h2>
  <p>{project.data.aim}</p>
  <img src={project.data.image} alt={project.data.title} />
</section>

<article class="flow">
  {@html project.content}
</article>

<section>
  <h2>Interested in reading more...</h2>
  <ProjectCard project={randomProject} featured={true} />
</section>

<a href="/">Return home</a>
