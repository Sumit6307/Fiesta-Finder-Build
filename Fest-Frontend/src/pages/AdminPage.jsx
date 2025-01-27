import { useState } from 'react';
import {
  BarChart,
  Building2,
  Calendar,
  LogOut,
  Menu,
  X,
  DollarSign,
  Users,
  TrendingUp,
  Edit,
  Trash
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const mockData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 }
];

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl border border-gray-100 shadow-sm ${className}`}>
    {children}
  </div>
);

export default function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isEditing, setIsEditing] = useState(null);

  // Demo venue data
  const [venues, setVenues] = useState([
    { id: 1, name: 'Grand Ballroom', price: '999', capacity: '500', description: 'Elegant venue for large events' },
    { id: 2, name: 'Garden Terrace', price: '599', capacity: '200', description: 'Beautiful outdoor venue' },
    { id: 3, name: 'Conference Hall', price: '399', capacity: '100', description: 'Perfect for corporate events' }
  ]);

  const [newVenue, setNewVenue] = useState({
    name: '',
    price: '',
    capacity: '',
    description: ''
  });

  const menuItems = [
    { id: 'dashboard', icon: <BarChart size={20} />, label: 'Dashboard' },
    { id: 'venues', icon: <Building2 size={20} />, label: 'Venues' },
    { id: 'bookings', icon: <Calendar size={20} />, label: 'Bookings' }
  ];

  const handleAddVenue = (e) => {
    e.preventDefault();
    if (!newVenue.name || !newVenue.price) return;
    
    const newId = venues.length ? Math.max(...venues.map(v => v.id)) + 1 : 1;
    setVenues([...venues, { ...newVenue, id: newId }]);
    setNewVenue({ name: '', price: '', capacity: '', description: '' });
  };

  const handleEditVenue = (id) => {
    const venue = venues.find(v => v.id === id);
    setIsEditing(id);
    setNewVenue(venue);
  };

  const handleUpdateVenue = (e) => {
    e.preventDefault();
    setVenues(venues.map(v => v.id === isEditing ? newVenue : v));
    setIsEditing(null);
    setNewVenue({ name: '', price: '', capacity: '', description: '' });
  };

  const handleDeleteVenue = (id) => {
    if (window.confirm('Are you sure you want to delete this venue?')) {
      setVenues(venues.filter(v => v.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          fixed lg:static lg:translate-x-0 z-50
          w-64 h-screen transition-transform duration-300 ease-in-out
          bg-white border-r
        `}>
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">VenueAdmin</h2>
          </div>

          <nav className="mt-6 px-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg
                  transition-all duration-200
                  ${activeTab === item.id 
                    ? 'bg-gray-100 text-gray-900 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50'}
                `}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}

            <button className="w-full flex items-center gap-3 px-4 py-3 mt-8 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Building2 className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Venues</p>
                      <p className="text-2xl font-bold">{venues.length}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <DollarSign className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Revenue</p>
                      <p className="text-2xl font-bold">$45,231</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Users className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Bookings</p>
                      <p className="text-2xl font-bold">128</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <TrendingUp className="text-yellow-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Growth</p>
                      <p className="text-2xl font-bold">+24.5%</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'venues' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  {isEditing ? 'Edit Venue' : 'Add New Venue'}
                </h2>
                <form onSubmit={isEditing ? handleUpdateVenue : handleAddVenue} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={newVenue.name}
                      onChange={(e) => setNewVenue({ ...newVenue, name: e.target.value })}
                      placeholder="Venue Name"
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      value={newVenue.price}
                      onChange={(e) => setNewVenue({ ...newVenue, price: e.target.value })}
                      placeholder="Price per day"
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      value={newVenue.capacity}
                      onChange={(e) => setNewVenue({ ...newVenue, capacity: e.target.value })}
                      placeholder="Capacity"
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      value={newVenue.description}
                      onChange={(e) => setNewVenue({ ...newVenue, description: e.target.value })}
                      placeholder="Description"
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      {isEditing ? 'Update Venue' : 'Add Venue'}
                    </button>
                    {isEditing && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsEditing(null);
                          setNewVenue({ name: '', price: '', capacity: '', description: '' });
                        }}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Venue List</h2>
                <div className="space-y-4">
                  {venues.map((venue) => (
                    <div
                      key={venue.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <h3 className="font-medium">{venue.name}</h3>
                        <p className="text-sm text-gray-600">
                          ${venue.price}/day • Capacity: {venue.capacity}
                        </p>
                        <p className="text-sm text-gray-500">{venue.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditVenue(venue.id)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        >
                          <Edit size={20} />
                        </button>
                        <button
                          onClick={() => handleDeleteVenue(venue.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <Trash size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((booking) => (
                    <div key={booking} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Booking #{booking}</p>
                        <p className="text-sm text-gray-600">Venue: {venues[0]?.name}</p>
                      </div>
                      <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                        Confirmed
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}