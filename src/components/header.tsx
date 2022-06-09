import { useRouter } from "next/router";
import { useState } from "react";
import { Site } from "@/utils/types";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import Social from "./social";
import Link from "next/link";
import Image from "next/image";

export default function Header({
  site,
  projectPage
}: {
  site: Site;
  projectPage: boolean;
}) {
  const router = useRouter();
  const hash = router.asPath.split("#")[1];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const active = "text-yellow-400 underline";

  return (
    <>
      <header className='container mt-12 flex justify-between items-center'>
        <nav className='hidden md:flex md:gap-10'>
          {site.data.navigation.map((link, idx) => (
            <Link key={idx} href={projectPage ? `/#${link}` : `#${link}`}>
              <a
                className={`hover:text-yellow-400 hover:underline ${
                  hash === active ? active : ""
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </Link>
          ))}
          <a rel='external' href={site.data.cv}>
            CV
          </a>
        </nav>

        <div className='flex items-center gap-10'>
          <button
            className='cursor-pointer transition hover:rotate-12 md:hidden'
            onClick={() => setIsMenuOpen(true)}
            aria-label='Open the mobile menu'
          >
            <BiMenuAltLeft size={40} className='text-white' />
          </button>
          <Link href='/'>
            <a aria-label='Back to home'>
              <Image
                className='w-20 h-20 transition hover:-rotate-12'
                src={site.data.logo}
                alt='Liam Johnston logo'
                width={60}
                height={60}
              />
            </a>
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
              <Link key={idx} href={projectPage ? `/#${link}` : `#${link}`}>
                <a
                  className={`text-2xl hover:text-yellow-400 hover:underline ${
                    hash === active ? active : ""
                  }`}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
