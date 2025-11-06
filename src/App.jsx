import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopUpForm from './components/TopUpForm';
import Auth from './components/Auth';
import TransactionHistory from './components/TransactionHistory';

export default function App() {
  const [page, setPage] = useState('topup');
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState(() => {
    const raw = localStorage.getItem('orders');
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleCreateOrder = (order) => {
    const enriched = {
      ...order,
      user: user ? { id: user.id, name: user.name, provider: user.provider } : null,
    };
    setOrders([enriched, ...orders]);
    setPage('history');
    // Simulate auto success after a moment
    setTimeout(() => {
      setOrders((prev) => prev.map(o => o.id === enriched.id ? { ...o, status: 'success' } : o));
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar onNavigate={setPage} active={page} />
      <Hero />

      {page === 'topup' && (
        <TopUpForm onCreateOrder={handleCreateOrder} />
      )}

      {page === 'auth' && (
        <Auth onLogin={(u) => { setUser(u); setPage('topup'); }} />
      )}

      {page === 'history' && (
        <TransactionHistory orders={orders} />
      )}

      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-500">
        <div className="flex items-center justify-between">
          <p>© {new Date().getFullYear()} TopUpHub. Semua hak dilindungi.</p>
          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <img src={user.avatar} alt="avatar" className="h-6 w-6 rounded-full" />
                <span className="text-gray-700">{user.name}</span>
              </div>
            ) : (
              <button onClick={() => setPage('auth')} className="text-indigo-600 hover:underline">Masuk</button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
