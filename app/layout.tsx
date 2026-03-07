import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'SINGULARIDAD — Inteligencia Artificial para Negocios Reales',
  description: 'Sistemas de IA que automatizan procesos, capturan clientes y ayudan a tomar mejores decisiones.',
  keywords: ['inteligencia artificial', 'automatización', 'chatbot', 'agencia IA', 'Argentina'],
  metadataBase: new URL('https://singularidad.net.ar'),
  openGraph: {
    title: 'SINGULARIDAD — IA para Negocios Reales',
    description: 'Sistemas de IA que automatizan procesos, capturan clientes y ayudan a tomar mejores decisiones.',
    url: 'https://singularidad.net.ar',
    siteName: 'SINGULARIDAD',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmMono.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
