import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

// Generate 32 mock reviews
const REVIEWS_DATA = Array.from({ length: 32 }, (_, i) => ({
  id: i + 1,
  name: [
    "James Anderson", "Sarah Mitchell", "Michael Chen", "Emily Davis", "Robert Wilson",
    "Jennifer Taylor", "William Brown", "Elizabeth White", "David Miller", "Lisa Garcia",
    "Richard Martinez", "Susan Robinson", "Joseph Clark", "Margaret Rodriguez", "Charles Lewis",
    "Patricia Lee", "Thomas Walker", "Jessica Hall", "Christopher Allen", "Karen Young",
    "Daniel Hernandez", "Nancy King", "Matthew Wright", "Betty Lopez", "Anthony Hill",
    "Sandra Scott", "Donald Green", "Ashley Adams", "Mark Baker", "Kimberly Gonzalez",
    "Paul Nelson", "Donna Carter"
  ][i % 32],
  rating: 5,
  date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString(),
  title: [
    "Life changing products", "Fast shipping and great quality", "Highly recommend this store",
    "Excellent customer service", "Authentic supplements", "Very satisfied with my purchase",
    "Will definitely buy again", "The protocol works!", "Great packaging", "Trustworthy source"
  ][i % 10],
  content: [
    "I've been using these products for 3 months and the results are amazing. The customer service team was very helpful in guiding me.",
    "Order arrived in 2 days. The packaging was discreet and secure. Products look legitimate and high quality.",
    "Finally found a reliable source for Fenbendazole. Thank you so much for your service.",
    "Prices are reasonable compared to other sites. I appreciate the free shipping on larger orders.",
    "The bundle deal is great value. Everything I needed in one package.",
    "I was skeptical at first but the support team answered all my questions patiently. Very professional.",
    "High quality CBD oil. It really helps with my inflammation.",
    "Tracking number was provided immediately. Smooth transaction from start to finish.",
    "My doctor recommended this protocol and this store made it easy to get everything.",
    "Five stars for the Ivermectin tablets. Exactly as described."
  ][i % 10]
}));

const Reviews: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h1>
          <p className="text-xl text-gray-600">See what our community is saying about our products and service.</p>
          
          <div className="mt-6 inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
            <span className="font-bold text-2xl text-gray-900">4.9</span>
            <div className="flex text-yellow-400">
                {'⭐'.repeat(5)}
            </div>
            <span className="text-gray-500 text-sm ml-2">Based on 1,240 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                    <div className="flex items-center gap-1">
                       <span className="text-green-600 text-xs font-medium flex items-center">
                         <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                         Verified Buyer
                       </span>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>

              <div className="flex text-yellow-400 mb-2">
                 {'⭐'.repeat(review.rating)}
              </div>

              <h5 className="font-bold text-gray-800 mb-2">{review.title}</h5>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                "{review.content}"
              </p>

              <div className="pt-4 border-t border-gray-50 flex items-center text-gray-400 text-sm">
                 <button className="flex items-center gap-1 hover:text-cyan-600 transition-colors">
                    <ThumbsUp size={14} /> Helpful
                 </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <button className="bg-white border border-gray-300 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Load More Reviews
            </button>
        </div>

      </div>
    </div>
  );
};

export default Reviews;