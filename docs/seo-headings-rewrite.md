# Riscrittura heading SEO/GEO — cristiancrivello.com

> Rilevato il 9 novembre 2026 dal deployment di produzione `dpl_fK9x1ogTwUMX11KbXFhfMwZgKbqQ`.
> Il sorgente del sito live **non è in questo repository**: viene deployato via CLI da locale
> (`src/app/page.tsx`, `src/lib/services.ts`, `src/app/servizi/[slug]/page.tsx`, …).
> Il file serve da specifica da applicare in locale (prompt pronto in fondo).

## Il perché, prima del come

1. **Gli heading sono il segnale on-page più pesato dopo il title.** Google li usa per capire l'argomento
   della sezione (passage ranking). Un H2 come "Si parte dalla misura" non porta alcun segnale: non contiene
   un'entità o una keyword che qualcuno cerchi.
2. **Gli LLM dividono la pagina in chunk, e l'heading fa da etichetta del chunk.** ChatGPT, Perplexity e
   AI Overviews recuperano passaggi, non pagine intere. Se l'heading è *la domanda* e il paragrafo sotto è
   *la risposta*, il passaggio si estrae da solo: questo è l'AEO applicato al tuo sito, che diventa anche
   la prova vivente di quello che vendi.
3. **Una keyword principale per URL, nessuna sovrapposizione.** Oggi home e `/servizi/ai-visibility-audit`
   hanno **lo stesso H1** ("Scopri quante volte le AI ti citano…") e `/servizi` riusa l'H2 della home. È
   cannibalizzazione: due URL in competizione sulla stessa intenzione di ricerca.
4. **Regola di stile: la keyword va nell'heading, la voce nel sottotitolo.** Il tono sobrio e da tecnico
   resta tutto, spostato nel `<p>` sotto o nell'eyebrow. Nessun copy viene buttato.

## Mappa keyword → URL (anti-cannibalizzazione)

| URL | Intento principale | Keyword primaria | Secondarie |
|---|---|---|---|
| `/` | commerciale, generico | consulente SEO e GEO | consulente GEO, visibilità su ChatGPT, consulente SEO Palermo |
| `/servizi` | navigazionale | servizi SEO e GEO | servizi GEO, consulenza AI search |
| `/servizi/ai-visibility-audit` | commerciale | audit visibilità AI / GEO audit | come comparire su ChatGPT, visibilità brand AI |
| `/servizi/geo-seo-mensile` | commerciale | consulenza GEO | generative engine optimization, ottimizzazione per ChatGPT |
| `/servizi/technical-ai-readiness` | commerciale/tecnico | SEO tecnica per l'AI | GPTBot, llms.txt, sito React SEO |
| `/servizi/analytics-tracking` | commerciale | consulente GA4 | tracciamento conversioni GA4, traffico da ChatGPT su GA4 |
| `/seo-web3` | commerciale verticale | SEO Web3 | SEO crypto, SEO blockchain, SEO DeFi |
| `/metodo` | informativo | come misurare la visibilità nelle AI | share of voice AI |
| `/chi-sono` | brand/navigazionale | Cristian Crivello consulente SEO | consulente SEO Palermo |

Volumi da verificare in Semrush/Ahrefs (DB IT) prima del deploy; il `CLAUDE.md` del sito riporta già
`consulente GEO`, `GEO audit`, `visibilità ChatGPT`, `generative engine optimization` a KD≈0.

---

## Home `/` — `src/app/page.tsx`

| Livello | Attuale | Proposto |
|---|---|---|
| H1 | Scopri quante volte le AI ti citano — con un numero verificabile. | **Consulente SEO e GEO: fatti trovare su Google e citare da ChatGPT** |
| sub sotto H1 | — | Misuro quante volte ChatGPT, Perplexity e Google AI Overviews citano il tuo brand — con un numero verificabile — e lavoro perché ti citino di più. |
| eyebrow | — | Consulente SEO · GEO · AEO a Palermo, per tutta Italia |
| H2 | Misuro quello che gli altri promettono. | **Visibilità su ChatGPT e AI Overviews: misurata, non promessa** |
| H2 | Si parte dalla misura. Poi si costruisce. | **Servizi SEO e GEO: dall'audit di visibilità AI alla consulenza mensile** |
| H3 ×4 | AI Visibility Audit / GEO + SEO mensile / Technical & AI-readiness / Analytics & Conversion Tracking | AI Visibility Audit — **audit di visibilità su ChatGPT** · GEO + SEO mensile — **consulenza GEO continuativa** · **SEO tecnica per l'AI** · **Analytics GA4 e tracciamento conversioni** |
| H2 | Quattro fasi, e un numero che si può rileggere. | **Come aumento la visibilità del tuo brand nelle AI, in 4 fasi** |
| H2 | SEO per progetti Web3, crypto e blockchain | invariato (è già keyword-first) |
| H2 | Domande | **Domande frequenti: SEO, GEO e visibilità su ChatGPT** |
| H2 (CTA) | Vediamo se posso aiutarti. | **Vuoi sapere se ChatGPT cita il tuo brand? Parliamone.** |

Variante H1 più locale, se vuoi presidiare Palermo: *Consulente SEO e GEO a Palermo: fatti trovare su Google e citare da ChatGPT*.

### FAQ home — riscritte sulle domande che la gente fa davvero

Restano in pagina **e** nello schema `FAQPage` (stesso array `FAQ`). Nota: dal 2023 Google mostra i rich
result FAQ solo per siti governativi/sanitari, quindi il valore è per gli LLM e per il passage ranking, non per lo snippet.

1. **Perché ChatGPT non cita la mia azienda?**
   Quasi sempre per una di tre ragioni: il sito non è leggibile dai crawler AI (rendering JavaScript, GPTBot bloccato nel robots.txt); i contenuti non rispondono in modo diretto alle domande che le persone fanno; il brand non compare nelle fonti terze che i modelli considerano autorevoli. L'audit serve a capire quale delle tre pesa di più nel tuo caso.

2. **Come faccio a comparire nelle risposte di ChatGPT, Perplexity e Google AI Overviews?**
   Servono tre cose insieme: un sito che i bot AI possano leggere, contenuti strutturati come risposte (domanda nell'heading, risposta nelle prime righe, dati verificabili) e citazioni del brand su fonti esterne. Nessuno può garantire una citazione; si può aumentare la probabilità e misurarla.

3. **Che differenza c'è tra SEO e GEO?**
   *(risposta attuale, invariata)* La SEO lavora perché il tuo sito compaia tra i risultati di ricerca. La GEO — Generative Engine Optimization — lavora perché il tuo brand venga citato dentro le risposte che ChatGPT, Perplexity e Google AI Overviews generano. I segnali si somigliano, ma il peso è diverso: nelle risposte generative conta molto di più che il contenuto risponda in modo estraibile alla domanda.

4. **Come si misura la visibilità di un brand nelle AI?**
   *(risposta attuale, invariata)* Si testano in modo sistematico i prompt rilevanti per il tuo mercato e si rileva chi viene citato e con che frequenza. È quello che faccio con Ahrefs Brand Radar: il risultato è una baseline numerica, confrontabile mese su mese.

5. **Le AI Overviews di Google mi stanno togliendo traffico: cosa posso fare?**
   Prima di tutto misurare: in Search Console si vede su quali query le impressioni tengono e i clic calano. Poi lavorare per essere *la fonte citata* nell'Overview, non il risultato sotto: risposte sintetiche in apertura di pagina, dati originali, schema markup coerente.

6. **La SEO serve ancora, adesso che si cerca con l'intelligenza artificiale?**
   Sì: gli assistenti AI che cercano sul web (ChatGPT search, Perplexity, AI Overviews) pescano in gran parte dalle pagine che già si posizionano bene. La SEO è la base; la GEO è lo strato che decide se, tra quelle pagine, viene citata la tua.

7. **Quanto costa una consulenza SEO e GEO?**
   L'AI Visibility Audit costa €490–900 a seconda di temi e competitor monitorati; il percorso GEO + SEO mensile parte da €900. Technical & AI-readiness e Analytics hanno preventivo su misura: dipendono da com'è costruito il sito, e un prezzo fisso andrebbe rinegoziato dopo.

8. **Quanto tempo serve per essere citati dalle AI?**
   Le correzioni tecniche si vedono in settimane, il tempo che i crawler ripassino. Su contenuti e autorità esterna servono di norma 2–4 mesi per vedere un cambiamento misurabile nella share of voice. Per questo si parte da una baseline: senza un numero di partenza non c'è modo di dire se ha funzionato.

9. **Lavori anche con agenzie, in white label?**
   *(risposta attuale, invariata)* Entrambe. Con le aziende come consulente diretto, con le agenzie come supporto strategico o in white-label sulla parte GEO, che è quella che oggi manca a quasi tutte.

> Verifica i tempi del punto 8 contro la tua esperienza reale: devono restare onesti, coerenti con "nessuna garanzia inventata".

---

## `/servizi` — `src/app/servizi/page.tsx`

| Livello | Attuale | Proposto |
|---|---|---|
| H1 | Si parte dalla misura. Poi si costruisce. | **Servizi SEO e GEO per essere trovati su Google e citati dalle AI** |
| sub | — | Si parte dalla misura. Poi si costruisce. *(lo slogan scende qui)* |
| H2 ×4 | nomi servizio | AI Visibility Audit: **quante volte ChatGPT ti cita** · GEO + SEO mensile: **consulenza GEO continuativa** · Technical & AI-readiness: **SEO tecnica per l'AI** · Analytics & Tracking: **GA4 e conversioni** |
| H2 CTA | Non sai da dove iniziare? Parliamone. | invariato |

---

## Pagine servizio — `src/lib/services.ts` + `src/app/servizi/[slug]/page.tsx`

### Modifica al template (vale per tutte e 4)

Oggi gli H2 sono generati come `Cosa include: {title}`, `Domande frequenti su {title}`. "AI Visibility Audit"
è un nome di prodotto: nessuno lo cerca. Aggiungere a `Service` un campo **`keyword`** (la forma che la
gente digita) e usarlo negli H2 generati:

```ts
/** Forma cercata del servizio, usata negli H2 generati dal template. */
keyword: string;
```

| H2 template attuale | H2 template proposto |
|---|---|
| Cosa include: {title} | Cosa include {keyword} |
| Cosa ottieni con {title} | Cosa ottieni con {keyword} |
| Quello che {title} non fa | Cosa non fa {keyword} |
| Come si svolge: {title} | Come funziona {keyword}, passo per passo |
| Domande frequenti su {title} | Domande frequenti su {keyword} |

Gli H3 delle fasi (Kick-off, Misurazione…) restano: sono etichette di processo, non target.

### AI Visibility Audit
- `keyword`: **l'audit di visibilità AI**
- **H1:** Audit di visibilità AI: scopri quante volte ChatGPT, Perplexity e Google ti citano
- *(attuale: identico all'H1 della home → cannibalizzazione)*
- **FAQ** — tieni le 4 attuali, riformula la prima e aggiungi:
  - *Si può davvero misurare la visibilità su ChatGPT?* → **Si può misurare quante volte ChatGPT cita il mio brand?**
  - **Perché ChatGPT cita i miei competitor e non me?** — L'audit lo misura: per ogni prompt rilevante si vede chi viene citato e da quali fonti il modello prende l'informazione. Di solito la differenza sta lì, nelle fonti, più che nel sito.
  - **Quali assistenti AI vengono analizzati?** — ChatGPT, Perplexity e Google AI Overviews, tramite Ahrefs Brand Radar.
  - **Quanto costa un audit di visibilità AI?** — Tra €490 e €900: la fascia dipende dal numero di temi e competitor da monitorare.

### GEO + SEO mensile
- `keyword`: **la consulenza GEO mensile**
- **H1:** Consulenza GEO mensile: più citazioni su ChatGPT e AI Overviews, misurate ogni mese
- *(attuale: "La tua visibilità AI misurata ogni mese, non promessa una volta." → diventa sottotitolo)*
- **FAQ** — tieni le 3, riformula e aggiungi:
  - *Perché parte da €900?* → **Quanto costa la consulenza GEO al mese?**
  - **In quanto tempo si vedono risultati con la GEO?**
  - **Cos'è la Generative Engine Optimization?** (2 righe + link all'articolo del blog)

### Technical & AI-readiness
- `keyword`: **la SEO tecnica per l'AI**
- **H1:** SEO tecnica per l'AI: rendi il tuo sito leggibile da ChatGPT e dai crawler AI
- *(attuale: "Se un LLM non riesce a leggerti, non può citarti." → ottimo, diventa sottotitolo)*
- **FAQ** — tieni le 3 (la React è perfetta) e aggiungi:
  - **Come faccio a sapere se GPTBot e gli altri bot AI leggono il mio sito?** — Log del server e robots.txt: si verifica chi passa, cosa riceve e se il contenuto è nell'HTML o solo dopo il JavaScript.
  - **Serve il file llms.txt?** — Risposta onesta: utile e a costo quasi zero, ma oggi non è uno standard che i principali assistenti dichiarano di usare. Non sostituisce un HTML leggibile.

### Analytics & Tracking
- `keyword`: **il tracciamento GA4**
- **H1:** Consulente GA4: tracciamento conversioni e traffico da ChatGPT, fatto bene
- *(attuale: "Sapere quali contatti arrivano davvero, e da dove." → sottotitolo)*
- **FAQ** — tieni le 3 e aggiungi:
  - **Come vedo in GA4 il traffico che arriva da ChatGPT e Perplexity?** — query reale e in crescita, aggancio perfetto tra analytics e AI search: referral `chatgpt.com`, `perplexity.ai`, gruppo di canali personalizzato "AI Assistants".

---

## `/seo-web3` — `src/app/seo-web3/page.tsx`

| Livello | Attuale | Proposto |
|---|---|---|
| H1 | Il 95% dei siti Web3 è invisibile. Il tuo può non esserlo. | **SEO per Web3 e crypto: il 95% dei siti è invisibile, il tuo può non esserlo** |
| H2 | I tre errori che vedo in quasi ogni progetto | I tre errori SEO che vedo in quasi ogni progetto crypto |
| H2 | Cosa faccio per i progetti Web3 | Servizi SEO per progetti Web3, DeFi e NFT |
| H3 | L'opportunità AI | Farsi citare da ChatGPT nel settore crypto |
| H2 CTA | Hai un progetto Web3 da rendere visibile? | invariato |

Se la pagina non ha FAQ, aggiungerne 3: *Come si fa SEO per un progetto crypto?* · *Google penalizza i siti crypto?* · *Come rendere indicizzabile una dApp in React?*

## `/metodo` — `src/app/metodo/page.tsx`

| Livello | Attuale | Proposto |
|---|---|---|
| H1 | Nessuna magia. Un numero, e cosa ci fai. | **Come misuro la visibilità del tuo brand nelle AI: il metodo in 4 fasi** |
| H2 | 1. Misuro | 1. Misuro le citazioni su ChatGPT, Perplexity e AI Overviews |
| H2 | 2. Diagnostico | 2. Capisco perché le AI non ti citano |
| H2 | 3. Intervengo | 3. Intervengo su tecnica, contenuti e fonti esterne |
| H2 | 4. Rimisuro | 4. Rimisuro e confronto con la baseline |
| H2 | Che aspetto ha una misura | Esempio: la share of voice di un brand nelle risposte AI |
| H2 | I principi che non negozio | invariato (sezione di brand, non di ricerca) |

## `/chi-sono` — `src/app/chi-sono/page.tsx`

| Livello | Attuale | Proposto |
|---|---|---|
| H1 | Cristian Lorenzo Crivello | **Cristian Lorenzo Crivello, consulente SEO e GEO a Palermo** |
| H2 | Come la penso | Come lavoro su SEO e AI Search |

Il nome resta in testa all'H1: è l'entità che vuoi far associare a "consulente GEO" nei knowledge graph degli LLM.

## Priorità basse
- `/contatti` H1 "Parliamo del tuo progetto." → *Contatta un consulente SEO e GEO* (vecchio H1 come sottotitolo).
- `/blog` H1 "Appunti dal fronte della ricerca." → *Blog su SEO, GEO e AI Search*. Ora la pagina è `noindex, nofollow`: se è voluto, la modifica vale solo per l'utente.
- Allineare i `<title>` dei servizi alla keyword (es. *Audit visibilità AI (ChatGPT, Perplexity) | Cristian Crivello*).

---

## Prompt per applicare tutto con Claude Code in locale

```
Applica docs/seo-headings-rewrite.md al sito Next.js (il file è nel repo OssifiedBoss/Sito-web-seo,
branch claude/hopeful-ritchie-fsggx2). Regole:
- Mantieni struttura JSX, classi Tailwind e <span className="text-gradient"> (spostalo sulla parte
  keyword dell'H1 nuovo).
- Il vecchio H1/H2 non si cancella: diventa sottotitolo o eyebrow, come indicato.
- Aggiungi il campo `keyword` a Service in src/lib/services.ts e usalo negli H2 di servizi/[slug]/page.tsx.
- Aggiorna gli array FAQ: lo schema FAQPage deve restare generato dallo stesso array.
- Alla fine: npm run build, poi elenca gli H1/H2 di ogni pagina dall'HTML in out/ per verifica.
```
