import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Package, ShieldCheck, CreditCard, RefreshCw, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ_DATA = [
  {
    category: "Orders & Shipping",
    icon: <Package size={20} />,
    items: [
      {
        id: "os-1",
        q: "How do I track my order?",
        a: "Once your order ships, you will receive a confirmation email containing a tracking number and a link to track your package. You can also track your order status from your account dashboard."
      },
      {
        id: "os-2",
        q: "What are the shipping times and costs?",
        a: "We offer Standard Shipping (3-5 business days) which is free for orders over $100. For orders under $100, a flat rate of $9.99 applies. Express Shipping (1-2 business days) is available for $24.99."
      },
      {
        id: "os-3",
        q: "Do you ship internationally?",
        a: "Currently, we ship to the United States and Canada. We are working on expanding our shipping capabilities to other regions in the near future."
      },
      {
        id: "os-4",
        q: "My package is missing. What should I do?",
        a: "If your tracking shows 'Delivered' but you haven't received it, please check around your property and with neighbors. If you still can't locate it after 24 hours, please contact our support team immediately."
      }
    ]
  },
  {
    category: "Products & Safety",
    icon: <ShieldCheck size={20} />,
    items: [
      {
        id: "ps-1",
        q: "Are your supplements FDA approved?",
        a: "Our supplements are manufactured in FDA-registered facilities that follow Good Manufacturing Practices (GMP). While dietary supplements themselves are not FDA approved, our ingredients and processes adhere to strict safety standards."
      },
      {
        id: "ps-2",
        q: "How do I know which dosage is right for me?",
        a: "We recommend consulting with a healthcare professional before starting any new supplement regimen. General dosage guidelines are provided on each product label and product detail page."
      },
      {
        id: "ps-3",
        q: "Are your products gluten-free and vegan?",
        a: "Many of our products are gluten-free and vegan-friendly. Please check the specific product description and label for dietary information."
      },
      {
        id: "ps-4",
        q: "Do I need a prescription?",
        a: "Some products in our catalog are marked as 'Prescription Required'. For these items, you will need to provide a valid prescription during checkout. Over-the-counter (OTC) items do not require a prescription."
      }
    ]
  },
  {
    category: "Payment",
    icon: <CreditCard size={20} />,
    items: [
      {
        id: "py-1",
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, MasterCard, American Express, Discover) as well as secure online payment options processed via Stripe."
      },
      {
        id: "py-2",
        q: "Is my payment information secure?",
        a: "Yes, we use industry-standard 256-bit SSL encryption to protect your personal and financial information. We do not store your credit card details on our servers."
      },
      {
        id: "py-3",
        q: "Can I pay with insurance?",
        a: "We do not accept direct insurance payments. However, we can provide an itemized receipt that you may be able to submit to your insurance provider for reimbursement, depending on your plan."
      }
    ]
  },
  {
    category: "Returns & Refunds",
    icon: <RefreshCw size={20} />,
    items: [
      {
        id: "rr-1",
        q: "What is your return policy?",
        a: "We offer a 30-day money-back guarantee on unopened products. If you are not satisfied with your purchase, please contact our support team to initiate a return. Note that for safety reasons, opened pharmaceutical products cannot be returned."
      },
      {
        id: "rr-2",
        q: "How long do refunds take?",
        a: "Once we receive your return, refunds are typically processed within 5-7 business days. The funds will be returned to your original method of payment."
      },
      {
        id: "rr-3",
        q: "Do I have to pay for return shipping?",
        a: "If the return is due to an error on our part (e.g., wrong item sent, damaged), we will cover the return shipping. For other returns, the customer is responsible for shipping costs."
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  // Filter Logic directly in render
  let filteredFAQs = FAQ_DATA;

  // Filter by Category
  if (activeCategory !== "All") {
    filteredFAQs = filteredFAQs.filter(cat => cat.category === activeCategory);
  }

  // Filter by Search
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredFAQs = filteredFAQs.map(cat => ({
      ...cat,
      items: cat.items.filter(item =>
        item.q.toLowerCase().includes(query) ||
        item.a.toLowerCase().includes(query)
      )
    })).filter(cat => cat.items.length > 0);
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 to-blue-900/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2000"
          alt="FAQ Support"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
        />

        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
            Help Center
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">How can we help?</h1>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-900 shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-500/30 transition-shadow text-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-30">

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm ${activeCategory === "All"
                ? "bg-cyan-600 text-white shadow-cyan-200 ring-2 ring-cyan-600 ring-offset-2"
                : "bg-white text-gray-600 hover:bg-gray-100 hover:text-cyan-600"
              }`}
          >
            All
          </button>
          {FAQ_DATA.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm ${activeCategory === cat.category
                  ? "bg-cyan-600 text-white shadow-cyan-200 ring-2 ring-cyan-600 ring-offset-2"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:text-cyan-600"
                }`}
            >
              <span className={activeCategory === cat.category ? "text-white" : "text-gray-400"}>
                {/* Clone icon to apply specific size if needed */}
                {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 16 })}
              </span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="space-y-8">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((section) => (
              <div key={section.category} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50/50 p-6 border-b border-gray-100 flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 text-cyan-700 rounded-lg">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{section.category}</h2>
                </div>

                <div className="divide-y divide-gray-100">
                  {section.items.map((item) => (
                    <div key={item.id} className="group">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-6 py-5 text-left flex justify-between items-start gap-4 hover:bg-gray-50/50 transition-colors focus:outline-none"
                      >
                        <span className={`font-semibold text-lg leading-snug transition-colors ${openItem === item.id ? 'text-cyan-600' : 'text-gray-800 group-hover:text-gray-900'}`}>
                          {item.q}
                        </span>
                        <div className={`mt-1 p-1 rounded-full transition-all duration-200 ${openItem === item.id ? 'bg-cyan-100 text-cyan-600 rotate-180' : 'text-gray-400 bg-gray-100 group-hover:bg-gray-200'}`}>
                          <ChevronDown size={18} />
                        </div>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                      >
                        <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed max-w-3xl">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500">
                We couldn't find any FAQs matching "{searchQuery}". <br />
                Try a different keyword or contact support.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 text-cyan-600 font-bold hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Contact Support CTA */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/3 -translate-y-1/3">
            <HelpCircle size={300} />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex p-3 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
              <MessageCircle size={32} className="text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4 font-serif">Still have questions?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Can't find the answer you're looking for? Our friendly customer support team is here to help you with any inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-500 transition-all shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2">
                Contact Us <ArrowRight size={18} />
              </Link>
              <a href="tel:+12109018480" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Call +1(581)5085308
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQ;