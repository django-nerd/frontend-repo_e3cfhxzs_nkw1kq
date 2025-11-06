import React, { useMemo, useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

const GAMES = [
  { key: 'mlbb', name: 'Mobile Legends', providers: ['Official', 'Express'], denom: [14, 28, 86, 172, 257, 344, 429, 514, 706, 878] },
  { key: 'ff', name: 'Free Fire', providers: ['Official'], denom: [50, 70, 100, 140, 355, 720] },
  { key: 'gi', name: 'Genshin Impact', providers: ['Official'], denom: [60, 300, 980, 1980, 3280, 6480] },
];

const PAYMENTS = [
  { key: 'qris', name: 'QRIS' },
  { key: 'gopay', name: 'GoPay' },
  { key: 'ovo', name: 'OVO' },
  { key: 'dana', name: 'DANA' },
  { key: 'bank', name: 'Virtual Account' },
];

export default function TopUpForm({ onCreateOrder }) {
  const [game, setGame] = useState(GAMES[0].key);
  const [provider, setProvider] = useState(GAMES[0].providers[0]);
  const [userId, setUserId] = useState('');
  const [serverId, setServerId] = useState('');
  const [denom, setDenom] = useState(null);
  const [payment, setPayment] = useState(PAYMENTS[0].key);

  const gameObj = useMemo(() => GAMES.find(g => g.key === game), [game]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !denom) return;
    const order = {
      id: 'ORD' + Date.now(),
      game,
      provider,
      userId,
      serverId: serverId || null,
      denom,
      payment,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    onCreateOrder(order);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Form Top Up</h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Pilih Game</label>
                <div className="mt-1 relative">
                  <select
                    value={game}
                    onChange={(e) => {
                      const selected = e.target.value;
                      setGame(selected);
                      const g = GAMES.find(x => x.key === selected);
                      setProvider(g.providers[0]);
                      setDenom(null);
                    }}
                    className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {GAMES.map(g => (
                      <option key={g.key} value={g.key}>{g.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Provider</label>
                <div className="mt-1 relative">
                  <select
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {gameObj.providers.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">User ID</label>
                <input value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Masukkan ID akun"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Server (opsional)</label>
                <input value={serverId} onChange={(e) => setServerId(e.target.value)} placeholder="Contoh: 1234"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Nominal</label>
              <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {gameObj.denom.map(d => (
                  <button type="button" key={d} onClick={() => setDenom(d)}
                    className={`rounded-lg border px-3 py-2 text-sm transition ${denom === d ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-gray-200 hover:border-indigo-300'}`}>
                    {d} Diamonds
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Metode Pembayaran</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {PAYMENTS.map(p => (
                  <button type="button" key={p.key} onClick={() => setPayment(p.key)}
                    className={`rounded-lg border px-3 py-2 text-sm transition ${payment === p.key ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-gray-200 hover:border-indigo-300'}`}>
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 transition">
              Buat Pesanan
            </button>
          </form>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 text-green-600">
            <ShieldCheck size={18} />
            <span className="text-sm font-medium">100% Legal & Resmi</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">Pembayaran diproses otomatis 24/7. Jika ada kendala, tim support siap membantu.</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li>Harga kompetitif</li>
            <li>Proses kilat</li>
            <li>Banyak pilihan pembayaran</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
