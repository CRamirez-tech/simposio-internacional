import React, { useState } from "react";

const faqs = [
  {
    question: "¿A quién va dirigido exactamente el evento?",
    answer: "Este encuentro está abierto a todas las mentes curiosas e innovadoras de la región macrosur: gerentes, directores, fundadores de startups, profesionales independientes, emprendedores y todos aquellos apasionados por liderar la transformación tecnológica de sus equipos.",
  },
  {
    question: "¿Cómo se realiza la segmentación y selección de asistentes?",
    answer: "Debido al aforo limitado a 100 invitados presenciales, revisamos brevemente las postulaciones con el fin de conocer los perfiles de los asistentes y facilitar dinámicas de networking dinámicas y de alto valor durante el cóctel de cierre.",
  },
  {
    question: "¿Dónde y cuándo se llevará a cabo?",
    answer: "El evento tendrá lugar de forma presencial el miércoles 1 de julio de 2026, desde las 4:00 p.m. hasta las 8:00 p.m., en el Auditorio de la Cámara de Comercio e Industria de Arequipa (CCIA).",
  },
  {
    question: "¿Tienen costo las entradas?",
    answer: "El simposio es financiado de manera conjunta por la UNSA y las universidades socias coorganizadoras, por lo que el acceso es 100% gratuito para los empresarios seleccionados que reciban su pase digital de confirmación.",
  },
];

export default function FaqAccordion() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIdx(activeIdx === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = activeIdx === index;
        return (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen 
                ? "border-violet-500 bg-slate-900/60 shadow-[0_0_20px_-3px_rgba(139,92,246,0.1)]" 
                : "border-slate-800 bg-slate-950/45 hover:border-slate-700"
            }`}
          >
            <button 
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={`text-sm sm:text-base font-bold transition-colors ${
                isOpen ? "text-white" : "text-slate-300 hover:text-white"
              }`}>
                {faq.question}
              </span>
              
              <span className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                isOpen 
                  ? "rotate-180 border-cyan-500 bg-cyan-950/30 text-cyan-400" 
                  : "border-slate-800 bg-slate-900 text-slate-400"
              }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            {/* Smooth transition container */}
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[300px] opacity-100 border-t border-slate-850" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 py-5 text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold">
                {faq.answer}
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}
