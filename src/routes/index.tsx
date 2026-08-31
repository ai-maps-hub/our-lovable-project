import { createFileRoute } from "@tanstack/react-router";
import heroLibro from "@/assets/hero-libro.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Book for a Meal — un libro diventa un pasto" },
      {
        name: "description",
        content:
          "A.B.F.A.M. raccoglie, scambia e rivende libri usati e a fine vita per garantire pasti gratuiti a persone in difficoltà.",
      },
      { property: "og:title", content: "A Book for a Meal — un libro diventa un pasto" },
      {
        property: "og:description",
        content:
          "Un'iniziativa solidale che sottrae i libri al macero e ne trasforma il valore in pasti caldi.",
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
      "I libri usati arrivano da donazioni di privati, biblioteche, librerie e altri canali. Anche quelli che non trovano più posto su uno scaffale.",
  },
  {
    n: "02",
    titolo: "Scambio o rivendita",
    testo:
      "I volumi vengono scambiati o rivenduti attraverso canali fisici e digitali, restituendo valore a ciò che sarebbe finito al macero.",
  },
  {
    n: "03",
    titolo: "Il ricavato diventa pasto",
    testo:
      "Il ricavato viene destinato interamente in beneficenza e convertito in pasti gratuiti per persone in difficoltà economica.",
  },
];

const obiettivi = [
  "Garantire pasti gratuiti a persone in difficoltà economica",
  "Dare una seconda vita ai libri usati e a fine vita, sottraendoli al macero",
  "Destinare i libri non venduti a percorsi di utilità sociale",
  "Costruire una rete tra donatori, lettori, editoria e librerie",
  "Estendere il modello al mercato del libro nuovo",
  "Destinare il ricavato interamente in beneficenza",
  "Dare visibilità al settore editoriale e ai suoi protagonisti",
  "Riportare le persone nelle librerie, luoghi di cultura e comunità",
  "Riavvicinare le persone alla lettura, abbassando le barriere di accesso",
];

const destinazioni = [
  {
    titolo: "Alfabetizzazione",
    testo: "Supporto a chi non ha ancora acquisito competenze di lettura e scrittura.",
  },
  {
    titolo: "Apprendimento",
    testo: "Materiali didattici per contesti scolastici ed extrascolastici con poche risorse.",
  },
  {
    titolo: "Disabilità",
    testo: "Libri adatti o adattabili a esigenze specifiche di lettura.",
  },
  {
    titolo: "Integrazione",
    testo: "Percorsi di apprendimento della lingua e della cultura italiana.",
  },
  {
    titolo: "Anziani",
    testo: "Lettura come stimolo cognitivo, socializzazione e benessere.",
  },
  {
    titolo: "Bambini e ragazzi",
    testo:
      "Educazione digitale, civica, finanziaria e competenze trasversali ancora poco presenti nei programmi scolastici.",
  },
];

const sviluppi = [
  {
    titolo: "Piattaforma digitale",
    testo:
      "Una piattaforma online per lo scambio e la rivendita di libri usati: più utenti e donatori, logistica semplificata, iniziativa scalabile a livello nazionale.",
  },
  {
    titolo: "Settore del libro nuovo",
    testo:
      "Partnership con editori, scrittori e distributori: copie invendute donate, quote di ricavato destinate al progetto, promozione attiva dell'iniziativa.",
  },
  {
    titolo: "Librerie di quartiere",
    testo:
      "Le librerie diventano punti di raccolta, scambio e ritiro fisico: il digitale non sarà l'unico canale, le persone tornano nei luoghi della cultura.",
  },
];

const partner = [
  { tipo: "Editori", note: "Copie invendute e quote di ricavato" },
  { tipo: "Scrittori", note: "Partecipazione e promozione" },
  { tipo: "Distributori", note: "Supporto logistico e canali" },
  { tipo: "Organizzazioni benefiche", note: "Destinatari del ricavato" },
  { tipo: "Librerie", note: "Potenziali punti di raccolta" },
];

const roadmap = [
  {
    tappa: "01",
    titolo: "Modello operativo",
    testo: "Definizione del modello operativo e dei processi di raccolta, scambio e destinazione.",
  },
  {
    tappa: "02",
    titolo: "Organizzazioni partner",
    testo: "Identificazione delle organizzazioni benefiche che riceveranno il ricavato.",
  },
  {
    tappa: "03",
    titolo: "Avvio della raccolta",
    testo: "Prima raccolta di libri usati attraverso i canali iniziali.",
  },
  {
    tappa: "04",
    titolo: "Piattaforma digitale",
    testo: "Sviluppo e lancio della piattaforma di scambio e rivendita.",
  },
  {
    tappa: "05",
    titolo: "Outreach editoriale",
    testo: "Coinvolgimento di editori, scrittori e distributori.",
  },
  {
    tappa: "06",
    titolo: "Prima campagna",
    testo: "Prima campagna di comunicazione pubblica e primo bilancio sociale d'impatto.",
  },
];

function Index() {
  return (
    <>
      <nav
        className="sticky top-0 z-20 border-b border-line bg-background/90"
        style={{ backdropFilter: "blur(6px)" }}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-12">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl leading-none tracking-tight text-foreground">
              A.B.F.A.M.
            </span>
            <span className="hidden font-serif text-sm italic text-muted-foreground sm:block">
              un libro, un pasto
            </span>
          </div>
          <div className="hidden items-center gap-8 font-sans text-sm text-foreground/80 md:flex">
            <a className="transition-colors hover:text-accent" href="#come-funziona">
              Come funziona
            </a>
            <a className="transition-colors hover:text-accent" href="#obiettivi">
              Obiettivi
            </a>
            <a className="transition-colors hover:text-accent" href="#roadmap">
              Roadmap
            </a>
          </div>
          <a
            href="#partecipa"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 font-sans text-sm text-background outline-1 outline-foreground"
          >
            <span>Partecipa</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &rarr;
            </span>
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <img
          src={heroLibro}
          alt="Libro consumato aperto su un tavolo di legno in luce calda"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative">
          <div className="h-24 md:h-28" />
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <div className="max-w-[22ch] animate-rise font-serif text-xl italic text-accent md:text-2xl">
              Un libro a fine vita non è spazzatura.
            </div>
            <h1 className="mt-3 animate-rise text-balance font-display text-[clamp(3.4rem,13.5vw,12.5rem)] uppercase leading-[0.86] tracking-tight text-foreground [animation-delay:120ms] md:mt-5">
              Un libro
              <br />
              <span className="text-accent">un pasto</span>
            </h1>
            <div className="mt-7 max-w-[42ch] animate-rise text-pretty font-sans text-base text-foreground/85 [animation-delay:240ms] md:text-lg">
              A Book for a Meal raccoglie, scambia e rivende libri usati e a fine vita. Il ricavato
              va interamente in beneficenza e diventa pasti gratuiti per chi è in difficoltà.
            </div>
            <div className="mt-9 flex animate-rise flex-wrap items-center gap-4 [animation-delay:360ms]">
              <a
                href="#partecipa"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-sans text-sm text-background outline-1 outline-accent-deep/30"
              >
                <span>Dona i tuoi libri</span>
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &rarr;
                </span>
              </a>
              <a
                href="#come-funziona"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-5 py-3 font-sans text-sm text-foreground/85 transition-colors hover:border-accent hover:text-accent"
              >
                Come funziona
              </a>
            </div>
          </div>
          <div className="mx-auto mt-14 max-w-[1400px] px-6 md:px-12">
            <div className="grid animate-rise grid-cols-2 gap-px border-t border-line bg-line [animation-delay:480ms] md:grid-cols-4">

            <div className="bg-background px-1 py-6">
              <div className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
                Migliaia
              </div>
              <div className="mt-1 font-serif text-sm italic text-muted-foreground">
                di libri al macero ogni anno
              </div>
            </div>
            <div className="bg-background px-1 py-6">
              <div className="font-display text-4xl tracking-tight text-accent md:text-5xl">
                100%
              </div>
              <div className="mt-1 font-serif text-sm italic text-muted-foreground">
                del ricavato in beneficenza
              </div>
            </div>
            <div className="bg-background px-1 py-6">
              <div className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
                6
              </div>
              <div className="mt-1 font-serif text-sm italic text-muted-foreground">
                percorsi di utilità sociale
              </div>
            </div>
            <div className="bg-background px-1 py-6">
              <div className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
                0
              </div>
              <div className="mt-1 font-serif text-sm italic text-muted-foreground">
                libri sprecati
              </div>
            </div>
          </div>
          <div className="h-24 md:h-32" />
        </div>
      </section>

      <section id="come-funziona" className="bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="font-serif text-lg italic text-accent">Il meccanismo</div>
              <h2 className="mt-2 text-balance font-display text-4xl uppercase leading-[0.9] tracking-tight md:text-6xl">
                Come funziona
              </h2>
            </div>
            <div className="hidden max-w-[18ch] font-serif text-lg italic text-background/50 md:block">
              Tre passaggi, dal libro al piatto.
            </div>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-px border border-background/15 bg-background/15 md:grid-cols-3">
            {passaggi.map((p) => (
              <div key={p.n} className="flex flex-col gap-6 bg-foreground p-7 md:p-8">
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl text-accent">{p.n}</span>
                  <span className="h-px flex-1 bg-background/20" />
                </div>
                <h3 className="font-serif text-2xl italic text-background">{p.titolo}</h3>
                <p className="text-pretty font-sans text-sm text-background/70">{p.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <div className="font-serif text-lg italic text-accent">Il problema</div>
            <h2 className="mt-2 text-balance font-display text-4xl uppercase leading-[0.9] tracking-tight text-foreground md:text-6xl">
              Ogni anno migliaia di libri finiscono al macero
            </h2>
          </div>
          <div className="space-y-5 self-end font-sans text-base text-foreground/85 md:text-lg">
            <p className="text-pretty">
              In Italia e nel mondo migliaia di volumi vengono distrutti perché considerati non più
              utili o commercializzabili. È uno spreco culturale e ambientale enorme: libri che
              potrebbero ancora circolare, educare, aiutare.
            </p>
            <p className="text-pretty">
              A.B.F.A.M. nasce anche per intercettare questo flusso e trasformarlo in valore
              sociale, prima che sia troppo tardi.
            </p>
          </div>
        </div>
      </section>

      <section id="obiettivi" className="border-y border-line bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="max-w-[20ch]">
            <div className="font-serif text-lg italic text-accent">Il perché</div>
            <h2 className="mt-2 text-balance font-display text-4xl uppercase leading-[0.9] tracking-tight text-foreground md:text-6xl">
              Obiettivi
            </h2>
          </div>
          <ol className="mt-14 grid gap-px border-t border-line bg-line md:grid-cols-3">
            {obiettivi.map((o, i) => (
              <li key={o} className="flex gap-5 bg-paper px-1 py-7 md:px-6">
                <span className="font-display text-2xl leading-none tracking-tight text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-pretty font-sans text-sm text-foreground/85">{o}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="max-w-[30ch]">
          <div className="font-serif text-lg italic text-accent">I libri non venduti</div>
          <h2 className="mt-2 text-balance font-display text-4xl uppercase leading-[0.9] tracking-tight text-foreground md:text-6xl">
            Nulla si spreca
          </h2>
          <p className="mt-6 text-pretty font-sans text-base text-muted-foreground">
            I volumi che non vengono rivenduti o scambiati vengono indirizzati verso percorsi di
            utilità sociale, e più in generale verso le associazioni che si occupano di educazione,
            formazione e promozione della cultura.
          </p>
        </div>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {destinazioni.map((d) => (
            <div key={d.titolo} className="bg-background p-7 md:p-8">
              <h3 className="font-serif text-2xl italic text-foreground">{d.titolo}</h3>
              <p className="mt-3 text-pretty font-sans text-sm text-muted-foreground">{d.testo}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="max-w-[26ch]">
            <div className="font-serif text-lg italic text-accent">Sviluppi in programma</div>
            <h2 className="mt-2 text-balance font-display text-4xl uppercase leading-[0.9] tracking-tight md:text-6xl">
              Dove stiamo andando
            </h2>
          </div>
          <div className="mt-14 grid gap-px border border-background/15 bg-background/15 md:grid-cols-3">
            {sviluppi.map((s) => (
              <div key={s.titolo} className="bg-foreground p-7 md:p-8">
                <h3 className="font-serif text-2xl italic text-background">{s.titolo}</h3>
                <p className="mt-3 text-pretty font-sans text-sm text-background/70">{s.testo}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-10 border-t border-background/15 pt-10 md:grid-cols-[20ch_1fr] md:gap-16">
            <div>
              <div className="font-serif text-lg italic text-accent">Partner</div>
              <h3 className="mt-2 font-display text-3xl uppercase leading-[0.9] tracking-tight md:text-4xl">
                Rete da costruire
              </h3>
            </div>
            <ul>
              {partner.map((p) => (
                <li
                  key={p.tipo}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-background/15 py-5"
                >
                  <span className="font-display text-xl uppercase tracking-tight text-background">
                    {p.tipo}
                  </span>
                  <span className="font-sans text-sm text-background/60">{p.note}</span>
                  <span className="font-serif text-sm italic text-accent">Da ricercare</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="max-w-[20ch]">
          <div className="font-serif text-lg italic text-accent">Il programma</div>
          <h2 className="mt-2 text-balance font-display text-4xl uppercase leading-[0.9] tracking-tight text-foreground md:text-6xl">
            Roadmap
          </h2>
        </div>
        <div className="mt-14 max-w-[640px] border-t border-line">
          {roadmap.map((r, i) => {
            const ultimo = i === roadmap.length - 1;
            return (
              <div key={r.tappa} className={`group relative pl-10 ${ultimo ? "pb-2" : "pb-12"}`}>
                <span
                  className={
                    ultimo
                      ? "absolute bottom-0 left-0 top-1 w-px origin-top animate-grow bg-accent [animation-delay:200ms]"
                      : "absolute bottom-0 left-0 top-1 w-px bg-line"
                  }
                />
                <span
                  className={`absolute left-0 top-1.5 size-3 rounded-full bg-accent ${ultimo ? "" : "transition-transform duration-300 group-hover:scale-125"}`}
                />
                <div className="flex items-baseline gap-4">
                  <span
                    className={`font-display text-3xl tracking-tight ${ultimo ? "text-accent" : "text-foreground"}`}
                  >
                    {r.tappa}
                  </span>
                  <span className="font-serif text-base italic text-accent">{r.titolo}</span>
                </div>
                <p className="mt-2 text-pretty font-sans text-sm text-muted-foreground">
                  {r.testo}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="partecipa" className="bg-accent text-background">
        <div className="mx-auto max-w-[1400px] px-6 py-20 text-center md:px-12 md:py-28">
          <div className="font-serif text-lg italic text-background/80">
            Il progetto è in fase di avvio
          </div>
          <h2 className="mt-3 text-balance font-display text-5xl uppercase leading-[0.88] tracking-tight md:text-7xl">
            Il primo libro parte quando lo porti tu
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-pretty font-sans text-base text-background/85">
            Vuoi donare libri, diventare punto di raccolta o partner editoriale? Lascia la tua email
            e ti raccontiamo come partecipare.
          </p>
          <form
            className="mx-auto mt-9 flex max-w-[440px] flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="La tua email"
              aria-label="La tua email"
              className="flex-1 rounded-full bg-background/95 px-4 py-3 font-sans text-sm text-foreground outline-none placeholder:text-muted-foreground focus:outline-2 focus:outline-foreground"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 font-sans text-sm text-background"
            >
              <span>Voglio partecipare</span>
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &rarr;
              </span>
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-line bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-12">
          <div className="text-balance font-display text-4xl uppercase leading-[0.9] tracking-tight text-foreground md:text-6xl">
            Un libro
            <br />
            è un pasto.
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-line pt-6 sm:flex-row sm:items-center">
            <span className="font-serif text-sm italic text-muted-foreground">
              A Book for a Meal — iniziativa solidale indipendente
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-sm text-foreground/70">
              <a href="#come-funziona" className="transition-colors hover:text-accent">
                Come funziona
              </a>
              <a href="#obiettivi" className="transition-colors hover:text-accent">
                Obiettivi
              </a>
              <a href="#roadmap" className="transition-colors hover:text-accent">
                Roadmap
              </a>
              <a href="#partecipa" className="transition-colors hover:text-accent">
                Contatti
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
