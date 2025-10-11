'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white sticky top-0 z-50">
      <h1 className="text-xl font-bold">Qiskit Fall Fest PNC</h1>
      <ul className="flex gap-6 items-center">
        {/* Dropdown Menu */}
        <li className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-purple-400 font-semibold"
          >
            Event ▾
          </button>
          {isOpen && (
            <ul className="absolute left-0 flex flex-col bg-gray-900 mt-2 rounded shadow-lg p-4 space-y-2 z-10 min-w-[180px]">
              <li><a href="#event" className="block text-gray-300 hover:text-purple-400">About</a></li>
              <li><a href="#whyjoin" className="block text-gray-300 hover:text-purple-400">Why Join</a></li>
              <li><a href="#schedule" className="block text-gray-300 hover:text-purple-400">Schedule</a></li>
              <li><a href="#Partner" className="block text-gray-300 hover:text-purple-400">Partner</a></li>
              <li><a href="#FAQ" className="block text-gray-300 hover:text-purple-400">FAQ</a></li>
              <li><a href="#speakers" className="block text-gray-300 hover:text-purple-400">Speakers</a></li>
              <li><a href="#sponsors" className="block text-gray-300 hover:text-purple-400">Sponsors</a></li>
              <li><a href="#venue" className="block text-gray-300 hover:text-purple-400">Venue</a></li>
            </ul>
          )}
        </li>
        {/* Separate Links */}
        <li><a href="#contact" className="hover:text-purple-400 font-semibold">Contact</a></li>
        <li><a href="#register" className="hover:text-purple-400 font-semibold">Register</a></li>
      </ul>
    </nav>
  );
}
