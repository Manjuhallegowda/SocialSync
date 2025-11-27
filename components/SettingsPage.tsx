
import React from 'react';
import { Server, Database, Cloud, ShieldCheck } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
          <p className="text-slate-500">System configuration and environment status.</p>
        </div>
      </header>

      <div className="grid gap-6">
        
        {/* System Status Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Server size={20} className="text-blue-500" />
            System Status
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-3">
              <Database className="text-emerald-500 mt-1" size={20} />
              <div>
                <p className="font-medium text-slate-900">Cloudflare D1 Database</p>
                <p className="text-xs text-slate-500">Status: Connected</p>
                <p className="text-xs text-slate-500 mt-1">Region: Auto (Smart Placement)</p>
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-3">
              <Cloud className="text-orange-500 mt-1" size={20} />
              <div>
                <p className="font-medium text-slate-900">Cloudflare R2 Storage</p>
                <p className="text-xs text-slate-500">Status: Operational</p>
                <p className="text-xs text-slate-500 mt-1">Bucket: social-sync-assets</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-3">
              <ShieldCheck className="text-indigo-500 mt-1" size={20} />
              <div>
                <p className="font-medium text-slate-900">Meta Graph API</p>
                <p className="text-xs text-slate-500">Version: v19.0</p>
                <p className="text-xs text-slate-500 mt-1">App ID: ************8492</p>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Info */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Environment Configuration</h3>
          <p className="text-sm text-slate-600 mb-4">
            This application uses server-side environment variables for security. To update credentials, please deploy a new version of the Worker.
          </p>
          
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 bg-slate-50">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Variable</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  'META_APP_ID', 
                  'META_APP_SECRET', 
                  'META_REDIRECT_URI',
                  'R2_ACCESS_KEY_ID',
                  'R2_SECRET_ACCESS_KEY'
                ].map((key) => (
                  <tr key={key}>
                    <td className="px-6 py-3 text-sm font-mono text-slate-600">{key}</td>
                    <td className="px-6 py-3 text-sm text-emerald-600 font-medium flex items-center gap-1">
                      <ShieldCheck size={14} /> Set
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
