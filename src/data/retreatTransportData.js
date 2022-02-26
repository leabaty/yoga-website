export default [
  {
    title: "Retraite de Yoga",
    startDate: "21/05/2022",
    endDate: "28/05/2022",
    spot: "All is one Yoga",
    spotWebsite: "https://www.allisoneyoga.com/",
    address: ["Lieu-dit Le Tillet", "24 400 Les Lèches", "France"],
    maxPax: 15,
    inscriptionEmail: "retraite.dordogne@yahoo.com",
    paymentDetails:
      "Un acompte de 140 € sera demandé à la réservation pour le logement et les repas et versé à Vanessa, le solde sera à régler 30 jours avant l’arrivée.Un acompte de 140 euros sera demandé à la réservation pour les cours/ateliers et versé à Laure, le solde sera à régler 30 jours avant l’arrivée",
    classesPrice: 420,
    priceIncludes: [
      "Le logement pour 7 nuits/8 jours ",
      "2 repas/jour, goûters, 2 cours/jour",
      "Cours et Ateliers ",
    ],
    priceExcludes: ["Transport "],

    articles: [
      {
        imgStart: "",
        headLine: "",
        paragraph1:
          "Quand les pâquerettes sortiront de leur cachette et déploieront fièrement leur tête, il sera temps de nous retrouver pendant 7 jours et 7 nuits durant, au cœur de la Dordogne, dans une ferme Périgourdine du 19ième siècle. ",
        paragraph2:
          "La tête dans les pâquerettes nous pratiquerons le yoga en plein air face à la forêt ou bien cosy et niché.e.s dans la grange.",
        img: "https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/273262749_2124861277669163_4724288525965446535_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=PXT0MEHPdIgAX9jBu18&_nc_ht=scontent-cdt1-1.xx&oh=00_AT9EST7gfXA4iUUB1HyOkvEUL3prAlHQMefkroE-CEaY0Q&oe=621EA38A",
        alt: "Le gîte en Dordogne",
      },

      {
        imgStart: "start",

        headLine: "",
        paragraph1:
          "Nous nous retrouverons le cul par dessus tête, le nez dans l’herbe dès le lever du soleil, en commençant par une méditation guidée, suivie d’un cours de Jivamukti. Le soir un cours de Yin, bercé par le chant des grillons, préparera votre nuit de sommeil. ",
        paragraph2:
          "Vanessa et Mathilde vous concocteront une cuisine végétalienne, colorée et voyageuse pour régaler vos papilles, avec un maximum de produits locaux, bio et de saison.",
        img: "https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/273154820_2124861274335830_790340086872542139_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a26aad&_nc_ohc=X2uoeYRP5DAAX9lJF7M&_nc_ht=scontent-cdg2-1.xx&oh=00_AT-nXV74D7TtEpM0KFnbOax9kvlKfAfPwXuWixaD6wPJfg&oe=621FFED7",
        alt: "Steel Drum",
      },

      {
        imgStart: "",

        headLine: "",
        paragraph1:
          "Le jardin, les lacs et étangs proches, vous donneront l’occasion de lézarder en pleine nature. Vous pourrez vous balader, vous ressourcer en forêt ou visiter les sites touristiques proches tels que la charmante ville de Bergerac et le village des Pruniers créé par Thich Nhat Hanh, qui se situe à 30 minutes en voiture de la ferme. Plusieurs ateliers, une soirée de danse extatique ainsi que de la sonothérapie vous seront également proposés.ées pour vous choyer tout au long de votre séjour avec nous.",
        paragraph2: "",
        img: "https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/273186298_2124861271002497_4704422394047056409_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a26aad&_nc_ohc=5l-0gPG-k3wAX-u9FU-&_nc_oc=AQnVVPxYTesUN_FcxReCXxJZKc218ma44Fl18mNBBXXgArhscUe32vf9Sqwi1dEjR4U&tn=M7FKu3G7_Y2EXZ3o&_nc_ht=scontent-cdg2-1.xx&oh=00_AT_5p_8L6vfiJfuci9bn7DEORpjeQQrlpStwpyrgAtyRCQ&oe=621FD3CE",
        alt: "Vue sur un champ dégagé",
      },
    ],

    transport: [
      {
        transportMode: "En train",
        transportInstructions: [
          "Depuis Paris: TGV jusqu'à Bordeaux puis TER jusqu'à Mussidan soit 3h20 de trajet environ.",
          "Depuis Bordeaux: TER jusqu'a Mussidan. 55 min de trajet.",
          "Depuis Toulouse: INTERCITES ou TGV jusqu'à Bordeaux, puis TER jusqu'à Mussidan. 3h30 de trajet environ. ",
          "La maison est située à 10 kms de la gare.",
        ],
      },

      {
        transportMode: "En voiture",
        transportInstructions: [
          "Depuis Bordeaux: A89 en direction de Lyon puis la D709. 1 heure de trajet environ.",
          "Depuis Toulouse: A62 puis N21 jusqu'à Bergerac, suivre ensuite A89/D709 Mussidan. Trajet de 2h45 environ",
          "Depuis Paris: A10 puis A20 en direction de Limoges/Toulouse puis A89 direction Périgueux/Bordeaux/Sarlat et D709 en direction de Mussidan",
        ],
      },

      {
        transportMode: "En avion",
        transportInstructions: [
          "L'aéroport le plus proche est celui de Bergerac, à 20 kilomètres.",
        ],
      },
    ],

    program: [
      {
        startTime: "8h",
        endTime: "8h30",
        description: "Thé/Café, légère collation",
      },

      {
        startTime: "8h30",
        endTime: "8h50",
        description: "Méditation",
      },

      {
        startTime: "9h",
        endTime: "11/11h30",
        description: "Jivamukti",
      },

      {
        startTime: "12h",
        endTime: "13h30",
        description: "Brunch",
      },

      {
        startTime: "14h",
        endTime: "17h ",
        description: "Temps libre/Balade/Atelier ",
      },

      {
        startTime: "18h",
        endTime: "19h30",
        description: "Yin",
      },

      {
        startTime: "20h",
        endTime: "21h30",
        description: "Dîner",
      },
    ],

    rooms: [
      {
        name: "DORTOIR douillet à l’étage ",
        price: 980,
        bathroom: "shared",
        availableSpots: 7,
      },

      {
        name: "CHAMBRE DOUBLE partagée avec un grand lit au rez-de-chaussée ",
        price: 1050,
        bathroom: "shared",
        availableSpots: 4,
      },

      {
        name: "CHAMBRE DOUBLE partagée avec deux lits simples rez-de-chaussée ",
        price: 1050,
        bathroom: "shared",
        availableSpots: 4,
      },

      {
        name: "CHAMBRE DOUBLE partagée à 2 mins à pied de la maison ",
        price: 1155,
        bathroom: "shared",
        availableSpots: 2,
      },
    ],
  },
];
