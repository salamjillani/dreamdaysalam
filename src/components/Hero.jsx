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
        
        /* Responsive min-height for different devices */
        sm:min-h-[100vh] 
        md:min-h-[110vh] 
        lg:min-h-[120vh] 
        xl:min-h-[130vh] 
        2xl:min-h-[140vh]
      "
      style={{
        backgroundImage: 'url("/herodreamday.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Your content will go here */}
    </section>
  );
};

export default Hero;