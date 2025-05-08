// app/admin/page.tsx
'use client';

import { useEffect, useState } from 'react';

type Submission = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    fetch('/api/submissions')
      .then(res => res.json())
      .then(data => setSubmissions(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Message</th>
            <th className="p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((s) => (
            <tr key={s.id} className="border-t border-gray-200">
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.email}</td>
              <td className="p-2">{s.message}</td>
              <td className="p-2">{new Date(s.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
