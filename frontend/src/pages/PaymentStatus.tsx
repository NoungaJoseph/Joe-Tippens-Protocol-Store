import React, { useEffect, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const PaymentStatus = () => {
    const stripe = useStripe();
    const [message, setMessage] = useState<string | null>(null);
    const [status, setStatus] = useState<'success' | 'error' | 'processing' | null>(null);
    const navigate = useNavigate();
    const { clearCart } = useCart();

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent?.status) {
                case "succeeded":
                    setStatus('success');
                    setMessage("Payment succeeded! Your order is being processed.");
                    clearCart();
                    break;
                case "processing":
                    setStatus('processing');
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setStatus('error');
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setStatus('error');
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe, clearCart]);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-20">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in">
                {status === 'success' && (
                    <>
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="text-green-600 w-12 h-12" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
                        <p className="text-gray-600 mb-8">{message}</p>
                        <button
                            onClick={() => navigate('/all-pills')}
                            className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                        >
                            Continue Shopping <ArrowRight size={20} />
                        </button>
                    </>
                )}

                {status === 'error' && (
                    <>
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <XCircle className="text-red-600 w-12 h-12" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Failed</h1>
                        <p className="text-gray-600 mb-8">{message}</p>
                        <button
                            onClick={() => navigate('/checkout')}
                            className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Try Again
                        </button>
                    </>
                )}

                {status === 'processing' && (
                    <>
                        <div className="w-20 h-20 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Processing...</h1>
                        <p className="text-gray-600">{message}</p>
                    </>
                )}

                {!status && (
                    <p className="text-gray-600">Loading payment status...</p>
                )}
            </div>
        </div>
    );
};

export default PaymentStatus;
