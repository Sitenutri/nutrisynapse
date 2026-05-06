'use client';

import React, { useState, useRef } from 'react';
import { Camera, Upload, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Scanner() {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    cho: number;
    fiber: number;
    protein: number;
    impact: string;
    suggestion: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setImage(base64Image);
        analyzeImage(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (base64Image: string) => {
    setAnalyzing(true);
    setResult(null);

    try {
      const response = await fetch('/api/ferramentas/scanner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64Image }),
      });

      if (!response.ok) {
        throw new Error('Erro na analise');
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Erro ao analisar imagem:", error);
      setResult({
        cho: 0,
        fiber: 0,
        protein: 0,
        impact: 'Erro',
        suggestion: 'Nao foi possivel analisar a imagem. Verifique sua conexao ou tente uma foto mais clara.'
      });
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="p-4 pb-24 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Scanner sua refeicao</h1>
        <p className="text-gray-600">Analise sua refeicao com IA</p>
      </header>

      {!image ? (
        <div
          className="border-2 border-dashed border-[#317b8a]/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-[#317b8a]/5 min-h-[300px] cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="bg-[#317b8a]/10 p-4 rounded-full mb-4">
            <Camera className="text-[#317b8a]" size={32} />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Tire uma foto do seu prato</h3>
          <p className="text-sm text-gray-500 mb-6">
            Nossa IA vai estimar os carboidratos e prever o impacto glicemico.
          </p>
          <button className="bg-[#317b8a] text-white px-6 py-2.5 rounded-xl font-medium flex items-center gap-2">
            <Upload size={18} />
            Escolher Foto
          </button>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageUpload}
          />
        </div>
      ) : (
        <div className="space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="Refeicao" className="w-full h-48 object-cover" />
            <button
              onClick={() => { setImage(null); setResult(null); }}
              className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 text-sm font-medium"
            >
              Trocar Foto
            </button>
          </div>

          {analyzing ? (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-12 h-12 border-4 border-[#317b8a]/20 border-t-[#317b8a] rounded-full animate-spin"></div>
              <p className="text-gray-600 font-medium">Analisando nutrientes...</p>
            </div>
          ) : result ? (
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  {result.impact === 'Erro' ? (
                    <AlertCircle className="text-red-500" size={20} />
                  ) : (
                    <CheckCircle2 className="text-[#76a86b]" size={20} />
                  )}
                  {result.impact === 'Erro' ? 'Erro na Analise' : 'Analise Concluida'}
                </h3>

                {result.impact !== 'Erro' && (
                  <>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="bg-[#317b8a]/10 p-3 rounded-xl text-center">
                        <div className="text-xs text-[#317b8a] font-medium mb-1">Carboidratos</div>
                        <div className="font-bold text-gray-900 text-lg">{result.cho}g</div>
                      </div>
                      <div className="bg-[#76a86b]/10 p-3 rounded-xl text-center">
                        <div className="text-xs text-[#76a86b] font-medium mb-1">Fibras</div>
                        <div className="font-bold text-gray-900 text-lg">{result.fiber}g</div>
                      </div>
                      <div className="bg-[#b83b5e]/10 p-3 rounded-xl text-center">
                        <div className="text-xs text-[#b83b5e] font-medium mb-1">Proteinas</div>
                        <div className="font-bold text-gray-900 text-lg">{result.protein}g</div>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Impacto Glicemico Previsto:</span>
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wide ${
                          result.impact === 'Baixo' ? 'bg-[#76a86b]/20 text-[#76a86b]' :
                          result.impact === 'Medio' ? 'bg-yellow-500/20 text-yellow-700' :
                          'bg-[#b83b5e]/20 text-[#b83b5e]'
                        }`}>
                          {result.impact}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="bg-[#317b8a]/5 p-4 rounded-2xl border border-[#317b8a]/20 flex gap-3">
                <AlertCircle className="text-[#317b8a] shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-[#317b8a] leading-relaxed">
                  {result.suggestion}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
