/* ------------------------------------------------------------------ *
 *  SINGLE SOURCE OF TRUTH for the landing page.
 *  Swap the trader by editing this file only — copy, stats, pricing,
 *  and image-slot labels all read from here.
 * ------------------------------------------------------------------ */

export const brand = {
  name: "Stock Hours",
  trader: "Nour Atta",
  handle: "@nourtrades",
  discordUrl: "#join", // prototype: dummy anchor. Wire real Discord invite here.
  instagramUrl: "https://www.instagram.com/nourtrades",
  youtubeUrl: "#",
  xUrl: "#",
};

export const hero = {
  eyebrow: "Live day-trading floor · Est. 2019",
  titleLead: "Trade every market open",
  titleAccent: "with a room that calls it live.",
  sub: "Nour Atta and a floor of full-time traders share every entry, exit, and stop in real time — inside one private Discord. No hindsight screenshots. No fluff. Just live setups from the bell.",
  primaryCta: "Join the Discord",
  secondaryCta: "See what's inside",
};

export const stats = [
  { value: 12400, suffix: "+", label: "Active members" },
  { value: 40, suffix: "+", label: "Live sessions / month" },
  { value: 6, suffix: " yrs", label: "Running the floor" },
  { value: 4.9, decimals: 1, suffix: "★", label: "From 2,100+ reviews" },
];

// Scrolling ticker tape under the hero. dir: 1 up, -1 down.
export const ticker = [
  { sym: "NVDA", chg: "+3.42%", dir: 1 },
  { sym: "TSLA", chg: "+1.18%", dir: 1 },
  { sym: "SPY", chg: "-0.44%", dir: -1 },
  { sym: "AAPL", chg: "+0.92%", dir: 1 },
  { sym: "AMD", chg: "+2.71%", dir: 1 },
  { sym: "MSFT", chg: "-0.21%", dir: -1 },
  { sym: "META", chg: "+1.63%", dir: 1 },
  { sym: "QQQ", chg: "+0.58%", dir: 1 },
  { sym: "AMZN", chg: "-0.77%", dir: -1 },
  { sym: "COIN", chg: "+5.04%", dir: 1 },
  { sym: "SOFI", chg: "+1.29%", dir: 1 },
  { sym: "PLTR", chg: "+4.11%", dir: 1 },
];

export const pressLogos = ["Benzinga", "Yahoo Finance", "MarketWatch", "Nasdaq", "Investing.com"];

export const features = [
  {
    title: "Live trade alerts",
    body: "Every entry, exit, and stop posted the second it happens — with the reasoning, not just a ticker.",
    icon: "bolt",
    span: "lg",
  },
  {
    title: "The 9:30 open, live",
    body: "Trade the bell on screen-share with Nour. Watch the setups form in real time and ask questions on air.",
    icon: "broadcast",
    span: "sm",
  },
  {
    title: "Pre-market watchlist",
    body: "Gappers, levels, and the day's game plan dropped by 8:00 AM ET. Every single trading day.",
    icon: "list",
    span: "sm",
  },
  {
    title: "120+ lesson library",
    body: "From your first candle to advanced options flow — a structured path, not a pile of random videos.",
    icon: "book",
    span: "sm",
  },
  {
    title: "The trading floor chat",
    body: "12,000 traders, moderators, and live callouts around the clock. You're never trading alone again.",
    icon: "chat",
    span: "sm",
  },
  {
    title: "1-on-1 mentorship",
    body: "Monthly reviews of your own trades with a full-time desk trader. Real feedback on your real fills.",
    icon: "target",
    span: "lg",
  },
];

export const steps = [
  { n: "01", title: "Join the Discord", body: "One link, instant access to every channel and the live stream." },
  { n: "02", title: "Get the game plan", body: "Watchlist and levels land in your feed before the bell rings." },
  { n: "03", title: "Trade the open live", body: "Follow calls in real time and ask questions on the morning stream." },
  { n: "04", title: "Review & compound", body: "Journal your fills, get feedback, and turn the edge into a habit." },
];

export const about = {
  eyebrow: "Meet your lead trader",
  name: "Nour Atta",
  role: "Founder · Full-time day trader since 2016",
  paras: [
    "Nour blew up two accounts before he ever turned a consistent dollar. What changed wasn't a secret indicator — it was trading in a room, out loud, where every call is accountable in real time.",
    "Stock Hours is the room he wishes he'd had: no lambos, no lifestyle bait. Just live setups, honest losers included, and a floor of traders who show their work.",
  ],
  miniStats: [
    { value: "9:30", label: "On stream, every open" },
    { value: "1.2M", label: "Community across platforms" },
    { value: "100%", label: "Calls shown live — wins & losses" },
  ],
};

export const testimonials = [
  {
    quote:
      "First community where I could actually see the trade being called, not a screenshot after the fact. Changed how I size risk.",
    name: "Marcus D.",
    handle: "@mdtrades",
    stat: "8 months in",
  },
  {
    quote:
      "The morning watchlist alone is worth the sub. I walk in with a plan instead of chasing green candles.",
    name: "Priya S.",
    handle: "@priya.charts",
    stat: "Member since 2023",
  },
  {
    quote:
      "Losing trades get posted too. That honesty is why I trust the room — it's education, not a hype machine.",
    name: "Devon R.",
    handle: "@devonr",
    stat: "1 year in",
  },
];

// Instagram grid — real @nourtrades assets, cropped from screenshots (scripts/crop-nour.mjs).
export const igSlots = [
  { label: "IG Reel — market recap", src: "/nour/opt/ig-recap.jpg" },
  { label: "IG Post — the desk setup", src: "/nour/opt/ig-plan.jpg" },
  { label: "IG Reel — live call clip", src: "/nour/opt/ig-live.jpg" },
  { label: "IG Post — member win", src: "/nour/opt/ig-win.jpg" },
  { label: "IG Post — Nasdaq × moomoo", src: "/nour/opt/ig-nasdaq.jpg" },
  { label: "IG Post — community meetup", src: "/nour/opt/ig-meetup.jpg" },
];

export const pricing = {
  note: "7-day access guarantee · cancel anytime",
  tiers: [
    {
      name: "Monthly",
      price: "$199",
      cadence: "/ month",
      blurb: "Full access, month to month. Cancel whenever.",
      featured: false,
      perks: [
        "All Discord channels",
        "Live trade alerts",
        "Daily 9:30 open livestream",
        "Pre-market watchlists",
        "Full lesson library",
      ],
      cta: "Start monthly",
    },
    {
      name: "Annual",
      price: "$1,499",
      cadence: "/ year",
      blurb: "Best value — two months free vs monthly.",
      featured: true,
      badge: "Most popular · Save 37%",
      perks: [
        "Everything in Monthly",
        "1-on-1 onboarding session",
        "Monthly mentorship reviews",
        "Priority in the floor chat",
        "Early access to new courses",
      ],
      cta: "Go annual",
    },
    {
      name: "Quarterly",
      price: "$499",
      cadence: "/ 3 months",
      blurb: "Commit a quarter, save vs monthly.",
      featured: false,
      badge: "Save 16%",
      perks: [
        "All Discord channels",
        "Live trade alerts",
        "Daily 9:30 open livestream",
        "Pre-market watchlists",
        "Full lesson library",
      ],
      cta: "Start quarterly",
    },
  ],
};

export const faqs = [
  {
    q: "Do I need experience to join?",
    a: "No. The lesson library starts at your first candle and builds up. Plenty of members join having never placed a trade.",
  },
  {
    q: "What markets do you trade?",
    a: "US equities and options around the market open, with some futures for the index moves. Everything is cash-account friendly.",
  },
  {
    q: "Is this financial advice?",
    a: "No. Stock Hours is education and idea-sharing. Every call is the trader's own opinion — you make your own decisions and manage your own risk.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly is truly month-to-month, and every plan is covered by a 7-day access guarantee.",
  },
  {
    q: "What do I need to get started?",
    a: "A brokerage account and a free Discord account. That's it — you'll be in the room within minutes of joining.",
  },
  {
    q: "Do you guarantee profits?",
    a: "Absolutely not. Trading carries real risk of loss and most day traders lose money. We teach process and show live calls — outcomes are on you.",
  },
];

export const finalCta = {
  title: "Your next market open shouldn't be a solo mission.",
  sub: "Join the floor before the next bell. One link, instant access, cancel anytime.",
  cta: "Join the Discord",
};

export const nav = [
  { label: "Inside", href: "#inside" },
  { label: "Method", href: "#method" },
  { label: "Nour", href: "#about" },
  { label: "Members", href: "#members" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const disclaimer =
  "Trading stocks, options, and futures involves substantial risk of loss and is not suitable for every investor. The vast majority of day traders lose money. Stock Hours provides educational content and trade ideas only — nothing here is financial, investment, or tax advice, and no result is guaranteed. Past performance does not indicate future results.";

export const prototypeNote =
  "Design prototype — not affiliated with, endorsed by, or operated by Nour Atta or Stock Hours. Built as a portfolio demonstration. All imagery is placeholder until real assets are supplied.";
