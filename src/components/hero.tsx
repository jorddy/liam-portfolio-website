import { FC } from "react";

const Hero: FC<{
  heading: string;
  description: string;
  buttonText: string;
}> = ({ heading, description, buttonText }) => {
  return (
    <section
      id='home'
      className='max-w-2xl mx-auto text-center animate-fade-up py-16 md:py-28'
    >
      <div className='space-y-12'>
        <h1 className='text-yellow-500 border-8 border-yellow-500 p-6 rounded-br-[4rem]'>
          {heading}
        </h1>
        <p>{description}</p>
        <a className='btn inline-block' href='#work'>
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
