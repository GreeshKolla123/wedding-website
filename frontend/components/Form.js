import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-4">
      <label className="block text-lg font-bold mb-2">Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-2 mb-4" />
      <label className="block text-lg font-bold mb-2">Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 mb-4" />
      <label className="block text-lg font-bold mb-2">Message:</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full p-2 mb-4" />
      <button type="submit" className="bg-primary py-2 px-4 text-white rounded-md">Submit</button>
    </form>
  );
}