const Hero = () => {
  return (
    <section
      id="hero"
      className="
        min-h-screen 
        w-full 
        flex 
        items-center 
        justify-center 
        relative 
        overflow-hidden 
        
        /* Responsive padding top */
        pt-16 
        sm:pt-20 
        md:pt-24 
        lg:pt-28 
        xl:pt-32 
        2xl:pt-36 
        
        /* Responsive horizontal padding */
        px-4 
        sm:px-6 
        md:px-8 
        lg:px-12 
        xl:px-16 
        2xl:px-20
        
        /* Responsive background size */
        bg-contain
        md:bg-cover
      "
      style={{
        backgroundImage: 'url("/herodreamday.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Your content will go here */}
    </section>
  );
};

export default Hero;