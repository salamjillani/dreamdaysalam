import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-lg text-[#ffdee9] max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
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
                  className="w-full h-80 md:h-96 object-cover"
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
                  ? 'bg-[#FEACC6] scale-125'
                  : 'bg-white/30 hover:bg-white/50'
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
      description: "DreamDay has access to the most elusive and exclusive venues of Southern California.",
      images: [
        { src: "/exclusivevenues/venue1.png" },
        { src: "/exclusivevenues/venue2.png" },
        { src: "/exclusivevenues/venue3.png" },
        { src: "/exclusivevenues/venue4.png" },
        { src: "/exclusivevenues/venue5.png" },
        { src: "/exclusivevenues/venue6.png" }
      ]
    },
    {
      title: "Corporate Events",
      description: "Corporate, indoor and outdoor, theatres and parks.",
      images: [
        { src: "/corporateevents/corporateevents1.png" },
        { src: "/corporateevents/corporateevents2.png" },
        { src: "/corporateevents/corporateevents3.png" },
        { src: "/corporateevents/corporateevents4.png" },
        { src: "/corporateevents/corporateevents5.png" },
        { src: "/corporateevents/corporateevents6.png" }
      ]
    },
    {
      title: "Themed Celebrations",
      description: "Adventures and sweet sixteen parties, themed to match the energy you want your guests to experience.",
      images: [
        { src: "/themedcelebrations/themed1.png" },
        { src: "/themedcelebrations/themed2.png" },
        { src: "/themedcelebrations/themed3.png" },
        { src: "/themedcelebrations/themed4.png" },
        { src: "/themedcelebrations/themed5.png" },
        { src: "/themedcelebrations/themed6.png" }
      ]
    },
    {
      title: "Custom Productions",
      description: "We have the tools, decor and effects to curate once in a lifetime experiences, as experts, we can repeat.",
      images: [
        { src: "/customproductions/production1.png" },
        { src: "/customproductions/production2.png" },
        { src: "/customproductions/production3.png" },
        { src: "/customproductions/production4.png" }
      ]
    },
    {
      title: "Intimate Gatherings",
      description: "Proposals, announcements, dinners and baby showers, and children's birthdays.",
      images: [
        { src: "/intimategatherings/intimate1.png" },
        { src: "/intimategatherings/intimate2.png" },
        { src: "/intimategatherings/intimate3.png" },
        { src: "/intimategatherings/intimate4.png" },
        { src: "/intimategatherings/intimate5.png" },
        { src: "/intimategatherings/intimate6.png" }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#ffdee9] to-[#FEACC6] bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[#ffdee9] max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we craft unforgettable experiences tailored to your vision
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