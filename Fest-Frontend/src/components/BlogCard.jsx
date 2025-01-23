export default function BlogCard() {
    return (
        <div className="max-w-lg overflow-hidden ">
            <div className="relative">
                <img
                    src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-[300px] object-cover rounded-3xl"
                    alt="Nissan Sedan"
                />
            </div>
            
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-2xl font-bold text-gray-800">Sedan</h1>
                    <span className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">NISSAN</span>
                </div>
                
                <h2 className="text-lg font-semibold text-gray-700 mb-3">NISSAN Passenger Car</h2>
                
                <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                    Until the introduction of corporate identity guidelines in 1981, two
                    different car names (brand names) were used: small cars were called
                    &quot;Datsun&quot; while large vehicles were named &quot;Nissan&quot;. The first NISSAN
                    model was made with equipment purchased from an American company,
                    Graham Paige Motors Corp., so the size of the vehicle was comparable
                    to the Fords and Chevrolet at that time. The first car came off the
                    line in March 1937.
                </p>
            </div>
        </div>
    );
}
