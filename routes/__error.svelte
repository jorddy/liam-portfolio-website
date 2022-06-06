<script context="module" lang="ts">
  import type { ErrorLoad } from "@sveltejs/kit";

  export const load: ErrorLoad = ({ error, status }) => {
    return {
      props: { title: `${status}: ${error.message}` }
    };
  };
</script>

<script lang="ts">
  export let title: string;
</script>

<main class="container" id="content">
  <div class="container flow">
    <h1>Oops, it appears you've encountered an error</h1>
    <p>{title}</p>
    <a href="/">Click here to return home</a>
  </div>
</main>

<style>
  main {
    display: grid;
    place-items: center;
    min-height: 100vh;
  }

  a {
    text-decoration: underline;
  }
</style>
