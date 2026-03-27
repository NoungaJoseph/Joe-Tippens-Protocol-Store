import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import acneCareImage from '../assets/trendind searchs/ACNE Care.png';
import diabeticCareImage from '../assets/trendind searchs/DAIBETIC.png';
import hivAidsImage from '../assets/trendind searchs/HIVAIDS.png';
import respiratoryImage from '../assets/trendind searchs/RESPIRATORY.png';
import bladderImage from '../assets/trendind searchs/BLADDER.png';
import womenImage from '../assets/trendind searchs/WOMEN.png';
import antiFungalImage from '../assets/trendind searchs/ANTI FUNGAL.png';
import antiBioticImage from '../assets/trendind searchs/ANTI BIOTIC.png';

interface CategoryCard {
  id: string;
  title: string;
  subtitle: string;
  bgColor: string;
  bgGradient?: boolean;
  illustration: string;
}

const TopTrendingSearch: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const categories: CategoryCard[] = [
    {
      id: 'acne',
      title: 'ACNE',
      subtitle: 'Care',
      bgColor: 'bg-purple-300',
      illustration: acneCareImage,
    },
    {
      id: 'diabetic',
      title: 'DIABETIC',
      subtitle: 'Care',
      bgColor: 'bg-blue-400',
      illustration: diabeticCareImage,
    },
    {
      id: 'hiv',
      title: 'HIV/AIDS',
      subtitle: 'Care',
      bgColor: 'bg-red-400',
      illustration: hivAidsImage,
    },
    {
      id: 'respiratory',
      title: 'RESPIRATORY',
      subtitle: 'Care',
      bgColor: 'bg-purple-400',
      illustration: respiratoryImage,
    },
    {
      id: 'bladder',
      title: 'BLADDER',
      subtitle: 'Prostate',
      bgColor: 'bg-blue-300',
      illustration: bladderImage,
    },
    {
      id: 'women',
      title: 'WOMEN',
      subtitle: 'Health',
      bgColor: 'bg-gradient-to-br from-pink-400 to-purple-400',
      bgGradient: true,
      illustration: womenImage,
    },
    {
      id: 'antifungal',
      title: 'ANTI FUNGAL',
      subtitle: 'Medication',
      bgColor: 'bg-blue-500',
      illustration: antiFungalImage,
    },
    {
      id: 'antibiotic',
      title: 'ANTI BIOTIC',
      subtitle: 'Medication',
      bgColor: 'bg-green-300',
      illustration: antiBioticImage,
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center" style={{ color: '#2f5d50' }}>
          Top Trending Search
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`relative overflow-hidden rounded-3xl p-8 h-56 flex flex-col justify-between cursor-pointer transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg ${
                category.bgGradient ? category.bgColor : category.bgColor
              }`}
              style={{
                borderRadius: '24px',
              }}
            >
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                  {category.title}
                </h3>
                <p className="text-base sm:text-lg text-white/90 font-light mt-1">
                  {category.subtitle}
                </p>
              </div>

              <img
                src={category.illustration}
                alt={`${category.title} ${category.subtitle}`}
                className="absolute bottom-0 right-3 h-28 w-28 object-contain sm:h-32 sm:w-32"
              />
            </div>
          ))}
        </div>
      </div>

      {/* All Category Button */}
      <div className="text-center mb-20">
        <button
          className="px-8 py-3 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:brightness-110 active:scale-95"
          style={{ backgroundColor: '#2f5d50' }}
        >
          All Category &gt;
        </button>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </button>
      </div>

      {/* Chat Bubble (Optional - Shows when clicked) */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl p-6 z-50 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">Chat with us</h3>
            <button
              onClick={() => setChatOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
            >
              ×
            </button>
          </div>
          <div className="text-sm text-gray-600">
            <p>Hi! How can we help you today? Our team is here to support you with any questions!</p>
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
      )}
    </section>
  );
};

export default TopTrendingSearch;
