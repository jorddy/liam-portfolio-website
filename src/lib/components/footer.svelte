<script lang="ts">
  import Social from "$lib/components/social.svelte";

  export let content: Site;
</script>

<footer id="contact">
  <div class="container flow">
    <h2>{content.data.footerHeading}</h2>

    <div class="footer-content">
      <div>
        <h3>{content.data.footerEmail}</h3>
        <p>{content.data.footerLocation}</p>
        <Social
          instagram={content.data.instagram}
          linkedin={content.data.linkedin}
        />
      </div>

      <div>
        <h4>{content.data.footerSubHeading}</h4>
        <p>{content.data.footerDescription}</p>
      </div>
    </div>

    <div class="footer-copyright">
      <img src={content.data.logo} alt="Liam Johnston logo" loading="lazy" />
      <p>{content.data.footerCopyright}</p>
    </div>
  </div>
</footer>

<style>
  footer {
    margin-top: var(--spacing-section);
    background-color: var(--colour-bg-muted);
  }

  footer > .flow {
    --flow-spacing: var(--spacing-40);
  }

  .footer-content {
    display: flex;
    gap: var(--spacing-60);
  }
  .footer-content > div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-32);
  }
  .footer-content > div:nth-child(1) > h3 {
    color: var(--colour-brand);
  }

  @media (max-width: 1064px) {
    .footer-content {
      flex-direction: column;
    }
    .footer-content > div {
      gap: var(--spacing-16);
    }
  }

  .footer-copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-16);
  }

  img {
    width: 5rem;
    height: 5rem;
  }
</style>
