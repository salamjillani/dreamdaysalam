const Hero = () => {
  return (
    <section
      id="hero"
      className="
        w-full 
        flex 
        flex-col
        items-center 
        justify-end
        relative 
        overflow-hidden 
        bg-contain
        md:bg-cover
        bg-[#05172A]
      "
      style={{
        backgroundImage: 'url("/herodreamday.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: 'min(100vw, 100svh)',
        minHeight: '420px',
      }}
    >
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#002D67]/30 to-[#002D67] pointer-events-none" />

      {/* CTA Button */}
      <div className="relative z-10 mb-28 sm:mb-32 md:mb-16 flex items-center justify-center w-full px-4">
        <a
          href="https://calendly.com/ep-dreamdayeventplanner/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full transition-all duration-300 active:scale-95 hover:scale-105 hover:brightness-110 text-center"
          style={{
            background: 'linear-gradient(180deg, #E6C77A 0%, #C8A24A 55%, #A67C2E 100%)',
            color: '#002D67',
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(0.7rem, 2.8vw, 1rem)',
            fontWeight: '600',
            letterSpacing: '0.04em',
            padding: 'clamp(0.5rem, 1.8vw, 1rem) clamp(1.2rem, 5vw, 3.5rem)',
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