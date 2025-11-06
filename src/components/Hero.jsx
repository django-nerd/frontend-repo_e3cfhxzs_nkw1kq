import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[420px] w-full">
        <Spline scene="https://prod.spline.design/11qP3P8IS-3dYxG1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white" />
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-6xl w-full px-4 pb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Top up game cepat, aman, dan resmi</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">Seperti Lapak Gaming dan Codashop — pilih game favoritmu, masukkan ID, pilih nominal, lalu bayar. Saldo langsung masuk dalam hitungan detik.</p>
        </div>
      </div>
    </section>
  );
}
