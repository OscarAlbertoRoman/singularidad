import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Metrics from '@/components/Metrics'
import Problema from '@/components/Problema'
import Soluciones from '@/components/Soluciones'
import Proceso from '@/components/Proceso'
import CtaFinal from '@/components/CtaFinal'
import Footer from '@/components/Footer'
import ChatbotPlaceholder from '@/components/ChatbotPlaceholder'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Metrics />
      <Problema />
      <Soluciones />
      <Proceso />
      <CtaFinal />
      <Footer />
      <ChatbotPlaceholder />
    </main>
  )
}
