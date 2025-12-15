import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, AlertTriangle, Lock } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Replace with your Stripe Publishable Key
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// Inner Component to handle Stripe Hooks
const CheckoutForm = () => {
    const { items, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', address: '', city: '', state: '', zip: ''
    });

    const tax = cartTotal * 0.08;
    const total = cartTotal + tax;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        // Basic validation
        if (step === 1) {
            if (!formData.firstName || !formData.email || !formData.address) {
                setError("Please fill in all required shipping fields.");
                return;
            }
        }
        setError(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(step + 1);
    };

    const prevStep = () => {
        setError(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(step - 1);
    };

    const handlePayment = async () => {
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet.
            return;
        }

        setLoading(true);
        setError(null);

        // 1. Create a PaymentIntent on the backend
        try {
            const response = await fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: total }),
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            const clientSecret = data.clientSecret;

            // 2. Confirm the card payment
            const cardElement = elements.getElement(CardElement);
            if (!cardElement) throw new Error("Card element not found");

            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: `${formData.firstName} ${formData.lastName}`,
                        email: formData.email,
                        address: {
                            line1: formData.address,
                            city: formData.city,
                            state: formData.state,
                            postal_code: formData.zip,
                            country: 'US', // Defaulting to US for this demo
                        },
                    },
                },
            });

            if (paymentResult.error) {
                setError(paymentResult.error.message || "Payment failed");
                setLoading(false);
            } else {
                if (paymentResult.paymentIntent.status === 'succeeded') {
                    // Payment Success!
                    const orderId = `PURE-${paymentResult.paymentIntent.id.slice(-8).toUpperCase()}`;
                    clearCart();
                    setLoading(false);
                    navigate('/order-confirmation', { state: { orderId } });
                }
            }

        } catch (err: any) {
            console.error("Payment Error:", err);
            setError("Failed to process payment. Please ensure the backend is running and try again. " + (err.message || ""));
            setLoading(false);
        }
    };

    // Card Styling
    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Inter", sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#aab7c4"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header with Background Image */}
            <section className="relative h-64 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=2000"
                    alt="Secure Checkout"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-center text-white px-4">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Secure Checkout</h1>
                    <p className="text-lg lg:text-xl text-blue-100">Complete your medication order safely</p>
                </div>
            </section>

            {/* Progress Steps */}
            <section className="py-6 bg-white border-b shadow-sm sticky top-20 z-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-4 md:space-x-12">
                        <div className={`checkout-step flex items-center px-4 py-2 rounded-lg ${step === 1 ? 'active' : step > 1 ? 'completed' : 'bg-gray-100 text-gray-500'}`}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm ${step === 1 ? 'bg-white/20' : step > 1 ? 'bg-white/20' : 'bg-gray-300'}`}>
                                {step > 1 ? <CheckCircle size={14} /> : '1'}
                            </span>
                            <span className="font-medium text-sm md:text-base">Shipping</span>
                        </div>
                        <div className={`checkout-step flex items-center px-4 py-2 rounded-lg ${step === 2 ? 'active' : step > 2 ? 'completed' : 'bg-gray-100 text-gray-500'}`}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm ${step === 2 ? 'bg-white/20' : 'bg-gray-300'}`}>2</span>
                            <span className="font-medium text-sm md:text-base">Payment</span>
                        </div>
                        <div className={`checkout-step flex items-center px-4 py-2 rounded-lg ${step === 3 ? 'active' : 'bg-gray-100 text-gray-500'}`}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm ${step === 3 ? 'bg-white/20' : 'bg-gray-300'}`}>3</span>
                            <span className="font-medium text-sm md:text-base">Review</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Main Form Area */}
                        <div className="lg:col-span-2">

                            {/* Error Notification */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-start gap-3">
                                    <AlertTriangle size={20} className="shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold">Something went wrong</p>
                                        <p className="text-sm">{error}</p>
                                    </div>
                                </div>
                            )}

                            {/* Step 1: Shipping */}
                            <div className={`form-section bg-white rounded-xl shadow-lg p-6 mb-8 ${step === 1 ? 'active' : 'hidden'}`}>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                            <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                                            <input type="text" name="state" value={formData.state} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">ZIP</label>
                                            <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500" />
                                        </div>
                                    </div>
                                    <button onClick={nextStep} className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors font-semibold mt-4">Continue to Payment</button>
                                </div>
                            </div>

                            {/* Step 2: Payment (Stripe) */}
                            <div className={`form-section bg-white rounded-xl shadow-lg p-6 mb-8 ${step === 2 ? 'active' : 'hidden'}`}>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
                                <div className="space-y-6">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4 flex gap-3">
                                        <Lock size={20} className="text-blue-600 shrink-0 mt-0.5" />
                                        <p className="text-sm text-blue-800">Payments are securely processed by Stripe. We do not store your credit card details.</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Credit or Debit Card</label>
                                        <div className="p-3 border border-gray-300 rounded-lg">
                                            <CardElement options={cardStyle} />
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-6">
                                        <button onClick={prevStep} className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">Back</button>
                                        <button onClick={nextStep} className="flex-1 bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors font-semibold">Review Order</button>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: Review */}
                            <div className={`form-section bg-white rounded-xl shadow-lg p-6 mb-8 ${step === 3 ? 'active' : 'hidden'}`}>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Order</h2>
                                <div className="space-y-4 mb-6">
                                    {items.map(item => (
                                        <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                            <div className="flex-1">
                                                <h4 className="font-medium text-gray-900">{item.name}</h4>
                                                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                            </div>
                                            <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <h4 className="font-bold text-gray-900 mb-2">Shipping To:</h4>
                                    <p className="text-gray-600 text-sm">{formData.firstName} {formData.lastName}</p>
                                    <p className="text-gray-600 text-sm">{formData.address}</p>
                                    <p className="text-gray-600 text-sm">{formData.city}, {formData.state} {formData.zip}</p>
                                </div>

                                <div className="flex gap-4">
                                    <button onClick={prevStep} disabled={loading} className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50">Back</button>
                                    <button
                                        onClick={handlePayment}
                                        disabled={loading}
                                        className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-lg hover:shadow-green-300 flex justify-center items-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </>
                                        ) : (
                                            `Pay $${total.toFixed(2)} & Order`
                                        )}
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span className="font-semibold text-green-600">Free</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax</span>
                                        <span className="font-semibold">${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between text-lg font-bold">
                                            <span>Total</span>
                                            <span className="text-cyan-600">${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t pt-6 text-center">
                                    <div className="flex justify-center space-x-4 text-sm text-gray-600 mb-2">
                                        <span>🔒 SSL Encrypted</span>
                                        <span>💳 Secure</span>
                                    </div>
                                    <p className="text-xs text-gray-400">Powered by Stripe</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

// Wrapper Component to Provide Stripe Context
const Checkout: React.FC = () => {
    const { items } = useCart();
    const navigate = useNavigate();

    if (items.length === 0) {
        // Redirect if empty immediately, although render logic handles it too
        // Returning null here to prevent flashing
        setTimeout(() => navigate('/cart'), 0);
        return null;
    }

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}

export default Checkout;