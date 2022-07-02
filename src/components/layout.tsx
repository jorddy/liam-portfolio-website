import Header from "./header";
import Footer from "./footer";
import SEO from "./seo";
import SkipLink from "./skip-link";
import { FC, PropsWithChildren } from "react";
import { Site } from "@/utils/types";

const Layout: FC<
  PropsWithChildren<{
    title?: string;
    description?: string;
    site: Site;
    projectPage: boolean;
  }>
> = ({ title, description, site, projectPage, children }) => {
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
};

export default Layout;
