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
      name: "Førstegangsbesøk",
      price: "799",
      originalPrice: "1.599",
      description: "Halv pris for første sesjon",
      features: [
        "60 minutters sesjon",
        "Personlig konsultasjon",
        "Introduksjon til Harmonic Egg",
        "Ettersamtale"
      ],
      featured: true
    },
    {
      name: "Enkel sesjon",
      price: "1.599",
      description: "Per sesjon",
      features: [
        "60 minutters sesjon",
        "Skreddersydd musikk og lys",
        "Hver 10. sesjon gratis",
        "Fleksibel booking"
      ],
      featured: false
    },
    {
      name: "Klippekort - 3 sesjoner",
      price: "4.299",
      description: "Spar 499 kr",
      features: [
        "3 x 60 minutters sesjoner",
        "Gyldig i 6 måneder",
        "Kan deles med familie",
        "Prioritert booking"
      ],
      featured: false
    },
    {
      name: "Medlemskap",
      price: "1.299",
      description: "Per måned",
      features: [
        "Min. 1 sesjon per måned",
        "Prioritert booking",
        "Ekstra sesjoner til redusert pris",
        "Kan sies opp når som helst"
      ],
      featured: false
    }
  ],
  
  testimonials: [
    {
      text: "Harmonic Egg har hjulpet meg med å finne ro i en travel hverdag. Jeg føler meg mer balansert og energisk.",
      author: "Anne, 45"
    },
    {
      text: "Etter flere sesjoner har jeg merket en betydelig bedring i søvnkvaliteten min. Jeg anbefaler det på det varmeste!",
      author: "Lars, 52"
    },
    {
      text: "En fantastisk opplevelse! Jeg følte meg dypt avslappet og kunne slippe taket på mye stress.",
      author: "Kari, 38"
    }
  ],
  
  helpers: {
    currentYear: () => new Date().getFullYear()
  }
};
