'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CtaFinal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="cta-final" ref={ref} className="py-40 relative overflow-hidden text-center">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(200,255,0,0.08) 0%, transparent 70%)' }}
      />

      {/* Background ghost text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-light whitespace-nowrap pointer-events-none select-none"
        style={{ fontSize: 'clamp(80px,15vw,200px)', color: 'rgba(255,255,255,0.02)', letterSpacing: '-0.05em' }}
      >
        SINGULARIDAD
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-7"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-accent border border-accent/25 px-3.5 py-1.5 rounded-sm">
            <span className="opacity-50">//</span>Empezá hoy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16,1,0.3,1] }}
          className="font-display text-[clamp(36px,5vw,72px)] font-light leading-[1.1] tracking-[-0.02em] mx-auto max-w-2xl mb-6"
        >
          Tu empresa puede trabajar<br />
          con <em className="italic text-accent">inteligencia artificial</em><br />
          desde hoy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base text-gray-6 mb-12"
        >
          Primera consulta sin costo. Resultado visible en 48 horas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex justify-center"
        >
          <button className="inline-flex items-center gap-3 bg-accent text-black font-mono text-xs tracking-[0.08em] uppercase px-10 py-5 rounded-sm hover:bg-accent-2 hover:-translate-y-0.5 hover:shadow-[0_12px_48px_rgba(200,255,0,0.3)] transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Iniciar conversación →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
