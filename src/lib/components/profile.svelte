<script lang="ts">
  export let heading: string;
  export let subHeading: string;
  export let bio: string;
  export let image: string;
  export let logo: string;
</script>

<section id="about">
  <img
    class="floating-lion floating-lion-left"
    src={logo}
    alt="Liam Johnston logo"
  />
  <div class="flow">
    <h2>{heading}</h2>
    <h3>{subHeading}</h3>
    <p>{bio}</p>
  </div>
  <img src={image} alt="Profile of Liam Johnston" loading="lazy" />
</section>

<style>
  section {
    position: relative;
    padding: var(--spacing-section) 0;
    display: flex;
    align-items: center;
    gap: var(--spacing-90);
  }

  @media (max-width: 1024px) {
    section {
      flex-direction: column;
    }
  }

  section > img:last-of-type {
    border-bottom-right-radius: var(--radius-base);
  }

  .flow {
    --flow-spacing: var(--spacing-32);
  }
</style>
