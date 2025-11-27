
import React from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface DashboardProps {
  onViewChange: (view: any) => void;
}

const data = [
  { name: 'Mon', success: 400, failed: 20 },
  { name: 'Tue', success: 300, failed: 15 },
  { name: 'Wed', success: 550, failed: 35 },
  { name: 'Thu', success: 480, failed: 10 },
  { name: 'Fri', success: 700, failed: 45 },
  { name: 'Sat', success: 200, failed: 5 },
  { name: 'Sun', success: 150, failed: 2 },
];

export const Dashboard: React.FC<DashboardProps> = ({ onViewChange }) => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Overview</h2>
        <p className="text-slate-500">System status and broadcast metrics.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Total Accounts', value: '842', icon: Users, color: 'text-blue-500' },
          { label: 'Active Sessions', value: '815', icon: CheckCircle2, color: 'text-emerald-500' },
          { label: 'Failed Tokens', value: '27', icon: AlertCircle, color: 'text-rose-500' },
          { label: 'Posts This Week', value: '3.2k', icon: ArrowUpRight, color: 'text-violet-500' },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
                </div>
                <div className={`p-2 rounded-lg bg-slate-50 ${stat.color}`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-slate-200 h-72 md:h-96">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Broadcast Performance</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={30} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
              cursor={{ fill: '#f1f5f9' }}
            />
            <Bar dataKey="success" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Successful Posts" />
            <Bar dataKey="failed" fill="#f43f5e" radius={[4, 4, 0, 0]} name="Failed Posts" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-end">
         <button 
           onClick={() => onViewChange('create_post')}
           className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm text-center"
         >
           New Campaign
         </button>
      </div>
    </div>
  );
};
