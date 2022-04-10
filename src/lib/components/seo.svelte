<script lang="ts">
  import { page } from "$app/stores";
  export let title: string;
  export let description: string =
    "A Newcastle-Upon-Tyne based marketing designer currently looking for my next big role. I'm passionate about pushing the limits of brands through creative marketing strategies and striking design.";
  export let url: string;
</script>

<svelte:head>
  <title>{title} | Liam Johnston Creative Marketer</title>
  <meta name="description" content={description} />
  <meta
    name="keywords"
    content="Design, Marketing, Copywrighting, Graphic Design, Web, Mobile, Logo, Branding"
  />
  <link rel="canonical" href={`${$page.url.origin}${url}`} />
</svelte:head>
