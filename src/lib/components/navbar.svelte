<script lang="ts">
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import Icon from "$lib/components/icon.svelte";
  import Social from "$lib/components/social.svelte";

  export let content: Site;
  export let projectPage = false;

  let menuOpen = false;
</script>

<header>
  <nav class="desktop-menu">
    {#each content.data.navigation as link}
      <a
        href={projectPage ? `/#${link}` : `#${link}`}
        class:active={$page.url.hash === link}
        >{link.charAt(0).toUpperCase() + link.slice(1)}</a
      >
    {/each}
  </nav>

  <div>
    <button
      on:click={() => (menuOpen = true)}
      aria-label="Open the mobile menu"
    >
      <Icon name="menu" width={32} height={32} colour="var(--colour-white)" />
    </button>
    <a href="/">
      <img src={content.data.logo} alt="Liam Johnston logo" loading="lazy" />
    </a>
  </div>

  <Social instagram={content.data.instagram} linkedin={content.data.linkedin} />
</header>

{#if menuOpen}
  <nav class="mobile-menu" transition:fly={{ x: -50 }}>
    <div>
      <h2>Menu</h2>
      <button
        on:click={() => (menuOpen = false)}
        aria-label="Close the mobile menu"
      >
        <Icon
          name="close"
          width={60}
          height={60}
          colour="var(--colour-white)"
        />
      </button>
    </div>
    <div>
      {#each content.data.navigation as link}
        <a
          href={projectPage ? `/#${link}` : `#${link}`}
          class:active={$page.url.hash === link}
          >{link.charAt(0).toUpperCase() + link.slice(1)}</a
        >
      {/each}
    </div>
  </nav>
{/if}

<style>
  header {
    margin-top: var(--spacing-32);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header > div {
    display: flex;
    align-items: center;
    gap: var(--spacing-24);
  }

  .desktop-menu {
    display: flex;
    gap: var(--spacing-24);
  }

  .mobile-menu {
    position: fixed;
    padding: var(--spacing-40);
    left: 0;
    height: 100%;
    max-width: 100%;
    background-color: var(--colour-bg-muted);
    z-index: 1;
  }
  .mobile-menu > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-40);
  }
  .mobile-menu > div:nth-child(2) {
    margin-top: var(--spacing-32);
    display: grid;
    gap: var(--spacing-40);
  }
  .mobile-menu > div:nth-child(2) > a {
    font-size: var(--font-24);
  }

  button {
    display: none;
    cursor: pointer;
    transition: 100ms ease-in-out;
  }
  button:hover,
  button:focus {
    transform: rotate(15deg);
  }

  @media (max-width: 768px) {
    .desktop-menu {
      display: none;
    }
    button {
      display: block;
    }
  }

  img {
    width: 5rem;
    height: 5rem;
    transition: 100ms ease-in-out;
  }
  img:hover,
  img:focus {
    transform: rotate(-15deg);
  }

  .active,
  a:hover {
    color: var(--colour-brand);
    text-decoration: underline;
  }
</style>
