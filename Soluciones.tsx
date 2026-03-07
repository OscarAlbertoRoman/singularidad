'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const solutions = [
  {
    num: 'SOLUCIÓN — 01',
    title: 'Sitio Web Inteligente con Chatbot',
    desc: 'Sitios web modernos con asistentes de inteligencia artificial entrenados con la información de tu empresa. Convierte visitantes en clientes mientras duermes.',
    benefits: ['Atención automatizada 24/7', 'Captura y calificación de leads', 'Respuestas en idioma natural', 'Integración con WhatsApp y CRM'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    num: 'SOLUCIÓN — 02',
    title: 'Segundo Cerebro Empresarial',
    desc: 'Sistema de IA que aprende del negocio y actúa como un consultor interno. Analiza datos, recuerda todo y genera estrategias accionables.',
    benefits: ['Memoria empresarial estructurada', 'Análisis rápido de información', 'Soporte inteligente para decisiones', 'Informes y resúmenes automáticos'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
]

export default function Soluciones() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="soluciones" ref={ref} className="py-28">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="mb-16"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-accent border border-accent/25 px-3.5 py-1.5 rounded-sm">
              <span className="opacity-50">//</span>Soluciones
            </span>
          </div>
          <h2 className="font-display text-[clamp(36px,4vw,60px)] font-light leading-[1.1] tracking-[-0.02em] mb-5">
            Lo que construimos<br />para tu <em className="italic text-accent">empresa</em>
          </h2>
          <p className="text-base text-gray-6 max-w-md leading-[1.8] font-light">
            No vendemos software genérico. Diseñamos sistemas de IA a medida, integrados con tu operación real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-white/[0.07] border border-white/[0.07] rounded-lg overflow-hidden">
          {solutions.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16,1,0.3,1] }}
              className="bg-gray-1 hover:bg-gray-2 p-14 relative overflow-hidden group transition-colors duration-500"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="font-mono text-[11px] text-gray-4 tracking-[0.1em] mb-6">{s.num}</div>
              <div className="w-12 h-12 border border-accent/20 group-hover:border-accent/50 group-hover:bg-accent/5 rounded-sm flex items-center justify-center mb-7 text-accent transition-all duration-500">
                {s.icon}
              </div>
              <h3 className="font-display text-[28px] font-light leading-snug mb-4">{s.title}</h3>
              <p className="text-sm text-gray-6 leading-relaxed mb-8">{s.desc}</p>
              <ul className="space-y-3">
                {s.benefits.map(b => (
                  <li key={b} className="flex items-center gap-3 font-mono text-xs text-gray-6 tracking-[0.04em]">
                    <span className="w-4 h-px bg-accent flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
