import type { BlogArticle, Block } from "@/lib/blog";

const proCon = (pros: string[], cons: string[]): Block => ({
  table: { head: ["Fordeler", "Ulemper"], rows: pros.map((p, i) => [p, cons[i] ?? ""]) },
});

export const besteIptvArticle: BlogArticle = {
  slug: "beste-iptv-norge",
  title: "Beste IPTV i Norge – De 7 beste IPTV-spillerne i 2026",
  metaTitle: "Beste IPTV i Norge 2026: 7 IPTV-spillere sammenlignet",
  metaDescription: "Leter du etter beste IPTV-spiller i Norge? Vi sammenligner TiviMate, IPTV Smarters Pro, IBO Player og flere for Samsung, LG, Android TV og Apple TV.",
  category: "Enheter og apper",
  hero: {
    src: "/blog/fotballkveld-norge-tv.webp", width: 1600, height: 901,
    alt: "Tre venner i røde Norge-drakter ser landskamp på smart-TV i stua og jubler, med norsk flagg på veggen",
    caption: "Kampkveld i stua: Med riktig IPTV-spiller og en lovlig tjeneste kan du se kampen på smart-TV-en.",
  },
  excerpt: "Vi sammenligner sju IPTV-spillere for Samsung, LG, Android TV, Fire TV og Apple TV, med enhetsstøtte, EPG, priser, fordeler og ulemper.",
  intro: [
    { p: "Stadig flere nordmenn ser på TV via internett i stedet for gjennom parabol eller kabel. Strømmetjenester, TV-pakker fra bredbåndsleverandøren og apper på smart-TV-en har gjort at «IPTV» har gått fra å være et teknisk begrep til noe de fleste bruker hver dag, ofte uten å tenke over det." },
    { p: "Men når du leter etter beste IPTV for din egen TV, møter du raskt et problem: det finnes to helt ulike ting som begge kalles IPTV. Den ene er selve avspilleren, altså appen du installerer på TV-en. Den andre er tjenesten som leverer kanalene. Mange søker for eksempel etter tjenester som Viking IPTV, uten å vite at de i tillegg trenger en egen spiller-app for å se noe som helst." },
    { p: "I denne guiden konsentrerer vi oss om spillerne. Vi har gått gjennom sju av de mest brukte IPTV-appene i Norge og sammenlignet dem på det som faktisk betyr noe i hverdagen:" },
    { list: ["Fungerer appen på din TV eller TV-boks?", "Er den enkel å sette opp og bruke?", "Har den god programguide (EPG)?", "Hva koster den, og betaler du én gang eller hvert år?"] },
    { p: "Underveis skiller vi tydelig mellom fakta (hentet fra utviklernes egne sider og appbutikkene) og våre egne vurderinger." },
    { note: "Viktig å vite: En IPTV-spiller inneholder ingen TV-kanaler. Den spiller bare av innhold fra en kilde du selv legger inn. Du trenger derfor alltid et lovlig abonnement eller en lovlig kilde i tillegg." },
  ],
  sections: [
    {
      id: "hva-er-iptv", title: "Hva er IPTV, og hvordan fungerer det?", paragraphs: [
        "IPTV står for Internet Protocol Television, altså TV levert over internett i stedet for via antenne, parabol eller kabel. Bildet og lyden sendes som datapakker gjennom bredbåndet ditt, og en app eller boks gjør dem om til TV-bilde.",
        "Du bruker trolig IPTV allerede. TV-pakkene fra Telia, Allente, Altibox og andre leveres i stor grad over IP, og apper som NRK TV og TV 2 Play bygger på samme teknologi.",
      ],
      subsections: [{
        id: "spiller-og-tjeneste", title: "Spiller og tjeneste er to forskjellige ting", blocks: [
          { p: "Når folk snakker om «IPTV-apper», mener de som regel generelle IPTV-spillere. De fungerer omtrent som en videospiller:" },
          { list: ["Du får en spillelistelenke (M3U) eller innloggingsdetaljer (Xtream Codes) fra en tjenesteleverandør.", "Du legger dette inn i spilleren.", "Spilleren henter kanallisten, programguiden og eventuelt filmbiblioteket, og viser det i et TV-vennlig grensesnitt."], ordered: true },
          { p: "En tjeneste som Viking IPTV er derimot en innholdsleverandør, ikke en spiller. Spilleren og tjenesten er altså to separate kjøp fra to separate aktører, og det er tjenesten, ikke spilleren, som avgjør hva du faktisk får se, og om det er lovlig." },
          { lead: "M3U", p: "er en tekstfil eller lenke med en liste over kanaler og strømmeadresser." },
          { lead: "Xtream Codes", p: "er en innloggingsmetode (server, brukernavn, passord) som i tillegg gir kategorier, filmer, serier og ofte catch-up." },
          { lead: "EPG", p: "(Electronic Program Guide) er programguiden, altså oversikten over hva som går nå og senere." },
        ],
      }],
    },
    {
      id: "hva-bor-du-se-etter", title: "Hva bør du se etter når du velger en IPTV-spiller?", paragraphs: [
        "Den beste IPTV-appen for naboen er ikke nødvendigvis den beste for deg. Disse punktene er verdt å sjekke før du betaler for noe.",
      ],
      subsections: [
        { id: "kompatibilitet", title: "1. Kompatibilitet med enheten din", blocks: [{ p: "Dette er det viktigste kriteriet. TiviMate er for eksempel en av de mest populære spillerne, men den finnes bare til Android. Har du en Samsung-TV eller Apple TV, er den rett og slett ikke et alternativ." }] },
        { id: "grensesnitt", title: "2. Brukergrensesnitt", blocks: [{ p: "Du skal styre appen med en fjernkontroll fra sofaen. Se etter tydelig kanalliste, rask zapping og en meny som ikke krever mus og tastatur." }] },
        { id: "epg", title: "3. EPG og programguide", blocks: [{ p: "En god programguide i rutenett («TV-guide»-visning) gjør stor forskjell. Sjekk også om appen støtter eksterne EPG-kilder, slik at du kan rette opp manglende guide for enkelte kanaler." }] },
        { id: "ytelse", title: "4. Ytelse og stabilitet", blocks: [{ p: "Rask oppstart, raskt kanalbytte og lite hakking. Merk at mye av stabiliteten avhenger av tjenesten og internettlinjen din, ikke bare av appen." }] },
        { id: "m3u-xtream", title: "5. Støtte for M3U og Xtream Codes", blocks: [{ p: "De fleste tjenester leverer begge deler. Xtream Codes gir ofte en ryddigere opplevelse med egne seksjoner for film og serier." }] },
        { id: "prismodell", title: "6. Prismodell", blocks: [{ p: "Noen spillere er gratis, andre koster et engangsbeløp per enhet, og noen har årsabonnement. Har du flere TV-er, kan en lisens «per enhet» fort bli dyrere enn den ser ut." }] },
        { id: "sikkerhet", title: "7. Sikkerhet og personvern", blocks: [{ list: [
          "Last ned fra offisielle appbutikker eller utviklerens egen nettside.",
          "Vær skeptisk til nettsider som ser offisielle ut, men egentlig selger IPTV-abonnement. Mange slike sider bruker appenes navn i domenet.",
          "Betal aldri for «aktivering» på en side du ikke er sikker på tilhører utvikleren.",
        ] }] },
      ],
    },
    {
      id: "de-7-beste", title: "De 7 beste IPTV-spillerne i Norge", paragraphs: [
        "Rekkefølgen under er ikke en absolutt rangering. Hvilken app som er best, avhenger først og fremst av hvilken enhet du har.",
        "Priser er hentet fra utviklernes sider og appbutikker i november 2026 og kan variere med region, valuta og tidspunkt. Sjekk alltid prisen i appen før du kjøper.",
      ],
      subsections: [
        { id: "tivimate", title: "1. TiviMate – best for Android TV og Google TV", blocks: [
          { p: "TiviMate har lenge vært favoritten blant Android TV-brukere, og det er lett å forstå hvorfor. Grensesnittet minner om en tradisjonell TV-dekoder, med en programguide i rutenett som er rask å navigere med fjernkontrollen." },
          { label: "Hovedfunksjoner" },
          { list: ["Programguide i rutenett med støtte for flere EPG-kilder", "Støtte for M3U og Xtream Codes", "Favoritter, egne kanalgrupper og skjuling av kanaler", "Catch-up (når tjenesten støtter det)", "Opptak og flere spillelister (Premium)"] },
          { lead: "Kompatible enheter:", p: "Android TV, Google TV, Amazon Fire TV, Nvidia Shield og Android-baserte TV-bokser. Ikke tilgjengelig for iPhone, Apple TV, Samsung (Tizen), LG (webOS), Windows eller Mac." },
          { lead: "Pris:", p: "Gratisversjonen er begrenset. Premium koster rundt 10 USD per år eller ca. 34 USD for livstidslisens, og én konto kan brukes på opptil fem enheter. Kjøpet gjøres via TiviMate Companion-appen på en Android-telefon." },
          proCon(["Svært god EPG-visning", "Rask og stabil", "Én lisens dekker flere enheter"], ["Kun Android", "De beste funksjonene krever Premium", "Kjøpsprosessen via Companion-app kan virke tungvint"]),
          { lead: "Hvem passer den for?", p: "Deg som har Android TV, Google TV (for eksempel Chromecast med Google TV) eller Fire TV, og som ser mye lineær TV." },
        ] },
        { id: "iptv-smarters-pro", title: "2. IPTV Smarters Pro – den allsidige og gratis spilleren", blocks: [
          { p: "IPTV Smarters Pro er trolig den mest kjente IPTV-spilleren i verden, og den finnes til svært mange plattformer. Grensesnittet er bygget rundt store fliser for «Live TV», «Filmer» og «Serier», som gjør det lett å komme i gang." },
          { label: "Hovedfunksjoner" },
          { list: ["Innlogging med Xtream Codes eller M3U", "Egne seksjoner for direkte-TV, film og serier", "EPG og catch-up (avhengig av tjenesten)", "Flere brukerprofiler og foreldrekontroll"] },
          { lead: "Kompatible enheter:", p: "Android-mobil og -nettbrett, Android TV, Fire TV, Windows og macOS. På iPhone, iPad og Apple TV heter den offisielle appen Smarters Player Lite." },
          { lead: "Pris:", p: "Selve spilleren er gratis på Android. iOS- og tvOS-versjonen har ifølge appbutikken en prøveperiode med kjøp i appen. Tilgjengeligheten i Google Play har variert, så sjekk utviklernavnet nøye før du installerer." },
          proCon(["Gratis å bruke på Android", "Finnes til mange plattformer", "Lett å sette opp"], ["Programguiden er mindre oversiktlig enn TiviMates", "Mange falske kopier og «offisielle» nettsider", "Grensesnittet kan føles tregt på svake bokser"]),
          { lead: "Hvem passer den for?", p: "Nybegynnere og deg som vil bruke samme app på mobil, PC og TV." },
        ] },
        { id: "ibo-player", title: "3. IBO Player – populær på Samsung og LG", blocks: [
          { p: "IBO Player har blitt et av de vanligste valgene på smart-TV-er fra Samsung og LG. Appen lastes ned fra TV-ens egen appbutikk, og spillelisten legges inn via utviklerens nettside ved hjelp av TV-ens MAC-adresse og enhetsnøkkel." },
          { label: "Hovedfunksjoner" },
          { list: ["Støtte for M3U og Xtream Codes", "Direkte-TV, film og serier i egne seksjoner", "EPG", "Flere spillelister per enhet"] },
          { lead: "Kompatible enheter:", p: "Samsung (Tizen), LG (webOS), Android TV, Fire TV og flere andre plattformer." },
          { lead: "Pris:", p: "Gratis prøveperiode, deretter en aktiveringsavgift per enhet. Prisnivået er typisk rundt 10 euro, men vi fant svært ulike priser fordi mange tredjepartssider selger «aktivering». Betal bare via utviklerens offisielle side." },
          proCon(["Fungerer direkte på Samsung og LG", "Ingen ekstra boks nødvendig", "Moderne grensesnitt"], ["Oppsett via nettside og MAC-adresse kan forvirre", "Mange uoffisielle aktiveringssider", "Lisens per TV"]),
          { lead: "Hvem passer den for?", p: "Deg som har en nyere Samsung- eller LG-TV og vil slippe ekstra utstyr." },
        ] },
        { id: "smart-iptv", title: "4. Smart IPTV (SIPTV) – enkel og rimelig veteran", blocks: [
          { p: "Smart IPTV er en av de eldste IPTV-spillerne for smart-TV. Den er enkel, nøktern og billig. Utvikleren beskriver den selv som «bare en mediespiller» uten kanaler." },
          { label: "Hovedfunksjoner" },
          { list: ["Spillelisten (M3U) lastes opp via utviklerens nettside, knyttet til TV-ens MAC-adresse", "Programguide med støtte for flere eksterne EPG-kilder", "Kanalsøk"] },
          { lead: "Kompatible enheter:", p: "Ifølge siptv.app finnes oppdaterte versjoner for Samsung Tizen-TV-er fra 2022 og nyere (Tizen 6.5+), LG webOS 3.0+, eldre LG-modeller (Netcast og webOS 1.0–2.0) samt Android TV, Google TV og Fire TV." },
          { lead: "Pris:", p: "En engangsavgift på 5,49 euro per TV/enhet, ifølge utviklerens aktiveringsside." },
          proCon(["Svært lav pris", "Fungerer på eldre LG-TV-er", "Stabil og lett"], ["Enkelt og litt gammeldags grensesnitt", "Bygget rundt M3U, mindre egnet for film og serier", "Oppsett via nettside"]),
          { lead: "Hvem passer den for?", p: "Deg som vil ha en billig og enkel løsning for direkte-TV, eller som har en eldre LG-TV." },
        ] },
        { id: "set-iptv", title: "5. SET IPTV – rimelig engangsløsning for smart-TV", blocks: [
          { p: "SET IPTV (utvikler: SetSysteme) ligner Smart IPTV i oppsett: Du installerer appen på TV-en, noterer MAC-adressen og legger inn spillelisten på utviklerens nettside." },
          { label: "Hovedfunksjoner" },
          { list: ["Støtte for M3U-spillelister", "EPG", "Enkel kanalliste med favoritter"] },
          { lead: "Kompatible enheter:", p: "Samsung (Tizen), LG (webOS) og Android." },
          { lead: "Pris:", p: "Gratis prøveperiode (oppgis vanligvis til 7 dager), deretter en engangsavgift på rundt 15 euro per enhet. Vi fant ingen offisiell prisliste fra utvikleren som kunne bekrefte det nøyaktige beløpet, så sjekk prisen i aktiveringsportalen." },
          proCon(["Engangsbetaling", "Finnes i Samsung- og LG-butikkene", "Lett å bruke når det først er satt opp"], ["Grensesnittet er enkelt", "Mange lignende domener gjør det vanskelig å finne den offisielle siden", "Færre funksjoner enn TiviMate og IBO Player"]),
          { lead: "Hvem passer den for?", p: "Smart-TV-eiere som vil betale én gang og ellers holde det enkelt." },
        ] },
        { id: "ott-navigator", title: "6. OTT Navigator – for deg som liker å skru på innstillinger", blocks: [
          { p: "OTT Navigator er en kraftig Android-app med svært mange tilpasningsmuligheter. Den kan gjøre mye av det samme som TiviMate, og en del ting i tillegg, men den har en brattere læringskurve." },
          { label: "Hovedfunksjoner" },
          { list: ["Støtte for M3U og Xtream Codes", "Avansert EPG-håndtering", "Catch-up og tidsforskyvning (når tjenesten støtter det)", "Mange innstillinger for avspiller, utseende og fjernkontroll"] },
          { lead: "Kompatible enheter:", p: "Android-mobil, Android TV, Google TV og Fire TV." },
          { lead: "Pris:", p: "Gratis grunnversjon med Premium-oppgradering. Prisene varierer etter region og abonnementstype, så sjekk kjøpsskjermen i appen." },
          proCon(["Ekstremt fleksibel", "Gratisversjonen er brukbar", "God støtte for catch-up"], ["Kan virke overveldende for nybegynnere", "Kun Android", "Uoversiktlig prisinformasjon"]),
          { lead: "Hvem passer den for?", p: "Teknisk interesserte Android-brukere som vil styre detaljene selv." },
        ] },
        { id: "gse-smart-iptv", title: "7. GSE Smart IPTV – et alternativ for Apple-brukere", blocks: [
          { p: "GSE Smart IPTV har lenge vært et av få seriøse alternativer på iPhone, iPad og Apple TV. Appen har mange funksjoner, men grensesnittet er mer funksjonelt enn elegant." },
          { label: "Hovedfunksjoner" },
          { list: ["Støtte for M3U, JSON-spillelister og Xtream Codes", "EPG-støtte", "Avspilling av mange video- og strømmeformater", "Foreldrekontroll"] },
          { lead: "Kompatible enheter:", p: "iPhone, iPad og Apple TV via App Store. Det finnes også en Android-versjon i Google Play, men den ser ut til å oppdateres sjeldnere." },
          { lead: "Pris:", p: "GSE SMART IPTV PRO er et engangskjøp i App Store (rundt 5–6 euro avhengig av land og plattform). Sjekk prisen i den norske App Store." },
          proCon(["Ett av få gode valg for Apple TV", "Mange formater og spillelistetyper", "Engangskjøp"], ["Grensesnittet føles utdatert", "Android-versjonen henger etter", "Kan være tungvint å sette opp"]),
          { lead: "Hvem passer den for?", p: "Deg som har Apple-utstyr og trenger en fleksibel spiller." },
        ] },
      ],
    },
    {
      id: "sammenligning", title: "Sammenligning av de beste IPTV-spillerne", paragraphs: [
        "Tabellen gir en rask oversikt. «Brukervennlighet» er vår redaksjonelle vurdering på en skala fra 1 til 5, ikke en offisiell karakter.",
      ],
      blocks: [
        { table: { head: ["IPTV-spiller", "Enheter", "EPG", "M3U / Xtream Codes", "Brukervennlighet", "Prismodell"], rows: [
          ["TiviMate", "Android TV, Google TV, Fire TV", "Ja, svært god", "Ja / Ja", "5 av 5", "Gratis (begrenset) + Premium per år eller livstid"],
          ["IPTV Smarters Pro", "Android, Android TV, Fire TV, Windows, macOS (iOS/tvOS som Smarters Player Lite)", "Ja", "Ja / Ja", "4 av 5", "Gratis på Android, kjøp i appen på Apple"],
          ["IBO Player", "Samsung, LG, Android TV, Fire TV m.fl.", "Ja", "Ja / Ja", "4 av 5", "Prøveperiode + aktivering per enhet"],
          ["Smart IPTV (SIPTV)", "Samsung (Tizen 6.5+), LG webOS/Netcast, Android TV, Fire TV", "Ja", "Ja / Nei (M3U-basert)", "3 av 5", "5,49 € engangs per enhet"],
          ["SET IPTV", "Samsung, LG, Android", "Ja", "Ja / Begrenset", "3 av 5", "Prøveperiode + ca. 15 € engangs per enhet"],
          ["OTT Navigator", "Android, Android TV, Google TV, Fire TV", "Ja, avansert", "Ja / Ja", "3 av 5", "Gratis + Premium"],
          ["GSE Smart IPTV", "iPhone, iPad, Apple TV (+ Android)", "Ja", "Ja / Ja", "3 av 5", "Engangskjøp (Pro)"],
        ] } },
        { p: "Merk at ingen av spillerne i tabellen er knyttet til Viking IPTV eller noen annen bestemt tjeneste. De er nøytrale avspillere som fungerer med kilder du selv legger inn." },
      ],
    },
    {
      id: "hvilken-enhet", title: "Hvilken IPTV-spiller passer best for din enhet?", paragraphs: [],
      subsections: [
        { id: "samsung", title: "Samsung Smart TV", blocks: [{ p: "Samsung bruker operativsystemet Tizen, og TiviMate finnes ikke her. De beste valgene for IPTV på Samsung TV er IBO Player, Smart IPTV og SET IPTV, som alle installeres fra Samsungs appbutikk. Har du en eldre Samsung-modell, sjekk at appen faktisk støtter din Tizen-versjon før du betaler. Vil du ha TiviMate likevel, er en rimelig Google TV-boks eller Fire TV Stick i HDMI-inngangen den enkleste løsningen." }] },
        { id: "lg", title: "LG Smart TV", blocks: [{ p: "LG bruker webOS. IPTV på LG TV fungerer godt med IBO Player, SET IPTV og Smart IPTV. Smart IPTV er spesielt nyttig hvis du har en eldre LG-TV, fordi utvikleren fortsatt tilbyr en versjon for Netcast og tidlige webOS-versjoner." }] },
        { id: "android-tv", title: "Android TV og Google TV", blocks: [{ p: "Her har du det største utvalget. TiviMate er vårt førstevalg for IPTV på Android TV takket være programguiden og stabiliteten. OTT Navigator er et godt alternativ hvis du vil ha flere innstillinger, og IPTV Smarters Pro er det enkleste gratisvalget. Dette gjelder også TV-er fra Sony, Philips og TCL som kjører Google TV." }] },
        { id: "apple-tv", title: "Apple TV", blocks: [{ p: "Utvalget er mindre. GSE Smart IPTV og Smarters Player Lite (Apple-versjonen av IPTV Smarters) er de mest etablerte valgene. Last alltid ned fra App Store og sjekk utviklernavnet." }] },
        { id: "fire-tv", title: "Amazon Fire TV", blocks: [{ p: "Fire TV Stick bygger på Android, så TiviMate, OTT Navigator og IPTV Smarters Pro fungerer godt. Merk at TiviMate Premium må kjøpes via Companion-appen på en Android-telefon, ikke direkte på Fire TV-en." }] },
        { id: "mobil", title: "Android-mobil og iPhone", blocks: [{ list: [
          "Android: IPTV Smarters Pro og OTT Navigator er gode valg. TiviMate fungerer også på mobil, men er laget for TV-skjerm.",
          "iPhone og iPad: GSE Smart IPTV og Smarters Player Lite.",
        ] }] },
      ],
    },
    {
      id: "viking-iptv", title: "Viking IPTV – Hva bør du vite?", paragraphs: [
        "Viking IPTV er et av navnene mange nordmenn støter på når de søker etter IPTV-tjenester med nordiske kanaler. Det er derfor naturlig å si litt om hva du bør undersøke før du vurderer en slik tjeneste.",
      ],
      subsections: [
        { id: "tjeneste-ikke-spiller", title: "En tjeneste, ikke en spiller", blocks: [{ p: "Det første du bør vite er at Viking IPTV markedsføres som en tjeneste, altså en leverandør av kanaler og innhold, og ikke som en avspiller. Hvis du tegner et slikt abonnement, må du fortsatt bruke en av spillerne over (for eksempel TiviMate, IBO Player eller IPTV Smarters Pro) for å se innholdet." }] },
        { id: "hva-vi-kunne-bekrefte", title: "Det vi kunne, og ikke kunne, bekrefte", blocks: [
          { p: "Da vi undersøkte navnet i november 2026, fant vi flere ulike nettsider som alle bruker navnet Viking IPTV, med forskjellige domener, priser og kanaltall. Det betyr at:" },
          { list: [
            "Vi kunne ikke fastslå hvilken av dem som eventuelt er den «originale» tjenesten.",
            "Vi fant ingen uavhengige tester eller offentlige kilder som bekrefter oppetid, bildekvalitet eller kundeservice.",
            "Vi fant ingen dokumentasjon på at tjenestene har avtaler med rettighetshaverne til kanalene de markedsfører.",
          ] },
          { p: "Vi gjengir derfor ikke priser, kanaltall eller løfter fra disse sidene. Påstandene kan ikke verifiseres, og de varierer fra side til side." },
        ] },
        { id: "slik-vurderer-du", title: "Slik vurderer du Viking IPTV eller en lignende tjeneste", blocks: [
          { p: "Før du betaler for Viking IPTV eller en hvilken som helst annen IPTV-tjeneste, bør du stille disse spørsmålene:" },
          { list: [
            "Hvem står bak? Finnes det organisasjonsnummer, firmanavn og adresse?",
            "Har de rettigheter? Kan tjenesten dokumentere avtaler med kanalene den tilbyr?",
            "Virker prisen for god til å være sann? Norske kanaler, full sportsdekning og tusenvis av filmer for en brøkdel av prisen hos Telia, Allente eller Altibox er et tydelig varsel.",
            "Hvordan betaler du? Seriøse aktører tilbyr vanlige, sporbare betalingsmåter og norsk forbrukerbeskyttelse.",
          ], ordered: true },
          { p: "Hvis leverandøren ikke kan gi deg tydelige svar på dette, er det en god grunn til å velge en lovlig leverandør i stedet." },
        ] },
      ],
    },
    {
      id: "er-iptv-lovlig", title: "Er IPTV lovlig i Norge?", paragraphs: [
        "Ja, IPTV-teknologien er helt lovlig. Det samme gjelder IPTV-spillerne i denne artikkelen, som er vanlige mediespillere. Det som avgjør om det er lovlig, er innholdet og tjenesten du bruker.",
      ],
      blocks: [
        { list: [
          "Lovlig: Tjenester som har avtaler med rettighetshaverne, for eksempel TV-pakker fra Telia, Allente og Altibox, eller apper som NRK TV, TV 2 Play og Viaplay.",
          "Ulovlig: Tjenester som videreformidler TV-kanaler, sport og filmer uten tillatelse fra rettighetshaverne.",
        ] },
        { p: "Etter åndsverkloven fra 2018 er det ikke lov å strømme eller kopiere innhold fra en åpenbart ulovlig kilde, heller ikke til privat bruk hjemme. Rettighetshavere kan kreve erstatning, og norske domstoler har pålagt internettleverandører å blokkere tilgangen til en rekke piratnettsteder." },
        { p: "Det samme gjelder uansett hvilket navn tjenesten har, enten det er Viking IPTV eller en annen leverandør: Sjekk at den har rettighetene i orden før du betaler." },
        { note: "Vårt råd: Bruk lovlige leverandører. Da får du stabil drift, kundeservice og forbrukerrettigheter, og du støtter de som faktisk lager innholdet." },
      ],
    },
    {
      id: "faq", title: "Ofte stilte spørsmål om IPTV i Norge (FAQ)", paragraphs: [],
      faq: [
        { q: "Hva er den beste IPTV-spilleren i Norge?", a: "Det avhenger av enheten din. TiviMate er best på Android TV, Google TV og Fire TV. IBO Player er et godt valg for Samsung og LG, mens GSE Smart IPTV er blant de beste for Apple TV." },
        { q: "Hvilken IPTV-app fungerer best på Samsung TV?", a: "IBO Player er det mest moderne valget for Samsung-TV-er. Smart IPTV og SET IPTV er rimelige alternativer. TiviMate finnes ikke for Samsung, men kan brukes via en Google TV-boks eller Fire TV Stick." },
        { q: "Er IPTV Smarters Pro gratis?", a: "Ja, selve spilleren er gratis på Android-enheter. På iPhone og Apple TV heter appen Smarters Player Lite og har kjøp i appen. Du må uansett skaffe innholdet fra en egen tjeneste." },
        { q: "Hva er forskjellen mellom IPTV Smarters Pro og TiviMate?", a: "IPTV Smarters Pro er gratis og finnes på mange plattformer, med fokus på film og serier. TiviMate finnes bare på Android, men har en bedre programguide og føles mer som en vanlig TV-dekoder. De beste funksjonene krever Premium." },
        { q: "Kan jeg bruke IPTV på LG Smart TV?", a: "Ja. IBO Player, SET IPTV og Smart IPTV kan lastes ned fra LGs appbutikk. Smart IPTV støtter også eldre LG-modeller med Netcast." },
        { q: "Trenger jeg et IPTV-abonnement for å bruke en IPTV-spiller?", a: "Ja. En IPTV-spiller inneholder ingen kanaler. Du trenger en lovlig kilde, for eksempel et abonnement fra en leverandør med rettigheter. Dette gjelder også om du vurderer Viking IPTV eller lignende tjenester, for spilleren og innholdet er to separate ting." },
        { q: "Er IPTV lovlig i Norge?", a: "IPTV som teknologi er lovlig. Det er ulovlig å strømme fra en åpenbart ulovlig kilde, også til privat bruk. Velg tjenester som har avtaler med rettighetshaverne." },
        { q: "Hvilken IPTV-spiller er best for Android TV?", a: "TiviMate er det mest populære valget takket være programguiden og stabiliteten. OTT Navigator passer for deg som vil ha flere innstillinger, og IPTV Smarters Pro er et godt gratisalternativ." },
      ],
    },
    {
      id: "konklusjon", title: "Konklusjon – Hvilken IPTV-spiller bør du velge?", paragraphs: [
        "Det finnes ikke én beste IPTV-spiller for alle. Den riktige appen avhenger nesten helt av hvilken TV eller boks du har:",
      ],
      blocks: [
        { list: [
          "Android TV, Google TV og Fire TV: Velg TiviMate for den beste TV-opplevelsen, eller OTT Navigator hvis du vil styre alt selv.",
          "Samsung og LG: IBO Player er det mest moderne valget, mens Smart IPTV og SET IPTV er rimelige engangsløsninger.",
          "Apple TV, iPhone og iPad: GSE Smart IPTV eller Smarters Player Lite.",
          "Flere enheter og gratis start: IPTV Smarters Pro.",
        ] },
        { p: "Husk at spilleren bare er halve løsningen. Uansett om du vurderer Viking IPTV, en annen tjeneste eller TV-pakken fra bredbåndsleverandøren din, bør du sjekke at innholdet kommer fra en lovlig kilde. Da får du en løsning som fungerer stabilt, og som du kan bruke med god samvittighet." },
      ],
    },
    {
      id: "kilder", title: "Kilder", paragraphs: [],
      blocks: [{ links: [
        { label: "Smart IPTV – offisiell side (siptv.app)", href: "https://siptv.app/" },
        { label: "Smart IPTV – aktivering og pris", href: "https://siptv.app/activation/" },
        { label: "TiviMate – offisiell side", href: "https://tivimate.com/" },
        { label: "GSE SMART IPTV PRO i App Store", href: "https://apps.apple.com/no/app/gse-smart-iptv-pro/id1055456071" },
        { label: "Åndsverkloven (Lovdata)", href: "https://lovdata.no/dokument/NL/lov/2018-06-15-40" },
        { label: "Velg ekte – ulovlig strømming og IPTV", href: "https://www.velgekte.no/ulovlig-nedlasting/ulovlig-stromming-og-iptv" },
      ] }],
    },
  ],
  related: ["sette-opp-iptv-pa-smart-tv", "hva-bor-du-sjekke-for-du-velger-iptv"],
};
