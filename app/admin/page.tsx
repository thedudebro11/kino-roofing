// app/admin/page.tsx
'use client';

import { useEffect, useState } from 'react';

type Submission = {
    id: number;
    name: string;
    email: string;
    message: string;
    createdAt: string;
    tag?: string;
};


export default function AdminDashboard() {
    const [submissions, setSubmissions] = useState<Submission[]>([]);

    useEffect(() => {
        fetch('/api/submissions')
            .then(res => res.json())
            .then(data => setSubmissions(data));
    }, []);
    const handleTagChange = async (id: number, newTag: string) => {
        await fetch('/api/submissions/tag', {
            method: 'POST',
            body: JSON.stringify({ id, tag: newTag }),
            headers: { 'Content-Type': 'application/json' },
        });

        setSubmissions((prev) =>
            prev.map((s) => (s.id === id ? { ...s, tag: newTag } : s))
        );
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [filterTag, setFilterTag] = useState('all');



    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by name, email, or message"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-2/3 p-2 border rounded shadow"
                />

                <select
                    value={filterTag}
                    onChange={(e) => setFilterTag(e.target.value)}
                    className="w-full sm:w-40 p-2 border rounded shadow"
                >
                    <option value="all">All Leads</option>
                    <option value="hot">🔥 Hot</option>
                    <option value="warm">🌤 Warm</option>
                    <option value="cold">❄️ Cold</option>
                    <option value="unassigned">🚫 Unassigned</option>
                </select>
            </div>



            <table className="w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Email</th>
                        <th className="p-2 text-left">Message</th>
                        <th className="p-2 text-left">Date</th>
                        <th className="p-2 text-left">Lead Type</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions
                        .filter((s) =>
                            [s.name, s.email, s.message].some((field) =>
                                field.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                        )
                        .filter((s) => filterTag === 'all' || s.tag === filterTag)
                        .map((s) => (
                            <tr key={s.id} className="border-t border-gray-200">
                                <td className="p-2">{s.name}</td>
                                <td className="p-2">{s.email}</td>
                                <td className="p-2">{s.message}</td>
                                <td className="p-2">{new Date(s.createdAt).toLocaleString()}</td>
                                <td className="p-2">
                                    <select
                                        value={s.tag ?? 'unassigned'}
                                        onChange={(e) => handleTagChange(s.id, e.target.value)}
                                        className="border rounded px-2 py-1"
                                    >
                                        <option value="unassigned">Unassigned</option>
                                        <option value="hot">🔥 Hot</option>
                                        <option value="warm">🌤 Warm</option>
                                        <option value="cold">❄️ Cold</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                </tbody>


            </table>
        </div>
    );
}
