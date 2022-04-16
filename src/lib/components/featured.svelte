<script lang="ts">
  export let featured: Project;
</script>

<article>
  <img src={featured.data.image} alt={featured.data.title} />
  <div>
    <p>{featured.data.brand} - {featured.data.type}</p>
    <h3>{featured.data.title}</h3>
    <a href="/{featured.slug}">Read the case study</a>
  </div>
</article>

<style>
  article {
    padding: var(--spacing-32);
    background-color: var(--colour-bg-muted);
    border-bottom-right-radius: var(--radius-base);
  }
</style>
