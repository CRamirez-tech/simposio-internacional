import React, { useState } from "react";

export default function RegistrationForm() {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    ruc: "",
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.company && formData.role) {
      setRegistered(true);
    }
  };

  // Generate a mock unique ticket code
  const ticketCode = `AQP-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden text-left transition-colors duration-300">

        {/* Subtle grid decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none transition-colors duration-300"></div>

        {!registered ? (
          <div className="space-y-8 relative z-10">
            <div className="text-center space-y-3">
              <span className="text-[10px] font-black text-brand-teal dark:text-brand-teal-light bg-brand-teal/10 border border-brand-teal/30 px-4 py-1.5 rounded-full inline-block uppercase tracking-widest">
                Cupos Limitados a 100 Asistentes Presenciales
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
                Solicitud de Acreditación Oficial
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-lg mx-auto font-medium leading-relaxed transition-colors duration-300">
                Al enviar este formulario, su perfil corporativo ingresará al proceso de evaluación del comité organizador de la UNSA. Recibirá su pase digital formal en un plazo máximo de 48 horas.
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5 max-w-xl mx-auto">

              {/* Grid 2 Cols for Name and Email */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-[10px] font-bold text-slate-500 dark:text-slate-450 uppercase tracking-widest transition-colors duration-300">
                    Nombre completo del solicitante
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Ej. Ing. Carlos Mendoza"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-250 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal dark:bg-slate-950 dark:border-slate-800 dark:text-white dark:placeholder-slate-650 transition-all font-semibold text-sm"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[10px] font-bold text-slate-500 dark:text-slate-455 uppercase tracking-widest transition-colors duration-300">
                    Correo corporativo de contacto
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="carlos.mendoza@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-250 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal dark:bg-slate-950 dark:border-slate-800 dark:text-white dark:placeholder-slate-650 transition-all font-semibold text-sm"
                  />
                </div>
              </div>

              {/* Grid 2 Cols for Company and Role */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-[10px] font-bold text-slate-500 dark:text-slate-450 uppercase tracking-widest transition-colors duration-300">
                    Razón Social / Nombre de la Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    placeholder="Ej. Industrias del Sur S.A.C."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-250 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal dark:bg-slate-950 dark:border-slate-800 dark:text-white dark:placeholder-slate-650 transition-all font-semibold text-sm"
                  />
                </div>

                {/* Managerial Role */}
                <div className="space-y-2">
                  <label htmlFor="role" className="block text-[10px] font-bold text-slate-500 dark:text-slate-450 uppercase tracking-widest transition-colors duration-300">
                    Cargo Directivo / Gerencial
                  </label>
                  <input
                    type="text"
                    id="role"
                    required
                    placeholder="Ej. Gerente General / Socio Fundador"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-250 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal dark:bg-slate-950 dark:border-slate-800 dark:text-white dark:placeholder-slate-650 transition-all font-semibold text-sm"
                  />
                </div>
              </div>

              {/* RUC */}
              <div className="space-y-2">
                <label htmlFor="ruc" className="block text-[10px] font-bold text-slate-500 dark:text-slate-450 uppercase tracking-widest transition-colors duration-300">
                  RUC de la Empresa (11 dígitos para postular a beneficios)
                </label>
                <input
                  type="text"
                  id="ruc"
                  maxLength={11}
                  placeholder="RUC de 11 dígitos"
                  value={formData.ruc}
                  onChange={(e) => setFormData({ ...formData, ruc: e.target.value.replace(/\D/g, '') })}
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-250 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-neon-lime focus:ring-1 focus:ring-neon-lime dark:bg-slate-950 dark:border-slate-800 dark:text-white dark:placeholder-slate-650 transition-all font-semibold text-sm"
                />
              </div>

              {/* Security info */}
              <div className="flex items-center gap-3 bg-slate-100/50 dark:bg-slate-950/30 border border-slate-200 dark:border-slate-850 p-4 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 transition-colors duration-300">
                <span className="text-brand-teal-light shrink-0 text-base">🛡️</span>
                <span>Sus datos corporativos serán tratados con estricta confidencialidad por el comité organizador.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-14 mt-4 inline-flex items-center justify-center font-black text-sm uppercase tracking-widest rounded-2xl bg-brand-teal text-white hover:bg-brand-teal-light transition-all shadow-xl shadow-brand-teal/10 cursor-pointer"
              >
                Enviar Solicitud de Acreditación
              </button>

            </form>
          </div>
        ) : (
          // Success Ticket View (High visual quality!)
          <div className="relative z-10 animate-[fadeIn_0.5s_ease-out] max-w-xl mx-auto space-y-8 text-center">

            <div className="space-y-2">
              <div className="w-16 h-16 bg-brand-teal/10 border border-brand-teal/30 rounded-full flex items-center justify-center text-brand-teal-light mx-auto mb-3 shadow-lg shadow-brand-teal/20 text-2xl">
                ✓
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight transition-colors duration-300">Solicitud Recibida</h3>
              <p className="text-slate-650 dark:text-slate-400 text-sm font-semibold max-w-sm mx-auto leading-relaxed transition-colors duration-300">
                Tu postulación ha sido enviada al comité evaluador de la Dirección de Innovación de la UNSA.
              </p>
            </div>

            {/* Premium Digital Ticket Design */}
            <div className="relative w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-colors duration-300">

              {/* Ticket Top bar */}
              <div className="bg-gradient-to-r from-brand-teal to-brand-blue px-6 py-4 flex items-center justify-between text-left text-white font-black">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-widest uppercase text-white/70">Pase Digital de Evaluación</span>
                  <span className="text-xs font-black uppercase tracking-wider text-white">III Simposio Internacional</span>
                </div>
                <span className="text-xs font-black bg-white/10 px-3 py-1 rounded border border-white/10 uppercase tracking-wide text-white">Aforo: 100</span>
              </div>

              <div className="p-6 space-y-6 text-left relative">

                {/* Details layout */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                  <div>
                    <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block transition-colors duration-300">Invitado</span>
                    <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white transition-colors duration-300">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block transition-colors duration-300">Código Provisional</span>
                    <span className="text-xs sm:text-sm font-black text-brand-teal dark:text-brand-teal-light font-mono transition-colors duration-300">{ticketCode}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block transition-colors duration-300">Empresa</span>
                    <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white transition-colors duration-300">{formData.company}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block transition-colors duration-300">Cargo</span>
                    <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white transition-colors duration-300">{formData.role}</span>
                  </div>
                  {formData.ruc && (
                    <div className="col-span-2">
                      <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block transition-colors duration-300">RUC de la Empresa</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-300 font-mono transition-colors duration-300">{formData.ruc}</span>
                    </div>
                  )}
                </div>

                {/* Dashed division with ticket notches */}
                <div className="relative my-6 border-t-2 border-dashed border-slate-200 dark:border-slate-800 flex justify-between">
                  <div className="absolute -left-9 -top-3 w-6 h-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full transition-colors duration-300"></div>
                  <div className="absolute -right-9 -top-3 w-6 h-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full transition-colors duration-300"></div>
                </div>

                {/* Ticket bottom: QR Code placeholder layout & event detail */}
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
                  <div className="space-y-1.5 text-center sm:text-left">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider transition-colors duration-300">Fecha y Hora de Acceso</div>
                    <div className="text-xs font-black text-slate-900 dark:text-white transition-colors duration-300">Miércoles, 1 de Julio de 2026</div>
                    <div className="text-[10px] text-brand-teal dark:text-brand-teal-light font-bold uppercase tracking-wide transition-colors duration-300">4:00 PM – Auditorio CCIA Arequipa</div>
                  </div>

                  {/* Visual QR Code barcode mock */}
                  <div className="flex flex-col items-center gap-1.5 shrink-0 bg-white p-2.5 rounded-xl border border-slate-200">
                    <div className="w-20 h-20 bg-slate-100 flex flex-col justify-between p-0.5 border border-slate-200">
                      {/* Generates abstract visual blocks for QR */}
                      <div className="flex justify-between">
                        <div className="w-6 h-6 bg-slate-900 rounded-sm"></div>
                        <div className="w-4 h-4 bg-slate-900 self-center"></div>
                        <div className="w-6 h-6 bg-slate-900 rounded-sm"></div>
                      </div>
                      <div className="flex justify-center gap-1 my-1">
                        <div className="w-4 h-5 bg-slate-900 rounded-sm"></div>
                        <div className="w-5 h-4 bg-slate-900 self-end"></div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="w-6 h-6 bg-slate-900 rounded-sm"></div>
                        <div className="w-2 h-4 bg-slate-900"></div>
                        <div className="w-6 h-6 bg-slate-900 rounded-sm"></div>
                      </div>
                    </div>
                    <span className="text-[8px] font-extrabold text-slate-800 tracking-widest font-mono">CCIA-RUI</span>
                  </div>
                </div>

              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-semibold max-w-sm mx-auto transition-colors duration-300">
              Se ha enviado un correo con los detalles de tu postulación y el número de contacto del MC a <span className="text-brand-teal dark:text-brand-teal-light font-bold">{formData.email}</span>.
            </p>

            <button
              onClick={() => setRegistered(false)}
              className="inline-flex items-center justify-center text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-brand-teal dark:hover:text-brand-teal-light transition-colors cursor-pointer"
            >
              Registrar otra postulación empresarial
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
