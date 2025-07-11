const Hero = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen sm:min-h-[120vh] md:min-h-[130vh] lg:min-h-[140vh] w-full flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-32 px-4 sm:px-6 md:px-8 lg:px-12"
      style={{
        backgroundImage: 'url("/herodreamday.png")',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Decorative gradient circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/15 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#ffdee9]/20 to-[#FEACC6]/15 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#fd7aa3]/20 to-[#295185]/15 rounded-full"></div>
    </section>
  );
};

export default Hero;