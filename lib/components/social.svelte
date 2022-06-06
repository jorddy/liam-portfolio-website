<script lang="ts">
  import Icon from "$lib/components/icon.svelte";

  export let instagram: string;
  export let linkedin: string;
</script>

<ul>
  <li>
    <a rel="external" href={instagram} aria-label="Link to my Instagram page"
      ><Icon name="instagram" width={28} height={28} /></a
    >
  </li>
  <li>
    <a rel="external" href={linkedin} aria-label="Link to my Instagram page"
      ><Icon name="linkedin" width={28} height={28} /></a
    >
  </li>
</ul>

<style>
  ul {
    display: flex;
    gap: var(--spacing-24);
  }

  a {
    transition: 100ms ease-out;
  }
  a:hover {
    color: var(--colour-brand);
    text-decoration: underline;
  }
</style>
