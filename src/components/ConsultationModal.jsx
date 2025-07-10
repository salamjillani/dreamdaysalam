import { CheckCircle } from 'lucide-react';

const ConsultationModal = ({ 
  showConsultationForm, 
  setShowConsultationForm, 
  formData, 
  setFormData, 
  handleFormSubmit 
}) => {
  if (!showConsultationForm) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#112137]/90 to-[#1d395e]/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-cinzel-bold text-[#1d395e]">
            Book Your Exclusive Consultation
          </h2>
          <button 
            onClick={() => setShowConsultationForm(false)}
            className="text-[#1d395e] hover:text-[#fd7aa3] text-3xl font-bold transition-colors duration-300"
          >
            ×
          </button>
        </div>
    
        <div className="mb-6">
          <h3 className="text-xl font-cinzel-semibold text-[#fd7aa3] mb-3">
            Live Your Dream. Every Detail. Perfectly Planned.
          </h3>
          <p className="text-[#112137] mb-4 leading-relaxed font-montserrat-light">
            Embark on a journey to your perfect event with a personal consultation with Eboniece Perry, 
            the principal planner at DreamDay. This session is designed to help shape your event into 
            a meticulously crafted experience that aligns with your unique vision.
          </p>
          <div className="bg-gradient-to-r from-[#ffdee9] to-[#FEACC6]/50 p-4 rounded-2xl mb-4 border border-[#fd7aa3]/30">
            <p className="text-[#112137] font-cinzel-semibold">Minimum Budget: $3,000</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-cinzel-semibold text-[#1d395e] mb-4">What's Included:</h4>
          <ul className="space-y-3">
            {[
              'Brainstorming Session: A deep dive into your vision, preferences, and event specifics',
              'Taste Testing Day: Sample exquisite flavors for your culinary offerings',
              'Palette and Theme Review: Explore color schemes and themes for the perfect ambiance',
              'Venue Scouting: Evaluate potential venues for your ideal setting',
              'Special Guests and Activities: Plan engaging entertainment to enchant your guests'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#fd7aa3] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[#112137] font-montserrat-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-2 border-[#FEACC6] rounded-2xl px-4 py-3 w-full focus:outline-none focus:border-[#fd7aa3] focus:ring-2 focus:ring-[#fd7aa3]/20 transition-all duration-300 bg-white font-sans text-[#112137] placeholder-gray-500"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              required
              className="border-2 border-[#FEACC6] rounded-2xl px-4 py-3 w-full focus:outline-none focus:border-[#fd7aa3] focus:ring-2 focus:ring-[#fd7aa3]/20 transition-all duration-300 bg-white font-sans text-[#112137] placeholder-gray-500"
            />
            
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              required
              className="border-2 border-[#FEACC6] rounded-2xl px-4 py-3 w-full focus:outline-none focus:border-[#fd7aa3] focus:ring-2 focus:ring-[#fd7aa3]/20 transition-all duration-300 bg-white font-sans text-[#112137] placeholder-gray-500"
            />
            
            <input
              type="text"
              name="eventType"
              placeholder="Event Type (Wedding, Corporate, etc.)"
              value={formData.eventType}
              onChange={e => setFormData({ ...formData, eventType: e.target.value })}
              required
              className="border-2 border-[#FEACC6] rounded-2xl px-4 py-3 w-full focus:outline-none focus:border-[#fd7aa3] focus:ring-2 focus:ring-[#fd7aa3]/20 transition-all duration-300 bg-white font-sans text-[#112137] placeholder-gray-500"
            />
            
            <input
              type="date"
              name="eventDate"
              placeholder="Event Date"
              value={formData.eventDate}
              onChange={e => setFormData({ ...formData, eventDate: e.target.value })}
              required
              className="border-2 border-[#FEACC6] rounded-2xl px-4 py-3 w-full focus:outline-none focus:border-[#fd7aa3] focus:ring-2 focus:ring-[#fd7aa3]/20 transition-all duration-300 bg-white font-sans text-[#112137] placeholder-gray-500"
            />
            
            <input
              type="number"
              name="budget"
              placeholder="Estimated Budget"
              value={formData.budget}
              onChange={e => setFormData({ ...formData, budget: e.target.value })}
              required
              min={3000}
              className="border-2 border-[#FEACC6] rounded-2xl px-4 py-3 w-full focus:outline-none focus:border-[#fd7aa3] focus:ring-2 focus:ring-[#fd7aa3]/20 transition-all duration-300 bg-white font-sans text-[#112137] placeholder-gray-500"
            />
          </div>
          
          <textarea
            name="description"
            placeholder="Tell us about your dream event..."
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="border-2 border-[#FEACC6] rounded-2xl px-4 py-3 w-full focus:outline-none focus:border-[#fd7aa3] focus:ring-2 focus:ring-[#fd7aa3]/20 transition-all duration-300 bg-white font-sans text-[#112137] placeholder-gray-500"
          />
          
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="w-full bg-gradient-to-r from-[#fd7aa3] to-[#FEACC6] hover:from-[#FEACC6] hover:to-[#fd7aa3] text-white font-cinzel-semibold py-4 px-6 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-[#fd7aa3]/30"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;