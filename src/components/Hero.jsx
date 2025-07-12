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

      {/* Responsive decorative gradient circles */}
      <div className="
        absolute 
        top-16 
        sm:top-20 
        md:top-24 
        left-4 
        sm:left-6 
        md:left-10 
        lg:left-12 
        xl:left-16
        w-12 
        h-12 
        sm:w-16 
        sm:h-16 
        md:w-20 
        md:h-20 
        lg:w-24 
        lg:h-24 
        xl:w-28 
        xl:h-28
        bg-gradient-to-br 
        from-[#FEACC6]/20 
        to-[#fd7aa3]/15 
        rounded-full
        animate-pulse
      "></div>
      
      <div className="
        absolute 
        bottom-16 
        sm:bottom-20 
        md:bottom-24 
        right-4 
        sm:right-6 
        md:right-10 
        lg:right-12 
        xl:right-16
        w-16 
        h-16 
        sm:w-20 
        sm:h-20 
        md:w-24 
        md:h-24 
        lg:w-28 
        lg:h-28 
        xl:w-32 
        xl:h-32
        bg-gradient-to-br 
        from-[#ffdee9]/20 
        to-[#FEACC6]/15 
        rounded-full
        animate-pulse
        animation-delay-1000
      "></div>
      
      <div className="
        absolute 
        top-1/2 
        left-1/4 
        sm:left-1/3 
        md:left-1/4 
        lg:left-1/5
        w-10 
        h-10 
        sm:w-12 
        sm:h-12 
        md:w-16 
        md:h-16 
        lg:w-20 
        lg:h-20 
        xl:w-24 
        xl:h-24
        bg-gradient-to-br 
        from-[#fd7aa3]/20 
        to-[#295185]/15 
        rounded-full
        animate-pulse
        animation-delay-2000
      "></div>

      {/* Additional decorative elements for larger screens */}
      <div className="
        hidden 
        lg:block 
        absolute 
        top-1/3 
        right-1/4 
        w-14 
        h-14 
        xl:w-18 
        xl:h-18
        bg-gradient-to-br 
        from-[#295185]/15 
        to-[#ffdee9]/20 
        rounded-full
        animate-pulse
        animation-delay-3000
      "></div>
      
      <div className="
        hidden 
        xl:block 
        absolute 
        bottom-1/3 
        left-1/3 
        w-12 
        h-12 
        2xl:w-16 
        2xl:h-16
        bg-gradient-to-br 
        from-[#FEACC6]/15 
        to-[#fd7aa3]/20 
        rounded-full
        animate-pulse
        animation-delay-4000
      "></div>
    </section>
  );
};

export default Hero;