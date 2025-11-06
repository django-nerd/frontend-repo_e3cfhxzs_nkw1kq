import React from 'react';
import { Facebook } from 'lucide-react';

function GoogleIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.826 31.91 29.277 35 24 35c-7.18 0-13-5.82-13-13s5.82-13 13-13c3.1 0 5.94 1.1 8.16 2.93l5.66-5.66C34.046 3.02 29.268 1 24 1 11.85 1 2 10.85 2 23s9.85 22 22 22 22-9.85 22-22c0-1.47-.15-2.9-.389-4.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.31 16.108 18.79 13 24 13c3.1 0 5.94 1.1 8.16 2.93l5.66-5.66C34.046 3.02 29.268 1 24 1 16.318 1 9.706 5.337 6.306 11.691c-.575 1.02-.997 2.11-1.282 3.25z"/>
      <path fill="#4CAF50" d="M24 45c5.187 0 9.9-1.987 13.454-5.232l-6.207-5.245C29.12 35.851 26.68 37 24 37c-5.243 0-9.81-3.13-11.667-7.62l-6.55 5.04C8.163 40.566 15.47 45 24 45z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.08 3.13-3.32 5.61-6.05 6.523l6.207 5.245C33.236 41.95 38 38 40.66 33.34 42.27 30.43 43.611 25.72 43.611 20.083z"/>
    </svg>
  );
}

export default function Auth({ onLogin }) {
  const handleOAuth = (provider) => {
    const demoUser = {
      id: 'user_' + provider,
      name: provider === 'google' ? 'Google User' : 'Facebook User',
      provider,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${provider}`,
    };
    onLogin(demoUser);
  };

  return (
    <section className="mx-auto max-w-sm px-4 py-10">
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Masuk ke akun</h2>
        <p className="mt-1 text-sm text-gray-600">Gunakan akun Google atau Facebook untuk masuk.</p>
        <div className="mt-6 space-y-3">
          <button onClick={() => handleOAuth('google')} className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 transition">
            <GoogleIcon />
            Lanjutkan dengan Google
          </button>
          <button onClick={() => handleOAuth('facebook')} className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 transition text-[#1877F2]">
            <Facebook size={18} />
            Lanjutkan dengan Facebook
          </button>
        </div>
        <p className="mt-4 text-xs text-gray-500">Dengan masuk, Anda menyetujui Syarat & Ketentuan serta Kebijakan Privasi.</p>
      </div>
    </section>
  );
}
