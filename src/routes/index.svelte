<script lang="ts">
  import Hero from "$lib/components/hero.svelte";
  import Profile from "$lib/components/profile.svelte";
  import ProjectCard from "$lib/components/project-card.svelte";

  export let content: Site;
  export let featured: Project;
  export let projects: Project[];
</script>

<Hero
  heading={content.data.heroHeading}
  description={content.data.heroDescription}
  buttonText={content.data.heroButton}
/>

<section>
  <p>Checkout my latest project</p>
  <ProjectCard project={featured} featured={true} />
</section>

<Profile
  heading={content.data.aboutHeading}
  subHeading={content.data.aboutSubHeading}
  bio={content.data.aboutBio}
  image={content.data.aboutImage}
  logo={content.data.logo}
/>

<section>
  <h2>My Work</h2>

  {#each projects as project, index}
    <ProjectCard {project} reverse={index % 2 === 0} />
  {/each}
</section>

<style>
  p {
    font-size: var(--font-20);
    font-weight: 600;
    text-align: center;
    margin-bottom: var(--spacing-16);
  }
</style>
