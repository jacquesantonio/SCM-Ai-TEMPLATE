import { Routes, Route } from 'react-router-dom';
import { BellIcon } from '@heroicons/react/24/outline';
import Sidebar from '../components/Sidebar';
import Overview from '../components/Overview';
import Analytics from '../components/Analytics';
import Inventory from '../components/Inventory';
import Suppliers from '../components/Suppliers';
import Reports from '../components/Reports';
import Orders from '../components/Orders';
import Pricing from './Pricing';
import Settings from '../components/Settings';
import Profile from '../components/Profile';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main Content */}
      <div className="pl-64">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-8">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded">⌘K</kbd>
                </div>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <BellIcon className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="reports" element={<Reports />} />
            <Route path="orders/*" element={<Orders />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}