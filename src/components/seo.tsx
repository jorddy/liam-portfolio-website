import Head from "next/head";
import { useRouter } from "next/router";

export default function SEO({
  title,
  description
}: {
  title?: string;
  description?: string;
}) {
  const router = useRouter();
  const canonical = "https://liamjohnston.netlify.app" + router.pathname;
  const titleMeta = title ? title : "Liam Johnston - Creative Marketer";
  const descriptionMeta = description
    ? description
    : "A Newcastle-Upon-Tyne based marketing designer currently looking for my next big role. I'm passionate about pushing the limits of brands through creative marketing strategies and striking design";

  return (
    <Head>
      <title>{titleMeta}</title>
      <meta name='description' content={descriptionMeta} />
      <meta
        name='keywords'
        content='Graphic Design, Marketing, Liam Johnston, Marketing Design'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='liamjohnston' />
      <meta name='twitter:image' content='/images/me.png' />
      <meta name='og:site_name' content='Liam Johnston' />
      <meta name='og:type' content='website' />
      <meta name='og:image' content='/images/me.jpeg' />
      <meta name='og:url' content={canonical} />
      <meta name='og:title' content={titleMeta} />
      <meta name='og:description' content={descriptionMeta} />
      <link rel='canonical' href={canonical} />
      <link rel='icon' href='/images/logo.svg' />
    </Head>
  );
}
