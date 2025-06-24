import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#112137]/95 to-[#1d395e]/95 backdrop-blur-md py-12 border-t border-[#FEACC6]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] bg-clip-text text-transparent mb-4">DREAMDAY</h3>
            <p className="text-[#ffdee9]/80 leading-relaxed">
              Every Detail, Perfectly Planned. Creating unforgettable experiences 
              that exceed expectations and honor your unique story.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-[#ffdee9]/70">
              <li className="hover:text-[#FEACC6] transition-colors duration-300">Wedding Planning</li>
              <li className="hover:text-[#FEACC6] transition-colors duration-300">Corporate Events</li>
              <li className="hover:text-[#FEACC6] transition-colors duration-300">Social Celebrations</li>
              <li className="hover:text-[#FEACC6] transition-colors duration-300">Brand Launches</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibent text-white mb-4">Connect</h4>
            <div className="space-y-3 text-[#ffdee9]/70">
              <div className="flex items-center hover:text-[#FEACC6] transition-colors duration-300">
                <div className="p-2 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/20 rounded-lg mr-3">
                  <Phone className="w-4 h-4 text-[#FEACC6]" />
                </div>
                <span>Contact for consultation</span>
              </div>
              <div className="flex items-center hover:text-[#FEACC6] transition-colors duration-300">
                <div className="p-2 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/20 rounded-lg mr-3">
                  <Mail className="w-4 h-4 text-[#FEACC6]" />
                </div>
                <span>hello@dreamdayevents.com</span>
              </div>
              <div className="flex items-center hover:text-[#FEACC6] transition-colors duration-300">
                <div className="p-2 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/20 rounded-lg mr-3">
                  <MapPin className="w-4 h-4 text-[#FEACC6]" />
                </div>
                <span>Serving nationwide</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#FEACC6]/20 mt-8 pt-8 text-center">
          <p className="text-[#ffdee9]/60 bg-gradient-to-r from-[#ffdee9]/60 to-[#FEACC6]/60 bg-clip-text text-transparent">
            &copy; 2025 DreamDay Event Planning. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;