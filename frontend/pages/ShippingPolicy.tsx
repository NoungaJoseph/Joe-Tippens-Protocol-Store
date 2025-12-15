import React from 'react';
import { Truck, Clock, MapPin, AlertTriangle } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center font-serif">Shipping Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600">
            <p className="lead text-xl text-center mb-12">
                At PureProtocol, we strive to deliver your medications and supplements as quickly and securely as possible. 
                Please review our shipping policies below.
            </p>

            <div className="grid gap-8">
                {/* Section 1 */}
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                        <Clock className="text-cyan-600" size={24} />
                        <h2 className="text-2xl font-bold text-gray-900 m-0">Processing Time</h2>
                    </div>
                    <p>
                        All orders are processed within <strong>24 hours</strong> of receipt. Orders placed on weekends or holidays will be processed the following business day. 
                        If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                        <Truck className="text-cyan-600" size={24} />
                        <h2 className="text-2xl font-bold text-gray-900 m-0">Shipping Rates & Delivery Estimates</h2>
                    </div>
                    <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Standard Shipping (3-5 business days):</strong> Free for orders over $100. Flat rate $9.99 for orders under $100.</li>
                        <li><strong>Express Shipping (1-2 business days):</strong> Flat rate $24.99.</li>
                        <li><strong>Overnight Delivery:</strong> Available upon request for select locations. Cost varies by weight and location.</li>
                    </ul>
                    <p className="text-sm italic mt-4 text-gray-500">* Delivery delays can occasionally occur due to carrier issues or weather conditions.</p>
                </div>

                {/* Section 3 */}
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="text-cyan-600" size={24} />
                        <h2 className="text-2xl font-bold text-gray-900 m-0">Shipment Confirmation & Order Tracking</h2>
                    </div>
                    <p>
                        You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). 
                        The tracking number will be active within 24 hours.
                    </p>
                </div>

                {/* Section 4 */}
                <div className="bg-red-50 p-8 rounded-xl border border-red-100">
                    <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="text-red-600" size={24} />
                        <h2 className="text-2xl font-bold text-gray-900 m-0">Damages & Lost Packages</h2>
                    </div>
                    <p>
                        PureProtocol is not liable for any products damaged or lost during shipping. If you received your order damaged, 
                        please contact the shipment carrier to file a claim.
                    </p>
                    <p className="mt-2">
                        However, we want to help. If your package is lost, please contact our support team at <strong>support@pureprotocol.store</strong> and we will do our best to assist you with a replacement or resolution.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;