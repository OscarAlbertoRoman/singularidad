export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="font-mono text-sm tracking-[0.2em] uppercase text-cream mb-3">SINGULARIDAD</div>
            <p className="text-sm text-gray-5 leading-relaxed max-w-[240px]">
              Agencia de Inteligencia Artificial.<br />
              Automatizamos tu empresa con IA de última generación.
            </p>
          </div>
          {[
            { title: 'Soluciones', links: ['Chatbot IA','Segundo Cerebro','Automatizaciones','Contenido IA'] },
            { title: 'Empresa',   links: ['Proceso','Enfoque','Casos de uso','Blog'] },
            { title: 'Contacto',  links: ['hola@singularidad.net.ar','WhatsApp','LinkedIn'] },
          ].map(col => (
            <div key={col.title}>
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-gray-5 mb-5">{col.title}</div>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm text-gray-5 hover:text-cream transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-7 border-t border-white/[0.07]">
          <span className="font-mono text-[11px] text-gray-5 tracking-[0.06em]">
            © 2025 SINGULARIDAD — Todos los derechos reservados
          </span>
          <span className="font-mono text-[11px] text-gray-4 tracking-[0.08em]">
            singularidad.net.ar
          </span>
        </div>
      </div>
    </footer>
  )
}
