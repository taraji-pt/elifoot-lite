import type { TeamSeed } from "./schema";

/**
 * CLUBES — base de dados livre. Ver modelo em `teams.example.ts`.
 * `country` = código de 3 letras (ver countries.ts).
 * `rating` (0-100) define a força dos jogadores E o orçamento inicial.
 * `players` é opcional: posições em falta são geradas automaticamente.
 *
 * A DIVISÃO não se escreve aqui: no início do jogo escolhes os países e os
 * clubes mais fortes ocupam as 4 divisões; os restantes ficam na Reserva
 * (mercado de transferências, Taça e acesso à última divisão).
 */
export const TEAMS: TeamSeed[] = [
  {
  "id": 59,
  "name": "Shakhtar Donetsk",
  "country": "UKR",
  "stadium": "Arena Lviv",
  "city": "Donetsk",
  "rating": 72,
  "capacity": 33400,
  "founded": 1936,
  "badge": "/assets/badges/club_1895.webp",
  "primaryColor": "#FF7300",
  "secondaryColor": "#080808",
  "stadiumImage": "/assets/stadiums/oO261Bj2laBLNh9Ktd1WLKT5fCSiKJw5KeWGkY6r.webp",
  "players": [
    {
      "name": "Dmytro Riznyk",
      "position": "GR",
      "nationality": "UKR"
    },
    {
      "name": "Kyrylo Fesiun",
      "position": "GR",
      "nationality": "UKR"
    },
    {
      "name": "Mykola Matviienko",
      "position": "DEF",
      "nationality": "UKR"
    },
    {
      "name": "Pedro Henrique",
      "position": "DEF",
      "nationality": "BRA"
    },
    {
      "name": "Vinicius Tobias",
      "position": "DEF",
      "nationality": "BRA"
    },
    {
      "name": "Valerii Bondar",
      "position": "DEF",
      "nationality": "UKR"
    },
    {
      "name": "Yehor Nazaryna",
      "position": "DEF",
      "nationality": "UKR"
    },
    {
      "name": "Irakli Azarovi",
      "position": "DEF",
      "nationality": "GEO"
    },
    {
      "name": "Pedrinho",
      "position": "MED",
      "nationality": "BRA"
    },
    {
      "name": "Marlon Gomes",
      "position": "MED",
      "nationality": "BRA"
    },
    {
      "name": "Oleh Ocheretko",
      "position": "MED",
      "nationality": "UKR"
    },
    {
      "name": "Alisson",
      "position": "MED",
      "nationality": "BRA"
    },
    {
      "name": "Isaque",
      "position": "MED",
      "nationality": "BRA"
    },
    {
      "name": "Dmytro Kryskiv",
      "position": "MED",
      "nationality": "UKR"
    },
    {
      "name": "Eguinaldo",
      "position": "AV",
      "nationality": "BRA"
    },
    {
      "name": "Gleiker Mendoza",
      "position": "AV",
      "nationality": "VEN"
    },
    {
      "name": "Kauã Elias",
      "position": "AV",
      "nationality": "BRA"
    },
    {
      "name": "Newertton",
      "position": "AV",
      "nationality": "BRA"
    },
    {
      "name": "Lassina Traoré",
      "position": "AV",
      "nationality": "BFA"
    },
    {
      "name": "Prosper Obah",
      "position": "AV",
      "nationality": "NGA"
    }
  ]
},
  {
    "id": 300,
    "name": "Avenir Sportif de La Marsa",
    "country": "TUN",
    "stadium": "Stade Abdelaziz Chtioui",
    "city": "La Marsa",
    "capacity": 10000,
    "founded": 1939,
    "rating": 52,
    "badge": "/assets/badges/ASM.webp",
    "primaryColor": "#39AC52",
    "secondaryColor": "#FFF600",
    "stadiumImage": "/assets/stadiums/avenir-sportif-de-la-marsa.jpg",
    "players": [
      {
        "name": "Hamza Ben Cherifia",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Sami Helal",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Oussema Jebali",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Aziz Chaouch",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Ameur Omrani",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Fares Meskini",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Amine Kechiche",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Soufiane Mestari",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Ricky Gnéba",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Ojonugwa Adejoh",
        "position": "MED",
        "nationality": "NGA"
      },
      {
        "name": "Kouni Khalfa",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Rayen Hamrouni",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Fares Neji",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Amine Khaloui",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Nour Mani",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Youssouf Dao",
        "position": "AV",
        "nationality": "CIV"
      },
      {
        "name": "Firas Iffia",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Haroun Ayari",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Polaco",
        "position": "AV",
        "nationality": "ANG"
      },
      {
        "name": "Nabih Hablani",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
    "id": 301,
    "name": "Club Africain",
    "country": "TUN",
    "stadium": "Stade Olympique Hammadi Agrebi",
    "city": "Tunis",
    "rating": 58,
     "capacity": 75000,
    "founded": 1920,
    "badge": "/assets/badges/CA.webp",
    "primaryColor": "#DE1820",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/club-africain.jpg",
    "players": [
      {
        "name": "Abdelmouhib Chamakh",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Ghaith Yeferni",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Ghaith Zaalouni",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Ismaïla Simpara",
        "position": "DEF",
        "nationality": "MLI"
      },
      {
        "name": "Houssem Ben Ali",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Yassine Bouabid",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Houssem Hassen Romdhane",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Ghassen Mahersi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Aymen Harzi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Bilel Ait-Malek",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Osama Al Shreimy",
        "position": "MED",
        "nationality": "LBY"
      },
      {
        "name": "Mootez Zaddem",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Philippe Kinzumbi",
        "position": "MED",
        "nationality": "COD"
      },
      {
        "name": "Saidou Khan",
        "position": "MED",
        "nationality": "GAM"
      },
      {
        "name": "Haykeul Chikhaoui",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Hamza Khadhraoui",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Bassem Srarfi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Oussema Bouguerra",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Sadok Kadida",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Taddeus Nkeng",
        "position": "AV",
        "nationality": "CMR"
      }
    ]
  },
  {
    "id": 302,
    "name": "Club Athlétique Bizertin",
    "country": "TUN",
    "stadium": "Stade du 15 Octobre",
    "city": "Bizerte",
     "capacity": 26000,
    "founded": 1928,
    "rating": 52,
    "badge": "/assets/badges/CAB.webp",
    "primaryColor": "#FFCD00",
    "secondaryColor": "#080808",
    "stadiumImage": "/assets/stadiums/club-athletique-bizertin.jpg",
    "players": [
      {
        "name": "Youssef Maktouf",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Moatez Hanzouli",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Amine Allela",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Hani Amamou",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Aziz Gasmi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Malek Doukali",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Rayane Rehimi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Farouk Bougatfa",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mohamadou Lamine Ba",
        "position": "MED",
        "nationality": "MLI"
      },
      {
        "name": "Alaaedine Dridi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Sada Diallo",
        "position": "MED",
        "nationality": "MLI"
      },
      {
        "name": "Iyed Midani",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Lamine Traoré",
        "position": "MED",
        "nationality": "BFA"
      },
      {
        "name": "Bilel Ouni",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Bilel Mejri",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Wassim Chihi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Nurudeen Ayinde",
        "position": "AV",
        "nationality": "NGA"
      },
      {
        "name": "Zied Berrima",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Marius Glo",
        "position": "AV",
        "nationality": "TOG"
      },
      {
        "name": "Wahid Timi",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
    "id": 303,
    "name": "Club Sportif de Hammam-Lif",
    "country": "TUN",
    "stadium": "Stade Municipal de Hammam-Lif",
    "city": "Hammam-Lif",
    "rating": 50,
     "capacity": 15000,
    "founded": 1944,
    "badge": "/assets/badges/CSHL.webp",
    "primaryColor": "#008362",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/club-sportif-hammam-lif.jpg",
    "players": [
      {
        "name": "Moez Ben Cherifia",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Iheb Ben Mansour",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Bahaeddine Sellami",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Chiheb Ben Frej",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Habib Ghrairi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Aymen Abbassi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Firas Ben Ammar",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Aziz Koudhai",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Youssef Mosrati",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Namory Sangaré",
        "position": "MED",
        "nationality": "MLI"
      },
      {
        "name": "Zied Ben Salem",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Adem Ben Ahmed",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ahmed Ben Tiba",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Aziz Boukobba",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Yassine Chamakhi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Bechir Mkadem",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Omar Jobe",
        "position": "AV",
        "nationality": "GAM"
      },
      {
        "name": "Rafik Kamergi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Ali Mejri",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Rabie Karouia",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
    "id": 304,
    "name": "Club Sportif Sfaxien",
    "country": "TUN",
    "stadium": "Stade Taïeb Mhiri",
    "city": "Sfax",
     "capacity": 16750,
    "founded": 1928,
    "rating": 59,
    "badge": "/assets/badges/CSS.webp",
    "primaryColor": "#080808",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/club-sportif-sfaxien.jpg",
    "players": [
      {
        "name": "Aymen Dahmen",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Abdessalem Hallaoui",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Ali Maâloul",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Hichem Baccar",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Hamza Mathlouthi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Kévin Mondeko",
        "position": "DEF",
        "nationality": "COD"
      },
      {
        "name": "Rayen Derbali",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Youssef Habchia",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Jacques Mbé",
        "position": "MED",
        "nationality": "CMR"
      },
      {
        "name": "Hasamadou Ouédraogo",
        "position": "MED",
        "nationality": "BFA"
      },
      {
        "name": "Mohamed Trabelsi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Iyed Belwafi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ghaith Sghaier",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Louay Trayi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Travis Mutyaba",
        "position": "AV",
        "nationality": "UGA"
      },
      {
        "name": "Moemen Rahmani",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Emmanuel Ogbole",
        "position": "AV",
        "nationality": "NGA"
      },
      {
        "name": "Nour Karoui",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Josna Loulendo",
        "position": "AV",
        "nationality": "CGO"
      },
      {
        "name": "Mohamed Amine Aidi",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
    "id": 305,
    "name": "Espérance Sportive de Tunis",
     "capacity": 75000,
    "founded": 1919,
    "country": "TUN",
    "stadium": "Stade Olympique Hammadi Agrebi",
    "city": "Tunis",
    "rating": 63,
    "badge": "/assets/badges/EST.webp",
    "primaryColor": "#F6B400",
    "secondaryColor": "#CC1F27",
    "stadiumImage": "/assets/stadiums/esperance-sportive-tunis.jpg",
    "players": [
      {
        "name": "Béchir Ben Saïd",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Montassar Essid",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Hamza Jelassi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Marouane Sahraoui",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Ben Ali",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Dräger",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Adem Alilet",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Raed Chikhaoui",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Hadj Mahmoud",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Hamza Rafia",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Jesús Castillo",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Moez Ben Haj Ali",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Abdramane Konaté",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Imad Faraj",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Lucas Ribeiro",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Youcef Belaïli",
        "position": "AV",
        "nationality": "ALG"
      },
      {
        "name": "Florian Danho",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Hazem Mastouri",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Achref Jabri",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Zinedine Kada",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
    "id": 306,
    "name": "Espérance Sportive de Zarzis",
    "country": "TUN",
    "stadium": "Complexe Sportif Abdessalem Kazzouz",
    "city": "Zarzis",
    "rating": 52,
    "badge": "/assets/badges/ESZ.webp",
    "primaryColor": "#E60000",
     "capacity": 10000,
    "founded": 1934,
    "secondaryColor": "#FFF600",
    "stadiumImage": "/assets/stadiums/esperance-sportive-zarzis.jpg",
    "players": [
      {
        "name": "Seifeddine Charfi",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Hamza Ghanmi",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Lamjed Rjili",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Firas Ghouma",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Adem Taous",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Hazem Mounadi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mokhtar Ben Zid",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Jassem Ben Kilani",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "David Nyengue",
        "position": "MED",
        "nationality": "CMR"
      },
      {
        "name": "Ousseynou Touré",
        "position": "MED",
        "nationality": "SEN"
      },
      {
        "name": "Khalil Kassab",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Yacine El Kassah",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Rayane Smaali",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Yosri Dhiflaoui",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Hamdi Labidi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Kebba Sowe",
        "position": "AV",
        "nationality": "GAM"
      },
      {
        "name": "Hedi Jertila",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Adepoju Oluwaseun",
        "position": "AV",
        "nationality": "NGA"
      },
      {
        "name": "Rayen Sghaier",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Chinomso Onyemuchara",
        "position": "AV",
        "nationality": "NGA"
      }
    ]
  },
  {
    "id": 307,
    "name": "Espoir Sportif de Hammam-Sousse",
    "country": "TUN",
    "stadium": "Stade Municipal Bou Ali-Lahouar",
    "city": "Hammam Sousse",
    "rating": 48,
     "capacity": 10000,
    "founded": 1957,
    "badge": "/assets/badges/ESHS.webp",
    "primaryColor": "#FFF600",
    "secondaryColor": "#080808",
    "stadiumImage": "/assets/stadiums/espoir-sportif-hammam-sousse.jpg",
    "players": [
      {
        "name": "Mohamed Amine Hazgui",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Charfeddine Nasralli",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Tayeb Ben Zitoun",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Ayoub Chaabane",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Rayen Issaoui",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Amine Hlel",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Nour El Beji",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Ghazi Abderrazzak",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Malek Baayou",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Omar Smari",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Mossaab Sassi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Fedi Slimane",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ahmed Halila",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Iyadh Houli",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Nour Karoui",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Amine Jarraya",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Fakhreddine Ouji",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Ali Ben Hassine",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Amine Abdellaoui",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Moemen Ben Salah",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
    "id": 308,
    "name": "Étoile Sportive de Métlaoui",
    "country": "TUN",
    "stadium": "Stade Olympique de Métlaoui",
    "city": "Métlaoui",
    "rating": 49,
     "capacity": 8000,
    "founded": 1950,
    "badge": "/assets/badges/ESM.webp",
    "primaryColor": "#FFF600",
    "secondaryColor": "#E60000",
    "stadiumImage": "/assets/stadiums/etoile-sportive-metlaoui.jpg",
    "players": [
      {
        "name": "Sadok Yeddes",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Aziz Bejaoui",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Oussama Bahri",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Aziz Ghrissi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Ayoub Tlili",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Ameur Belghith",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Oussama Hichri",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Yassine Soltani",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Chérif Bodian",
        "position": "MED",
        "nationality": "SEN"
      },
      {
        "name": "Kouassi Koffi",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Ismail Hermes",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Sory",
        "position": "MED",
        "nationality": "GUI"
      },
      {
        "name": "Mohamed Ameur Jouini",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Yassine Sabeur",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Bacem Hajji",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Ifeanyi Ogba",
        "position": "AV",
        "nationality": "NGA"
      },
      {
        "name": "Najd Dabbabi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Oussama Neffati",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Drissa Traoré",
        "position": "AV",
        "nationality": "MLI"
      },
      {
        "name": "Mohamed Ali Ourimi",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
    "id": 309,
    "name": "Étoile Sportive du Sahel",
    "country": "TUN",
    "stadium": "Stade Olympique de Sousse",
    "city": "Sousse",
    "rating": 55,
    "badge": "/assets/badges/ESS.webp",
     "capacity": 60000,
    "founded": 1925,
    "primaryColor": "#E60000",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/etoile-sportive-sahel.jpg",
    "players": [
      {
        "name": "Sabri Ben Hessen",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Raed Gazzeh",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Wajdi Kechrida",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Alphonce Otieno Omija",
        "position": "DEF",
        "nationality": "KEN"
      },
      {
        "name": "Houssem Dagdoug",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Azmi Ghouma",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mohammed Sangaré",
        "position": "DEF",
        "nationality": "LBR"
      },
      {
        "name": "Najeh Ferjani",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Oussama Abid",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Achraf Ben Dhiaf",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ambrose Ochigbo",
        "position": "MED",
        "nationality": "NGA"
      },
      {
        "name": "Rayane Anane",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Nizar Smichi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ousmane Diakhaté",
        "position": "MED",
        "nationality": "SEN"
      },
      {
        "name": "Kingsley Eduwo",
        "position": "AV",
        "nationality": "NGA"
      },
      {
        "name": "Sunday Megwo",
        "position": "AV",
        "nationality": "NGA"
      },
      {
        "name": "Yassine Chaabani",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Chadi Bouslama",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Raid Najjar",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Ayoub Fejjari",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
    "id": 310,
    "name": "Jeunesse Sportive d'El Omrane",
    "country": "TUN",
    "stadium": "Stade Chedli Zouiten",
    "city": "Tunis",
    "rating": 50,
     "capacity": 20000,
    "founded": 1943,
    "badge": "/assets/badges/JSO.webp",
    "primaryColor": "#0052D5",
    "secondaryColor": "#FFF600",
    "stadiumImage": "/assets/stadiums/jeunesse-sportive-el-omrane.jpg",
    "players": [
      {
        "name": "Oussema Hanzouli",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Wassim Karoui",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Moustapha Souissi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Bilel Mgannem",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Haroun Kouki",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Sami Hammami",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Malek Jammel",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Samer Marouani",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Ali Chinonso",
        "position": "MED",
        "nationality": "NGA"
      },
      {
        "name": "Ouday Belhaj",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ghaith Ben Hamida",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ghaith Ben Hassine",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Askri",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Anouar Jouini",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Chiheb Zoghlami",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Bilel Touati",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Hosni Guezmir",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Aboubacar Sidiki Leno",
        "position": "AV",
        "nationality": "GUI"
      },
      {
        "name": "Saber Hammami",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Lionel Mondésir",
        "position": "AV",
        "nationality": "CIV"
      }
    ]
  },
  {
    "id": 311,
    "name": "Olympique de Béja",
    "country": "TUN",
    "stadium": "Stade Boujemaa Kmiti",
    "city": "Béja",
    "rating": 51,
     "capacity": 10000,
    "founded": 1929,
    "badge": "/assets/badges/OB.webp",
    "primaryColor": "#FFFFFF",
    "secondaryColor": "#E60000",
    "stadiumImage": "/assets/stadiums/olympique-beja.jpg",
    "players": [
      {
        "name": "Chahine Smaoui",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Hamdi Chairet",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Islem Chelghoumi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Chérif Camara",
        "position": "DEF",
        "nationality": "GUI"
      },
      {
        "name": "Firas Fadhli",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mehrez Ben Rajeh",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Hamza Mabrouk",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Youssef Azib",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Rabii Hamri",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Alpha Sidibé",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Manoubi Haddad",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Hedi Hadouchi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Anicet Ishimwe",
        "position": "MED",
        "nationality": "RWA"
      },
      {
        "name": "Mohamed Amine Ammar",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Max Ravel",
        "position": "AV",
        "nationality": "CMR"
      },
      {
        "name": "Baha Cherni",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Obaid Mekni",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Oussama Sayari",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Fayed Ben Hassine",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Mouhamed Diouf",
        "position": "AV",
        "nationality": "SEN"
      }
    ]
  },
  {
    "id": 312,
    "name": "Progrès Sportif de Sakiet Eddaier",
    "country": "TUN",
    "stadium": "Stade Municipal de Sakiet Eddaier",
    "city": "Sakiet Eddaier",
    "rating": 50,
     "capacity": 500,
    "founded": 1965,
    "badge": "/assets/badges/PSS.png",
    "primaryColor": "#00319C",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/progres-sportif-sakiet-eddaier.jpg",
    "players": [
      {
        "name": "Abdelkader Chouaya",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Majdi Moncer",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Bertrand Bationo",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Amadou Bâ",
        "position": "DEF",
        "nationality": "SEN"
      },
      {
        "name": "Dhia Maatougui",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Hamza Rebai",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mossaab Ajili",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Amine Naoui",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Charfeddine Ouni",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Hamdi Jhinaoui",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Fedi Darguech",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Haroun Ben Ameur",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Bahaeddine Mouelhi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Fraj Ajroudi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Nacef Atoui",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Ali Omri",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Zied Aloui",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Amir Jaouadi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Akram Bahloul",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Firas Ben Hassine",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
    "id": 313,
    "name": "Stade Tunisien",
    "country": "TUN",
    "stadium": "Stade Hedi Enneifer",
    "city": "Le Bardo",
    "rating": 55,
     "capacity": 12000,
    "founded": 1948,
    "badge": "/assets/badges/ST.webp",
    "primaryColor": "#006231",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/ST.jpg",
    "players": [
      {
        "name": "Noureddine Farhati",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Mehdi Ben Mrad",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Hedi Khalfa",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Skander Sghaier",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Salifou Tapsoba",
        "position": "DEF",
        "nationality": "BFA"
      },
      {
        "name": "Aziz Saihi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Wael Ouerghemi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Rayed Derbali",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Youssouf Oumarou",
        "position": "MED",
        "nationality": "NIG"
      },
      {
        "name": "Yusuf Touré",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Baraket Hmidi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Youssef Saafi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Boubacar Camara",
        "position": "MED",
        "nationality": "SEN"
      },
      {
        "name": "Malek Chouikh",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Amadou Dia N'Diaye",
        "position": "AV",
        "nationality": "SEN"
      },
      {
        "name": "Fakhreddine Ben Youssef",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Amine Haboubi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Amir Jaouadi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Bienvenu Vigninou",
        "position": "AV",
        "nationality": "BEN"
      },
      {
        "name": "Moncef Gharbi",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
    "id": 314,
    "name": "Union Sportive de Ben Guerdane",
    "country": "TUN",
    "stadium": "Stade Municipal 7 Mars",
    "city": "Ben Guerdane",
    "rating": 50,
     "capacity": 15000,
    "founded": 1945,
    "badge": "/assets/badges/USBG.webp",
    "primaryColor": "#FFF600",
    "secondaryColor": "#080808",
    "stadiumImage": "/assets/stadiums/USBG.webp",
    "players": [
      {
        "name": "Lassaad Hammami",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed Ifaoui",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Aymen Amri",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Daniel Oboh",
        "position": "DEF",
        "nationality": "NGA"
      },
      {
        "name": "Mohamed Habib Yeken",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Salah Harrabi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Foued Timoumi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Jassem Abcha",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Ghazi Ayadi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ayoub Ben Mcharek",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Abdelouahab Bakhouche",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Borhene Hakimi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ghislain Mounguidé",
        "position": "MED",
        "nationality": "CTA"
      },
      {
        "name": "Mohamed Chérif Camara",
        "position": "MED",
        "nationality": "GUI"
      },
      {
        "name": "Idriss Mhirsi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Nassim Chachia",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Anas Bouatay",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Kais Fdhil",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Fedi Tayechi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Amadou Diakité",
        "position": "AV",
        "nationality": "GUI"
      }
    ]
  },
  {
    "id": 315,
    "name": "Union Sportive Monastirienne",
    "country": "TUN",
    "stadium": "Stade Mustapha Ben Jannet",
    "city": "Monastir",
     "capacity": 20000,
    "founded": 1923,
    "rating": 53,
    "badge": "/assets/badges/USM.webp",
    "primaryColor": "#FFFFFF",
    "secondaryColor": "#005AC5",
    "stadiumImage": "/assets/stadiums/USM.webp",
    "players": [
      {
        "name": "Ahmed Slimane",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Dries Arfaoui",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Raed Bouchniba",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mahmoud Ghorbel",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Rayen Azzouz",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Ayman Ben Mohamed",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Youssef Herch",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Nour Zamen Zammouri",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Ousmane Diané",
        "position": "MED",
        "nationality": "GUI"
      },
      {
        "name": "Chaïm El Djebali",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Yassine Amri",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Adam Boulila",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Alpha Sidibé",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Nassim Douihech",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ahmed Bouassida",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Adnene Yaakoubi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Ibrahim Gadiaga",
        "position": "AV",
        "nationality": "MLI"
      },
      {
        "name": "Mohamed Boussadia",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Bechir Yacoub",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Seifeddine Souissi",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
  "id": 316,
  "name": "Grupo Desportivo Alcochetense",
  "country": "POR",
  "stadium": "Estádio António Almeida Correia (Foni)",
  "city": "Alcochete",
  "rating": 46,
  "badge": "/assets/badges/alcochetense.webp",
    "capacity": 5000,
    "founded": 1937,
  "primaryColor": "#188B62",
  "secondaryColor": "#FFFFFF",
  "stadiumImage": "/assets/stadiums/antonio-almeida-correia-foni.jpg",
  "players": [
    {
      "name": "Luís Ribeiro",
      "position": "GR",
      "nationality": "POR"
    },
    {
      "name": "Guilherme Christino",
      "position": "GR",
      "nationality": "BRA"
    },
    {
      "name": "Tiago Palancha",
      "position": "DEF",
      "nationality": "POR"
    },
    {
      "name": "David Lopes",
      "position": "DEF",
      "nationality": "POR"
    },
    {
      "name": "Jorge Teixeira",
      "position": "DEF",
      "nationality": "POR"
    },
    {
      "name": "Miguel Abreu",
      "position": "DEF",
      "nationality": "GNB"
    },
    {
      "name": "Marinho",
      "position": "DEF",
      "nationality": "POR"
    },
    {
      "name": "Fábio Celestino",
      "position": "DEF",
      "nationality": "POR"
    },
    {
      "name": "Fabinho",
      "position": "MED",
      "nationality": "POR"
    },
    {
      "name": "Gonçalo Pinto",
      "position": "MED",
      "nationality": "POR"
    },
    {
      "name": "Rúben Pinto",
      "position": "MED",
      "nationality": "POR"
    },
    {
      "name": "David Freire",
      "position": "MED",
      "nationality": "POR"
    },
    {
      "name": "Rúben Moreno",
      "position": "MED",
      "nationality": "POR"
    },
    {
      "name": "Jorge Lino",
      "position": "MED",
      "nationality": "POR"
    },
    {
      "name": "Valdu Té",
      "position": "AV",
      "nationality": "GNB"
    },
    {
      "name": "Gildo",
      "position": "AV",
      "nationality": "MOZ"
    },
    {
      "name": "José Precatado",
      "position": "AV",
      "nationality": "POR"
    },
    {
      "name": "Leandro Tipote",
      "position": "AV",
      "nationality": "POR"
    },
    {
      "name": "Diogo Ferreira",
      "position": "AV",
      "nationality": "POR"
    },
    {
      "name": "Harramiz",
      "position": "AV",
      "nationality": "STP"
    }
  ]
},
  {
  "id": 317,
  "name": "Maccabi Haifa",
  "country": "ISR",
  "stadium": "Haifa International Stadium",
  "city": "Haifa",
  "rating": 63,
     "capacity": 30870,
    "founded": 1913,
  "badge": "/assets/badges/maccabi-haifa.webp",
  "primaryColor": "#207B31",
  "secondaryColor": "#FFFFFF",
  "stadiumImage": "/assets/stadiums/maccabi-haifa.jpg",
  "players": [
    {
      "name": "Omri Glazer",
      "position": "GR",
      "nationality": "ISR"
    },
    {
      "name": "Shareef Kayouf",
      "position": "GR",
      "nationality": "ISR"
    },
    {
      "name": "Eli Dasa",
      "position": "DEF",
      "nationality": "ISR"
    },
    {
      "name": "Tsunami",
      "position": "DEF",
      "nationality": "BRA"
    },
    {
      "name": "Pierre Cornud",
      "position": "DEF",
      "nationality": "FRA"
    },
    {
      "name": "Jelle Bataille",
      "position": "DEF",
      "nationality": "BEL"
    },
    {
      "name": "Pedrão",
      "position": "DEF",
      "nationality": "BRA"
    },
    {
      "name": "Sean Goldberg",
      "position": "DEF",
      "nationality": "ISR"
    },
    {
      "name": "Ali Mohamed",
      "position": "MED",
      "nationality": "NIG"
    },
    {
      "name": "Ethane Azoulay",
      "position": "MED",
      "nationality": "ISR"
    },
    {
      "name": "Yarin Levi",
      "position": "MED",
      "nationality": "ISR"
    },
    {
      "name": "Cédric Don",
      "position": "MED",
      "nationality": "CIV"
    },
    {
      "name": "Yair Mordechai",
      "position": "MED",
      "nationality": "ISR"
    },
    {
      "name": "Nevot Ratner",
      "position": "MED",
      "nationality": "ISR"
    },
    {
      "name": "Bruninho",
      "position": "AV",
      "nationality": "BRA"
    },
    {
      "name": "Pedro Brazão",
      "position": "AV",
      "nationality": "POR"
    },
    {
      "name": "Kenji Gorré",
      "position": "AV",
      "nationality": "CUW"
    },
    {
      "name": "Guy Melamed",
      "position": "AV",
      "nationality": "ISR"
    },
    {
      "name": "Andrija Novaković",
      "position": "AV",
      "nationality": "USA"
    },
    {
      "name": "Silva Kani",
      "position": "AV",
      "nationality": "ISR"
    }
  ]
},
  {
    "id": 318,
    "name": "Académico de Viseu Futebol Clube",
    "country": "POR",
    "stadium": "Estádio Municipal do Fontelo",
    "city": "Viseu",
    "rating": 64,
    "capacity": 8046,
    "founded": 1914,
    "badge": "/assets/badges/club_2388.webp",
    "primaryColor": "#080808",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/academico-de-viseu-futebol-clube.jpg",
    "players": [
      {
        "name": "Ewerton",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Juan Soriano",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Nikos Michelis",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Soufiane Messeguem",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Robinho",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Anthony Correia",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Valery",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Luís Silva",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Cihan Kahraman",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "João Guilherme",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Lorougnon Gohi",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Cristian Ferreira",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Álvaro Zamora",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Paulinho",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "André Clovis",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Mohammed Bouldini",
        "position": "AV",
        "nationality": "MAR"
      },
      {
        "name": "Linson Chiquemba",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Tomás Viegas",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Marcus Kouam",
        "position": "AV",
        "nationality": "CMR"
      },
      {
        "name": "Aleix Enríquez",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 319,
    "name": "Casa Pia Atlético Clube",
    "country": "POR",
    "stadium": "Estádio Pina Manique",
    "city": "Lisbon",
    "rating": 63,
    "capacity": 2574,
    "founded": 1920,
    "badge": "/assets/badges/club_2443.webp",
    "primaryColor": "#080808",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/casa-pia-atletico-clube.jpg",
    "players": [
      {
        "name": "Patrick Sequeira",
        "position": "GR",
        "nationality": "CRC"
      },
      {
        "name": "André Gomes",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "David Sousa",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Selvi",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Khaly",
        "position": "DEF",
        "nationality": "ANG"
      },
      {
        "name": "Pedro Rosas",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Abdu Conté",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Lawrence Ofori",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "Jérémy Livolant",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "João Rego",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Korede Osundina",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "Mohamed Salah",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Benjamin Pauwels",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Rochinha",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Cassiano",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Henrique Araújo",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Alassana Jatta",
        "position": "AV",
        "nationality": "GAM"
      },
      {
        "name": "Clau Mendes",
        "position": "AV",
        "nationality": "GNB"
      },
      {
        "name": "Evans Maurin",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Aymen Zouin",
        "position": "AV",
        "nationality": "ITA"
      }
    ]
  },
  {
    "id": 320,
    "name": "Club Football Estrela da Amadora SAD",
    "country": "POR",
    "stadium": "Estádio José Gomes",
    "city": "Amadora",
    "rating": 65,
    "capacity": 15000,
    "founded": 2020,
    "badge": "/assets/badges/club_2000030636.webp",
    "primaryColor": "#005A41",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/club-football-estrela-da-amadora-sad.jpg",
    "players": [
      {
        "name": "Léo Linck",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Dudu",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Stefan Leković",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Eddy Doué",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Max Scholze",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Rafa Soares",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Luan Patrick",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Joan Jordán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abraham Marcus",
        "position": "MED",
        "nationality": "NGA"
      },
      {
        "name": "Ianis Stoica",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Jeremy Arévalo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Lovro Zvonarek",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Bénito",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Robinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leandro Antonetti",
        "position": "AV",
        "nationality": "PUR"
      },
      {
        "name": "Sydney van Hooijdonk",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "René Mitongo",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Ekanga Ondoa",
        "position": "AV",
        "nationality": "CMR"
      },
      {
        "name": "Henrique Poniewas",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ziad Ayoub",
        "position": "AV",
        "nationality": "EGY"
      }
    ]
  },
  {
    "id": 321,
    "name": "Club Sport Marítimo - SAD",
    "country": "POR",
    "stadium": "Estádio do Marítimo",
    "city": "Funchal",
    "rating": 63,
    "capacity": 10600,
    "founded": 1910,
    "badge": "/assets/badges/club_1476.webp",
    "primaryColor": "#297B52",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/club-sport-maritimo-sad.jpg",
    "players": [
      {
        "name": "Fran Vieites",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Alfonso Pastor",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Raphael Guzzo",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Romain Correia",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Paulo Henrique",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Vladan Danilović",
        "position": "DEF",
        "nationality": "BIH"
      },
      {
        "name": "Rodrigo Andrade",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Yellu Santiago",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Martín Tejón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Maxime Dominguez",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Simo",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Bryan Limbombe",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Samuel Bamba",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Enrique Peña Zauner",
        "position": "MED",
        "nationality": "VEN"
      },
      {
        "name": "Adrián Butzke",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Maurice Boakye",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Sidney Osei",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Mons Bassouamina",
        "position": "AV",
        "nationality": "CGO"
      },
      {
        "name": "José Melro",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Weslley Brito",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 322,
    "name": "Clube Desportivo Nacional",
    "country": "POR",
    "stadium": "Estádio da Madeira",
    "city": "Funchal",
    "rating": 63,
    "capacity": 5586,
    "founded": 1910,
    "badge": "/assets/badges/club_2433.webp",
    "primaryColor": "#080808",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/clube-desportivo-nacional.jpg",
    "players": [
      {
        "name": "Renato Marin",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "João Gonçalves",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "Liziero",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Léo Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Zé Vitor",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Matheus Dias",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "José Gomes",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "William Kokolo",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Song Min-Kyu",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Miguel Baeza",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Filipe Soares",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Chiheb Labidi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Matchoi Djaló",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Daniel Júnior",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Allen Obando",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Abdel Kader Njoya",
        "position": "AV",
        "nationality": "CMR"
      },
      {
        "name": "Fernando Nava",
        "position": "AV",
        "nationality": "BOL"
      },
      {
        "name": "Iseppe",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Pablo Ruan",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bruno Ciscati",
        "position": "AV",
        "nationality": "POR"
      }
    ]
  },
  {
    "id": 323,
    "name": "Futebol Clube de Alverca - SAD",
    "country": "POR",
    "stadium": "Complexo Desportivo do Alverca",
    "city": "Alverca do Ribatejo",
    "rating": 65,
    "capacity": 7700,
    "founded": 2020,
    "badge": "/assets/badges/club_2391.webp",
    "primaryColor": "#0041BD",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/futebol-clube-de-alverca-sad.jpg",
    "players": [
      {
        "name": "Matheus Mendes",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Jhonatan",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Diogo Spencer",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Zé Rafael",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Bastien Meupiyou",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Isaac James",
        "position": "DEF",
        "nationality": "NGA"
      },
      {
        "name": "Rayan Lucas",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Steven Baseya",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Chiquinho",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Figueiredo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Léo Chú",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Davy Gui",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Ian Luccas",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Matheus França",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Dawda Camara",
        "position": "AV",
        "nationality": "MTN"
      },
      {
        "name": "Vivaldo Semedo",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Samy Merheg",
        "position": "AV",
        "nationality": "LBN"
      },
      {
        "name": "Felipe Lima",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "André Vidigal",
        "position": "AV",
        "nationality": "ANG"
      },
      {
        "name": "Cédric Nuozzi",
        "position": "AV",
        "nationality": "BEL"
      }
    ]
  },
  {
    "id": 324,
    "name": "Futebol Clube de Arouca",
    "country": "POR",
    "stadium": "Estádio Municipal de Arouca",
    "city": "Arouca",
    "rating": 67,
    "capacity": 5200,
    "founded": 1952,
    "badge": "/assets/badges/club_729500.webp",
    "primaryColor": "#FFF600",
    "secondaryColor": "#0031A4",
    "stadiumImage": "/assets/stadiums/futebol-clube-de-arouca.jpg",
    "players": [
      {
        "name": "Ignacio de Arruabarrena",
        "position": "GR",
        "nationality": "URU"
      },
      {
        "name": "Jakub Vinarčík",
        "position": "GR",
        "nationality": "SVK"
      },
      {
        "name": "Taichi Fukui",
        "position": "DEF",
        "nationality": "JPN"
      },
      {
        "name": "Javi Sánchez",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Espen van Ee",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Jose Fontán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Tiago Esgaio",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Pedro Santos",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Naïs Djouahra",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Lee Hyun-Ju",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Alfonso Trezza",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Pablo Gozálbez",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Puche",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gabriel Rukavina",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Iván Barbero",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Dylan Nandín",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Fally Mayulu",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Romualdas Jansonas",
        "position": "AV",
        "nationality": "LTU"
      },
      {
        "name": "Brian Mansilla",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Costinha",
        "position": "AV",
        "nationality": "POR"
      }
    ]
  },
  {
    "id": 325,
    "name": "	Futebol Clube de Famalicão",
    "country": "POR",
    "stadium": "Estádio Municipal 22 de Junho",
    "city": "Vila Nova de Famalicão",
    "rating": 68,
    "capacity": 5305,
    "founded": 1931,
    "badge": "/assets/badges/club_2397.webp",
    "primaryColor": "#FFFFFF",
    "secondaryColor": "#002052",
    "stadiumImage": "/assets/stadiums/futebol-clube-de-famalicao.jpg",
    "players": [
      {
        "name": "Lazar Carević",
        "position": "GR",
        "nationality": "MNE"
      },
      {
        "name": "Ivan Zlobin",
        "position": "GR",
        "nationality": "RUS"
      },
      {
        "name": "Mathias De Amorim",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Rodrigo Pinheiro",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Tom van de Looi",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Finn van Breemen",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Marcos Peña",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Leonardo Realpe",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Sorriso",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Óscar Aranda",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Giorgos Koutsias",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Gil Dias",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Roméo Beney",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Pedro Santos",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Patricio Salas",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Umar Abubakar",
        "position": "AV",
        "nationality": "NGA"
      },
      {
        "name": "Rudi Almeida",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Gustavo Ferreira",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Simão Neto",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Vladyslav Ivanko",
        "position": "AV",
        "nationality": "UKR"
      }
    ]
  },
  {
    "id": 326,
    "name": "Futebol Clube do Porto",
    "country": "POR",
    "stadium": "Estádio do Dragão",
    "city": "Porto",
    "rating": 80,
    "capacity": 50033,
    "founded": 1893,
    "badge": "/assets/badges/FCP.webp",
    "primaryColor": "#FFFFFF",
    "secondaryColor": "#20397B",
    "stadiumImage": "/assets/stadiums/futebol-clube-do-porto.jpg",
    "players": [
      {
        "name": "Diogo Costa",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "Cláudio Ramos",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "Jakub Kiwior",
        "position": "DEF",
        "nationality": "POL"
      },
      {
        "name": "Victor Froholdt",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Jan Bednarek",
        "position": "DEF",
        "nationality": "POL"
      },
      {
        "name": "Hwang In-Beom",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Alberto Costa",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Pablo Rosario",
        "position": "DEF",
        "nationality": "DOM"
      },
      {
        "name": "Gabri Veiga",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "William Gomes",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Pepê",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Borja Sainz",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Iván Jaime",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Oskar Pietuszewski",
        "position": "MED",
        "nationality": "POL"
      },
      {
        "name": "Samu Aghehowa",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Giménez",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "André Silva",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Tcherno Jamanca",
        "position": "AV",
        "nationality": "GNB"
      },
      {
        "name": "Abraham Obasi",
        "position": "AV",
        "nationality": "NGA"
      },
      {
        "name": "Guilherme Moreira",
        "position": "AV",
        "nationality": "POR"
      }
    ]
  },
  {
    "id": 327,
    "name": "	Gil Vicente Futebol Clube",
    "country": "POR",
    "stadium": "Estádio Cidade de Barcelos",
    "city": "Barcelos",
    "rating": 66,
    "capacity": 12046,
    "founded": 1924,
    "badge": "/assets/badges/club_1481.webp",
    "primaryColor": "#0052D5",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/gil-vicente-futebol-clube.jpg",
    "players": [
      {
        "name": "Lucão",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Samuel Portugal",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Marvin Elimbi",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Jonathan Buatu",
        "position": "DEF",
        "nationality": "ANG"
      },
      {
        "name": "Diogo Prioste",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Ricardo Esgaio",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Weverson",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Mohamed Bamba",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Santi García",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Murilo Souza",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Joelson Fernandes",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Gil Martins",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Agustín Moreira",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Tidjany Touré",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Héctor Hernández",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Carlos Eduardo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Mohamed Kaba",
        "position": "AV",
        "nationality": "MLI"
      },
      {
        "name": "Walace França",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ricardo Martins",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Gabriel Melo",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 328,
    "name": "Grupo Desportivo Estoril Praia - SAD",
    "country": "POR",
    "stadium": "Estádio António Coimbra da Mota",
    "city": "Estoril",
    "rating": 66,
    "capacity": 8000,
    "founded": 1939,
    "badge": "/assets/badges/club_2390.webp",
    "primaryColor": "#FFE610",
    "secondaryColor": "#0052D5",
    "stadiumImage": "/assets/stadiums/grupo-desportivo-estoril-praia-sad.jpg",
    "players": [
      {
        "name": "Joel Robles",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Martin Turk",
        "position": "GR",
        "nationality": "SVN"
      },
      {
        "name": "Jordan Holsgrove",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Ricard Sánchez",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Xavi Sintes",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Ismael Sierra",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Xeka",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Nail Omerović",
        "position": "DEF",
        "nationality": "BIH"
      },
      {
        "name": "Yanis Begraoui",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "João Carvalho",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Rafik Guitane",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "André Lacximicant",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Axel Camblan",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Peixinho",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Salazar",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Kelian Baruti Liamba",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Martim Dias",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "João Gomes",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Manuel Lamúria",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Luís Gomes",
        "position": "AV",
        "nationality": "POR"
      }
    ]
  },
  {
    "id": 329,
    "name": "Moreirense Futebol Clube",
    "country": "POR",
    "stadium": "Estádio Comendador Joaquim de Almeida Freitas",
    "city": "Moreira de Cónegos",
    "rating": 64,
    "capacity": 6153,
    "founded": 1938,
    "badge": "/assets/badges/club_2389.webp",
    "primaryColor": "#006A52",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/moreirense-futebol-clube.jpg",
    "players": [
      {
        "name": "André Ferreira",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "Aranha",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Dinis Pinto",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Maracás",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Gilberto Batista",
        "position": "DEF",
        "nationality": "GNB"
      },
      {
        "name": "Nile John",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Francisco Domingues",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Tiago Andrade",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "João Veloso",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Kiko Bondoso",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Manuel Mendonça",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Chipyoka Songa",
        "position": "MED",
        "nationality": "ZAM"
      },
      {
        "name": "Landerson",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Jimi Gower",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Leonardo Vonić",
        "position": "AV",
        "nationality": "CRO"
      },
      {
        "name": "Yan Maranhão",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Afonso Carvalho",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Rodrigo Soares",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Michael Dacosta González",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Diogo Monteiro",
        "position": "AV",
        "nationality": "POR"
      }
    ]
  },
  {
    "id": 330,
    "name": "	Rio Ave Futebol Clube",
    "country": "POR",
    "stadium": "Estádio dos Arcos",
    "city": "Vila do Conde",
    "rating": 65,
    "capacity": 5244,
    "founded": 1939,
    "badge": "/assets/badges/club_2383.webp",
    "primaryColor": "#FFFFFF",
    "secondaryColor": "#188B62",
    "stadiumImage": "/assets/stadiums/rio-ave-futebol-clube.jpg",
    "players": [
      {
        "name": "Cezary Miszta",
        "position": "GR",
        "nationality": "POL"
      },
      {
        "name": "Vitor Hugo",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Diogo Nascimento",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Zé Carlos",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Brandon Aguilera",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Jakub Brabec",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Marios Vrousai",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Francisco Petrasso",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Jalen Blesa",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Diogo Bezerra",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Roland Galčík",
        "position": "MED",
        "nationality": "SVK"
      },
      {
        "name": "Dario Špikić",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Malik Sellouki",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Sebastian Clemmensen",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Tamble Monteiro",
        "position": "AV",
        "nationality": "GNB"
      },
      {
        "name": "Radek Šiler",
        "position": "AV",
        "nationality": "CZE"
      },
      {
        "name": "Samuel Alves",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Rodrigo Moreira",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Léo Silva",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Rafael Lobato",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 331,
    "name": "Santa Clara Açores Futebol",
    "country": "POR",
    "stadium": "Estádio de São Miguel",
    "city": "Ponta Delgada",
    "rating": 66,
    "capacity": 12800,
    "founded": 1921,
    "badge": "/assets/badges/club_2448.webp",
    "primaryColor": "#CD1018",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/santa-clara-acores-futebol.jpg",
    "players": [
      {
        "name": "Lucas França",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Neneca",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Sidney Lima",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Pedro Ferreira",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Lucas Soares",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "MT",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Pedro Pacheco",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Guilherme Romão",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Vinícius Lopes",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Brenner",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Tiago Ribeiro",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Rildo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Vitinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Luis Fernando",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Gonçalo Paciência",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Wendel Silva",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "João Costa",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Daniel da Silva",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ryan Pablo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Sevastian Belov",
        "position": "AV",
        "nationality": "POR"
      }
    ]
  },
  {
    "id": 332,
    "name": "	Sport Lisboa e Benfica",
    "country": "POR",
    "stadium": "Estádio da Luz",
    "city": "Lisbon",
    "rating": 79,
    "capacity": 68100,
    "founded": 1904,
    "badge": "/assets/badges/SLB.webp",
    "primaryColor": "#CD1018",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/sport-lisboa-e-benfica.jpg",
    "players": [
      {
        "name": "Anatolii Trubin",
        "position": "GR",
        "nationality": "UKR"
      },
      {
        "name": "Samuel Soares",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "João Palhinha",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Tomás Araújo",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Leandro Barreiro",
        "position": "DEF",
        "nationality": "LUX"
      },
      {
        "name": "Alexander Bah",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Clément Lenglet",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Richard Ríos",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Gianluca Prestianni",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Fredrik Aursnes",
        "position": "MED",
        "nationality": "NOR"
      },
      {
        "name": "Andreas Schjelderup",
        "position": "MED",
        "nationality": "NOR"
      },
      {
        "name": "Rafa",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Heorhii Sudakov",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Jakub Kamiński",
        "position": "MED",
        "nationality": "POL"
      },
      {
        "name": "Vangelis Pavlidis",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Jhon Durán",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Dilan Neves",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Anisse Saidi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Alan Lembakoali",
        "position": "AV",
        "nationality": "SVK"
      },
      {
        "name": "Nazif Inoussa",
        "position": "AV",
        "nationality": "SWE"
      }
    ]
  },
  {
    "id": 333,
    "name": "Sporting Clube de Braga",
    "country": "POR",
    "stadium": "Estádio Municipal de Braga",
    "city": "Braga",
    "rating": 75,
    "capacity": 30286,
    "founded": 1921,
    "badge": "/assets/badges/club_1488.webp",
    "primaryColor": "#CD1018",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/sporting-clube-de-braga.jpg",
    "players": [
      {
        "name": "Bernardo Fontes",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Alaa Bellaarouch",
        "position": "GR",
        "nationality": "MAR"
      },
      {
        "name": "Víctor Gómez",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "João Moutinho",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Gustaf Lagerbielke",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Sikou Niakaté",
        "position": "DEF",
        "nationality": "MLI"
      },
      {
        "name": "Vitor Carvalho",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Demir Ege Tıknaz",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Ricardo Horta",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Pau Víctor",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Jonas Wind",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Mario Dorgeles",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Gabriel Silva",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Diego Rodrigues",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Amine El Ouazzani",
        "position": "AV",
        "nationality": "MAR"
      },
      {
        "name": "Fran Navarro",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Gustavo Fonte",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Linus Kurtz",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "João Tavares",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Jovan Milošević",
        "position": "AV",
        "nationality": "SRB"
      }
    ]
  },
  {
    "id": 334,
    "name": "Sporting Clube de Portugal",
    "country": "POR",
    "stadium": "Estádio José Alvalade",
    "city": "Lisbon",
    "rating": 79,
    "capacity": 52000,
    "founded": 1906,
    "badge": "/assets/badges/scp.webp",
    "primaryColor": "#186239",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/ALVALADE.webp",
    "players": [
      {
        "name": "Rui Silva",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "Kaique",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Maximiliano Araújo",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Sergi Altimira",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Gonçalo Inácio",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Zeno Debast",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Geny",
        "position": "DEF",
        "nationality": "MOZ"
      },
      {
        "name": "Issa Doumbia",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Pote",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Rodrigo Zalazar",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Luís Guilherme",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Flávio Gonçalves",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Nestory Irankunda",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Biel",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Luis Suárez",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Fotis Ioannidis",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Rafael Nel",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Diogo Martins",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Víctor Guzmán",
        "position": "AV",
        "nationality": "PER"
      },
      {
        "name": "Miguel Almeida",
        "position": "AV",
        "nationality": "POR"
      }
    ]
  },
  {
    "id": 335,
    "name": "	Vitória Sport Clube",
    "country": "POR",
    "stadium": "Estádio D. Afonso Henriques",
    "city": "Guimarães",
    "rating": 67,
    "capacity": 30008,
    "founded": 1922,
    "badge": "/assets/badges/guima.webp",
    "primaryColor": "#FFFFFF",
    "secondaryColor": "#080808",
    "stadiumImage": "/assets/stadiums/vitoria-sport-clube.jpg",
    "players": [
      {
        "name": "Oliwier Zych",
        "position": "GR",
        "nationality": "POL"
      },
      {
        "name": "Juan Diego Castillo",
        "position": "GR",
        "nationality": "COL"
      },
      {
        "name": "Tony Strata",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "João Mendes",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Beni Mukendi",
        "position": "DEF",
        "nationality": "ANG"
      },
      {
        "name": "Toni Borevković",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Lohann Doucet",
        "position": "DEF",
        "nationality": "BFA"
      },
      {
        "name": "Gonçalo Nogueira",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Alan",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Gustavo Silva",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Samu",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Oumar Camara",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Telmo Arcanjo",
        "position": "MED",
        "nationality": "CPV"
      },
      {
        "name": "Miguel Nogueira",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Arnel Jakupović",
        "position": "AV",
        "nationality": "AUT"
      },
      {
        "name": "Alioune Ndoye",
        "position": "AV",
        "nationality": "SEN"
      },
      {
        "name": "Patrick Ouotro",
        "position": "AV",
        "nationality": "CIV"
      },
      {
        "name": "José Sacramento",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Antenory Guenha",
        "position": "AV",
        "nationality": "LUX"
      },
      {
        "name": "Dinis Pereira",
        "position": "AV",
        "nationality": "POR"
      }
    ]
  },
  {
    "id": 337,
    "name": "AS PAOK Thessalonikis",
    "country": "GRE",
    "stadium": "Toumba",
    "city": "Thessaloniki",
    "rating": 70,
    "capacity": 28703,
    "founded": 1926,
    "badge": "/assets/badges/club_982.webp",
    "primaryColor": "#FFFFFF",
    "secondaryColor": "#080808",
    "stadiumImage": "/assets/stadiums/as-paok-thessalonikis.jpg",
    "players": [
      {
        "name": "Jiří Pavlenka",
        "position": "GR",
        "nationality": "CZE"
      },
      {
        "name": "Antonis Tsiftsis",
        "position": "GR",
        "nationality": "GRE"
      },
      {
        "name": "Diego Costa",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Kristijan Jakić",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Dimitris Giannoulis",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Jonjoe Kenny",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Aritz Elustondo",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Greg Taylor",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Christos Zafeiris",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Andrija Živković",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Baptiste Santamaria",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Soualiho Meïté",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Taha Ali",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Mady Camara",
        "position": "MED",
        "nationality": "GUI"
      },
      {
        "name": "Simon Banza",
        "position": "AV",
        "nationality": "COD"
      },
      {
        "name": "Kiril Despodov",
        "position": "AV",
        "nationality": "BUL"
      },
      {
        "name": "Taison",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dimitris Pelkas",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Chérif N'Diaye",
        "position": "AV",
        "nationality": "SEN"
      },
      {
        "name": "Fedor Chalov",
        "position": "AV",
        "nationality": "RUS"
      }
    ]
  },
  {
    "id": 338,
    "name": "AS Aris Thessalonikis",
    "country": "GRE",
    "stadium": "Kleanthis Vikelidis",
    "city": "Thessaloniki",
    "rating": 67,
    "capacity": 22574,
    "founded": 1914,
    "badge": "/assets/badges/club_969.webp",
    "primaryColor": "#FFF600",
    "secondaryColor": "#080808",
    "stadiumImage": "/assets/stadiums/as-aris-thessalonikis.jpg",
    "players": [
      {
        "name": "Ricardo Velho",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "Sokratis Dioudis",
        "position": "GR",
        "nationality": "GRE"
      },
      {
        "name": "Omar Richards",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Martin Hongla",
        "position": "DEF",
        "nationality": "CMR"
      },
      {
        "name": "Fabiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Jérémy Petris",
        "position": "DEF",
        "nationality": "MTQ"
      },
      {
        "name": "Boško Šutalo",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Noah Fadiga",
        "position": "DEF",
        "nationality": "SEN"
      },
      {
        "name": "Manu García",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Uroš Račić",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Fredrik Jensen",
        "position": "MED",
        "nationality": "FIN"
      },
      {
        "name": "Benjamín Garré",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Kostas Galanopoulos",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Sebastián Palacios",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Christian Kouamé",
        "position": "AV",
        "nationality": "CIV"
      },
      {
        "name": "Rafa Mir",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Loren Morón",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Othmane Boussaid",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Bruma",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Tino Kadewere",
        "position": "AV",
        "nationality": "ZIM"
      }
    ]
  },
  {
    "id": 339,
    "name": "Panathinaikos AO",
    "country": "GRE",
    "stadium": "OAKA Spyros Louis",
    "city": "Athens",
    "rating": 71,
    "capacity": 39700,
    "founded": 1908,
    "badge": "/assets/badges/club_983.webp",
    "primaryColor": "#185A41",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/panathinaikos-ao.jpg",
    "players": [
      {
        "name": "Iñaki Peña",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Lucas Chaves",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "Stefan de Vrij",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Davide Calabria",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Rick van Drongelen",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Giorgos Kyriakopoulos",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Anass Salah-Eddine",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Sverrir Ingi Ingason",
        "position": "DEF",
        "nationality": "ISL"
      },
      {
        "name": "Azzedine Ounahi",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Kings Kangwa",
        "position": "MED",
        "nationality": "ZAM"
      },
      {
        "name": "Imrân Louza",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Facundo Pellistri",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Pedro Chirivella",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Santino Andino",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Levi Garcia",
        "position": "AV",
        "nationality": "TRI"
      },
      {
        "name": "Cyriel Dessers",
        "position": "AV",
        "nationality": "NGA"
      },
      {
        "name": "Vicente Taborda",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Andrews Tetteh",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Elmin Rastoder",
        "position": "AV",
        "nationality": "MKD"
      },
      {
        "name": "Iason Nempis",
        "position": "AV",
        "nationality": "GRE"
      }
    ]
  },
  {
    "id": 340,
    "name": "AEK Athens",
    "country": "GRE",
    "stadium": "Agia Sofia",
    "city": "Athens",
    "rating": 72,
    "capacity": 31527,
    "founded": 1924,
    "badge": "/assets/badges/club_967.webp",
    "primaryColor": "#FFDE08",
    "secondaryColor": "#181818",
    "stadiumImage": "/assets/stadiums/aek-athens.jpg",
    "players": [
      {
        "name": "Thomas Strakosha",
        "position": "GR",
        "nationality": "ALB"
      },
      {
        "name": "Alberto Brignoli",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Harold Moukoudi",
        "position": "DEF",
        "nationality": "CMR"
      },
      {
        "name": "Lazaros Rota",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Filipe Relvas",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Kervin Arriaga",
        "position": "DEF",
        "nationality": "HON"
      },
      {
        "name": "Bampis Lykogiannis",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Domagoj Vida",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Lovro Majer",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Oleksandr Zubkov",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Răzvan Marin",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Aboubakary Koita",
        "position": "MED",
        "nationality": "MTN"
      },
      {
        "name": "Kaan Kairinen",
        "position": "MED",
        "nationality": "FIN"
      },
      {
        "name": "João Mário",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Luka Jović",
        "position": "AV",
        "nationality": "SRB"
      },
      {
        "name": "Barnabás Varga",
        "position": "AV",
        "nationality": "HUN"
      },
      {
        "name": "Zini",
        "position": "AV",
        "nationality": "ANG"
      },
      {
        "name": "Frantzdy Pierrot",
        "position": "AV",
        "nationality": "HAI"
      },
      {
        "name": "Dimitris Kaloskamis",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Zois Karargyris",
        "position": "AV",
        "nationality": "GRE"
      }
    ]
  },
  {
    "id": 341,
    "name": "Olympiacos SF Piraeus",
    "country": "GRE",
    "stadium": "Georgios Karaiskakis",
    "city": "Piraeus",
    "rating": 73,
    "capacity": 33449,
    "founded": 1925,
    "badge": "/assets/badges/club_981.webp",
    "primaryColor": "#D50810",
    "secondaryColor": "#FFFFFF",
    "stadiumImage": "/assets/stadiums/olympiacos-sf-piraeus.jpg",
    "players": [
      {
        "name": "Stefan Ortega",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Balša Popović",
        "position": "GR",
        "nationality": "MNE"
      },
      {
        "name": "David Carmo",
        "position": "DEF",
        "nationality": "ANG"
      },
      {
        "name": "Panagiotis Retsos",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Lorenzo Pirola",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Marcus Holmgren Pedersen",
        "position": "DEF",
        "nationality": "NOR"
      },
      {
        "name": "Manolis Saliakas",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Nair Tiknizyan",
        "position": "DEF",
        "nationality": "ARM"
      },
      {
        "name": "Gustavo Puerta",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Remo Freuler",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Leon Bailey",
        "position": "MED",
        "nationality": "JAM"
      },
      {
        "name": "Gelson Martins",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Chiquinho",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Santiago Hezze",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Ayoub El Kaabi",
        "position": "AV",
        "nationality": "MAR"
      },
      {
        "name": "Jota Silva",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Kostas Fortounis",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Roman Yaremchuk",
        "position": "AV",
        "nationality": "UKR"
      },
      {
        "name": "Yusuf Yazıcı",
        "position": "AV",
        "nationality": "TUR"
      },
      {
        "name": "Armando González",
        "position": "AV",
        "nationality": "MEX"
      }
    ]
  }
];
