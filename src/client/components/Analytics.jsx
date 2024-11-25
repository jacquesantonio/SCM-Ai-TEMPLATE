import { useState } from 'react';
import { 
  ArrowUpIcon, 
  ArrowDownIcon,
  DocumentArrowDownIcon,
  FunnelIcon,
  MapIcon,
  ChartBarIcon,
  TruckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import MetricsGrid from './analytics/MetricsGrid';
import PerformanceCharts from './analytics/PerformanceCharts';
import BottlenecksPanel from './analytics/BottlenecksPanel';
import GeographicMap from './analytics/GeographicMap';
import InsightsPanel from './analytics/InsightsPanel';
import DownloadReports from './analytics/DownloadReports';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('week');
  const [category, setCategory] = useState('all');

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Supply Chain Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor performance, spot trends, and optimize your supply chain with real-time insights
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="day">Last 24 Hours</option>
            <option value="week">Last 7 Days</option>
            <option value="month">Last 30 Days</option>
            <option value="quarter">Last Quarter</option>
            <option value="custom">Custom Range</option>
          </select>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
            Download Report
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
        <FunnelIcon className="h-5 w-5 text-gray-400" />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="raw">Raw Materials</option>
          <option value="finished">Finished Goods</option>
          <option value="packaging">Packaging</option>
        </select>
        {/* Add more filters as needed */}
      </div>

      {/* Metrics Grid */}
      <MetricsGrid timeRange={timeRange} category={category} />

      {/* Performance Charts */}
      <PerformanceCharts timeRange={timeRange} category={category} />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <BottlenecksPanel />
        <GeographicMap />
      </div>

      {/* Insights and Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <InsightsPanel />
        <DownloadReports />
      </div>
    </div>
  );
}