import React from 'react';

export default function TransactionHistory({ orders }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Riwayat Transaksi</h2>
          <span className="text-sm text-gray-500">{orders.length} transaksi</span>
        </div>

        {orders.length === 0 ? (
          <p className="mt-6 text-sm text-gray-600">Belum ada transaksi. Mulai top up sekarang!</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-2 pr-4">Order ID</th>
                  <th className="py-2 pr-4">Game</th>
                  <th className="py-2 pr-4">User ID</th>
                  <th className="py-2 pr-4">Nominal</th>
                  <th className="py-2 pr-4">Pembayaran</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2 pr-4">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-t border-gray-100">
                    <td className="py-2 pr-4 font-mono text-xs">{o.id}</td>
                    <td className="py-2 pr-4 capitalize">{o.game}</td>
                    <td className="py-2 pr-4">{o.userId}{o.serverId ? ` (${o.serverId})` : ''}</td>
                    <td className="py-2 pr-4">{o.denom} Diamonds</td>
                    <td className="py-2 pr-4 uppercase">{o.payment}</td>
                    <td className="py-2 pr-4">
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        o.status === 'success' ? 'bg-green-50 text-green-700' : o.status === 'failed' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'
                      }`}>
                        {o.status}
                      </span>
                    </td>
                    <td className="py-2 pr-4 text-gray-500">{new Date(o.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
