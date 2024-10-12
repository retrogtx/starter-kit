'use client';

import { useState } from 'react';

export default function EmailWaitlist() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setMessage('Thank you for joining our waitlist!');
        setEmail('');
      } else {
        const data = await response.json();
        setMessage(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-md w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Join Waitlist
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
