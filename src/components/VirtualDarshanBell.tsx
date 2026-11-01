import React, { useState } from 'react';
import { Bell, Sparkles } from 'lucide-react';

export const VirtualDarshanBell: React.FC<{ label?: string }> = ({ label }) => {
  const [ringing, setRinging] = useState(false);

  const ringTempleBell = () => {
    try {
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Play authentic harmonic bell sound using additive synthesis
      const bellFrequencies = [523.25, 1046.5, 1567.98, 2093.0, 3135.96]; // C5 harmonic spectrum with brass overtone
      const gains = [0.6, 0.4, 0.25, 0.15, 0.08];

      setRinging(true);
      setTimeout(() => setRinging(false), 2400);

      const now = ctx.currentTime;

      bellFrequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Bell strike attack and long exponential decay
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(gains[idx], now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + (2.5 - idx * 0.3));

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 2.6);
      });
    } catch (e) {
      console.warn('Web Audio API not supported or blocked', e);
    }
  };

  return (
    <button
      onClick={ringTempleBell}
      className={`relative inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-serif font-bold transition-all duration-300 ${
        ringing
          ? 'bg-amber-400 text-stone-950 shadow-[0_0_20px_rgba(251,191,36,0.8)] scale-105'
          : 'bg-gradient-to-r from-amber-600/30 to-orange-600/30 hover:from-amber-600/50 hover:to-orange-600/50 text-amber-300 border border-amber-500/40 shadow-sm'
      }`}
      title="Click to ring the sacred temple bell"
      aria-label="Ring Temple Bell"
    >
      <Bell
        className={`w-4 h-4 text-amber-300 transition-transform ${
          ringing ? 'animate-bounce text-stone-950' : 'group-hover:rotate-12'
        }`}
      />
      <span>{label || 'घंटा नाद (Ring Bell)'}</span>
      {ringing && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
        </span>
      )}
    </button>
  );
};
