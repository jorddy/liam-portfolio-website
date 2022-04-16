<script lang="ts">
  import Featured from "$lib/components/featured.svelte";
  import Hero from "$lib/components/hero.svelte";

  export let content: Site;
  export let featured: Project;
</script>

<Hero
  heading={content.data.heroHeading}
  description={content.data.heroDescription}
  buttonText={content.data.heroButton}
/>

<p>Checkout my latest project</p>

<Featured {featured} />

<style>
  p {
    font-size: var(--font-20);
    font-weight: 600;
    text-align: center;
    margin-bottom: var(--spacing-16);
  }
</style>
