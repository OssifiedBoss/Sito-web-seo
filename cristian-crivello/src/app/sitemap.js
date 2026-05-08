export default function sitemap() {
  const baseUrl = 'https://cristiancrivello.com'
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/seo`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/geo-aeo`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/google-analytics`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/google-search-console`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/seo-web3`, lastModified: new Date(), priority: 0.8 },
  ]
}
