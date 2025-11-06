import React from 'react';
import { Gamepad2, History, User } from 'lucide-react';

export default function Navbar({ onNavigate, active }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('topup')}>
          <div className="p-2 rounded-lg bg-indigo-600 text-white">
            <Gamepad2 size={20} />
          </div>
          <span className="font-semibold text-lg tracking-tight">TopUpHub</span>
        </div>
        <nav className="flex items-center gap-1 text-sm">
          <button
            onClick={() => onNavigate('topup')}
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              active === 'topup' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            Top Up
          </button>
          <button
            onClick={() => onNavigate('history')}
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              active === 'history' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            <span className="inline-flex items-center gap-2"><History size={16}/> Riwayat</span>
          </button>
          <button
            onClick={() => onNavigate('auth')}
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              active === 'auth' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            <span className="inline-flex items-center gap-2"><User size={16}/> Masuk</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
