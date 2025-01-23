import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PolicyPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="container mx-auto max-w-4xl px-6 py-10">
                <h1 className="text-4xl font-extrabold text-indigo-700 text-center mb-12 border-b-2  pb-4">
                    Policies & Guidelines
                </h1>

                {/* Refund Policy Section */}
                <section className="bg-white shadow-lg rounded-xl p-8 mb-10 border-l-4 border-blue-500">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b">Refund Policy</h2>
                    <p className="text-sm text-gray-500 mb-6">Effective Date: <span className="font-semibold">23 Jan 2025</span></p>
                    
                    <div className="space-y-6">
                        <div className=" p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Non-Refundable Fees</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Fees for completed and published listings</li>
                                <li>Fees for subscriptions beyond 3 days of activation</li>
                                <li>Payments to vendors are subject to their individual terms</li>
                            </ul>
                        </div>
                        
                        <div className=" p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-800 mb-3">Refund Alternatives</h3>
                            <p className="text-gray-700">
                                Platform credits may be offered instead of refunds. These credits are non-transferable and valid for 12 months.
                            </p>
                        </div>
                        
                        <div className=" p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact for Refunds</h3>
                            <p className="text-gray-700">
                                Email <span className="font-medium text-indigo-600">[insert support email]</span> for refund inquiries. Requests evaluated case-by-case.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy Section */}
                <section className="bg-white shadow-lg rounded-xl p-8 mb-10 border-l-4 border-green-500">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b">Privacy Policy</h2>
                    <p className="text-sm text-gray-500 mb-6">Effective Date: <span className="font-semibold">23 Jan 2025</span></p>
                    
                    <div className="space-y-6">
                        <div className=" p-5 rounded-lg">
                            <h3 className="</div>text-xl font-semibold text-purple-800 mb-3">Information We Collect</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li><strong>Personal Information:</strong> Name, email, contact details</li>
                                <li><strong>Non-Personal Data:</strong> Browser, device, and IP information</li>
                                <li><strong>Analytics:</strong> User behavior and platform interactions</li>
                            </ul>
                        </div>
                        
                        <div className=" p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-800 mb-3">Data Usage</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Improve platform features</li>
                                <li>Facilitate secure transactions</li>
                                <li>Personalize marketing content</li>
                                <li>Detect potential fraud</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Disclaimer Section */}
                <section className="bg-white shadow-lg rounded-xl p-8 mb-10 border-l-4 border-red-500">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b">Disclaimer</h2>
                    <p className="text-sm text-gray-500 mb-6">Effective Date: <span className="font-semibold">23 Jan 2025</span></p>
                    
                    <div className="space-y-6">
                        <div className=" p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-red-800 mb-3">Platform Role</h3>
                            <p className="text-gray-700">
                                Fiesta is a marketplace connecting wedding service consumers with vendors. We do not directly provide services or guarantee vendor offerings.
                            </p>
                        </div>
                        
                        <div className=" p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-orange-800 mb-3">Limitation of Liability</h3>
                            <p className="text-gray-700">
                                Fiesta is not liable for disputes or damages from vendor-consumer interactions. Users agree to use the platform at their own risk.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Terms of Service Section */}
                <section className="bg-white shadow-lg rounded-xl p-8 mb-10 border-l-4 border-indigo-500">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b">Terms of Service</h2>
                    <p className="text-sm text-gray-500 mb-6">Effective Date: <span className="font-semibold">23 Jan 2025</span></p>
                    
                    <div className="space-y-6">
                        <div className=" p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-indigo-800 mb-3">User Conduct</h3>
                            <p className="text-gray-700">
                                Users must adhere to applicable laws and refrain from engaging in fraudulent activities or posting inappropriate content.
                            </p>
                        </div>
                        
                        <div className=" p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Termination</h3>
                            <p className="text-gray-700">
                                We reserve the right to suspend or terminate accounts violating these terms or engaging in harmful behavior.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Cookie Policy Section */}
                <section className="bg-white shadow-lg rounded-xl p-8 mb-10 border-l-4 border-yellow-500">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b">Cookie Policy</h2>
                    <p className="text-sm text-gray-500 mb-6">Effective Date: <span className="font-semibold">23 Jan 2025</span></p>
                    
                    <div className="space-y-6">
                        <div className=" p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-800 mb-3">Cookies We Use</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li><strong>Essential Cookies:</strong> Necessary for platform functionality</li>
                                <li><strong>Analytics Cookies:</strong> Monitor site performance</li>
                                <li><strong>Marketing Cookies:</strong> Tailor advertising content</li>
                            </ul>
                        </div>
                        
                        <div className=" p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cookie Preferences</h3>
                            <p className="text-gray-700">
                                Users can manage cookie settings through their browser. Disabling certain cookies may affect platform performance.
                            </p>
                        </div>
                    </div>
                </section>

                {/* User Responsibilities Section */}
                <section className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-teal-500">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b">User Responsibilities</h2>
                    <p className="text-sm text-gray-500 mb-6">Effective Date: <span className="font-semibold">23 Jan 2025</span></p>
                    
                    <div className="space-y-6">
                        <div className=" p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-teal-800 mb-3">Account Security</h3>
                            <p className="text-gray-700">
                                Users are responsible for maintaining the confidentiality of their login credentials and for all activities under their account.
                            </p>
                        </div>
                        
                        <div className=" p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-teal-800 mb-3">Content Guidelines</h3>
                            <p className="text-gray-700">
                                Content shared on the platform must not violate copyright laws, include hate speech, or promote illegal activities.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
