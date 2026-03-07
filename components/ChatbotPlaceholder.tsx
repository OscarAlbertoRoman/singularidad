'use client'

/**
 * CHATBOT PLACEHOLDER COMPONENT
 * ==============================
 * Este componente es un placeholder para la integración futura del chatbot.
 *
 * Para integrar tu chatbot real:
 * 1. Reemplazar el contenido del chatbot-window con tu widget
 * 2. Conectar toggleChatbot() con la API de tu proveedor
 * 3. Opciones populares: Tidio, Intercom, Botpress, o API propia con Anthropic
 *
 * El botón flotante y el sistema de estado ya están listos.
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChatbotPlaceholder() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16,1,0.3,1] }}
            className="absolute bottom-[72px] right-0 w-[340px] bg-gray-2 border border-white/[0.07] rounded-xl p-6 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.07]">
              <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center font-mono text-xs text-accent">
                S.
              </div>
              <div>
                <strong className="block text-sm font-normal text-cream">Asistente Singularidad</strong>
                <span className="font-mono text-[10px] text-gray-5">Inteligencia Artificial</span>
              </div>
              <div className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Online
              </div>
            </div>

            {/* Message bubble */}
            <div className="bg-gray-3 rounded-tl-none rounded-xl p-3.5 text-sm text-gray-6 leading-relaxed mb-4">
              👋 ¡Hola! Soy el asistente de Singularidad. ¿En qué puedo ayudarte hoy?
            </div>

            {/* Placeholder note */}
            <p className="font-mono text-[10px] text-gray-4 text-center tracking-[0.06em]">
              // CHATBOT INTEGRATION PENDING //
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Abrir asistente IA"
        className="relative w-[60px] h-[60px] bg-accent rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(200,255,0,0.3)] hover:scale-110 hover:shadow-[0_12px_48px_rgba(200,255,0,0.4)] transition-all"
      >
        {/* Pulse ring */}
        <span className="absolute inset-[-4px] rounded-full border-2 border-accent/30 animate-pulse" />

        {/* BETA badge */}
        <span className="absolute -top-2 -right-2 bg-gray-3 text-accent font-mono text-[8px] tracking-[0.1em] px-1.5 py-0.5 rounded-sm border border-accent/30">
          BETA
        </span>

        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>
    </div>
  )
}
