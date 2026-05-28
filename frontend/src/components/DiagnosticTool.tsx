import React, { useState } from "react";

const diagQuestions = [
  {
    q: "¿Su empresa utiliza Inteligencia Artificial para procesos operativos o ventas?",
    options: [
      { text: "No, aún no lo hemos implementado.", score: "low", icon: "🤖" },
      { text: "Sí, de manera básica (herramientas gratuitas).", score: "mid", icon: "⚡" },
      { text: "Sí, tenemos sistemas y flujos integrados con IA.", score: "high", icon: "🚀" },
    ],
  },
  {
    q: "¿Qué nivel de automatización tienen las tareas repetitivas en su administración?",
    options: [
      { text: "Casi todo se realiza manualmente.", score: "low", icon: "✍️" },
      { text: "Algunas tareas usan software básico (Excel, ERP simple).", score: "mid", icon: "📊" },
      { text: "Procesos automatizados e intercomunicados entre áreas.", score: "high", icon: "⚙️" },
    ],
  },
  {
    q: "¿Su empresa aprovecha los incentivos tributarios por inversión en tecnología?",
    options: [
      { text: "No conocía los beneficios fiscales de CONCYTEC.", score: "low", icon: "💡" },
      { text: "He oído hablar de ellos, pero no sé cómo postular.", score: "mid", icon: "❓" },
      { text: "Sí, ya hemos calificado o postulamos a proyectos.", score: "high", icon: "💰" },
    ],
  },
];

export default function DiagnosticTool() {
  const [diagStep, setDiagStep] = useState(0);
  const [diagAnswers, setDiagAnswers] = useState<string[]>([]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleSelectOption = (score: string) => {
    const nextAnswers = [...diagAnswers, score];
    setDiagAnswers(nextAnswers);
    if (diagStep < diagQuestions.length - 1) {
      setDiagStep(diagStep + 1);
    } else {
      setDiagStep(3); // Paso final de resultados
    }
  };

  const getDiagnosticResult = () => {
    const lows = diagAnswers.filter((a) => a === "low").length;
    const highs = diagAnswers.filter((a) => a === "high").length;
    
    if (highs >= 2) {
      return {
        level: "Líder Tecnológico / Avanzado",
        desc: "¡Excelente! Su empresa cuenta con una sólida base innovadora. Le recomendamos asistir principalmente al Bloque 2 del Simposio (05:50 PM - 07:30 PM) para afinar estrategias avanzadas de escalamiento regional, financiamiento multilateral e internacionalización comercial.",
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        glowColor: "shadow-emerald-500/10",
        recom: "Bloque 2: Rentabilidad, Mercados Globales e Incentivos de Innovación.",
      };
    } else if (lows >= 2) {
      return {
        level: "Básico / Tradicional (Alto Potencial)",
        desc: "Existe una enorme oportunidad inmediata para reducir costos e incrementar márgenes. Su prioridad absoluta debe ser el Bloque 1 de nuestro Simposio (04:40 PM - 05:50 PM), donde aprenderá de manera práctica sobre herramientas de IA inmediatas de negocio y automatización de procesos de bajo costo.",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        glowColor: "shadow-amber-500/10",
        recom: "Bloque 1: Inteligencia Artificial Aplicada a los Negocios y Automatización Administrativa.",
      };
    } else {
      return {
        level: "Intermedio / En Crecimiento Activo",
        desc: "Está en la ruta correcta, pero aún pierde valiosa rentabilidad en flujos operativos y tareas manuales repetitivas. En el Simposio podrá ver el panel de casos reales locales y aprender a estructurar su primera postulación de deducción fiscal CONCYTEC (hasta 240% de retorno).",
        badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
        glowColor: "shadow-cyan-500/10",
        recom: "Bloque 1 & 2: Sinergias y Beneficios Tributarios de la Ley Nº 30309.",
      };
    }
  };

  const handleResetDiagnostic = () => {
    setDiagStep(0);
    setDiagAnswers([]);
  };

  const currentResult = diagStep === 3 ? getDiagnosticResult() : null;

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Glow ambient background behind the card */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      
      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl text-left overflow-hidden">
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

        {diagStep < 3 ? (
          <div className="space-y-8 relative z-10">
            {/* Header progress info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></span>
                Autodiagnóstico Directivo
              </span>
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-medium">Pregunta {diagStep + 1} de 3</span>
                <span className="text-cyan-400 font-extrabold bg-cyan-950/40 border border-cyan-850 px-2.5 py-0.5 rounded-full shadow-inner">
                  {Math.round(((diagStep) / 3) * 100)}% Completado
                </span>
              </div>
            </div>

            {/* Glowing animated progress bar container */}
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800/80 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 transition-all duration-500 ease-out relative"
                style={{ width: `${((diagStep) / 3) * 100}%` }}
              >
                {/* Neon lead point light */}
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px] opacity-80"></div>
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight pt-2">
              {diagQuestions[diagStep].q}
            </h3>

            {/* Answer Options */}
            <div className="space-y-4 pt-2">
              {diagQuestions[diagStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.score)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 group/btn ${
                    hoveredIdx === idx
                      ? "border-violet-500 bg-violet-950/20 shadow-[0_0_20px_-3px_rgba(139,92,246,0.15)] translate-x-1"
                      : "border-slate-800 bg-slate-950/45 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon container */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 transition-transform duration-300 ${
                      hoveredIdx === idx ? "bg-violet-900/50 scale-110" : "bg-slate-900 border border-slate-800"
                    }`}>
                      {opt.icon}
                    </div>
                    <span className={`text-sm sm:text-base font-bold transition-colors ${
                      hoveredIdx === idx ? "text-white" : "text-slate-350"
                    }`}>
                      {opt.text}
                    </span>
                  </div>
                  
                  {/* Styled Arrow indicator */}
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    hoveredIdx === idx
                      ? "border-cyan-500 bg-cyan-950/30 text-cyan-400 rotate-90 scale-105"
                      : "border-slate-800 text-slate-500"
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Result Step
          <div className="space-y-8 relative z-10 animate-[fadeIn_0.5s_ease-out]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
              <div className="space-y-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                  Resultado del Diagnóstico Empresarial
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {currentResult?.level}
                </h3>
              </div>
              <span className={`px-4 py-2 rounded-full text-xs font-black border uppercase tracking-wider w-max shadow-lg shadow-black/20 ${currentResult?.badgeColor}`}>
                Análisis Completado
              </span>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                {currentResult?.desc}
              </p>
              
              <div className="border-t border-slate-800/60 pt-4">
                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest block mb-2">
                  Bloque Recomendado Especialmente:
                </span>
                <div className="flex items-center gap-3 text-sm font-bold text-white">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    🎯
                  </div>
                  <span>{currentResult?.recom}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#agenda"
                className="flex-1 inline-flex items-center justify-center px-6 h-14 text-sm font-extrabold uppercase tracking-wider rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 text-white hover:opacity-95 shadow-xl hover:shadow-violet-950/30 active:scale-[0.99] transition-all text-center"
              >
                Ver Programa Oficial Completo
              </a>
              <button
                onClick={handleResetDiagnostic}
                className="inline-flex items-center justify-center px-8 h-14 text-sm font-extrabold uppercase tracking-wider rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 active:scale-[0.99] transition-all"
              >
                Repetir Test
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
