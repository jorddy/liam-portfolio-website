<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const res = await fetch("/site");
    const data = await res.json();

    return { props: { content: data.content } };
  };
</script>

<script lang="ts">
  import "$lib/styles/global.css";
  import { page } from "$app/stores";
  import Navbar from "$lib/components/navbar.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Transition from "$lib/components/transition.svelte";

  export let content: Site;
</script>

<svelte:head>
  <title>Liam Johnston Creative Marketer</title>
  <meta
    name="description"
    content="A Newcastle-Upon-Tyne based marketing designer currently looking for my next big role. I'm passionate about pushing the limits of brands through creative marketing strategies and striking design"
  />
  <link rel="canonical" href={$page.url.origin + $page.url.pathname} />
</svelte:head>

<a href="#content">Skip to Content</a>

<Navbar {content} />

<Transition url={$page.url.pathname}>
  <main id="content" class="container">
    <slot />
  </main>
</Transition>

<Footer {content} />

<style>
  a {
    position: absolute;
    transform: translateY(-100%);
    transition: 150ms ease;
    background-color: var(--colour-brand);
    color: var(--colour-bg);
    padding: var(--spacing-20);
  }

  a:focus {
    transform: translateX(0);
  }
</style>
