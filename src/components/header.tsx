import Link from "next/link";
import Image from "next/future/image";
import Social from "./social";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import { Site } from "@/utils/types";

const Header: FC<{ site: Site; projectPage: boolean }> = ({
  site,
  projectPage
}) => {
  const router = useRouter();
  const hash = router.asPath.split("#")[1];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const active = "text-yellow-500 underline";

  return (
    <>
      <header className='container mt-12 flex justify-between items-center'>
        <nav className='hidden gap-8 items-center md:flex'>
          <Link href='/' aria-label='Back to home'>
            <Image
              className='h-16 transition hover:-rotate-12'
              src={site.data.logo}
              alt='Liam Johnston logo'
            />
          </Link>

          {site.data.navigation.map((link, idx) => (
            <Link
              key={idx}
              href={projectPage ? `/#${link}` : `#${link}`}
              className={`hover:text-yellow-500 hover:underline ${
                hash === active ? active : ""
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
          <a rel='external' href={site.data.cv}>
            CV
          </a>
        </nav>

        <div className='flex items-center justify-between gap-4 md:hidden'>
          <button
            className='cursor-pointer transition hover:rotate-12'
            onClick={() => setIsMenuOpen(true)}
            aria-label='Open the mobile menu'
          >
            <BiMenuAltLeft size={40} className='text-white' />
          </button>
          <Link href='/' aria-label='Back to home'>
            <Image
              className='h-16 transition hover:-rotate-12'
              src={site.data.logo}
              alt='Liam Johnston logo'
            />
          </Link>
        </div>

        <Social instagram={site.data.instagram} linkedin={site.data.linkedin} />
      </header>

      {isMenuOpen && (
        <nav className='fixed p-10 left-0 top-0 h-full bg-slate-900 z-10 animate-fade-left'>
          <div className='flex items-center justify-between gap-16'>
            <h2>Menu</h2>
            <button
              className='cursor-pointer transition hover:rotate-12'
              onClick={() => setIsMenuOpen(false)}
              aria-label='Close the mobile menu'
            >
              <BiX size={50} className='text-white' />
            </button>
          </div>
          <div className='mt-12 grid gap-12'>
            {site.data.navigation.map((link, idx) => (
              <Link
                key={idx}
                href={projectPage ? `/#${link}` : `#${link}`}
                className={`text-2xl hover:text-yellow-500 hover:underline ${
                  hash === active ? active : ""
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
