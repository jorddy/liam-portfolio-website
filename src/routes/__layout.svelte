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

<Navbar {content} />

<main class="container">
  <slot />
</main>

<Footer {content} />
