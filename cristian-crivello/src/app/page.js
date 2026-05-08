import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Cristian Lorenzo Crivello — SEO · GEO · AEO Specialist',
  description: 'Consulente SEO, GEO e AEO basato a Palermo. Specializzato in AI Search e visibilità organica. Turn search into revenue.',
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
