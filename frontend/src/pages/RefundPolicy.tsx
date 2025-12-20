import React from 'react';
import { RefreshCcw, CheckCircle, XCircle } from 'lucide-react';

const RefundPolicy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center font-serif">Refund & Return Policy</h1>

                <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="lead text-xl text-center mb-12">
                        Your satisfaction is our priority. If you are not completely satisfied with your purchase,
                        we are here to help.
                    </p>

                    <div className="space-y-12">

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">30-Day Money Back Guarantee</h2>
                            <p>
                                We offer a <strong>30-day return policy</strong>. You have 30 days after receiving your item to request a return.
                                To be eligible for a return, your item must be in the same condition that you received it, unused, and in its original packaging.
                            </p>
                        </section>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <div className="flex items-center gap-2 mb-4">
                                    <CheckCircle className="text-green-600" />
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Returnable Items</h3>
                                </div>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Unopened supplements</li>
                                    <li>Defective or damaged items</li>
                                    <li>Incorrect items received</li>
                                    <li>Items with broken safety seals (upon arrival)</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <div className="flex items-center gap-2 mb-4">
                                    <XCircle className="text-red-600" />
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Non-Returnable Items</h3>
                                </div>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Opened pharmaceutical products</li>
                                    <li>Perishable goods</li>
                                    <li>Gift cards</li>
                                    <li>Downloadable software products</li>
                                </ul>
                            </div>
                        </div>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <RefreshCcw className="text-cyan-600" /> Refunds Process
                            </h2>
                            <p>
                                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item.
                                We will also notify you of the approval or rejection of your refund.
                            </p>
                            <p className="mt-4">
                                If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or
                                original method of payment, within <strong>5-10 business days</strong>.
                            </p>
                        </section>

                        <section className="bg-gray-50 p-8 rounded-xl">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Late or Missing Refunds</h2>
                            <p>If you haven’t received a refund yet, first check your bank account again.</p>
                            <p>Then contact your credit card company, it may take some time before your refund is officially posted.</p>
                            <p>Next contact your bank. There is often some processing time before a refund is posted.</p>
                            <p className="mt-4 font-semibold">
                                If you’ve done all of this and you still have not received your refund yet, please contact us at joe.tippens@email.com.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;