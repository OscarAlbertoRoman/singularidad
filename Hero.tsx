'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,255,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,255,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)' }}
      />

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,255,0,0.15), transparent)' }}
        animate={{ y: ['-10vh', '110vh'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Corner accents */}
      <div className="absolute top-24 left-8 w-14 h-14 border-t border-l border-accent/20" />
      <div className="absolute bottom-20 right-8 w-14 h-14 border-b border-r border-accent/20" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="max-w-4xl">

          {/* Eyebrow tag */}
          <motion.div {...fadeUp(0.1)} className="mb-8">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-accent border border-accent/25 px-3.5 py-1.5 rounded-sm">
              <span className="opacity-50">//</span>
              Agencia de Inteligencia Artificial
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            {...fadeUp(0.25)}
            className="font-display text-[clamp(52px,7vw,96px)] font-light leading-[1.05] tracking-[-0.02em] mb-7"
          >
            Inteligencia Artificial<br />
            aplicada a<br />
            <em className="italic text-accent">negocios reales</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.4)}
            className="text-lg font-light text-gray-6 max-w-[560px] leading-relaxed mb-12"
          >
            Sistemas de IA que automatizan procesos, capturan clientes
            y ayudan a tomar mejores decisiones.
          </motion.p>

          {/* Actions */}
          <motion.div {...fadeUp(0.55)} className="flex items-center gap-5 flex-wrap">
            <button className="inline-flex items-center gap-2.5 bg-accent text-black font-mono text-xs tracking-[0.08em] uppercase px-8 py-4 rounded-sm hover:bg-accent-2 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,255,0,0.25)] transition-all">
              <span className="w-2 h-2 rounded-full bg-black/40" />
              Hablar con nuestro asistente IA
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <a href="#soluciones" className="font-mono text-xs tracking-[0.08em] uppercase text-gray-5 hover:text-cream transition-colors py-4">
              Ver soluciones ↓
            </a>
          </motion.div>
        </div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 right-0 flex items-center gap-2.5 font-mono text-[11px] text-gray-5 tracking-[0.08em]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Sistema activo — singularidad.net.ar
        </motion.div>
      </div>
    </section>
  )
}
