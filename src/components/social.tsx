import { FC } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Social: FC<{ instagram: string; linkedin: string }> = ({
  instagram,
  linkedin
}) => {
  return (
    <ul className='flex gap-6'>
      <li>
        <a
          rel='external'
          href={instagram}
          className='transition hover:text-yellow-500 hover:underline'
          aria-label='Link to my Instagram page'
        >
          <FaInstagram size={28} />
        </a>
      </li>
      <li>
        <a
          rel='external'
          href={linkedin}
          className='transition hover:text-yellow-500 hover:underline'
          aria-label='Link to my Instagram page'
        >
          <FaLinkedin size={28} />
        </a>
      </li>
    </ul>
  );
};

export default Social;
