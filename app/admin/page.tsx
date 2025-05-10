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
    note?: string;
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
    const [editingNotes, setEditingNotes] = useState<Record<number, string>>({});
    const [saveStatus, setSaveStatus] = useState<Record<number, 'saved' | 'saving' | ''>>({});




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
                        <th className="p-2 text-left">Note</th>

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
                                <td className="p-2">
                                    <textarea
                                        value={editingNotes[s.id] ?? s.note ?? ''}
                                        onChange={(e) =>
                                            setEditingNotes((prev) => ({ ...prev, [s.id]: e.target.value }))
                                        }
                                        onBlur={async () => {
                                            setSaveStatus((prev) => ({ ...prev, [s.id]: 'saving' }));

                                            await fetch('/api/submissions/note', {
                                                method: 'POST',
                                                body: JSON.stringify({ id: s.id, note: editingNotes[s.id] }),
                                                headers: { 'Content-Type': 'application/json' },
                                            });

                                            setSubmissions((prev) =>
                                                prev.map((sub) =>
                                                    sub.id === s.id ? { ...sub, note: editingNotes[s.id] } : sub
                                                )
                                            );

                                            setSaveStatus((prev) => ({ ...prev, [s.id]: 'saved' }));

                                            setTimeout(() => {
                                                setSaveStatus((prev) => ({ ...prev, [s.id]: '' }));
                                            }, 2000);
                                        }}
                                        className="w-full p-1 border rounded resize-none"
                                        rows={2}
                                    />
                                    {saveStatus[s.id] === 'saving' && (
                                        <p className="text-sm text-blue-500 mt-1">Saving...</p>
                                    )}
                                    {saveStatus[s.id] === 'saved' && (
                                        <p className="text-sm text-green-600 mt-1">Saved ✅</p>
                                    )}

                                </td>

                            </tr>
                        ))}
                </tbody>


            </table>
        </div>
    );
}
