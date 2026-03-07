'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07]
        bg-black/70 backdrop-blur-xl transition-all duration-500
        ${scrolled ? 'py-3' : 'py-5'}
      `}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-mono text-sm tracking-[0.2em] uppercase text-cream">
          SINGULAR<span className="text-accent">.</span>IDAD
        </a>

        {/* Links */}
        <ul className="hidden md:flex gap-9 list-none">
          {[['Soluciones','#soluciones'],['Proceso','#proceso'],['Enfoque','#problema']].map(([label,href])=>(
            <li key={href}>
              <a
                href={href}
                className="font-mono text-[11px] tracking-[0.1em] uppercase text-gray-5 hover:text-cream transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#cta-final"
          className="font-mono text-[11px] tracking-[0.1em] uppercase bg-accent text-black px-5 py-2.5 rounded-sm hover:bg-accent-2 hover:-translate-y-px transition-all"
        >
          Contactar
        </a>
      </div>
    </motion.nav>
  )
}
