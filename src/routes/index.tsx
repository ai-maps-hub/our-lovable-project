import { createFileRoute } from "@tanstack/react-router";
import heroLibro from "@/assets/hero-libro.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Book for a Meal — un libro diventa un pasto" },
      {
        name: "description",
        content:
          "A.B.F.A.M. è un'iniziativa solidale che garantisce pasti gratuiti attraverso la raccolta, lo scambio e la rivendita di libri usati e a fine vita. Il ricavato va interamente in beneficenza.",
      },
      { property: "og:title", content: "A Book for a Meal — un libro diventa un pasto" },
      {
        property: "og:description",
        content:
          "I libri, anche quelli che non trovano più posto su uno scaffale, hanno ancora valore: quel valore diventa un pasto per chi ne ha bisogno.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const passaggi = [
  {
    n: "01",
    titolo: "Raccolta",
    testo:
      "I libri usati vengono raccolti tramite donazioni da privati, biblioteche, librerie e altri canali.",
  },
  {
    n: "02",
    titolo: "Scambio / Rivendita",
    testo: "I libri vengono scambiati o rivenduti attraverso canali fisici e/o digitali.",
  },
  {
    n: "03",
    titolo: "Destinazione del ricavato",
    testo: "Il ricavato viene convertito in pasti gratuiti per persone in difficoltà.",
  },
];

const obiettivi = [
  "Garantire pasti gratuiti a persone in difficoltà economica",
  "Dare una seconda vita ai libri usati e a fine vita, sottraendoli al macero",
  "Destinare i libri non venduti a percorsi di utilità sociale",
  "Costruire una rete virtuosa tra donatori di libri, lettori, partner del settore editoriale e librerie",
  "Espandere il modello anche al mercato del libro nuovo, coinvolgendo editori, scrittori e distributori",
  "Destinare il ricavato interamente in beneficenza",
  "Dare visibilità al settore editoriale e ai suoi protagonisti",
  "Riportare le persone nelle librerie, valorizzandole come luoghi di cultura e comunità",
  "Riavvicinare le persone alla lettura, abbassando le barriere di accesso ai libri",
];

const destinazioni = [
  {
    titolo: "Alfabetizzazione",
    testo: "Supporto a chi non ha ancora acquisito competenze di lettura e scrittura.",
  },
  {
    titolo: "Apprendimento",
    testo:
      "Materiali didattici per contesti scolastici o extrascolastici con poche risorse.",
  },
  {
    titolo: "Sostegno a persone con disabilità",
    testo: "Libri adatti o adattabili a esigenze specifiche.",
  },
  {
    titolo: "Integrazione di stranieri",
    testo: "Percorsi di apprendimento della lingua e della cultura italiana.",
  },
  {
    titolo: "Anziani",
    testo: "Lettura come strumento di stimolo cognitivo, socializzazione e benessere.",
  },
  {
    titolo: "Bambini e ragazzi",
    testo:
      "Percorsi di educazione digitale, civica, finanziaria e competenze trasversali sempre più fondamentali nella vita quotidiana, ma ancora poco presenti nei programmi scolastici tradizionali.",
  },
];

const sviluppi = [
  {
    titolo: "Piattaforma digitale",
    testo:
      "Realizzazione di una piattaforma online dedicata allo scambio e alla rivendita di libri usati.",
    punti: [
      "Ampliare il bacino di utenti e donatori",
      "Semplificare la logistica di raccolta, scambio e distribuzione",
      "Rendere l'iniziativa scalabile a livello nazionale",
    ],
  },
  {
    titolo: "Settore del libro nuovo",
    testo:
      "Estensione del progetto al mercato editoriale tradizionale, attraverso partnership con:",
    punti: [
      "Editori — donazioni di copie invendute o quota del ricavato delle vendite",
      "Scrittori — partecipazione attiva e promozione dell'iniziativa",
      "Distributori — supporto logistico e canali di distribuzione",
      "Librerie — punti di raccolta, scambio e ritiro fisico",
    ],
  },
];

const partner = [
  { tipo: "Editori", note: "—" },
  { tipo: "Scrittori", note: "—" },
  { tipo: "Distributori", note: "—" },
  { tipo: "Organizzazioni benefiche", note: "Destinatari del ricavato" },
  { tipo: "Librerie", note: "Potenziali punti di raccolta" },
];

const roadmap = [
  "Definizione del modello operativo e dei processi",
  "Identificazione delle organizzazioni benefiche partner",
  "Avvio raccolta libri usati (canali iniziali)",
  "Sviluppo e lancio della piattaforma digitale",
  "Outreach verso editori, scrittori e distributori",
  "Prima campagna di comunicazione pubblica",
  "Primo bilancio sociale / report d'impatto",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent/15 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-accent-deep">
      {children}
    </span>
  );
}

function Index() {
  return (
    <>
      <nav className="sticky top-0 z-20 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-[1240px] items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl bg-accent font-display text-lg font-extrabold text-accent-foreground">
              A
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              A Book for a Meal
            </span>
          </div>
          <div className="hidden items-center gap-8 font-sans text-sm text-foreground/75 md:flex">
            <a className="transition-colors hover:text-accent-deep" href="#come-funziona">
              Come funziona
            </a>
            <a className="transition-colors hover:text-accent-deep" href="#obiettivi">
              Obiettivi
            </a>
            <a className="transition-colors hover:text-accent-deep" href="#sviluppi">
              Sviluppi
            </a>
            <a className="transition-colors hover:text-accent-deep" href="#roadmap">
              Roadmap
            </a>
          </div>
          <a
            href="#partecipa"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-sans text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Partecipa
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-[1240px] px-5 pt-10 md:px-8 md:pt-16">
        <div className="overflow-hidden rounded-4xl bg-paper p-7 md:p-14">
          <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr] md:gap-14">
            <div>
              <div className="animate-rise">
                <Eyebrow>Iniziativa solidale · aggiornato ad aprile 2026</Eyebrow>
              </div>
              <h1 className="mt-6 animate-rise text-balance font-display text-[clamp(2.6rem,7vw,4.6rem)] font-extrabold leading-[1.02] tracking-tight text-foreground [animation-delay:100ms]">
                Un libro diventa <span className="text-accent-deep">un pasto</span>
              </h1>
              <p className="mt-6 max-w-[52ch] animate-rise text-pretty font-sans text-base leading-relaxed text-foreground/80 [animation-delay:200ms] md:text-lg">
                A Book for a Meal (A.B.F.A.M.) è un'iniziativa solidale che ha l'obiettivo di
                garantire pasti gratuiti a persone in difficoltà, attraverso la raccolta, lo scambio
                e la rivendita di libri usati e a fine vita.
              </p>
              <p className="mt-4 max-w-[52ch] animate-rise text-pretty font-sans text-base leading-relaxed text-muted-foreground [animation-delay:280ms]">
                Il principio è semplice: i libri — anche quelli che non trovano più posto su uno
                scaffale — hanno ancora valore. Quel valore può essere trasformato in qualcosa di
                concreto: un pasto per chi ne ha bisogno.
              </p>
              <div className="mt-8 flex animate-rise flex-wrap items-center gap-3 [animation-delay:360ms]">
                <a
                  href="#partecipa"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-sans text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Dona i tuoi libri
                </a>
                <a
                  href="#come-funziona"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 font-sans text-sm font-semibold text-foreground/80 transition-colors hover:text-accent-deep"
                >
                  Come funziona
                </a>
              </div>
            </div>
            <div className="animate-rise [animation-delay:200ms]">
              <img
                src={heroLibro}
                alt="Libro usato aperto su un tavolo di legno in luce calda"
                width={1920}
                height={1088}
                className="aspect-4/3 w-full rounded-3xl object-cover"
              />
            </div>
          </div>

          <div className="mt-10 grid animate-rise gap-4 [animation-delay:440ms] sm:grid-cols-3">
            {[
              { k: "100%", v: "del ricavato in beneficenza" },
              { k: "Migliaia", v: "di libri destinati al macero ogni anno" },
              { k: "6", v: "percorsi di utilità sociale per i libri non venduti" },
            ].map((s) => (
              <div key={s.k} className="rounded-3xl bg-background p-6">
                <div className="font-display text-4xl font-extrabold tracking-tight text-accent-deep">
                  {s.k}
                </div>
                <div className="mt-2 font-sans text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>Il problema</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-5xl">
              Ogni anno migliaia di libri vengono destinati al macero
            </h2>
          </div>
          <div className="space-y-5 self-end font-sans text-base leading-relaxed text-foreground/80 md:text-lg">
            <p className="text-pretty">
              In Italia e nel mondo, migliaia di libri vengono destinati al macero perché
              considerati non più utili o commercializzabili. Si tratta di uno spreco culturale ed
              ambientale enorme: volumi che potrebbero ancora circolare, educare, aiutare — e che
              invece vengono distrutti.
            </p>
            <p className="text-pretty text-muted-foreground">
              A.B.F.A.M. nasce anche per intercettare questo flusso e trasformarlo in valore
              sociale, prima che sia troppo tardi.
            </p>
          </div>
        </div>
      </section>

      <section id="come-funziona" className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="rounded-4xl bg-foreground p-7 text-background md:p-14">
          <Eyebrow>Come funziona</Eyebrow>
          <h2 className="mt-5 max-w-[24ch] text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
            Dal libro al pasto, in tre passaggi
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {passaggi.map((p) => (
              <div key={p.n} className="rounded-3xl bg-background/8 p-7">
                <span className="font-display text-4xl font-extrabold text-accent">{p.n}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-background">{p.titolo}</h3>
                <p className="mt-2 text-pretty font-sans text-sm leading-relaxed text-background/70">
                  {p.testo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="obiettivi" className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <Eyebrow>Obiettivi</Eyebrow>
        <h2 className="mt-5 max-w-[26ch] text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-5xl">
          Cosa vuole fare A.B.F.A.M.
        </h2>
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {obiettivi.map((o, i) => (
            <li key={o} className="flex gap-4 rounded-3xl bg-paper p-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent font-sans text-sm font-bold text-accent-foreground">
                {i + 1}
              </span>
              <span className="text-pretty font-sans text-sm leading-relaxed text-foreground/85">
                {o}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="rounded-4xl bg-paper p-7 md:p-14">
          <Eyebrow>Destinazione dei libri non venduti</Eyebrow>
          <h2 className="mt-5 max-w-[28ch] text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-5xl">
            Nulla viene sprecato
          </h2>
          <p className="mt-5 max-w-[70ch] text-pretty font-sans text-base leading-relaxed text-muted-foreground">
            I libri raccolti che non vengono rivenduti o scambiati vengono indirizzati verso
            percorsi di utilità sociale, tra cui:
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {destinazioni.map((d) => (
              <div key={d.titolo} className="rounded-3xl bg-background p-6">
                <h3 className="font-display text-lg font-bold text-foreground">{d.titolo}</h3>
                <p className="mt-2 text-pretty font-sans text-sm leading-relaxed text-muted-foreground">
                  {d.testo}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[80ch] text-pretty font-sans text-sm leading-relaxed text-foreground/75">
            O più in generale, i libri non venduti possono diventare strumento di supporto per tutte
            quelle associazioni che hanno come missione l'educazione, la formazione e la promozione
            della cultura in senso ampio.
          </p>
        </div>
      </section>

      <section id="sviluppi" className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <Eyebrow>Sviluppi in programma</Eyebrow>
        <h2 className="mt-5 max-w-[26ch] text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-5xl">
          Dove sta andando il progetto
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {sviluppi.map((s) => (
            <div key={s.titolo} className="rounded-3xl bg-paper p-7 md:p-8">
              <h3 className="font-display text-2xl font-bold text-foreground">{s.titolo}</h3>
              <p className="mt-3 text-pretty font-sans text-sm leading-relaxed text-muted-foreground">
                {s.testo}
              </p>
              <ul className="mt-5 space-y-3">
                {s.punti.map((p) => (
                  <li key={p} className="flex gap-3 font-sans text-sm text-foreground/85">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-pretty">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[80ch] text-pretty font-sans text-base leading-relaxed text-foreground/80">
          La piattaforma digitale non sarà l'unico canale: l'idea è quella di coinvolgere le
          librerie di quartiere — e non solo — come punti di ritiro fisici, integrandole nel
          circuito e riportando le persone in questi luoghi fondamentali per la cultura.
        </p>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="rounded-4xl bg-foreground p-7 text-background md:p-14">
          <Eyebrow>Partner e collaborazioni</Eyebrow>
          <h2 className="mt-5 max-w-[24ch] text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
            Una rete ancora da costruire
          </h2>
          <ul className="mt-10 space-y-3">
            {partner.map((p) => (
              <li
                key={p.tipo}
                className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-3xl bg-background/8 px-6 py-5"
              >
                <span className="font-display text-lg font-bold text-background">{p.tipo}</span>
                <span className="font-sans text-sm text-background/60">{p.note}</span>
                <span className="rounded-full bg-accent/20 px-3 py-1 font-sans text-xs font-semibold text-accent">
                  Da ricercare
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <Eyebrow>Roadmap</Eyebrow>
        <h2 className="mt-5 max-w-[22ch] text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-5xl">
          I prossimi passi
        </h2>
        <div className="mt-12 max-w-[720px]">
          {roadmap.map((r, i) => {
            const ultimo = i === roadmap.length - 1;
            return (
              <div key={r} className={`group relative pl-12 ${ultimo ? "pb-0" : "pb-10"}`}>
                {!ultimo && (
                  <span className="absolute bottom-0 left-4 top-9 w-0.5 origin-top animate-grow rounded-full bg-line" />
                )}
                <span className="absolute left-0 top-0 grid size-9 place-items-center rounded-full bg-accent font-sans text-sm font-bold text-accent-foreground transition-transform duration-300 group-hover:scale-105">
                  {i + 1}
                </span>
                <p className="pt-1.5 text-pretty font-display text-lg font-semibold text-foreground">
                  {r}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="partecipa" className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="rounded-4xl bg-accent p-8 text-center text-accent-foreground md:p-16">
          <h2 className="mx-auto max-w-[24ch] text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            I libri hanno ancora valore. Trasformiamolo in un pasto.
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-pretty font-sans text-base leading-relaxed text-accent-foreground/80">
            Vuoi donare libri, diventare punto di raccolta o partner editoriale come editore,
            scrittore, distributore o libreria? Lascia la tua email.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-[460px] flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="La tua email"
              aria-label="La tua email"
              className="flex-1 rounded-full bg-background px-5 py-3.5 font-sans text-sm text-foreground outline-none placeholder:text-muted-foreground focus:outline-2 focus:outline-foreground"
            />
            <button
              type="submit"
              className="rounded-full bg-foreground px-6 py-3.5 font-sans text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5"
            >
              Voglio partecipare
            </button>
          </form>
        </div>
      </section>

      <footer className="mx-auto max-w-[1240px] px-5 py-14 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <span className="font-sans text-sm text-muted-foreground">
            A Book for a Meal (A.B.F.A.M.) — documento di riferimento aggiornato ad aprile 2026.
            Progetto in evoluzione.
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-sm text-foreground/70">
            <a href="#come-funziona" className="transition-colors hover:text-accent-deep">
              Come funziona
            </a>
            <a href="#obiettivi" className="transition-colors hover:text-accent-deep">
              Obiettivi
            </a>
            <a href="#roadmap" className="transition-colors hover:text-accent-deep">
              Roadmap
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
