import React, { useState } from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-sm max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent</h2>
          <p className="text-gray-600 mb-6">Thank you for contacting us. Our support team will respond to your inquiry within 24 hours.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Message</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=2000" 
          alt="Contact Support" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Contact Us</h1>
          <p className="text-lg lg:text-xl text-gray-200">Our support team is here to help you</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-2xl py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600">Have a question about your order or our products? Fill out the form below.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500">
              <option>Order Inquiry</option>
              <option>Product Question</option>
              <option>Shipping Issue</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="How can we assist you today?"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 hover:bg-emerald-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;