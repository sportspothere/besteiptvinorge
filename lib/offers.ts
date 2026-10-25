const FEATURES = [
  "Be om oppdatert innholdsoversikt",
  "Avklar kvalitet for enheten din",
  "Sjekk distribusjonsrettigheter",
  "Avklar samtidige strømmer",
  "Sjekk eventuelle appkostnader",
  "Les vilkår for fornyelse",
  "Avklar oppsigelse og klage",
];


export const PLANS = [
  {
    id: "1m",
    name: "1 MÅNED",
    bonus: null as string | null,
    prices: { one: 106, two: 176 },
    period: "/ måned",
    savings: null as string | null,
    features: FEATURES.slice(0, 7),
    gold: false,
    cta: "Spør om abonnement",
  },
  {
    id: "3m",
    name: "3 MÅNEDER",
    bonus: null as string | null,
    prices: { one: 176, two: 326 },
    period: "/ 3 måneder",
    savings: null as string | null,
    features: FEATURES.slice(0, 9),
    gold: false,
    cta: "Spør om abonnement",
  },
  {
    id: "6m",
    name: "6 MÅNEDER",
    bonus: null as string | null,
    prices: { one: 326, two: 576 },
    period: "/ 6 måneder",
    savings: null as string | null,
    features: FEATURES.slice(0, 10),
    gold: false,
    cta: "Spør om abonnement",
  },
  {
    id: "12m",
    name: "12 MÅNEDER",
    bonus: null as string | null,
    prices: { one: 526, two: 876 },
    period: "/ år",
    savings: null as string | null,
    features: FEATURES,
    gold: true,
    cta: "Spør om årsabonnement",
  },
];

