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
        
        /* Background color matching the water */
        bg-[#003151]
      "
      style={{
        backgroundImage: 'url("/herodreamday.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle gradient overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#002D67]/30 to-[#002D67] pointer-events-none"></div>
      
      {/* Your content will go here */}
    </section>
  );
};

export default Hero;