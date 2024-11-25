import { useState } from 'react';
import { 
  ArrowUpIcon, 
  ArrowDownIcon,
  TruckIcon,
  CubeIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import MetricCard from './MetricCard';
import ActivityFeed from './ActivityFeed';
import InventoryStatus from './InventoryStatus';
import OrderPipeline from './OrderPipeline';
import SupplierTable from './SupplierTable';
import RecommendationsPanel from './RecommendationsPanel';

const metrics = [
  {
    id: 1,
    name: 'Total Orders',
    value: '2,345',
    change: '+12.3%',
    changeType: 'increase',
    icon: ShoppingCartIcon
  },
  {
    id: 2,
    name: 'Fulfillment Rate',
    value: '94.5%',
    change: '+2.4%',
    changeType: 'increase',
    icon: TruckIcon
  },
  {
    id: 3,
    name: 'Low Stock Items',
    value: '12',
    change: '-3',
    changeType: 'decrease',
    icon: CubeIcon
  },
  {
    id: 4,
    name: 'Delayed Shipments',
    value: '3',
    change: '+1',
    changeType: 'increase',
    icon: ClockIcon,
    alert: true
  }
];

const demandData = [
  { date: '2023-11-01', actual: 4000, forecast: 4400, stock: 6000 },
  { date: '2023-11-02', actual: 3000, forecast: 3200, stock: 5500 },
  { date: '2023-11-03', actual: 2000, forecast: 2400, stock: 5000 },
  { date: '2023-11-04', actual: 2780, forecast: 2900, stock: 4800 },
  { date: '2023-11-05', actual: 1890, forecast: 2100, stock: 4200 },
  { date: '2023-11-06', actual: 2390, forecast: 2500, stock: 4000 },
  { date: '2023-11-07', actual: 3490, forecast: 3200, stock: 3800 },
];

export default function Overview() {
  const [timeRange, setTimeRange] = useState('week');

  return (
    <div>
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Your Supply Chain at a Glance</h1>
            <p className="mt-1 text-sm text-gray-500">
              Monitor your supply chain performance, key metrics, and recent updates in real-time
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Create New Order
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            name={metric.name}
            value={metric.value}
            change={metric.change}
            changeType={metric.changeType}
            icon={metric.icon}
            alert={metric.alert}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Demand Forecast Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Demand vs Forecast</h2>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="ml-4 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="day">Last 24 Hours</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={demandData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="actual" stroke="#4F46E5" name="Actual Demand" />
                <Line type="monotone" dataKey="forecast" stroke="#10B981" name="Forecast" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Inventory Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Inventory Health</h2>
          <InventoryStatus />
        </div>
      </div>

      {/* Order Pipeline and Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <OrderPipeline />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>

      {/* Supplier Performance and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <SupplierTable />
        </div>
        <div>
          <RecommendationsPanel />
        </div>
      </div>
    </div>
  );
}