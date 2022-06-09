export default function Hero({
  heading,
  description,
  buttonText
}: {
  heading: string;
  description: string;
  buttonText: string;
}) {
  return (
    <section
      id='home'
      className='flex flex-col text-center items-center animate-fade-up py-16 md:py-28'
    >
      <div className='space-y-12'>
        <h1 className='text-yellow-400 border-8 border-yellow-400 p-6 rounded-br-[4rem]'>
          {heading}
        </h1>
        <p>{description}</p>
        <a className='btn inline-block' href='#work'>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
