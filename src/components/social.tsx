import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Social({
  instagram,
  linkedin
}: {
  instagram: string;
  linkedin: string;
}) {
  return (
    <ul className='flex gap-6'>
      <li>
        <a
          rel='external'
          href={instagram}
          className='transition hover:text-yellow-400 hover:underline'
          aria-label='Link to my Instagram page'
        >
          <FaInstagram size={28} />
        </a>
      </li>
      <li>
        <a
          rel='external'
          href={linkedin}
          className='transition hover:text-yellow-400 hover:underline'
          aria-label='Link to my Instagram page'
        >
          <FaLinkedin size={28} />
        </a>
      </li>
    </ul>
  );
}
