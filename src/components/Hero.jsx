const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full relative overflow-hidden bg-[#05172A] md:aspect-auto md:min-h-screen"
      style={{
        /* Use the image's natural aspect ratio on mobile to eliminate letterboxing.
           The herodreamday image appears roughly square — adjust ratio if needed */
        aspectRatio: '1 / 1',
      }}
    >
      {/* Override aspect ratio on md+ */}
      <style>{`
        @media (min-width: 768px) {
          #hero { aspect-ratio: auto; min-height: 100svh; }
        }
      `}</style>

      {/* Background image — contain on mobile, cover on md+ */}
      <div
        className="absolute inset-0 bg-contain md:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/herodreamday.png")' }}
      />

      {/* Top gradient — matches bottom so empty space looks intentional on both sides */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#05172A] to-transparent pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#002D67]/30 to-[#002D67] pointer-events-none" />

      {/* CTA Button */}
      <div className="absolute bottom-[28%] sm:bottom-[30%] md:bottom-16 left-0 right-0 z-10 flex items-center justify-center w-full px-4">
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