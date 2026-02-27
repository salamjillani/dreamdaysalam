const Hero = () => {
  return (
    <section
      id="hero"
      className="
        min-h-screen 
        w-full 
        flex 
        flex-col
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
        bg-[#05172A]
      "
      style={{
        backgroundImage: 'url("/herodreamday.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle gradient overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#002D67]/30 to-[#002D67] pointer-events-none"></div>
      
      {/* CTA Button */}
      <div className="relative z-10 mt-auto mb-16 sm:mb-20 flex items-center justify-center">
        <a
          href="https://calendly.com/ep-dreamdayeventplanner/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:brightness-110"
          style={{
            background: 'linear-gradient(180deg, #E6C77A 0%, #C8A24A 55%, #A67C2E 100%)',
            color: '#002D67',
            fontFamily: 'Cinzel, serif',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            letterSpacing: '0.05em',
            boxShadow: '0 2px 16px rgba(200,162,74,0.4)',
          }}
        >
          Reserve Your DreamDay Date
        </a>
      </div>
    </section>
  );
};

export default Hero;