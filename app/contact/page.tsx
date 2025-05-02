'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };
    

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus('✅ Thanks for reaching out! We’ll be in touch soon.');
      form.reset();
    } else {
      setStatus('❌ Oops, something went wrong. Please try again.');
    }
  };


  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Request a Free Roof Inspection
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Fill out the form below and a Kino Roofing team member will contact you shortly.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-md rounded-md">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            name="name"
            required
            className="w-full border border-gray-300 rounded p-2"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded p-2"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            required
            className="w-full border border-gray-300 rounded p-2 h-32"
            placeholder="Tell us about your roofing needs..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          Submit
        </button>
        {status && (
          <p className="text-center mt-4 text-green-600 font-medium">{status}</p>
        )}
      </form>
    </main>
  );
}
