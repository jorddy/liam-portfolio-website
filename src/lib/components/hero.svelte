<script lang="ts">
  export let heading: string;
  export let description: string;
  export let buttonText: string;
</script>

<section id="home" class="animate-fade-up">
  <div class="flow">
    <h1>{heading}</h1>
    <p>{description}</p>
    <a class="btn" href="#work">{buttonText}</a>
  </div>
</section>

<style>
  section {
    display: grid;
    place-items: center;
    text-align: center;
    padding: var(--spacing-section) 0;
  }

  p {
    max-width: 60ch;
    margin-inline: auto;
  }

  .flow {
    --flow-spacing: var(--spacing-32);
  }

  h1 {
    color: var(--colour-brand);
    border: 6px solid var(--colour-brand);
    padding: var(--spacing-20) var(--spacing-12);
    border-bottom-right-radius: var(--radius-base);
  }

  a {
    display: inline-block;
  }
</style>
