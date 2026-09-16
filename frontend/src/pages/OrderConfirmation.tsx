import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { CheckCircle, Home, Clock } from 'lucide-react';
import Button from '../components/Button';

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const state = location.state as { orderId: string } | null;

  if (!state) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6 animate-bounce">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Thank You!</h2>
        <p className="text-xl text-gray-800 font-medium mb-6">
            We have received your order.
        </p>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
            <div className="flex justify-center mb-3 text-blue-600">
                <Clock size={32} />
            </div>
            <p className="text-lg text-blue-900 font-semibold mb-2">Next Steps</p>
            <p className="text-blue-800 leading-relaxed">
                Thank you for your purchase. We will get in touch with you within the next <span className="font-bold">24 hours</span> to confirm your details.
            </p>
        </div>

        <p className="text-sm text-gray-500 mb-8">
            Order Reference: <span className="font-mono font-bold text-gray-700">#{state.orderId}</span>
        </p>

        <Link to="/">
          <Button fullWidth className="flex items-center justify-center gap-2">
            <Home size={18} /> Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;