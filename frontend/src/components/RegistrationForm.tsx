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
      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-left">

        {/* Subtle grid decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>

        {!registered ? (
          <div className="space-y-8 relative z-10">
            <div className="text-center space-y-3">
              <span className="text-[10px] font-black text-neon-lime bg-neon-lime/10 border border-neon-lime/30 px-4 py-1.5 rounded-full inline-block uppercase tracking-widest">
                Cupos Limitados a 100 Asistentes Presenciales
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Solicitud de Acreditación Oficial
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto font-medium leading-relaxed">
                Al enviar este formulario, su perfil corporativo ingresará al proceso de evaluación del comité organizador de la UNSA. Recibirá su pase digital formal en un plazo máximo de 48 horas.
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5 max-w-xl mx-auto">

              {/* Grid 2 Cols for Name and Email */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-[10px] font-bold text-slate-450 uppercase tracking-widest">
                    Nombre completo del solicitante
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Ej. Ing. Carlos Mendoza"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-neon-lime focus:ring-1 focus:ring-neon-lime transition-all font-semibold text-sm"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[10px] font-bold text-slate-455 uppercase tracking-widest">
                    Correo corporativo de contacto
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="carlos.mendoza@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-neon-lime focus:ring-1 focus:ring-neon-lime transition-all font-semibold text-sm"
                  />
                </div>
              </div>

              {/* Grid 2 Cols for Company and Role */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-[10px] font-bold text-slate-450 uppercase tracking-widest">
                    Razón Social / Nombre de la Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    placeholder="Ej. Industrias del Sur S.A.C."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-neon-lime focus:ring-1 focus:ring-neon-lime transition-all font-semibold text-sm"
                  />
                </div>

                {/* Managerial Role */}
                <div className="space-y-2">
                  <label htmlFor="role" className="block text-[10px] font-bold text-slate-450 uppercase tracking-widest">
                    Cargo Directivo / Gerencial
                  </label>
                  <input
                    type="text"
                    id="role"
                    required
                    placeholder="Ej. Gerente General / Socio Fundador"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-neon-lime focus:ring-1 focus:ring-neon-lime transition-all font-semibold text-sm"
                  />
                </div>
              </div>

              {/* RUC */}
              <div className="space-y-2">
                <label htmlFor="ruc" className="block text-[10px] font-bold text-slate-450 uppercase tracking-widest">
                  RUC de la Empresa (11 dígitos para postular a beneficios)
                </label>
                <input
                  type="text"
                  id="ruc"
                  maxLength={11}
                  placeholder="RUC de 11 dígitos"
                  value={formData.ruc}
                  onChange={(e) => setFormData({ ...formData, ruc: e.target.value.replace(/\D/g, '') })}
                  className="w-full h-12 px-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-neon-lime focus:ring-1 focus:ring-neon-lime transition-all font-semibold text-sm"
                />
              </div>

              {/* Security info */}
              <div className="flex items-center gap-3 bg-slate-950/30 border border-slate-850 p-4 rounded-xl text-xs font-semibold text-slate-400">
                <span className="text-neon-cyan shrink-0 text-base">🛡️</span>
                <span>Sus datos corporativos serán tratados con estricta confidencialidad por el comité organizador.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-14 mt-4 inline-flex items-center justify-center font-black text-sm uppercase tracking-widest rounded-2xl bg-neon-lime text-black hover:opacity-95 active:scale-[0.98] transition-all shadow-xl shadow-cyan-950/20"
              >
                Enviar Solicitud de Acreditación
              </button>

            </form>
          </div>
        ) : (
          // Success Ticket View (High visual quality!)
          <div className="relative z-10 animate-[fadeIn_0.5s_ease-out] max-w-xl mx-auto space-y-8 text-center">

            <div className="space-y-2">
              <div className="w-16 h-16 bg-neon-lime/10 border border-neon-lime/30 rounded-full flex items-center justify-center text-neon-lime mx-auto mb-3 shadow-lg shadow-neon-lime/20 text-2xl">
                ✓
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Solicitud Recibida</h3>
              <p className="text-slate-400 text-sm font-semibold max-w-sm mx-auto leading-relaxed">
                Tu postulación ha sido enviada al comité evaluador de la Dirección de Innovación de la UNSA.
              </p>
            </div>

            {/* Premium Digital Ticket Design */}
            <div className="relative w-full bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">

              {/* Ticket Top bar */}
              <div className="bg-gradient-to-r from-neon-lime to-neon-cyan px-6 py-4 flex items-center justify-between text-left text-black font-black">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-widest uppercase text-black/70">Pase Digital de Evaluación</span>
                  <span className="text-xs font-black uppercase tracking-wider text-black">III Simposio Internacional</span>
                </div>
                <span className="text-xs font-black bg-black/10 px-3 py-1 rounded border border-black/10 uppercase tracking-wide text-black">Aforo: 100</span>
              </div>

              <div className="p-6 space-y-6 text-left relative">

                {/* Details layout */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                  <div>
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Invitado</span>
                    <span className="text-xs sm:text-sm font-black text-white">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Código Provisional</span>
                    <span className="text-xs sm:text-sm font-black text-neon-lime font-mono">{ticketCode}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Empresa</span>
                    <span className="text-xs sm:text-sm font-black text-white">{formData.company}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Cargo</span>
                    <span className="text-xs sm:text-sm font-black text-white">{formData.role}</span>
                  </div>
                  {formData.ruc && (
                    <div className="col-span-2">
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">RUC de la Empresa</span>
                      <span className="text-xs font-bold text-slate-300 font-mono">{formData.ruc}</span>
                    </div>
                  )}
                </div>

                {/* Dashed division with ticket notches */}
                <div className="relative my-6 border-t-2 border-dashed border-slate-800 flex justify-between">
                  <div className="absolute -left-9 -top-3 w-6 h-6 bg-slate-900 border-r border-slate-800 rounded-full"></div>
                  <div className="absolute -right-9 -top-3 w-6 h-6 bg-slate-900 border-l border-slate-800 rounded-full"></div>
                </div>

                {/* Ticket bottom: QR Code placeholder layout & event detail */}
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
                  <div className="space-y-1.5 text-center sm:text-left">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Fecha y Hora de Acceso</div>
                    <div className="text-xs font-black text-white">Miércoles, 1 de Julio de 2026</div>
                    <div className="text-[10px] text-neon-cyan font-bold uppercase tracking-wide">4:00 PM – Auditorio CCIA Arequipa</div>
                  </div>

                  {/* Visual QR Code barcode mock */}
                  <div className="flex flex-col items-center gap-1.5 shrink-0 bg-white p-2.5 rounded-xl">
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

            <p className="text-slate-400 text-xs leading-relaxed font-semibold max-w-sm mx-auto">
              Se ha enviado un correo con los detalles de tu postulación y el número de contacto del MC a <span className="text-neon-lime font-bold">{formData.email}</span>.
            </p>

            <button
              onClick={() => setRegistered(false)}
              className="inline-flex items-center justify-center text-xs font-black uppercase tracking-wider text-slate-500 hover:text-neon-lime transition-colors"
            >
              Registrar otra postulación empresarial
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
