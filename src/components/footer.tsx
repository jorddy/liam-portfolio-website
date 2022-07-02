import Image from "next/future/image";
import Social from "./social";
import { FC } from "react";
import { Site } from "@/utils/types";

const Footer: FC<{ site: Site }> = ({ site }) => {
  return (
    <footer id='contact' className='mt-24 py-16 bg-slate-900'>
      <div className='container space-y-8'>
        <h2>{site.data.footerHeading}</h2>

        <div className='flex flex-col gap-16 lg:flex-row'>
          <div className='flex flex-col gap-6'>
            <h3 className='text-yellow-500'>{site.data.footerEmail}</h3>
            <p>{site.data.footerLocation}</p>
            <Social
              instagram={site.data.instagram}
              linkedin={site.data.linkedin}
            />
          </div>

          <div className='flex flex-col gap-6'>
            <h4>{site.data.footerSubHeading}</h4>
            <p>{site.data.footerDescription}</p>
          </div>
        </div>

        <div className='flex items-center justify-center gap-6'>
          <Image
            className='h-16'
            src={site.data.logo}
            alt='Liam Johnston logo'
          />
          <p>{site.data.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
