'use client';

import { useState } from 'react';
import { Calendar, Baby, Activity, AlertCircle } from 'lucide-react';

export default function PregnancyCalculator() {
  const [hpht, setHpht] = useState('');
  const [result, setResult] = useState<{ edd: string; weeks: number; days: number; trimester: number } | null>(null);

  const calculatePregnancy = () => {
    if (!hpht) return;

    const lmpDate = new Date(hpht);
    const today = new Date();
    
    // Validate date is not in future
    if (lmpDate > today) {
      alert('Tanggal HPHT tidak boleh di masa depan.');
      return;
    }

    // Naegele's rule for EDD (Estimated Due Date): LMP + 7 days - 3 months + 1 year
    const edd = new Date(lmpDate);
    edd.setDate(edd.getDate() + 7);
    edd.setMonth(edd.getMonth() - 3);
    edd.setFullYear(edd.getFullYear() + 1);

    // Calculate Gestational Age
    const timeDiff = today.getTime() - lmpDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    const weeks = Math.floor(daysDiff / 7);
    const days = daysDiff % 7;

    // Determine Trimester
    let trimester = 1;
    if (weeks >= 13 && weeks <= 27) trimester = 2;
    else if (weeks > 27) trimester = 3;

    setResult({
      edd: edd.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      weeks,
      days,
      trimester
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-[#005BCF] p-6 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#1DA1DB]/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        <Baby size={40} className="mx-auto mb-3 text-blue-100 relative z-10" />
        <h3 className="text-xl font-bold relative z-10">Kalkulator Kehamilan</h3>
        <p className="text-sm text-blue-100 mt-1 relative z-10">Hitung usia kehamilan secara akurat dengan HPHT</p>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="space-y-4 mb-6">
          <label className="block text-sm font-medium text-gray-700">Hari Pertama Haid Terakhir (HPHT):</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="date" 
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1DA1DB] focus:border-[#1DA1DB] outline-none transition-all text-gray-700 bg-gray-50"
              value={hpht}
              onChange={(e) => setHpht(e.target.value)}
            />
          </div>
          <button 
            onClick={calculatePregnancy}
            className="w-full bg-[#1DA1DB] hover:bg-[#005BCF] text-white py-3.5 rounded-xl font-medium transition-colors shadow-md"
          >
            Hitung Sekarang
          </button>
        </div>

        {result && (
          <div className="pt-6 border-t border-gray-100 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-[#F5F8FC] p-4 rounded-xl">
                <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Usia Kehamilan</span>
                <span className="text-2xl font-bold text-[#005BCF]">{result.weeks} <span className="text-sm font-normal text-gray-600">Minggu</span> {result.days} <span className="text-sm font-normal text-gray-600">Hari</span></span>
              </div>
              <div className="bg-[#F5F8FC] p-4 rounded-xl">
                <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Trimester</span>
                <span className="text-2xl font-bold text-[#005BCF]">Ke-{result.trimester}</span>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start gap-4">
              <Activity className="text-[#1DA1DB] mt-1 shrink-0" size={24} />
              <div>
                <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Perkiraan Hari Persalinan (HPL)</span>
                <span className="text-lg font-bold text-gray-800">{result.edd}</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs text-gray-500 mt-4 bg-gray-50 p-3 rounded-lg">
              <AlertCircle size={14} className="shrink-0 mt-0.5 text-gray-400" />
              <p>Perhitungan ini merupakan estimasi medis standar (Rumus Naegele). Untuk akurasi pasti, sangat disarankan melakukan pemeriksaan USG bersama dokter spesialis kami.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
