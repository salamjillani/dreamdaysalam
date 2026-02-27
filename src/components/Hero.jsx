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
        justify-end
        relative 
        overflow-hidden 
        pt-16 
        sm:pt-20 
        md:pt-24 
        lg:pt-28 
        xl:pt-32 
        2xl:pt-36 
        px-4 
        sm:px-6 
        md:px-8 
        lg:px-12 
        xl:px-16 
        2xl:px-20
        bg-contain
        md:bg-cover
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
      <div className="relative z-10 mb-10 sm:mb-14 md:mb-16 flex items-center justify-center w-full">
        <a
          href="https://calendly.com/ep-dreamdayeventplanner/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg transition-all duration-300 active:scale-95 hover:scale-105 hover:brightness-110 text-center"
          style={{
            background: 'linear-gradient(180deg, #E6C77A 0%, #C8A24A 55%, #A67C2E 100%)',
            color: '#002D67',
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(0.85rem, 3.5vw, 1rem)',
            fontWeight: 'bold',
            letterSpacing: '0.04em',
            padding: 'clamp(0.75rem, 2.5vw, 1rem) clamp(2rem, 8vw, 3.5rem)',
            boxShadow: '0 2px 20px rgba(200,162,74,0.45)',
            whiteSpace: 'nowrap',
          }}
        >
          Reserve Your DreamDay Date
        </a>
      </div>
    </section>
  );
};

export default Hero;