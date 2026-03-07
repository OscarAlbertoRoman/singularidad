'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { num: '01', title: 'Diagnóstico',     desc: 'Analizamos tu operación actual, identificamos oportunidades de automatización y definimos el alcance.' },
  { num: '02', title: 'Diseño',          desc: 'Arquitectura del sistema de IA, flujos conversacionales y experiencia adaptada a tu marca.' },
  { num: '03', title: 'Implementación',  desc: 'Desarrollo e integración del sistema. Entrenamiento con datos reales de tu empresa.' },
  { num: '04', title: 'Optimización',    desc: 'Monitoreo continuo, mejora iterativa del modelo y soporte técnico post-lanzamiento.' },
]

export default function Proceso() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="proceso" ref={ref} className="py-28 bg-gray-1">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-accent border border-accent/25 px-3.5 py-1.5 rounded-sm">
              <span className="opacity-50">//</span>Proceso
            </span>
          </div>
          <h2 className="font-display text-[clamp(36px,4vw,60px)] font-light leading-[1.1] tracking-[-0.02em] mb-5">
            Cómo <em className="italic text-accent">trabajamos</em><br />juntos
          </h2>
          <p className="text-base text-gray-6 max-w-md leading-[1.8] font-light">
            Un proceso probado para implementar IA sin disrupciones operativas ni costos ocultos.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative">
          {/* Connector line */}
          <div className="absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden md:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.16,1,0.3,1] }}
              className="text-center group"
            >
              <div className="flex justify-center mb-7">
                <div className="w-14 h-14 rounded-full border border-gray-4 group-hover:border-accent group-hover:bg-accent/5 group-hover:text-accent flex items-center justify-center font-mono text-xs text-gray-5 bg-gray-1 relative z-10 transition-all duration-500">
                  {s.num}
                </div>
              </div>
              <h4 className="font-display text-[22px] font-light mb-3">{s.title}</h4>
              <p className="text-sm text-gray-5 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
