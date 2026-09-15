import { Waves, Landmark, Utensils, BookOpen, HeartHandshake, Sprout } from "lucide-react";

// All monetary values are stored in INR (base). Currency conversion happens in the UI.
export const impact = {
  raisedBase: 41870400,
  utilized: 35112500,
  utilizedUpdated: "12 May 2026",
  donors: 38420,
  countries: 22,
  projects: 24,
};

export const causes = [
  {
    id: "nadi",
    sanskrit: "नदी सेवा",
    title: "Nadi Seva — Yamuna & Ganga Ghats",
    blurb: "Daily ghat clean-ups, waste interception nets and river-bank restoration across Vrindavan, Prayagraj and Varanasi.",
    icon: Waves,
    raised: 8420000,
    goal: 12000000,
    image: "https://images.unsplash.com/photo-1779518079988-882219cd24db?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    unitInr: 251,
    unitKey: "unit.nadi",
    urgent: false,
  },
  {
    id: "mandir",
    sanskrit: "मन्दिर सेवा",
    title: "Mandir Seva — Upkeep & Welfare",
    blurb: "Restoring neglected village temples and supporting the pujaris, musicians and cooks who keep them alive.",
    icon: Landmark,
    raised: 5310000,
    goal: 9000000,
    image: "https://images.unsplash.com/photo-1665003725647-3ae0f01140b1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    unitInr: 1100,
    unitKey: "unit.mandir",
    urgent: false,
  },
  {
    id: "gau",
    sanskrit: "गौ सेवा",
    title: "Gau Seva — Gaushala Feed & Care",
    blurb: "Green fodder, veterinary care and shelter for abandoned and injured cows in partner gaushalas.",
    icon: Sprout,
    raised: 6890000,
    goal: 8000000,
    image: "https://images.pexels.com/photos/38937794/pexels-photo-38937794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    unitInr: 51,
    unitKey: "unit.gau",
    urgent: false,
  },
  {
    id: "anna",
    sanskrit: "अन्न दान",
    title: "Anna Daan — Daily Bhandara",
    blurb: "Hot, freshly cooked sattvik meals served every day at ghats, hospitals and temple courtyards.",
    icon: Utensils,
    raised: 9740000,
    goal: 11000000,
    image: "https://images.unsplash.com/photo-1677128912094-36d988ce198b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    unitInr: 501,
    unitKey: "unit.anna",
    urgent: true,
  },
  {
    id: "vidya",
    sanskrit: "विद्या दान",
    title: "Vidya Daan — Learning Kits",
    blurb: "Books, slates, uniforms and after-school teachers for children in riverside and temple-town schools.",
    icon: BookOpen,
    raised: 3120000,
    goal: 7000000,
    image: "https://images.pexels.com/photos/15119089/pexels-photo-15119089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    unitInr: 351,
    unitKey: "unit.vidya",
    urgent: false,
  },
  {
    id: "vriddha",
    sanskrit: "वृद्ध सेवा",
    title: "Vriddha Seva — Elder Care",
    blurb: "Medicines, spectacles and monthly ration for elders living alone in pilgrimage towns.",
    icon: HeartHandshake,
    raised: 2380000,
    goal: 6000000,
    image: "https://images.pexels.com/photos/14225230/pexels-photo-14225230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    unitInr: 751,
    unitKey: "unit.vriddha",
    urgent: false,
  },
];

export const howSteps = [
  { n: "01", title: "You offer a seva", body: "Give from anywhere in the world by card, UPI or bank transfer. The gross amount is logged against the seva you chose the moment it clears." },
  { n: "02", title: "The fund is ring-fenced", body: "Each seva has its own account. A gift to Gau Seva can never be spent on anything else — no pooling, no internal transfers." },
  { n: "03", title: "Named partners disburse", body: "Registered gaushalas, temple trusts and ghat committees draw against documented budgets. Bills, photographs and GPS are attached to every release." },
  { n: "04", title: "We reconcile and publish", body: "A chartered firm verifies utilisation each quarter. That verified figure — not our estimate — is what you see as funds utilised." },
];

export const commitments = [
  { title: "80G registered", body: "Indian taxpayers receive an 80G receipt by email within 24 hours of every gift, quoting our registration number." },
  { title: "FCRA-compliant for overseas gifts", body: "Foreign contributions are received into a designated FCRA account and reported exactly as the law requires." },
  { title: "Independent annual audit", body: "Books audited by a third-party chartered firm from year one. The full report is published, not summarised." },
  { title: "Seva-wise ring-fencing", body: "Every seva has a separate ledger. Restricted gifts are operationally isolated — there is no cross-subsidy." },
  { title: "Named trustees", body: "Our trustees are listed with declared interests, and they approve every disbursement above ₹1 lakh." },
  { title: "Verified field partners", body: "Gaushalas, temple trusts and ghat committees are inspected and re-verified every six months before funds move." },
];

export const trustLogos = [
  "80G Registered", "FCRA Designated Account", "PCI-DSS Processing", "256-bit TLS", "Independently Audited",
];

export const stories = [
  {
    name: "Kamla Devi",
    place: "Anna Daan · Prayagraj",
    quote: "I used to eat once in two days. Now there is a hot thali at noon, and someone who knows my name when they hand it to me.",
    image: "https://images.pexels.com/photos/14225230/pexels-photo-14225230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Shyam Gaushala",
    place: "Gau Seva · Mathura",
    quote: "Fodder used to run out by the twentieth of the month. With monthly sevaks abroad, ninety-two cows now eat green fodder every single day.",
    image: "https://images.pexels.com/photos/38422340/pexels-photo-38422340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Ghat Samiti",
    place: "Nadi Seva · Varanasi",
    quote: "Eleven tonnes of waste lifted from two ghats this season. The steps are stone again, not plastic.",
    image: "https://images.pexels.com/photos/7657040/pexels-photo-7657040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const faqs = [
  { q: "Can I donate from outside India?", a: "Yes — that is who we built this for. Overseas gifts are received into our designated FCRA account and can be made by international card or bank transfer in USD, GBP, EUR, AED, AUD, CAD or SGD. Amounts on this site are shown in your chosen currency and held in INR." },
  { q: "Why does giving start at ₹51?", a: "Because seva should never be gate-kept by amount. ₹51 feeds a cow for a day. The ladder above it — ₹251, ₹1,100, ₹5,100 — follows the amounts Indian families have always given by, and each step maps to something specific in the field." },
  { q: "Will I get a tax receipt?", a: "Indian taxpayers receive an 80G receipt within 24 hours. Overseas donors receive a formal FCRA-compliant acknowledgement; deductibility in your country of residence depends on local law, so please check the receipt for your jurisdiction." },
  { q: "Why are 'raised' and 'utilised' different numbers?", a: "Raised updates in near real-time as gifts clear. Utilised is money that has actually reached the field and been spent — verified quarterly by an independent chartered firm. A healthy gap simply means funds are in transit or reserved for a scheduled disbursement." },
  { q: "How do I know my gift reached the seva I chose?", a: "Each seva has its own ring-fenced ledger. Disbursements carry the partner's name, the bill, a photograph and GPS coordinates, and are published in the quarterly report — you can trace your month against them." },
  { q: "Can I give monthly and stop later?", a: "Yes. A monthly seva can be paused or cancelled any time from your receipt link or by writing to us. No retention hoops, no questions." },
];
