
export default function RefundPolicy() {
    return (
        <div className="bg-white">
            <div className="container mx-auto max-w-4xl px-4 py-12">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Refund Policy</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our transparent refund process ensures fair and clear guidelines for all transactions on our platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                            Refund Eligibility
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="font-semibold">Timeframe</h4>
                                    <p className="text-sm text-gray-600">Refund requests must be submitted within 7 business days of the original transaction.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="font-semibold">Service Conditions</h4>
                                    <p className="text-sm text-gray-600">Refunds applicable only for services not yet commenced or partially completed.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                            Refund Processing
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="font-semibold">Processing Time</h4>
                                    <p className="text-sm text-gray-600">Refunds typically processed within 5-10 business days after approval.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="font-semibold">Refund Method</h4>
                                    <p className="text-sm text-gray-600">Refunds credited to the original payment method or platform credits.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Refund Request Process
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        To initiate a refund, please contact our support team with your transaction details and reason for the refund request.
                    </p>
                    <ul className="space-y-3 text-gray-600 pl-5 list-disc">
                        <li>Provide transaction ID</li>
                        <li>Specify reason for refund</li>
                        <li>Attach supporting documentation if applicable</li>
                        <li>Await review from our support team</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}