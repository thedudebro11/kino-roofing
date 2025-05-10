'use client';

import { useState } from 'react';

export default function ChatbotForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const res = await fetch('/api/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs w-full shadow-lg rounded-2xl border border-gray-300 bg-white p-4">
      <h3 className="text-lg font-semibold mb-2">💬 Let's Chat</h3>

      {status === 'sent' ? (
        <p className="text-green-600 font-medium">Thanks! We'll be in touch. ✅</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-2 border rounded resize-none"
            rows={3}
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'error' && (
            <p className="text-red-600 text-sm">Something went wrong. Try again.</p>
          )}
        </form>
      )}
    </div>
  );
}
