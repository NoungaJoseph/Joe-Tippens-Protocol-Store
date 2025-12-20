import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, AlertTriangle, Lock } from 'lucide-react';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { stripePromise } from '../lib/stripe';

// Inner Component to handle Stripe PaymentElement
const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
    const { items, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const tax = cartTotal * 0.08;
    const total = cartTotal + tax;

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);
        setError(null);

        const { error: submitError } = await elements.submit();
        if (submitError) {
            setError(submitError.message || "An error occurred");
            setLoading(false);
            return;
        }

        const { error: confirmError } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${window.location.origin}/#/payment-status`,
            },
        });

        if (confirmError) {
            setError(confirmError.message || "An error occurred during payment confirmation");
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handlePayment} className="flex flex-col gap-8">
            <div className="payment-element-container min-h-[300px]">
                <PaymentElement options={{ layout: 'tabs' }} />
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3">
                    <AlertTriangle size={20} className="shrink-0 mt-0.5" />
                    <p className="text-sm">{error}</p>
                </div>
            )}

            <div className="space-y-4">
                <button
                    type="submit"
                    disabled={!stripe || loading}
                    className="w-full bg-emerald-600 text-white py-4 px-6 rounded-xl hover:bg-emerald-700 transition-all font-bold shadow-lg hover:shadow-emerald-200 flex justify-center items-center gap-2 text-lg active:scale-[0.98]"
                >
                    {loading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                        </>
                    ) : (
                        `Complete Secure Payment - $${total.toFixed(2)}`
                    )}
                </button>

                <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
                    <Lock size={12} className="text-emerald-500" />
                    <span>256-bit Secure Encryption by Stripe</span>
                </div>
            </div>
        </form>
    );
};

// Main Component
const Checkout: React.FC = () => {
    const { items, cartTotal } = useCart();
    const navigate = useNavigate();
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', address: '', city: '', state: '', zip: ''
    });
    const [step, setStep] = useState(1);
    const [error, setError] = useState<string | null>(null);

    const tax = cartTotal * 0.08;
    const total = cartTotal + tax;

    useEffect(() => {
        if (items.length === 0) {
            navigate('/cart');
            return;
        }

        if (step === 2 && !clientSecret) {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4242';
            fetch(`${apiUrl}/create-payment-intent`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: total, items, email: formData.email }),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.clientSecret) {
                        setClientSecret(data.clientSecret);
                    } else {
                        setError("Failed to initialize payment. Please try again.");
                    }
                })
                .catch(err => {
                    console.error(err);
                    setError("Connection error. Please check if the backend is running.");
                });
        }
    }, [items, navigate, step, clientSecret, total, formData.email]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (!formData.firstName || !formData.email || !formData.address) {
            setError("Please fill in all required shipping fields.");
            return;
        }
        setError(null);
        setStep(2);
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    <p className="text-lg lg:text-xl text-blue-100 uppercase tracking-widest text-sm font-bold">100% Encrypted & Secure</p>
                </div>
            </section>

            {/* Progress Steps */}
            <section className="py-6 bg-white border-b shadow-sm sticky top-16 z-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-12">
                        <div className={`flex items-center gap-2 ${step === 1 ? 'text-emerald-600' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 1 ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}>1</div>
                            <span className="font-bold">Shipping</span>
                        </div>
                        <div className={`flex items-center gap-2 ${step === 2 ? 'text-emerald-600' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 2 ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}>2</div>
                            <span className="font-bold">Payment</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 pb-24 lg:pb-32">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                        <div className="lg:col-span-2 space-y-6">
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-start gap-3 shadow-sm">
                                    <AlertTriangle size={20} className="shrink-0 mt-0.5" />
                                    <p>{error}</p>
                                </div>
                            )}

                            {step === 1 ? (
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                                        <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm">1</div>
                                        Shipping Information
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">First Name *</label>
                                            <input name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Last Name</label>
                                            <input name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none" placeholder="Doe" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address *</label>
                                            <input name="email" type="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none" placeholder="john@example.com" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Shipping Address *</label>
                                            <input name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none" placeholder="123 Wellness Way" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">City</label>
                                            <input name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none" placeholder="Healthville" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">State</label>
                                                <input name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none" placeholder="CA" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">ZIP</label>
                                                <input name="zip" value={formData.zip} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none" placeholder="12345" />
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={nextStep} className="w-full bg-emerald-600 text-white py-4 rounded-xl mt-10 font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200 active:scale-[0.98]">
                                        Continue to Secure Payment
                                    </button>
                                </div>
                            ) : (
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                    <div className="flex justify-between items-center mb-8">
                                        <h2 className="text-2xl font-bold flex items-center gap-2">
                                            <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm">2</div>
                                            Secure Payment
                                        </h2>
                                        <button onClick={() => setStep(1)} className="text-emerald-600 font-bold text-sm hover:underline">Edit Shipping</button>
                                    </div>
                                    {clientSecret ? (
                                        <Elements stripe={stripePromise} options={{ clientSecret }}>
                                            <CheckoutForm clientSecret={clientSecret} />
                                        </Elements>
                                    ) : (
                                        <div className="py-20 text-center">
                                            <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                            <p className="text-gray-500 font-bold">Initializing secure checkout...</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 flex flex-col gap-6 lg:sticky lg:top-32">
                                <h3 className="text-xl font-bold">Order Summary</h3>
                                <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                                    {items.map(item => (
                                        <div key={item.id} className="flex gap-4 items-center">
                                            <img src={item.image} className="w-14 h-14 object-cover rounded-lg shadow-sm" alt={item.name} />
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-gray-900 truncate text-sm">{item.name}</p>
                                                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                            </div>
                                            <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-dashed pt-4 space-y-3">
                                    <div className="flex justify-between text-gray-600 text-sm">
                                        <span>Subtotal</span>
                                        <span className="font-bold text-gray-900">${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 text-sm">
                                        <span>Shipping</span>
                                        <span className="text-emerald-600 font-bold uppercase text-xs tracking-widest">Free</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 text-sm">
                                        <span>Tax (8%)</span>
                                        <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t pt-4 flex justify-between items-center">
                                        <span className="text-lg font-bold">Total</span>
                                        <span className="text-2xl font-black text-emerald-600">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl space-y-2 border border-gray-100">
                                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                        <Lock size={12} className="text-emerald-500" /> Secure Encryption
                                    </div>
                                    <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
                                        Your payment is processed via Stripe's 256-bit encrypted gateway.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Checkout;