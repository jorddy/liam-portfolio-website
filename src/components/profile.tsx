import Image from "next/image";

export default function Profile({
  heading,
  subHeading,
  bio,
  image,
  logo
}: {
  heading: string;
  subHeading: string;
  bio: string;
  image: string;
  logo: string;
}) {
  return (
    <section
      id='about'
      className='relative py-16 flex flex-col items-center gap-16 md:py-40 lg:flex-row'
    >
      <img
        className='hidden absolute opacity-20 rotate-12 -left-[35rem] 
        w-[50rem] h-[50rem] md:block'
        src={logo}
        alt='Liam Johnston logo'
      />
      <div className='space-y-12'>
        <h2>{heading}</h2>
        <h3>{subHeading}</h3>
        <p>{bio}</p>
      </div>
      <Image
        className='rounded-br-[4rem]'
        src={image}
        alt='Profile of Liam Johnston'
        width={2400}
        height={2400}
      />
    </section>
  );
}
