import { Site } from "@/utils/types";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import SEO from "./seo";
import SkipLink from "./skip-link";

export default function Layout({
  title,
  description,
  site,
  projectPage,
  children
}: {
  title?: string;
  description?: string;
  site: Site;
  projectPage: boolean;
  children: ReactNode;
}) {
  return (
    <div className='grid min-h-screen overflow-x-hidden'>
      <SkipLink />
      <SEO title={title} description={description} />
      <Header site={site} projectPage={projectPage} />
      <main id='content' className='container'>
        {children}
      </main>
      <Footer site={site} />
    </div>
  );
}
