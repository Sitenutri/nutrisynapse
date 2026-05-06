'use client';

import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1">
        <h1 className="text-xl font-bold text-gray-800 leading-tight">
          Alimentacao Inteligente<br />
          <span className="text-[#317b8a] font-black text-2xl tracking-tighter">NutriSynapse</span>
        </h1>
      </div>
    </div>
  );
}
