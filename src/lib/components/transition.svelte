<script lang="ts">
  import { fly } from "svelte/transition";
  export let url: string;
</script>

{#key url}
  <div in:fly={{ y: 50 }}>
    <slot />
  </div>
{/key}
