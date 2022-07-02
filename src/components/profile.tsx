import Image from "next/future/image";
import { FC } from "react";

const Profile: FC<{
  heading: string;
  subHeading: string;
  bio: string;
  image: string;
  logo: string;
}> = ({ heading, subHeading, bio, image, logo }) => {
  return (
    <section
      id='about'
      className='relative py-16 flex flex-col items-center gap-16 md:py-40 lg:flex-row'
    >
      <Image
        className='hidden absolute opacity-20 rotate-12 -left-[35rem] w-[50rem] h-[50rem] md:block'
        src={logo}
        alt='Liam Johnston logo'
      />

      <div className='space-y-12'>
        <h2>{heading}</h2>
        <h3>{subHeading}</h3>
        <p>{bio}</p>
      </div>

      <Image
        className='h-96 rounded-br-[4rem]'
        src={image}
        alt='Profile of Liam Johnston'
      />
    </section>
  );
};

export default Profile;
