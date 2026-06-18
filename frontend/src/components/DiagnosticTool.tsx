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
        badgeColor: "bg-brand-teal/10 text-brand-teal dark:text-brand-teal-light border-brand-teal/30",
        glowColor: "shadow-brand-teal/10",
        recom: "Bloque 2: Rentabilidad, Mercados Globales e Incentivos de Innovación.",
      };
    } else if (lows >= 2) {
      return {
        level: "Básico / Tradicional (Alto Potencial)",
        desc: "Existe una enorme oportunidad inmediata para reducir costos e incrementar márgenes. Su prioridad absoluta debe ser el Bloque 1 de nuestro Simposio (04:40 PM - 05:50 PM), donde aprenderá de manera práctica sobre herramientas de IA inmediatas de negocio y automatización de procesos de bajo costo.",
        badgeColor: "bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-slate-350 border-brand-blue/30 dark:border-brand-blue/35",
        glowColor: "shadow-brand-blue/10",
        recom: "Bloque 1: Inteligencia Artificial Aplicada a los Negocios y Automatización Administrativa.",
      };
    } else {
      return {
        level: "Intermedio / En Crecimiento Activo",
        desc: "Está en la ruta correcta, pero aún pierde valiosa rentabilidad en flujos operativos y tareas manuales repetitivas. En el Simposio podrá ver el panel de casos reales locales y aprender a la vez a estructurar su primera postulación de deducción fiscal CONCYTEC (hasta 240% de retorno).",
        badgeColor: "bg-brand-teal/10 text-brand-teal dark:text-brand-teal-light border-brand-teal/30",
        glowColor: "shadow-brand-teal/10",
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
      <div className="absolute -inset-1.5 bg-gradient-to-r from-neon-lime to-neon-cyan rounded-3xl blur opacity-15 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-35 transition duration-1000"></div>
      
      <div className="relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl text-left overflow-hidden transition-colors duration-300">
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none transition-colors duration-300"></div>

        {diagStep < 3 ? (
          <div className="space-y-8 relative z-10">
            {/* Header progress info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-bold tracking-widest uppercase flex items-center gap-2 transition-colors duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-light animate-pulse"></span>
                Autodiagnóstico Directivo
              </span>
              <div className="flex items-center gap-3">
                <span className="text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300">Pregunta {diagStep + 1} de 3</span>
                <span className="text-brand-teal dark:text-brand-teal-light font-extrabold bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-2.5 py-0.5 rounded-full shadow-inner transition-colors duration-300">
                  {Math.round(((diagStep) / 3) * 100)}% Completado
                </span>
              </div>
            </div>

            {/* Glowing animated progress bar container */}
            <div className="w-full bg-slate-200 dark:bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-300 dark:border-slate-800/80 shadow-inner transition-colors duration-300">
              <div 
                className="h-full bg-gradient-to-r from-brand-teal via-brand-teal-light to-brand-neutral transition-all duration-500 ease-out relative"
                style={{ width: `${((diagStep) / 3) * 100}%` }}
              >
                {/* Neon lead point light */}
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px] opacity-80"></div>
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight pt-2 transition-colors duration-300">
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
                      ? "border-brand-teal bg-brand-teal/5 shadow-[0_0_20px_-3px_rgba(14,113,108,0.15)] translate-x-1"
                      : "border-slate-200 dark:border-slate-800 bg-slate-100/30 dark:bg-slate-950/45 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon container */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 transition-all duration-300 ${
                      hoveredIdx === idx ? "bg-brand-teal/10 scale-110" : "bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                    }`}>
                      {opt.icon}
                    </div>
                    <span className={`text-sm sm:text-base font-bold transition-colors ${
                      hoveredIdx === idx ? "text-brand-teal dark:text-white" : "text-slate-700 dark:text-slate-350"
                    }`}>
                      {opt.text}
                    </span>
                  </div>
                  
                  {/* Styled Arrow indicator */}
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    hoveredIdx === idx
                      ? "border-brand-teal-light bg-brand-teal-light/10 text-brand-teal-light rotate-90 scale-105"
                      : "border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500"
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-6 transition-colors duration-300">
              <div className="space-y-2">
                <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest block transition-colors duration-300">
                  Resultado del Diagnóstico Empresarial
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
                  {currentResult?.level}
                </h3>
              </div>
              <span className={`px-4 py-2 rounded-full text-xs font-black border uppercase tracking-wider w-max shadow-md dark:shadow-lg dark:shadow-black/20 ${currentResult?.badgeColor}`}>
                Análisis Completado
              </span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 space-y-4 transition-colors duration-300">
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium transition-colors duration-300">
                {currentResult?.desc}
              </p>
              
              <div className="border-t border-slate-200 dark:border-slate-800/60 pt-4 transition-colors duration-300">
                <span className="text-[10px] font-black text-neon-cyan uppercase tracking-widest block mb-2">
                  Bloque Recomendado Especialmente:
                </span>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-900 dark:text-white transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan shrink-0">
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
                className="flex-1 inline-flex items-center justify-center px-6 h-14 text-sm font-extrabold uppercase tracking-wider rounded-2xl bg-brand-teal text-white hover:bg-brand-teal-light shadow-xl hover:shadow-brand-teal/20 active:scale-[0.99] transition-all text-center font-black"
              >
                Ver Programa Oficial Completo
              </a>
              <button
                onClick={handleResetDiagnostic}
                className="inline-flex items-center justify-center px-8 h-14 text-sm font-extrabold uppercase tracking-wider rounded-2xl bg-slate-100 border border-slate-250 text-slate-700 hover:text-slate-900 hover:bg-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-350 dark:hover:text-white dark:hover:bg-slate-800 active:scale-[0.99] transition-all cursor-pointer"
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
