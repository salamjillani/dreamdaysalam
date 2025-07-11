import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ images, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance images every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-cinzel-semibold text-white mb-4">
          {title}
        </h3>
        <p className="text-lg text-[#ffdee9] max-w-3xl mx-auto leading-relaxed font-montserrat-light">
          {description}
        </p>
      </div>

      <div className="relative w-full">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 sm:h-96 md:h-[32rem] lg:h-[40rem] xl:h-[44rem] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-[#FEACC6] scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      title: "Exclusive Venues",
      description:
        "DreamDay has access to the most elusive and exclusive venues of Southern California.",
      images: [
        { src: "/exclusivevenues/venue1.jpg" },
        { src: "/exclusivevenues/venue5.jpg" },
        { src: "/exclusivevenues/venue7.jpg" },
        { src: "/exclusivevenues/venue9.jpg" },
        { src: "/exclusivevenues/venue10.jpg" },
        { src: "/exclusivevenues/venue11.jpg" },
        { src: "/exclusivevenues/venue12.jpg" },
        { src: "/exclusivevenues/venue13.jpg" },
        { src: "/exclusivevenues/venue14.jpg" },
        { src: "/exclusivevenues/venue15.jpg" },
        { src: "/exclusivevenues/venue16.jpg" },
        { src: "/exclusivevenues/venue17.jpg" },
        { src: "/exclusivevenues/venue19.jpg" },
        { src: "/exclusivevenues/venue21.jpg" },
        { src: "/exclusivevenues/venue22.jpg" },
        { src: "/exclusivevenues/venue23.jpg" },
        { src: "/exclusivevenues/venue24.jpg" },
        { src: "/exclusivevenues/venue25.jpg" },
        { src: "/exclusivevenues/venue26.jpg" },
        { src: "/exclusivevenues/venue27.jpg" },
        { src: "/exclusivevenues/venue28.jpg" }

 
      ],
    },
    {
      title: "Corporate Events",
      description: "Corporate, indoor and outdoor, theatres, parks, tradeshows, grand opening, brand launches, and celebrations.",
      images: [
        { src: "/corporateevents/corporateevents1.jpg" },
        { src: "/corporateevents/corporateevents2.jpg" },
        { src: "/corporateevents/corporateevents3.jpg" },
        { src: "/corporateevents/corporateevents4.jpg" },
        { src: "/corporateevents/corporateevents5.jpg" },
        { src: "/corporateevents/corporateevents7.jpg" },
        { src: "/corporateevents/corporateevents8.jpg" },
        { src: "/corporateevents/corporateevents9.jpg" },
        { src: "/corporateevents/corporateevents10.jpg" },
        { src: "/corporateevents/corporateevents11.png" },
        { src: "/corporateevents/corporateevents15.png" },
        { src: "/corporateevents/corporateevents16.jpg" }

      ],
    },
    {
      title: "Themed Celebrations",
      description:
        "Adventures and sweet sixteen parties, themed to match the energy you want your guests to experience.",
      images: [
        { src: "/themedcelebrations/themed1.jpg" },
        { src: "/themedcelebrations/themed2.jpg" },
        { src: "/themedcelebrations/themed3.jpg" },
        { src: "/themedcelebrations/themed4.jpg" },
        { src: "/themedcelebrations/themed5.jpg" },
        { src: "/themedcelebrations/themed7.jpg" },
        { src: "/themedcelebrations/themed8.png" },
        { src: "/themedcelebrations/themed9.jpg" },
        { src: "/themedcelebrations/themed10.jpg" }
      ],
    },
    {
      title: "Custom Productions",
      description:
        "We have the tools, decor and effects to curate once in a lifetime experiences, as experts, we can repeat.",
      images: [
        { src: "/customproductions/production1.jpg" },
        { src: "/customproductions/production3.jpg" },
        { src: "/customproductions/production4.jpg" },
        { src: "/customproductions/production5.jpg" },
        { src: "/customproductions/production6.jpg" },
        { src: "/customproductions/production7.jpg" },
        { src: "/customproductions/production8.jpg" }
      ],
    },
    {
      title: "Intimate Gatherings",
      description:
        "Proposals, announcements, dinners and baby showers, and children's birthdays.",
      images: [
        { src: "/intimategatherings/intimate1.jpg" },
        { src: "/intimategatherings/intimate2.jpg" },
        { src: "/intimategatherings/intimate3.jpg" },
        { src: "/intimategatherings/intimate4.jpg" },
        { src: "/intimategatherings/intimate6.jpg" },
   
        { src: "/intimategatherings/intimate8.png" },
        { src: "/intimategatherings/intimate9.jpeg" },
   
        { src: "/intimategatherings/intimate11.png" },
        { src: "/intimategatherings/intimate12.png" },
        { src: "/intimategatherings/intimate13.png" },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient matching Hero section */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#295185]/20 via-[#fd7aa3]/5 to-[#FEACC6]/10"></div>

      {/* Floating bubble elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/15 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#ffdee9]/20 to-[#FEACC6]/15 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#fd7aa3]/20 to-[#295185]/15 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-[#FEACC6]/15 to-[#ffdee9]/20 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/3 w-18 h-18 bg-gradient-to-br from-[#295185]/15 to-[#fd7aa3]/20 rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-cinzel-bold bg-gradient-to-r from-white via-[#ffdee9] to-[#FEACC6] bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[#ffdee9] mx-auto font-montserrat-light">
            From intimate gatherings to grand celebrations, we craft
            unforgettable experiences tailored to your vision
          </p>
        </div>

        {servicesData.map((service, index) => (
          <ImageCarousel
            key={index}
            title={service.title}
            description={service.description}
            images={service.images}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;