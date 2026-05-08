import './globals.css'

export const metadata = {
  title: 'Cristian Lorenzo Crivello — SEO · GEO · AEO Specialist',
  description: 'Consulente SEO, GEO e AEO. Specializzato in AI Search, ottimizzazione per i motori di ricerca e strategie di visibilità organica. Turn search into revenue.',
  keywords: 'consulente SEO, GEO, AEO, AI search, ottimizzazione motori ricerca, SEO Palermo, SEO Italia',
  authors: [{ name: 'Cristian Lorenzo Crivello' }],
  openGraph: {
    title: 'Cristian Lorenzo Crivello — SEO · GEO · AEO Specialist',
    description: 'Turn search into revenue. Consulente SEO con approccio data-driven e specializzazione in AI Search.',
    url: 'https://cristiancrivello.com',
    siteName: 'Cristian Lorenzo Crivello',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristian Lorenzo Crivello — SEO · GEO · AEO',
    description: 'Turn search into revenue.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
