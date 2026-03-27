import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'Our Mission',
      answer: 'Our mission is to provide high-quality pharmaceutical supplements and healthcare solutions to customers worldwide. We are committed to ensuring that every customer receives authentic, verified products with exceptional customer service and fast delivery.'
    },
    {
      id: 2,
      question: 'What is Ivermectinkart?',
      answer: 'Ivermectinkart is a trusted online platform offering premium pharmaceutical supplements, including the Joe Tippens Protocol and other health solutions. We provide authentic medications and supplements with secure payment options and fast delivery to your doorstep.'
    },
    {
      id: 3,
      question: 'How do I place an order?',
      answer: 'To place an order, browse our catalog, select the products you need, add them to your cart, and proceed to checkout. You can review your order details, select your shipping address, and choose your payment method. Once confirmed, you will receive a confirmation email with tracking information.'
    },
    {
      id: 4,
      question: 'How will I know my order is confirmed?',
      answer: 'After placing your order, you will receive a confirmation email immediately. This email will include your order number, products ordered, and expected delivery date. You can also track your order in real-time using the tracking link provided in the confirmation email.'
    },
    {
      id: 5,
      question: 'Do you ship internationally?',
      answer: 'Yes. We serve customers in many regions and work to process orders quickly. Delivery timelines can vary by destination, customs clearance, and the shipping option selected during checkout.'
    },
    {
      id: 6,
      question: 'How long does delivery usually take?',
      answer: 'Delivery times depend on your location and product availability. Most orders are processed promptly, and tracking details are shared once your shipment is confirmed so you can follow progress from dispatch to delivery.'
    },
    {
      id: 7,
      question: 'Are your products authentic and verified?',
      answer: 'We focus on verified, high-quality products and protocol supplements. Product listings are curated carefully, and our team aims to provide trusted options backed by clear product information and responsive support.'
    },
    {
      id: 8,
      question: 'What payment methods do you accept?',
      answer: 'Available payment methods are shown during checkout and may include major card providers and other supported payment options. We use secure payment handling to help protect your transaction details.'
    },
    {
      id: 9,
      question: 'Can I track my order after purchase?',
      answer: 'Yes. Once your order is processed, you will receive tracking information when available. That lets you monitor shipment movement and estimated delivery progress in real time.'
    },
    {
      id: 10,
      question: 'What if I need help choosing a product?',
      answer: 'If you are unsure which product fits your needs, reach out through the contact page or support channels. We can help guide you to the relevant category, product page, or protocol collection.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
            Questions? Look Here.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  {item.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-gray-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer - Collapsible */}
              {openId === item.id && (
                <div className="pb-4 pr-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
