module.exports = {
  site: {
    title: "Harmonic Egg Energiterapi",
    description: "Skandinavias eneste Harmonic Egg - Energiterapi gjennom lyd, lys og hellig geometri",
    url: "https://www.harmonicegg.no",
    author: "Christina",
    email: "christina@harmonicegg.no",
    phone: "+47 402 22 828",
    address: {
      street: "Welhavensvei 4",
      postalCode: "4313",
      city: "Sandnes",
      country: "Norge"
    },
    social: {
      instagram: "https://www.instagram.com/harmoniceggchristina",
      facebook: "https://www.facebook.com/harmoniceggvelvareinnenfra"
    },
    analytics: {
      // TODO: Update these IDs from Christina before going live
      // Current site uses: GA: G-S3P15VX8HX, GTM: GTM-N2C89CB4, FB: 1683333515546002
      googleAnalytics: process.env.GOOGLE_ANALYTICS_ID || "", // e.g., "G-XXXXXXXXXX"
      googleTagManager: process.env.GOOGLE_TAG_MANAGER_ID || "", // e.g., "GTM-XXXXXXXX"
      facebookPixel: process.env.FACEBOOK_PIXEL_ID || "" // e.g., "1234567890123456"
    }
  },
  
  benefits: [
    {
      icon: "🧘",
      title: "Ro og balanse",
      description: "Opplev dyp ro og indre balanse gjennom harmoniske frekvenser."
    },
    {
      icon: "💪",
      title: "Mental styrke",
      description: "Styrk ditt mentale fokus og klarhet for bedre daglig funksjon."
    },
    {
      icon: "❤️",
      title: "Emosjonell støtte",
      description: "Finn lindring fra emosjonell belastning og stress."
    },
    {
      icon: "⚡",
      title: "Økt energi",
      description: "Opplev økt vitalitet og energinivå i hverdagen."
    },
    {
      icon: "🌟",
      title: "Fysisk velvære",
      description: "Støtt kroppens naturlige helbredelsesprosesser."
    },
    {
      icon: "🧠",
      title: "Klarhet og fokus",
      description: "Få skarpere konsentrasjon og bedre mental ytelse."
    }
  ],
  
  services: [
    {
      title: "Skader & smerte",
      description: "Smerte er hjernens varselsignal. Lindring kommer når nervesystemet finner ro.",
      icon: "💊"
    },
    {
      title: "Sykdom & lidelser",
      description: "Lindring fra indre uro, relasjonsutfordringer og utbrenthet med skreddersydd terapimetode.",
      icon: "🏥"
    },
    {
      title: "Indre påfyll",
      description: "Mange har opplevd økt følelsesmessig og åndelig styrke gjennom våre sesjoner.",
      icon: "✨"
    },
    {
      title: "Stress & angst",
      description: "Få hjelp til å bringe kroppen ut av 'kamp, flukt eller frys'-modus og tilbake i balanse.",
      icon: "🧘‍♀️"
    },
    {
      title: "Klarhet og restitusjon",
      description: "Få skarpere fokus, sterkere sinn, økt konsentrasjon og høyere yteevne.",
      icon: "🎯"
    }
  ],
  
  prices: [
    {
      name: "KAMPANJE ✨ -50%",
      price: "799",
      originalPrice: "1 599",
      description: "For nye kunder",
      features: [
        "En fin måte å oppleve egget",
        "75 minutters sesjon",
        "Personlig konsultasjon før og etter",
        "Bestilles kun hvis du ikke har prøvd før"
      ],
      featured: true
    },
    {
      name: "Enkel sesjon",
      price: "1 490",
      description: "Vinterro-pris ut januar",
      features: [
        "For deg som ønsker påfyll",
        "75 minutters sesjon",
        "Hver 6. sesjon er gratis",
        "Tilpasset musikk og lys"
      ],
      featured: false
    },
    {
      name: "Barn under 10 år",
      price: "999",
      description: "Introduksjonspris 2025",
      features: [
        "Trygg opplevelse for de minste",
        "30-40 min i egget",
        "Ekstra tid før og etter",
        "Tilpasset barnets behov"
      ],
      featured: false
    },
    {
      name: "Medlemskap",
      price: "1 299",
      description: "Per måned",
      features: [
        "Min. 1 sesjon per måned",
        "Prioritet på booking",
        "Individuell plan",
        "Fleksibelt - kan sies opp når som helst"
      ],
      featured: false
    }
  ],
  
  testimonials: [
    {
      text: "Da jeg først kom til egget var jeg helt tappet for energi. Etter noen sesjoner forsto jeg at reisen handlet om mer enn energi – det handlet om å finne tilbake til meg selv. Jeg opplevde dyp hvile, gåsehud-øyeblikk og nye innsikter. For meg er egget som et spa for sjelen – et dypt pust som varer i flere dager. Jeg er takknemlig for alt jeg har tatt med meg ut etter hver time – hvile, visdom og mot.",
      author: "Elin Martens"
    },
    {
      text: "Har hatt to fantastiske opplevelser i Egget og herlige samtaler med nydelige Christina som tar deg så vel gjennom hele reisen! Anbefales virkelig!",
      author: "Ann-Kristin Bjørby"
    },
    {
      text: "Opplevelsen i Harmonic Egg® og møtet med Christina var helt fantastisk. Du blir møtt med en rolig og god energi på senteret, og jeg kan virkelig anbefale det. Mine tre første opplevelser i Egget var litt utfordrende, men det ble bare bedre for hver behandling. Jeg opplever noe nytt hver gang – og det er så spennende. Prøv det, du fortjener å gi deg selv litt kjærlighet.",
      author: "Svanhild Jåsund"
    },
    {
      text: "En nydelig behagelig øvelse i å legge fra seg all forstyrrelse og bare være. Bestemte meg for hva som var viktig for meg i sanntid og ut ifra det tilpasser Christina lys og lyd som bygger opp under behov. Her skjedde definitivt mye i kropp og sinn, sov utrolig godt i 1 uke etterpå!",
      author: "Annette Gunstensen"
    },
    {
      text: "Etter to runder i egget har jeg hatt ulike opplevelser. Første gang fikk jeg en dyp ro i kropp og pust som varte i flere dager. Andre gang var jeg sliten og huden var stresset, men etter behandlingen fikk jeg mer energi, huden roet seg og jeg klarte resten av dagen uten problemer. Nå er huden nesten tilbake til normalen, og jeg er mindre sliten enn før.",
      author: "Sybille Greiner"
    },
    {
      text: "Veldig fin opplevelse og Christina viser et sterkt ønske om å hjelpe andre med sine plager. God og lyttende, og deilig avslappende tid i egget :)",
      author: "Kss No Bro"
    },
    {
      text: "Å bli så godt tatt imot med varme og trygghet, sveve hen i en behagelig tilværelse utenfor tid og rom, hvor kroppen jobber i energi og frekvenser, for så å bare lande ned i ro. Anbefales på det varmeste.",
      author: "Bodil Sæther"
    },
    {
      text: "I stepped inside and I knew what is there. I get what expected. I got clear vision what I want to do in my near future and my mind was clear too. Good experience",
      author: "Dainius Janusauskas"
    }
  ],
  
  helpers: {
    currentYear: () => new Date().getFullYear()
  }
};
