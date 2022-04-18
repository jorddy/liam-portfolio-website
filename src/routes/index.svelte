<script lang="ts">
  import Navbar from "$lib/components/navbar.svelte";
  import Hero from "$lib/components/hero.svelte";
  import Profile from "$lib/components/profile.svelte";
  import ProjectCard from "$lib/components/project-card.svelte";
  import { onMount } from "svelte";

  export let content: Site;
  export let featured: Project;
  export let projects: Project[];

  onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });
</script>

<svelte:head>
  <script
    src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</svelte:head>

<Navbar {content} />

<Hero
  heading={content.data.heroHeading}
  description={content.data.heroDescription}
  buttonText={content.data.heroButton}
/>

<p>Checkout my latest project</p>
<ProjectCard project={featured} featured={true} />

<Profile
  heading={content.data.aboutHeading}
  subHeading={content.data.aboutSubHeading}
  bio={content.data.aboutBio}
  image={content.data.aboutImage}
  logo={content.data.logo}
/>

<section id="work">
  <h2>My Work</h2>
  <img
    class="floating-lion floating-lion-right"
    src={content.data.logo}
    alt="Liam Johnston logo"
  />

  <div>
    {#each projects as project, index}
      <ProjectCard {project} reverse={index % 2 === 0} />
    {/each}
  </div>
</section>

<style>
  p {
    font-size: var(--font-20);
    font-weight: 600;
    text-align: center;
    margin-bottom: var(--spacing-16);
  }

  section {
    position: relative;
  }

  section > h2 {
    margin-bottom: var(--spacing-90);
  }

  section > div {
    display: grid;
    gap: var(--spacing-90);
  }
</style>
