export type MethodId = "m3u" | "xtream" | "mac" | "portal";
export type InstallStep = { title: string; text: string };
export type Device = { id: string; name: string; group: string; note?: string };
export const deviceGroups = [
  { id: "tv", name: "Smart TV", description: "Samsung, LG, Android TV og Google TV" },
  { id: "streaming", name: "Strømmeenhet", description: "Fire TV, Apple TV, Chromecast og TV-bokser" },
  { id: "mobile", name: "Mobil og nettbrett", description: "Android, iPhone og iPad" },
  { id: "computer", name: "Datamaskin", description: "Windows, Mac og Linux" },
  { id: "receiver", name: "IPTV-mottaker", description: "MAG og Formuler" },
  { id: "other", name: "Annen enhet eller usikker", description: "Vi hjelper deg å finne riktig utgangspunkt" },
] as const;
export const devices: Device[] = [
  { id: "samsung", name: "Samsung Smart TV (Tizen)", group: "tv" },
  { id: "lg", name: "LG Smart TV (webOS)", group: "tv" },
  { id: "android-tv", name: "Android TV", group: "tv" },
  { id: "google-tv", name: "Google TV", group: "tv" },
  { id: "other-tv", name: "Annen Smart TV", group: "tv" },
  { id: "fire-tv", name: "Amazon Fire TV Stick / Fire TV", group: "streaming", note: "Gjelder Fire OS med appstøtte, ikke automatisk alle nyere Fire TV-systemer." },
  { id: "chromecast", name: "Chromecast med Google TV", group: "streaming", note: "En eldre Chromecast uten Google TV har ikke samme appinstallasjon." },
  { id: "apple-tv", name: "Apple TV", group: "streaming" },
  { id: "android-box", name: "Android TV Box", group: "streaming", note: "Velg dette for en boks med Android TV. Vanlig Android på en boks må avklares separat." },
  { id: "shield", name: "Nvidia Shield", group: "streaming" },
  { id: "android-phone", name: "Android-mobil", group: "mobile" },
  { id: "android-tablet", name: "Android-nettbrett", group: "mobile" },
  { id: "iphone", name: "iPhone", group: "mobile" },
  { id: "ipad", name: "iPad", group: "mobile" },
  { id: "windows", name: "Windows PC", group: "computer" },
  { id: "mac", name: "Mac / macOS", group: "computer" },
  { id: "linux", name: "Linux PC", group: "computer" },
  { id: "mag", name: "MAG Box", group: "receiver", note: "Portalveiledningen gjelder Linux/WebKit-mottakere. MAG med Google TV bruker et annet oppsett." },
  { id: "formuler", name: "Formuler Z", group: "receiver", note: "Velg MYTVOnline-versjonen som faktisk er installert på mottakeren." },
  { id: "other-receiver", name: "Annen IPTV-mottaker", group: "receiver" },
  { id: "other", name: "Annen enhet", group: "other" },
  { id: "unknown", name: "Jeg er usikker på hvilken enhet jeg har", group: "other" },
];
export const methods: Record<MethodId, { name: string; description: string; fields: string[] }> = {
  m3u: { name: "M3U / M3U8", description: "En spillelistelenke fra innholdsleverandøren. En lenke til én HLS-strøm er ikke nødvendigvis en full kanalliste.", fields: ["Spillelistelenke", "Navn på listen, hvis appen ber om det"] },
  xtream: { name: "Xtream Codes", description: "Serveradresse, brukernavn og passord legges inn i appen som tre separate opplysninger.", fields: ["Serveradresse", "Brukernavn", "Passord"] },
  mac: { name: "MAC / Device Key + M3U", description: "Koble appens enhetsidentifikator til spillelisten på utviklerens egen administrasjonsside.", fields: ["MAC / Device ID fra appen", "Device Key når appen krever det", "Autorisert M3U-lenke"] },
  portal: { name: "Portalbasert oppsett", description: "Mottakeren kobles til portaladressen leverandøren har gitt deg. Registrering av enhets-ID kan være nødvendig.", fields: ["Portaladresse", "Enhets-ID som leverandøren eventuelt ber om"] },
};
export type Player = { id: string; name: string; devices: string[]; methods: MethodId[]; source: string; download: string; note: string; version: string };
const tvAndroid = ["android-tv", "google-tv", "chromecast", "android-box", "shield"];
export const players: Player[] = [
  { id: "ibo", name: "IBO Player", devices: ["samsung", "lg"], methods: ["mac"], source: "https://iboiptv.com/support", download: "https://iboiptv.com/", note: "Original IBO Player fra utgiveren som oppgir iboiptv.com. Ikke samme produkt som alle Pro-varianter. Kontroller butikk og modell.", version: "MAC/Device Key-flyten dokumentert av utgiveren; menynavn kan variere." },
  { id: "smartone", name: "SmartOne IPTV", devices: ["samsung", "lg", ...tvAndroid, "fire-tv"], methods: ["mac"], source: "https://smartone-iptv.com/plugin/smart_one/main_generate", download: "https://smartone-iptv.com/", note: "M3U gjennom utviklerens MAC-baserte administrasjon. Ikke appen Smart IPTV (SIPTV).", version: "Utgiverens M3u Playlist-fane og plattformliste, kontrollert 2. november 2026." },
  { id: "tivimate", name: "TiviMate", devices: tvAndroid, methods: ["xtream", "m3u"], source: "https://play.google.com/store/apps/details?id=ar.tvplayer.tv", download: "https://tivimate.com/", note: "Armobsoft FZE. Beregnet på Android TV og fjernkontroll, ikke anbefalt som mobilapp.", version: "Android TV-utgaven. M3U og Xtream dokumentert i utgiverens Google Play-oppføring." },
  { id: "vlc", name: "VLC media player", devices: ["windows", "mac", "linux", "android-phone", "android-tablet", "iphone", "ipad"], methods: ["m3u"], source: "https://docs.videolan.me/vlc-user/desktop/3.0/en/basic/media.html", download: "https://www.videolan.org/vlc/", note: "VideoLAN. Nettverksavspilling uten en komplett IPTV-portal eller integrert abonnementsadministrasjon.", version: "VLC 3.x. Desktop, Android og iOS har forskjellige menyer." },
  ...["2", "3", "4"].map(version => ({ id: `mytv${version}`, name: `MYTVOnline ${version}`, devices: ["formuler"], methods: ["portal", "xtream", "m3u"] as MethodId[], source: "https://support.formuler.tv/kb/article/63-how-to-set-up-portals-on-mytvonline-mac-id-xc-m3u/", download: "https://support.formuler.tv/", note: "Bare på en kompatibel Formuler med denne MYTVOnline-versjonen installert. Modellnavnet alene er ikke nok.", version: `MYTVOnline ${version}; kontroller versjonen under appinformasjon på mottakeren.` })),
  { id: "mag-portal", name: "MAG Linux/WebKit-portal", devices: ["mag"], methods: ["portal"], source: "https://wiki.infomir.eu/eng/set-top-box/stb-linux-webkit/embedded-portal/system-settings", download: "https://wiki.infomir.eu/", note: "Innebygd portal på kompatible MAG-mottakere. Ikke Google TV-modeller eller MYTVOnline.", version: "Infomirs Linux/WebKit Embedded Portal med System settings → Servers → Portals." },
];
export const pendingPlayers = [
  { name: "IBO Player Pro / IBO Pro Player", reason: "Flere separate utgivere og portaler. Nøyaktig variant må identifiseres før en oppskrift kan anbefales." },
  { name: "BOB Player", reason: "Enhetsstøtte og den aktuelle versjonens innloggingsflyt er ikke verifisert her." },
  { name: "IPTV Smarters / Smarters Player Lite", reason: "WHMCS SMARTERS sin norske App Store-oppføring bekrefter iPhone, iPad, tvOS og M3U. Den aktuelle skjermflyten er ikke kontrollert, så denne oppskriften er foreløpig ikke tilgjengelig i veiviseren." },
  { name: "HOT IPTV", reason: "Må verifiseres som et eget produkt med riktig utgiver og portal." },
  { name: "Hot Player", reason: "Behandles separat fra HOT IPTV. Ingen felles aktiveringsadresse er forutsatt." },
  { name: "XCIPTV", reason: "Riktig utgiver, plattform og aktuell versjon må bekreftes." },
  { name: "GSE Smart IPTV", reason: "Butikktilgjengelighet og aktuell versjon må kontrolleres for hver plattform." },
  { name: "OTT Navigator", reason: "Plattformstøtte og menyflyt må verifiseres før anbefaling." },
  { name: "IPTV Extreme", reason: "Plattformstøtte og menyflyt må verifiseres før anbefaling." },
];
export function availablePlayers(device: string) { return players.filter(p => p.devices.includes(device)); }
// Display choices separately from verified recipes: showing a player must not
// imply that every operating system supports it.
export const selectablePlayers = [
  { id: "ibo", name: "IBO Player", note: "Kontroller riktig IBO-variant og tilgjengelighet i enhetens appbutikk." },
  { id: "smartone", name: "SmartOne IPTV", note: "Kontroller modell og tilgjengelighet i enhetens appbutikk." },
  { id: "bob", name: "BOB Player", note: "Vi hjelper deg med å sjekke appversjon og oppsett på enheten din." },
  { id: "tivimate", name: "TiviMate", note: "For Android TV og Google TV. Samsung Tizen og LG webOS krever en separat kompatibel TV-enhet." },
  { id: "smarters", name: "IPTV Smarters", note: "Velg denne hvis du bruker Smarters. Riktig utgave og støtte må passe til enheten din." },
  { id: "hot-iptv", name: "HOT IPTV", note: "Kontroller appnavn og utgiver. HOT IPTV og Hot Player er forskjellige apper." },
  { id: "xciptv", name: "XCIPTV", note: "Vi hjelper deg med å sjekke utgiver, operativsystem og riktig oppsett." },
];
export function playerChoices(device: string) {
  const verified = availablePlayers(device);
  if (!devices.some(d => d.id === device)) return [];
  return [
    ...selectablePlayers.map(p => verified.find(v => v.id === p.id) ?? p),
    ...verified.filter(p => !selectablePlayers.some(choice => choice.id === p.id)),
  ];
}
export function validSelection(device: string, player: string, method: string) { return players.some(p => p.id === player && p.devices.includes(device) && p.methods.includes(method as MethodId)); }
export function supportUrl(device = "", player = "", method = "") {
  const d = devices.find(d => d.id === device)?.name;
  const p = players.find(p => p.id === player)?.name ?? selectablePlayers.find(p => p.id === player)?.name;
  return `https://wa.me/447460010370?text=${encodeURIComponent(["Hei! Jeg trenger hjelp med IPTV-oppsett.", d && `Enhet: ${d}`, p && `App: ${p}`, method && methods[method as MethodId]?.name].filter(Boolean).join("\n"))}`;
}
export function installationSteps(device: string, playerId: string, method: MethodId): InstallStep[] {
  if (!validSelection(device, playerId, method)) return [];
  const p = players.find(p => p.id === playerId)!;
  const d = devices.find(d => d.id === device)!;
  const steps: InstallStep[] = [{ title: "Ha riktig tilgang klar", text: `Bruk ${d.name} med aktiv nettilkobling og innhold du har rett til å se. Be kundeservice bekrefte at tilgangen støtter ${methods[method].name}. Ikke legg inn opplysningene på denne nettsiden.` }];
  if (playerId === "ibo" || playerId === "smartone") {
    steps.push({ title: "Finn riktig app i enhetens butikk", text: `Søk etter ${p.name} i ${device === "samsung" ? "Samsung Apps på TV-en" : device === "lg" ? "LG Content Store" : device === "fire-tv" ? "Amazon Appstore på Fire OS-enheten" : "Google Play på TV-en"}. Sammenlign utgiver med utviklerens offisielle nettside. Hvis appen ikke finnes for modell og region, stopp og kontakt oss i stedet for å installere en annen app med lignende navn.` },
      { title: "Installer og åpne appen", text: "Velg installasjon i butikken. Start appen, kontroller eventuelle lisensvilkår og la startsiden med enhetsinformasjon vises. En app-lisens er separat fra IPTV-abonnementet og inkluderer ikke kanaler." },
      { title: "Finn appens identifikator", text: playerId === "ibo" ? "Noter MAC / Device ID og Device Key slik de vises i IBO Player. Bruk appens verdier, ikke automatisk MAC-adressen i TV-ens nettverksinnstillinger." : "Noter TV MAC som vises i SmartOne. Denne oppskriften krever ikke at du finner opp en Device Key; bruk bare feltene SmartOne faktisk viser." },
      { title: "Åpne utviklerens administrasjon", text: playerId === "ibo" ? "Åpne iboiptv.com på mobilen eller datamaskinen og følg lenken for Manage Playlist. Kontroller at adressen samsvarer med utvikleren som vises i appen. Logg inn med MAC/Device ID og Device Key. Ikke bruk en Pro-variants portal." : "Åpne smartone-iptv.com og Upload Playlist. Velg fanen M3u Playlist for en vanlig M3U-fil eller URL. Bruk ikke en annen fane bare fordi den også inneholder ordet M3U." },
      { title: "Legg til den autoriserte spillelisten", text: playerId === "ibo" ? "Velg Add Playlist for M3U, gi listen et gjenkjennelig navn og legg inn den komplette lenken fra leverandøren. Lagre listen for riktig enhet. Ikke betal en lisens i forventning om at den inkluderer et abonnement." : "Fyll ut Tv MAC, Playlist Name og Playlist M3u. EPG URL er valgfritt når du har fått en kompatibel TV-guideadresse. Velg Add Playlist og kontroller at listen er knyttet til riktig TV MAC." },
      { title: "Last listen på nytt", text: "Gå tilbake til appen på enheten. Bruk appens Reload-funksjon hvis den vises, eller lukk appen helt og åpne den igjen. Vent mens kanallisten hentes; ikke opprett flere kopier av samme liste under innlastingen." });
  } else if (playerId === "tivimate") {
    steps.push({ title: "Installer TiviMate fra riktig utgiver", text: "Åpne Google Play på Android TV-enheten, finn TiviMate IPTV Player fra Armobsoft FZE og installer. Utviklerens offisielle nettsted er tivimate.com. TiviMate Premium låser opp appfunksjoner og er ikke et kanalabonnement." },
      { title: "Åpne spillelisteoppsettet", text: "Start TiviMate og velg Add playlist. Har du en liste fra før, åpne Settings → Playlists og velg å legge til en ny liste. Menyspråket kan være engelsk selv om du bruker norsk på TV-en." },
      { title: `Velg ${methods[method].name}`, text: method === "xtream" ? "Velg Xtream Codes. Legg inn serveradresse, brukernavn og passord i hvert sitt felt, nøyaktig som mottatt. Behold protokoll og eventuell port i serveradressen; bruk ikke en lang M3U-lenke som serveradresse." : "Velg M3U playlist og funksjonen for en URL. Legg inn hele den autoriserte spillelistelenken, inkludert alle parametere. En adresse til leverandørens hjemmeside er ikke det samme som en spilleliste." },
      { title: "Hent og lagre listen", text: "Velg Next, la appen kontrollere tilgangen og laste kanallisten. Gi listen et navn når du blir bedt om det, og fullfør oppsettet. Ved feil: korriger opplysningene før du prøver igjen." },
      { title: "Kontroller kanaler og TV-guide", text: "Åpne listen og la eventuell EPG lastes. Ved M3U kan en separat EPG-adresse være nødvendig dersom leverandøren tilbyr det. Bruk oppdatering for spilleliste/EPG i appens innstillinger. En TV-guide er ikke garantert for alle kilder." });
  } else if (playerId === "vlc") {
    const mobile = ["android-phone", "android-tablet", "iphone", "ipad"].includes(device);
    steps.push({ title: "Installer VLC fra VideoLAN", text: mobile ? "Følg mobil-lenken på videolan.org/vlc til Google Play eller App Store. Kontroller at utgiveren er VideoLAN. Installer og åpne appen. VLC er gratis; et separat innholdsabonnement er ikke inkludert." : device === "linux" ? "Bruk VideoLANs Linux-nedlastingsoversikt eller programvarelageret for distribusjonen din. Installer VLC-pakken for systemet ditt; denne guiden bruker ingen tilfeldig APK eller Windows-installasjonsfil på Linux." : `Gå til videolan.org/vlc, velg ${device === "mac" ? "macOS" : "Windows"} og følg installasjonsveiviseren for systemet. Åpne VLC etter installasjon.` },
      { title: "Åpne en nettverksstrøm", text: device === "mac" ? "Velg File → Open Network i VLC. Du skal åpne en nettadresse, ikke søke etter en lokal fil." : ["iphone", "ipad"].includes(device) ? "Åpne Network / Nettverk i VLC og velg Open Network Stream / Åpne nettverksstrøm. Menynavn og plassering kan variere mellom iOS-versjoner." : mobile ? "Åpne More / Mer og velg New stream / Ny strøm. Dette er nettverksfeltet, ikke funksjonen for å finne lokale mediefiler." : "Velg Media → Open Network Stream. I fanen Network legger du inn nettadressen. Menyspråket kan være norsk eller engelsk." },
      { title: "Legg inn M3U-lenken i VLC", text: "Lim inn den komplette lenken fra leverandøren i URL-feltet. Bruk bare innhold du har lovlig tilgang til. Spillelistelenken kan inneholde passord, og skal ikke deles i åpne skjermbilder." },
      { title: "Start og velg innhold", text: "Velg Play / Open eller startknappen i din VLC-utgave. Hvis kilden er en støttet liste med flere oppføringer, velger du ønsket oppføring i spillelistevisningen. En M3U8-adresse til én strøm kan åpne bare den strømmen." },
      { title: "Oppdater uten å miste oversikten", text: "For å hente endret innhold kan du åpne nettverkslenken på nytt. VLC er en generell mediespiller: denne oppskriften setter ikke opp en integrert IPTV-TV-guide eller Xtream-konto. Ikke legg en EPG-URL i videofeltet." });
  } else if (playerId.startsWith("mytv")) {
    const menu = playerId === "mytv2" ? "Menu → Connections" : playerId === "mytv3" ? "Menu → Content Manager → Content Sources" : "Menu → Settings → App Settings → Content Sources";
    steps.push({ title: "Kontroller MYTVOnline-versjonen", text: `Bruk ${p.name} som er levert for en kompatibel Formuler. Kontroller versjonen på mottakeren; ikke installer en annen generasjon som en tilfeldig mobilapp. Bruk bare mottakerens offisielle oppdateringer.` },
      { title: "Åpne tilkoblingene", text: `Åpne ${menu}. Velg å legge til en kilde eller forbindelse. Navn på knapper kan variere med språk og firmware.` },
      { title: `Legg til ${methods[method].name}`, text: method === "portal" ? "Velg portal/MAC-ID-tilgang. Legg inn portaladressen du har fått. Hvis leverandøren krever registrering, bruk MAC-ID som mottakeren viser for MYTVOnline. Denne ID-en må ikke forveksles med en annen nettverksadresse." : method === "xtream" ? "Velg XC-tilgang eller portal med innlogging. Legg inn server-/portaladresse, brukernavn og passord i de separate feltene. Bruk leverandørens opplysninger, ikke eksempelverdier fra en skjermillustrasjon." : "Velg M3U-spilleliste og legg inn mottatt M3U-URL eller en autorisert fil. Legg bare inn XMLTV/EPG-adresse dersom leverandøren har gitt deg en og feltet støttes." },
      { title: "Lagre og koble til kilden", text: "Lagre kilden med et gjenkjennelig navn. Velg den og la innholdet lastes før du starter avspilling. Portalen kan kreve at leverandøren aktiverer mottakerens ID først." },
      { title: "Oppdater innhold og EPG", text: "Bruk innholdsoppdatering i den installerte MYTVOnline-versjonen, eller koble til kilden på nytt. TV-guiden avhenger av kildens EPG og riktig tidssone. Ikke bytt til MAG-menyen på en Formuler." });
  } else {
    steps.push({ title: "Kontroller at mottakeren bruker Linux/WebKit-portalen", text: "Denne oppskriften gjelder innebygd portal med System settings. En MAG med Google TV har andre menyer. Hvis du ikke finner systemet som beskrives, stopp og kontakt oss med modellnavnet." },
      { title: "Åpne portalinnstillingene", text: "Fra den innebygde portalen åpner du System settings → Servers → Portals. Det installeres ingen separat MYTVOnline- eller mobilapp i denne oppskriften." },
      { title: "Legg inn portaladressen", text: "Gi Portal 1 name et gjenkjennelig navn og fyll Portal 1 URL med den komplette adressen fra leverandøren. Ikke endre eksisterende porter eller legg til egne endelser. Avklar eventuell registrering av mottakerens MAC-ID før tilkobling." },
      { title: "Lagre og start portalen på nytt", text: "Lagre endringene, gå tilbake til System settings og velg Restart portal der funksjonen finnes. Vent på at portalen kobler til. En administrert eller låst mottaker kan kreve hjelp fra leverandøren." },
      { title: "Kontroller innlastet innhold", text: "Velg en inkludert kanal etter at portalen er lastet. Oppdatering og TV-guide styres av portalen. Ikke endre DHCP- eller avanserte oppstartsinnstillinger på egen hånd hvis boksen åpner en annen portal." });
  }
  steps.push({ title: "Test bilde og lyd", text: "Prøv mer enn én inkludert kanal eller tittel. Kontroller lydutgang, nettilkobling og grensen for samtidige enheter. Appstøtte er ikke en garanti for at alle kilder eller videoformater fungerer." },
    { title: "Hvis oppsettet ikke lykkes", text: "Kontroller aktiv tilgang, riktig metode, hele adressen og eventuelle ekstra mellomrom. Sammenlign feil på én kanal med feil på hele listen. Ikke slett appdata eller kjøp en ny lisens før årsaken er avklart." },
    { title: "Få hjelp med dette oppsettet", text: "Kontakt oss på WhatsApp med enhetsmodell, appnavn, versjon og feilmelding. Lenken under tar bare med valgene i veiviseren, aldri innloggingsopplysninger. Kundeservice må også bekrefte støtte for din konkrete tilgang." });
  return steps;
}
