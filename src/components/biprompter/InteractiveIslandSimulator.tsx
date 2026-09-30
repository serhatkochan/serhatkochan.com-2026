import React, { useState, useEffect, useRef } from 'react';

const SAMPLE_WORDS = [
  { text: 'Herkese', isDirective: false },
  { text: 'merhaba', isDirective: false },
  { text: 'arkadaşlar!', isDirective: false },
  { text: '[Gülümse]', isDirective: true },
  { text: 'Bugün', isDirective: false },
  { text: 'yapay', isDirective: false },
  { text: 'zekâ', isDirective: false },
  { text: 'ses', isDirective: false },
  { text: 'takipli', isDirective: false },
  { text: 'teleprompter', isDirective: false },
  { text: 'deneyimini', isDirective: false },
  { text: 'canlı', isDirective: false },
  { text: 'inceliyoruz.', isDirective: false },
  { text: '[Nefes al]', isDirective: true },
  { text: 'Gördüğünüz', isDirective: false },
  { text: 'gibi', isDirective: false },
  { text: 'ben', isDirective: false },
  { text: 'konuştukça', isDirective: false },
  { text: 'kelimeler', isDirective: false },
  { text: 'otomatik', isDirective: false },
  { text: 'ilerliyor!', isDirective: false },
];

export default function InteractiveIslandSimulator() {
  const [mode, setMode] = useState<'island' | 'notch'>('island');
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [ghostMode, setGhostMode] = useState(false);
  const [wpm, setWpm] = useState(140);
  const [viewAngle, setViewAngle] = useState<'desktop' | 'obs'>('desktop');

  // Simulated Speech Progress Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveWordIndex((prev) => {
          if (prev >= SAMPLE_WORDS.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, Math.max(180, (60 / wpm) * 800));
    }
    return () => clearInterval(interval);
  }, [isPlaying, wpm]);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
      {/* Control Header & Mode Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800/60 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-zinc-300">İnteraktif Vitrin:</span>
          <span className="text-zinc-500 hidden sm:inline">Tarayıcınızda canlı test edin</span>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-zinc-900 rounded-xl border border-zinc-800">
          <button
            type="button"
            onClick={() => setMode('island')}
            className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
              mode === 'island'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            🏝️ Dynamic Island
          </button>
          <button
            type="button"
            onClick={() => setMode('notch')}
            className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
              mode === 'notch'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            🔽 Minimal Çentik (Ok)
          </button>
        </div>
      </div>

      {/* Simulator Display Stage (Simulated Windows Desktop Top Edge) */}
      <div className="relative mt-6 rounded-xl bg-gradient-to-b from-zinc-900 to-[#0e0e13] border border-zinc-800 min-h-[300px] sm:min-h-[340px] flex flex-col items-center justify-start p-4 sm:p-8 overflow-hidden shadow-inner">
        {/* Mock Screen Top Bar (Camera & Sensor Bezel) */}
        <div className="absolute top-0 inset-x-0 h-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-700/80 mr-1.5" />
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_6px_#10b981]" />
        </div>

        {/* Notch Mode: Minimal Bouncing Arrow */}
        {mode === 'notch' ? (
          <div className="mt-4 flex flex-col items-center animate-fadeIn">
            <button
              type="button"
              onClick={() => setMode('island')}
              title="Adayı Genişletmek İçin Tıklayın (Alt + D)"
              className="group flex flex-col items-center justify-center w-12 h-8 rounded-b-xl bg-black border border-t-0 border-zinc-700/80 hover:border-sky-500/80 hover:bg-zinc-900 transition-all cursor-pointer shadow-lg"
            >
              <svg
                className="w-5 h-5 text-sky-400 biprompter-arrow-bounce group-hover:text-sky-300 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="mt-6 text-center max-w-sm">
              <span className="inline-block px-2.5 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2">
                Alt + D Modu Aktif
              </span>
              <p className="text-sm text-zinc-300 font-medium">
                Prompter ekranın en tepesine küçüldü.
              </p>
              <p className="text-xs text-zinc-500 mt-1">
                Arkadaki hiçbir pencereyi kapatmaz, sadece tek tıkla veya kısayolla bekler. Oka tıklayarak genişletebilirsiniz.
              </p>
            </div>
          </div>
        ) : (
          /* Dynamic Island Mode */
          <div className="w-full flex flex-col items-center mt-3 animate-fadeIn">
            {/* The Floating Capsule */}
            <div
              className={`w-full max-w-2xl rounded-2xl bg-black/95 border transition-all duration-300 p-3 sm:p-4 shadow-[0_10px_35px_rgba(0,0,0,0.85)] ${
                ghostMode && viewAngle === 'obs'
                  ? 'opacity-10 border-dashed border-red-500/40'
                  : 'border-zinc-700/70'
              }`}
            >
              {/* Island Header Bar */}
              <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-zinc-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-700">
                    <span className={`h-2 w-2 rounded-full ${isPlaying ? 'bg-red-500 animate-ping' : 'bg-zinc-500'}`} />
                    <span className="font-mono font-medium text-zinc-300 text-[11px]">
                      {isPlaying ? 'CANLI DİNLİYOR' : 'HAZIR'}
                    </span>
                  </div>

                  {/* Audio Waveform simulation */}
                  <div className="flex items-center gap-0.5 h-4 px-1">
                    {[12, 18, 8, 22, 14, 20, 10, 16].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-sky-400 rounded-full transition-all duration-150"
                        style={{
                          height: isPlaying ? `${Math.floor(Math.random() * 16 + 6)}px` : '4px',
                          opacity: isPlaying ? 0.9 : 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-zinc-400 text-[11px]">
                    {wpm} WPM
                  </span>
                  {ghostMode && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-[10px] font-mono">
                      👻 OBS GİZLİ
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setMode('notch')}
                    title="Çentiğe Küçült (Alt + D)"
                    className="text-zinc-500 hover:text-zinc-300 transition"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Island Words Prompter Area */}
              <div className="py-2 px-1 text-center min-h-[72px] flex items-center justify-center">
                <div className="text-base sm:text-lg font-medium leading-relaxed tracking-wide">
                  {SAMPLE_WORDS.map((item, idx) => {
                    const isActive = idx === activeWordIndex;
                    const isPast = idx < activeWordIndex;

                    if (item.isDirective) {
                      return (
                        <span
                          key={idx}
                          className="inline-block mx-1.5 text-amber-400 italic font-semibold text-sm bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/30"
                        >
                          {item.text}
                        </span>
                      );
                    }

                    return (
                      <span
                        key={idx}
                        className={`inline-block mx-1 transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'biprompter-word-active scale-110 font-bold'
                            : isPast
                            ? 'text-zinc-500'
                            : 'text-zinc-300'
                        }`}
                        onClick={() => setActiveWordIndex(idx)}
                      >
                        {item.text}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Ghost Mode OBS Watermark info if in OBS view */}
            {ghostMode && viewAngle === 'obs' && (
              <div className="mt-4 px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-800/80 text-center animate-fadeIn">
                <p className="text-xs text-purple-200 font-medium">
                  OBS Studio & Zoom Ekran Paylaşımı Görünümü
                </p>
                <p className="text-[11px] text-purple-400 mt-0.5">
                  Windows DWM Affinity API sayesinde izleyicileriniz veya kayıt alan yazılım bu prompteri asla görmez!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Ambient desktop wallpaper hint */}
        <div className="mt-auto pt-6 text-center text-[11px] text-zinc-600 font-mono">
          [ Masaüstü Çalışma Alanı • VS Code / Sunum / Tarayıcı Arkada Çalışmaya Devam Eder ]
        </div>
      </div>

      {/* Simulator Interactive Control Deck */}
      <div className="mt-4 pt-4 border-t border-zinc-800/60 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition cursor-pointer shadow-md ${
            isPlaying
              ? 'bg-amber-600 hover:bg-amber-500 text-white'
              : 'bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold'
          }`}
        >
          {isPlaying ? (
            <>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
              Konuşmayı Duraklat
            </>
          ) : (
            <>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Ses Takibini Simüle Et
            </>
          )}
        </button>

        {/* Ghost Mode Toggle */}
        <button
          type="button"
          onClick={() => {
            const next = !ghostMode;
            setGhostMode(next);
            if (next) setViewAngle('obs');
            else setViewAngle('desktop');
          }}
          className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm border transition cursor-pointer ${
            ghostMode
              ? 'bg-purple-900/40 border-purple-500/60 text-purple-200'
              : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          <span>👻</span>
          <span>Hayalet Modu: {ghostMode ? 'Açık (OBS Gizli)' : 'Kapalı'}</span>
        </button>

        {/* View Perspective Switcher (Visible when ghost mode is on) */}
        <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
          <span className="text-zinc-400">Önizleme Açısı:</span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setViewAngle('desktop')}
              className={`px-2 py-1 rounded font-medium transition ${
                viewAngle === 'desktop'
                  ? 'bg-zinc-700 text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Masaüstü
            </button>
            <button
              type="button"
              onClick={() => {
                setGhostMode(true);
                setViewAngle('obs');
              }}
              className={`px-2 py-1 rounded font-medium transition ${
                viewAngle === 'obs'
                  ? 'bg-purple-600 text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              OBS Yayını
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
