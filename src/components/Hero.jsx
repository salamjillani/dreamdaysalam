const Hero = () => {
  return (
    <section
      id="hero"
      className="
        min-h-screen
        sm:min-h-[120vh]
        md:min-h-[130vh]
        lg:min-h-[140vh]
        w-full
        flex
        items-center
        justify-center
        relative
        overflow-hidden
        pt-16
        sm:pt-20
        md:pt-24
        lg:pt-32
        px-4
        sm:px-6
        md:px-8
        lg:px-12
      "
      style={{
        backgroundImage: 'url("/herodreamday.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <style jsx>{`
        @media (min-width: 768px) {
          #hero {
            background-size: cover !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
