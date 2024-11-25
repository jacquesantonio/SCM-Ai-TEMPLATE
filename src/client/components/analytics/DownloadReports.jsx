import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const reports = [
  {
    id: 1,
    name: 'Supply Chain Performance Report',
    description: 'Complete overview of KPIs and metrics',
    format: 'PDF',
    size: '2.4 MB'
  },
  {
    id: 2,
    name: 'Inventory Analysis',
    description: 'Detailed stock levels and turnover rates',
    format: 'Excel',
    size: '1.8 MB'
  },
  {
    id: 3,
    name: 'Supplier Performance Report',
    description: 'Delivery times and quality metrics',
    format: 'PDF',
    size: '1.2 MB'
  }
];

export default function DownloadReports() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Download Reports</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div>
                <h3 className="text-sm font-medium text-gray-900">{report.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{report.description}</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{report.format}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{report.size}</span>
                </div>
              </div>
              <button className="flex items-center justify-center p-2 text-blue-600 hover:text-blue-500">
                <DocumentArrowDownIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}