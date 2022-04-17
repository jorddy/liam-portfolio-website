<script lang="ts">
  export let project: Project;
  export let featured = false;
  export let reverse = false;
</script>

<article
  class="animate-fade-up"
  style:background-color={featured && "var(--colour-bg-muted)"}
  style:flex-direction={reverse && "row-reverse"}
>
  <img src={project.data.image} alt={project.data.title} loading="lazy" />
  <div class="flow">
    <p>{project.data.brand} - {project.data.type}</p>
    <h3>{project.data.title}</h3>
    <a href="/{project.slug}">Read the case study</a>
  </div>
</article>

<style>
  article {
    padding: var(--spacing-32);
    border-bottom-right-radius: var(--radius-base);
    display: flex;
    align-items: center;
    gap: var(--spacing-32);
  }

  @media (max-width: 1024px) {
    article {
      flex-direction: column;
    }
  }

  a {
    display: block;
    font-size: var(--font-24);
    color: var(--colour-brand);
    text-decoration: underline;
  }
</style>
