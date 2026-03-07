'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pains = [
  { num: '01', title: 'Procesos 100% manuales', desc: 'Tareas repetitivas que consumen horas de tu equipo todos los días.' },
  { num: '02', title: 'Leads que se escapan',   desc: 'Consultas fuera del horario laboral que nunca reciben respuesta.' },
  { num: '03', title: 'Decisiones sin datos',   desc: 'Información dispersa en mails, documentos y conversaciones sin estructura.' },
  { num: '04', title: 'Competencia que avanza', desc: 'Otras empresas ya están implementando IA. El tiempo corre.' },
]

export default function Problema() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="problema" ref={ref} className="py-28 bg-gray-1 relative overflow-hidden">
      <div
        className="absolute -right-48 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%)' }}
      />
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-accent border border-accent/25 px-3.5 py-1.5 rounded-sm">
                <span className="opacity-50">//</span>El problema
              </span>
            </div>
            <h2 className="font-display text-[clamp(36px,4vw,60px)] font-light leading-[1.1] tracking-[-0.02em] mb-5">
              Tu empresa opera<br />como si fuera <em className="italic text-accent">2015</em>
            </h2>
            <p className="text-base text-gray-6 max-w-sm leading-[1.8] font-light">
              La mayoría de las empresas tienen acceso a herramientas de IA, pero no saben cómo integrarlas estratégicamente. Eso las deja atrás.
            </p>
          </motion.div>

          {/* Right: pain list */}
          <div>
            {pains.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16,1,0.3,1] }}
                className="flex gap-5 py-7 border-b border-white/[0.07] first:border-t first:border-white/[0.07]"
              >
                <span className="font-mono text-[11px] text-accent tracking-[0.08em] pt-1 min-w-[28px]">{p.num}</span>
                <div>
                  <strong className="block text-cream font-normal mb-1">{p.title}</strong>
                  <span className="text-sm text-gray-6 leading-relaxed">{p.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
