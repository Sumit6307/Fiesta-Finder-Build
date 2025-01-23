export default function PrivacyPolicy() {
    return (
        <div className="bg-white">
            <div className="container mx-auto max-w-4xl px-4 py-12">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our commitment to protecting your personal information and maintaining data privacy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                            Data Collection
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="font-semibold">Personal Information</h4>
                                    <p className="text-sm text-gray-600">Collection of name, email, contact details, and account information.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="font-semibold">Technical Data</h4>
                                    <p className="text-sm text-gray-600">Collection of IP address, device type, browser information.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                            Data Usage
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="font-semibold">Service Improvement</h4>
                                    <p className="text-sm text-gray-600">Analyzing user data to enhance platform features and user experience.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="font-semibold">Communication</h4>
                                    <p className="text-sm text-gray-600">Sending service updates, notifications, and personalized content.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        User Rights
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We guarantee your right to access, correct, and delete your personal information at any time.
                    </p>
                    <ul className="space-y-3 text-gray-600 pl-5 list-disc">
                        <li>Right to access personal data</li>
                        <li>Option to request data deletion</li>
                        <li>Ability to correct inaccurate information</li>
                        <li>Opt-out of marketing communications</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}