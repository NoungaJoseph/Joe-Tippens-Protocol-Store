import React from 'react';
import { Shield, Truck, Globe, CreditCard, Activity, Clock, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2187d80a1a87?auto=format&fit=crop&q=80&w=2000" 
          alt="Medical Team" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Your trusted partner in health and wellness delivery.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro */}
        <div className="mb-16 text-center">
           <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-bold text-emerald-600">PureProtocol</span> is an online portal that sells a variety of pills, including prescription or FDA-approved medications, generic medications, and over-the-counter medications. We believe in offering home delivery as quickly as possible, and to that end, we have our own highly efficient delivery team. At our portal, we also assist you with placing orders, tracking packages, canceling orders, and receiving refunds, as well as providing information on discounts and availing offers with the assistance of our 24/7 customer support team. Our clientele is entirely based on our commitment to quality assurance and speedy delivery.
           </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 gap-12">
            
            {/* Mission */}
            <section className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full">
                        <Activity size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                    <p>Our goal is to help those in need by offering medications online.</p>
                    <p>We are committed to giving you quicker access to medications through online ordering, and our delivery staff will deliver them to your home as soon as feasible.</p>
                    <p>In order to satisfy you and deliver your medications on schedule, we are always working to improve our overall procedures.</p>
                    <p>Our goal is to get the medications to you as soon as possible so that you won’t have to stop your treatment because they aren’t available.</p>
                    <p>Our entire staff, including our online maintenance team, logistics and delivery team, and customer support team, is committed to creating a more efficient workflow so that you can receive your medications on schedule.</p>
                </div>
            </section>

            {/* Vision */}
            <section>
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                        <Globe size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <div className="space-y-4 text-gray-600 pl-4 border-l-4 border-blue-100">
                    <p>In the upcoming years, we hope to supply medications to millions of clients worldwide.</p>
                    <p>In order to shorten delivery times, we are also driven to make our courier, delivery, and logistics procedures as efficient as possible.</p>
                    <p>In order to provide our clients with faster delivery, we are working to reduce waiting times at airports, terminals, and logistical facilities.</p>
                    <p>In order to improve our web portal and make the procedure of obtaining pills easier and more seamless, we are also concentrating on technology.</p>
                    <p>We are also concentrating on lowering the possibility of online data theft and offering a secure environment for our clients to conduct business online.</p>
                </div>
            </section>

            {/* Product Assurance */}
            <section>
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
                        <Shield size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Product Assurance</h2>
                </div>
                 <div className="space-y-4 text-gray-600 pl-4 border-l-4 border-purple-100">
                    <p>We give you total confidence in our goods.</p>
                    <p>We guarantee that our items, which are sold online through our portal, are safe to use.</p>
                    <p>Every medication you see on our web is legitimate and authorized for use by the FDA or regional medicine approving bodies in the countries where they are used.</p>
                    <p className="font-semibold text-gray-800">We promise that you will recover after using the medications.</p>
                </div>
            </section>

             {/* Administration */}
             <section className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-200 text-gray-700 rounded-full">
                        <Clock size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Administration adherence to standards</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                    <p>To make sure that the medications are constantly kept in the proper humidity and temperature range to remain effective, we have a team of medical professionals who inspect our inventory at our logistics bays.</p>
                    <p>To make sure the medications are never past their expiration dates, our staff also performs routine inspections and safety-standard testing.</p>
                    <p>Regarding the issue of where we get our medications, we have teamed up with pharmaceutical companies and a few of their authorized wholesalers and distributors.</p>
                </div>
            </section>

             {/* Pricing */}
             <section>
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full">
                        <Award size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Pricing & Discounts</h2>
                </div>
                <div className="space-y-4 text-gray-600 pl-4 border-l-4 border-yellow-100">
                    <p>We have no control over the pricing that you see on our platform. These are the regular prices or the prices that the manufacturer bases their maximum selling price on.</p>
                    <p>However, we do provide you a discount on our portal, and this is exclusive to our portal and is decided by our management team.</p>
                    <p>Depending on our inventory and order pricing, the savings you see on our portal may change periodically.</p>
                    <p>Since offers are subject to change over time, we cannot promise you any. Customers are required to review the available discounts and select the one that best suits their needs.</p>
                </div>
            </section>

             {/* Payment Security */}
             <section>
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-red-100 text-red-600 rounded-full">
                        <CreditCard size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Payment Security Norms</h2>
                </div>
                 <div className="space-y-4 text-gray-600 pl-4 border-l-4 border-red-100">
                    <p>We don’t use any of the payment information you enter on our portal.</p>
                    <p>We remove all of our payment information and private data from our servers as soon as the payment is completed and the transaction has been verified on our end. This way, even in the event of a server firewall system or security protocol breach, no one can access them.</p>
                </div>
            </section>

             {/* Logistics */}
             <section className="bg-cyan-50 rounded-2xl p-8 border border-cyan-100">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-cyan-100 text-cyan-600 rounded-full">
                        <Truck size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Delivery & Logistics</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                    <p>When it comes to getting things to your door, our delivery and logistical management teams are setting the standard.</p>
                    <p>We constantly strive to enhance our logistics processes to ensure faster turnaround times.</p>
                </div>
            </section>
        </div>

      </div>
    </div>
  );
};

export default About;