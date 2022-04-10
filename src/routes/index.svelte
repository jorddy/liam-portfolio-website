<script lang="ts">
  import { page } from "$app/stores";
  import SEO from "$lib/components/seo.svelte";
</script>

<SEO title="Home" description="" url={$page.url.pathname} />
<h1>Welcome to SvelteKit</h1>
