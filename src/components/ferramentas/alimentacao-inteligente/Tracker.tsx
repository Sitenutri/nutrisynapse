'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun, AlertTriangle, CheckCircle2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const RechartsChart = dynamic(() => import('./TrackerChart'), { ssr: false });

const initialData = [
  { day: 'Seg', jejum: 110, posRefeicao: 135 },
  { day: 'Ter', jejum: 115, posRefeicao: 140 },
  { day: 'Qua', jejum: 105, posRefeicao: 125 },
  { day: 'Qui', jejum: 120, posRefeicao: 145 },
  { day: 'Sex', jejum: 112, posRefeicao: 130 },
  { day: 'Sab', jejum: 98, posRefeicao: 115 },
  { day: 'Dom', jejum: 102, posRefeicao: 120 },
];

export default function Tracker() {
  const [jejum, setJejum] = useState('');
  const [posRefeicao, setPosRefeicao] = useState('');
  const [sleepHours, setSleepHours] = useState('');
  const [sleepQuality, setSleepQuality] = useState('boa');
  const [chartData, setChartData] = useState(initialData);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('trackerData');
    if (savedData) {
      try {
        setChartData(JSON.parse(savedData));
      } catch (e) {
        console.error('Error parsing tracker data', e);
      }
    }
  }, []);

  const handleSave = () => {
    if (!jejum && !posRefeicao) return;

    const today = new Date().toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '');
    const formattedDay = today.charAt(0).toUpperCase() + today.slice(1);

    const newData = [...chartData];
    const todayIndex = newData.findIndex(d => d.day === formattedDay);

    const newEntry = {
      day: formattedDay,
      jejum: jejum ? Number(jejum) : (todayIndex >= 0 ? newData[todayIndex].jejum : 0),
      posRefeicao: posRefeicao ? Number(posRefeicao) : (todayIndex >= 0 ? newData[todayIndex].posRefeicao : 0),
    };

    if (todayIndex >= 0) {
      newData[todayIndex] = newEntry;
    } else {
      if (newData.length >= 7) {
        newData.shift();
      }
      newData.push(newEntry);
    }

    setChartData(newData);
    localStorage.setItem('trackerData', JSON.stringify(newData));

    setShowSuccess(true);
    setJejum('');
    setPosRefeicao('');
    setSleepHours('');

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="p-4 pb-24 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Tracker de Glicemia</h1>
        <p className="text-gray-600">Monitore sua glicemia e sono</p>
      </header>

      {showSuccess && (
        <div className="bg-[#76a86b]/10 p-4 rounded-2xl border border-[#76a86b]/20 flex items-center gap-3">
          <CheckCircle2 className="text-[#76a86b] shrink-0" size={20} />
          <p className="text-sm font-medium text-[#76a86b]">Registros salvos com sucesso!</p>
        </div>
      )}

      <section className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        <h2 className="font-semibold text-gray-800 flex items-center gap-2">
          <Sun className="text-[#317b8a]" size={20} />
          Glicemia de Hoje
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Em Jejum (mg/dL)</label>
            <input
              type="number"
              value={jejum}
              onChange={(e) => setJejum(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#317b8a]"
              placeholder="Ex: 105"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Pos-Refeicao (mg/dL)</label>
            <input
              type="number"
              value={posRefeicao}
              onChange={(e) => setPosRefeicao(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#317b8a]"
              placeholder="Ex: 130"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-4">
            <Moon className="text-[#317b8a]" size={20} />
            Checklist do Sono
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Horas dormidas</label>
              <input
                type="number"
                value={sleepHours}
                onChange={(e) => setSleepHours(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#317b8a]"
                placeholder="Ex: 7"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-2">Qualidade</label>
              <div className="flex gap-2">
                {['Ruim', 'Media', 'Boa'].map(q => (
                  <button
                    key={q}
                    onClick={() => setSleepQuality(q.toLowerCase())}
                    className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
                      sleepQuality === q.toLowerCase()
                        ? 'bg-[#317b8a]/10 text-[#317b8a] border-[#317b8a]/20'
                        : 'bg-gray-50 text-gray-600 border-gray-200'
                    } border`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-[#317b8a] text-white py-3 rounded-xl font-medium mt-4 active:scale-95 transition-transform"
        >
          Salvar Registros
        </button>
      </section>

      {Number(jejum) > 110 && (
        <div className="bg-[#b83b5e]/10 p-4 rounded-2xl border border-[#b83b5e]/20 flex gap-3">
          <AlertTriangle className="text-[#b83b5e] shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-semibold text-[#b83b5e] text-sm">Alerta: Fenomeno do Alvorecer</h3>
            <p className="text-xs text-[#b83b5e]/80 mt-1">
              Sua glicemia em jejum esta elevada. Isso pode ser causado por picos de cortisol e GH durante a madrugada. Tente jantar mais cedo hoje.
            </p>
          </div>
        </div>
      )}

      <section className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="font-semibold text-gray-800 mb-4">Historico Semanal</h2>
        <RechartsChart data={chartData} />
      </section>
    </div>
  );
}
