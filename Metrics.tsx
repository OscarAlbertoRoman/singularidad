'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  { num: '48', unit: 'h',   label: 'Prototipo funcional' },
  { num: '3',  unit: '×',   label: 'Más leads capturados' },
  { num: '24', unit: '/7',  label: 'Atención automatizada' },
  { num: '0',  unit: 'hs',  label: 'Tareas manuales residuales' },
]

export default function Metrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="border-t border-b border-white/[0.07] py-8">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
              className="px-8 first:pl-0 border-r border-white/[0.07] last:border-r-0 py-4 md:py-0"
            >
              <div className="font-display text-[42px] font-light leading-none mb-1.5">
                {m.num}<span className="text-accent">{m.unit}</span>
              </div>
              <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-gray-5">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
