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
    "id": 1,
    "name": "AC Milan",
    "country": "ITA",
    "rating": 75,
    "badge": "/assets/badges/milan.png",
    "primaryColor": "#AC1E2D",
    "secondaryColor": "#000000",
    "stadium": "Stadio Giuseppe Meazza (San Siro)",
    "city": "Milano",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sebastiano Rossi",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Angelo Pagotto",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Alessandro Costacurta",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Paolo Maldini",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Christian Panucci",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Pietro Vierchowod",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Demetrio Albertini",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Zvonimir Boban",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Stefano Eranio",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Edgar Davids",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Dejan Savicevic",
        "position": "MED",
        "nationality": "MNE"
      },
      {
        "name": "Massimo Ambrosini",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "George Weah",
        "position": "AV",
        "nationality": "LBR"
      },
      {
        "name": "Roberto Baggio",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Marco Simone",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Christophe Dugarry",
        "position": "AV",
        "nationality": "FRA"
      }
    ]
  },
  {
    "id": 2,
    "name": "Juventus",
    "country": "ITA",
    "rating": 78,
    "badge": "/assets/badges/juventus.png",
    "primaryColor": "#111111",
    "secondaryColor": "#FFFFFF",
    "stadium": "Stadio delle Alpi",
    "city": "Torino",
    "stadiumImage": "",
    "players": [
      {
        "name": "Angelo Peruzzi",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Michelangelo Rampulla",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Ciro Ferrara",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Paolo Montero",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Sergio Porrini",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Moreno Torricelli",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Gianluca Pessotto",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Mark Iuliano",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Didier Deschamps",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Angelo Di Livio",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Zinédine Zidane",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Vladimir Jugovic",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Alessio Tacchinardi",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Attilio Lombardo",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Alessandro Del Piero",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Alen Boksic",
        "position": "AV",
        "nationality": "CRO"
      },
      {
        "name": "Christian Vieri",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Nicola Amoruso",
        "position": "AV",
        "nationality": "ITA"
      }
    ]
  },
  {
    "id": 3,
    "name": "Inter Milan",
    "country": "ITA",
    "rating": 75,
    "badge": "/assets/badges/int_milan.png",
    "primaryColor": "#0068A8",
    "secondaryColor": "#111111",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Andrea Mazzantini",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Pantanelli",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Giuseppe Bergomi",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Alessandro Pistone",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Javier Zanetti",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Fabio Galante",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Salvatore Fresi",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Gianluca Festa",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Massimo Paganin",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Jocelyn Angloma",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Massimo Tarantino",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Matteo Ferrari",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Sergio D’Autilia",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Andrea Seno",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Paul Ince",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Aron Winter",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Nicola Berti",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Ciriaco Sforza",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Youri Djorkaeff",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Iván Zamorano",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Benito Carbone",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Nwankwo Kanu",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Maurizio Ganz",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Marco Branca",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Arturo Di Napoli",
        "position": "AV",
        "nationality": "ITA"
      }
    ]
  },
  {
    "id": 4,
    "name": "AS Roma",
    "country": "ITA",
    "rating": 75,
    "badge": "/assets/badges/roma.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Giovanni Cervone",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Giorgio Sterchele",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Giampaolo Di Magno",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Gianluca Berti",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Roberto Trotta",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Marco Lanna",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Enrico Annoni",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Francesco Statuto",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Amedeo Carboni",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Fabio Petruzzi",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Gabriele Grossi",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Lorenzo Stovini",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Matteo Pivotto",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Omari Tetradze",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Vincent Candela",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Romondini",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Jonas Thern",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Francesco Moriero",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Daniele Berretta",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Luigi Di Biagio",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Damiano Tommasi",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Massimiliano Cappioli",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Antonio Bernardini",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Daniele Conti",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Abel Balbo",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Daniel Fonseca",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Martin Dahlin",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Francesco Totti",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Lampros Choutos",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Marco Delvecchio",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Andrea Conti",
        "position": "AV",
        "nationality": "ITA"
      }
    ]
  },
  {
    "id": 5,
    "name": "Lazio",
    "country": "ITA",
    "rating": 73,
    "badge": "/assets/badges/lazio.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "Stadio Olimpico",
    "city": "Roma",
    "stadiumImage": "",
    "players": [
      {
        "name": "Stefano Sorrentino",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Andrea Cano",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Luca Marchegiani",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Fernando Orsi",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Carlo Cudicini",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Mauro Di Lello",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Paolo Negro",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Mark Fish",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Giuseppe Favalli",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "José Chamot",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Alessandro Nesta",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Alessandro Grandoni",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Stefano Bellè",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Mirko Laurentini",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Dario Marcolin",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Roberto Rambaudi",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Renato Buso",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Diego Fuser",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Roberto Baronio",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Paul Okon",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Guerino Gottardi",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Pavel Nedved",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Daniele Franceschini",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Giorgio Venturin",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Daniele Federici",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Marco Piovanelli",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Pierluigi Casiraghi",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Igor Protti",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Giuseppe Signori",
        "position": "AV",
        "nationality": "ITA"
      }
    ]
  },
  {
    "id": 6,
    "name": "Parma",
    "country": "ITA",
    "rating": 70,
    "badge": "/assets/badges/parma.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "Stadio Ennio Tardini",
    "city": "Parma",
    "stadiumImage": "",
    "players": [
      {
        "name": "Luca Bucci",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Gianluigi Buffon",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Alessandro Nista",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Enrico Morello",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Luca Pinton",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Luigi Apolloni",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Antonio Benarrivo",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Néstor Sensini",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Roberto Mussi",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Fabio Cannavaro",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Lilian Thuram",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Zé Maria",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Simone Barone",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Mario Caruso",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Daniel Bravo",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Dino Baggio",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Massimo Crippa",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Amaral",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Massimo Brambilla",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Pietro Strada",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Reynald Pedros",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Mario Stanic",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Gianfranco Zola",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Hernan Crespo",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Gianluca Triuzzi",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Alessandro Melli",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Enrico Chiesa",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Tomas Brolin",
        "position": "AV",
        "nationality": "ITA"
      }
    ]
  },
  {
    "id": 7,
    "name": "Sampdoria",
    "country": "ITA",
    "rating": 70,
    "badge": "/assets/badges/samp.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Kurnia Sandy",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Fabrizio Ferron",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Matteo Sereni",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Alessandro Giovinazzo",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "David Balleri",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Moreno Mannini",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Stefano Sacchetti",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Emanuele Pesaresi",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Sinisa Mihajlovic",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Emiliano Milone",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Oumar Dieng",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Giovanni Invernizzi",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Alberico Evani",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Marco Franceschetti",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Pierre Laigle",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Christian Karembeu",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Fausto Salsano",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Nicola Zanini",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Mattia Biso",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Simone Vergassola",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Juan Sebastián Verón",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Simone Aloe",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Vincenzo Montella",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Roberto Mancini",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Vincenzo Iacopino",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Marco Carparelli",
        "position": "AV",
        "nationality": "ITA"
      }
    ]
  },
  {
    "id": 8,
    "name": "Napoli",
    "country": "ITA",
    "rating": 75,
    "badge": "/assets/badges/napoli.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "Stadio San Paolo",
    "city": "Napoli",
    "stadiumImage": "",
    "players": [
      {
        "name": "Giuseppe Taglialatela",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Raffaele di Fusco",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Ferdinando Coppola",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Luigi Morgante",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Mauro Milanese",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Roberto Bordin",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "André Cruz",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Luigi Panarelli",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Francesco Baldini",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Francesco Colonnese",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Gennaro Scarlato",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Bertrand Crasson",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Mirko Taccola",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Antonio Amita",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Alain Boghossian",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Francesco Turrini",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Max Esposito",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Beto",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Fabio Pecchia",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Angelo Cimadomo",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Carmelo Imbriani",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Roberto Policano",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Raffaele Longo",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Luca Altomare",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Giuseppe Giannini",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Dino Fava",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Caio",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Alfredo Aglietti",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Nicola Caccia",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Arturo Di Napoli",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Salvatore Bruno",
        "position": "AV",
        "nationality": "ITA"
      }
    ]
  },
  {
    "id": 9,
    "name": "Fiorentina",
    "country": "ITA",
    "rating": 74,
    "badge": "/assets/badges/fiorentina.png",
    "primaryColor": "#482683",
    "secondaryColor": "#FFFFFF",
    "stadium": "Stadio Artemio Franchi",
    "city": "Firenze",
    "stadiumImage": "",
    "players": [
      {
        "name": "Francesco Toldo",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Gianmatteo Mareggini",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Giulio Falcone",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Lorenzo Amoruso",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Vittorio Pusceddu",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Daniele Carnasciali",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Pasquale Padalino",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Aldo Firicano",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Rui Costa",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Stefan Schwarz",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Sandro Cois",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Giovanni Piacentini",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Emiliano Bigica",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Mirko Benin",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Luís Oliveira",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Anselmo Robbiati",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Francesco Baiano",
        "position": "AV",
        "nationality": "ITA"
      }
    ]
  },
  {
    "id": 10,
    "name": "Ajax",
    "country": "NED",
    "rating": 90,
    "badge": "/assets/badges/ajax.png",
    "primaryColor": "#D2122E",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Edwin van der Sar",
        "position": "GR",
        "nationality": "NED"
      },
      {
        "name": "Hans van Breukelen",
        "position": "GR",
        "nationality": "NED"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Ronald Koeman",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Jaap Stam",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Michael Reiziger",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Danny Blind",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Winston Bogarde",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Frank Rijkaard",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Edgar Davids",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Marc Overmars",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Ronald de Boer",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Richard Witschge",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Dennis Bergkamp",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Patrick Kluivert",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Ruud van Nistelrooy",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Frank Rijkaard",
        "position": "AV",
        "nationality": "NED"
      }
    ]
  },
  {
    "id": 11,
    "name": "PSV Eindhoven",
    "country": "NED",
    "rating": 90,
    "badge": "/assets/badges/psv.png",
    "primaryColor": "#E30613",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Edwin van der Sar",
        "position": "GR",
        "nationality": "NED"
      },
      {
        "name": "Hans van Breukelen",
        "position": "GR",
        "nationality": "NED"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Ronald Koeman",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Jaap Stam",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Michael Reiziger",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Danny Blind",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Winston Bogarde",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Frank Rijkaard",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Edgar Davids",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Marc Overmars",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Ronald de Boer",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Richard Witschge",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Dennis Bergkamp",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Patrick Kluivert",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Ruud van Nistelrooy",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Frank Rijkaard",
        "position": "AV",
        "nationality": "NED"
      }
    ]
  },
  {
    "id": 12,
    "name": "Feyenoord",
    "country": "NED",
    "rating": 89,
    "badge": "/assets/badges/feyenoord.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Edwin van der Sar",
        "position": "GR",
        "nationality": "NED"
      },
      {
        "name": "Hans van Breukelen",
        "position": "GR",
        "nationality": "NED"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Ronald Koeman",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Jaap Stam",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Michael Reiziger",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Danny Blind",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Winston Bogarde",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Frank Rijkaard",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Edgar Davids",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Marc Overmars",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Ronald de Boer",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Richard Witschge",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Dennis Bergkamp",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Patrick Kluivert",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Ruud van Nistelrooy",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Frank Rijkaard",
        "position": "AV",
        "nationality": "NED"
      }
    ]
  },
  {
    "id": 13,
    "name": "Barcelona",
    "country": "ESP",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#A50044",
    "secondaryColor": "#004D98",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 14,
    "name": "Real Madrid",
    "country": "ESP",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#FFFFFF",
    "secondaryColor": "#1D3557",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 15,
    "name": "Atlético Madrid",
    "country": "ESP",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 16,
    "name": "Valencia",
    "country": "ESP",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 17,
    "name": "Deportivo La Coruña",
    "country": "ESP",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 18,
    "name": "Athletic Bilbao",
    "country": "ESP",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 19,
    "name": "Sevilla",
    "country": "ESP",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 20,
    "name": "Bayern Munich",
    "country": "GER",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#DC052D",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Oliver Kahn",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Bodo Illgner",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Matthias Sammer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Kohler",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Helmer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Christian Wörns",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Andreas Brehme",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Berthold",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Thomas Hässler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Andreas Möller",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mehmet Scholl",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mario Basler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Michael Ballack",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Klinsmann",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Karl-Heinz Riedle",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Oliver Bierhoff",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "AV",
        "nationality": "GER"
      }
    ]
  },
  {
    "id": 21,
    "name": "Borussia Dortmund",
    "country": "GER",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Oliver Kahn",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Bodo Illgner",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Matthias Sammer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Kohler",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Helmer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Christian Wörns",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Andreas Brehme",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Berthold",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Thomas Hässler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Andreas Möller",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mehmet Scholl",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mario Basler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Michael Ballack",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Klinsmann",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Karl-Heinz Riedle",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Oliver Bierhoff",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "AV",
        "nationality": "GER"
      }
    ]
  },
  {
    "id": 22,
    "name": "Bayer Leverkusen",
    "country": "GER",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Oliver Kahn",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Bodo Illgner",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Matthias Sammer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Kohler",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Helmer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Christian Wörns",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Andreas Brehme",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Berthold",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Thomas Hässler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Andreas Möller",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mehmet Scholl",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mario Basler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Michael Ballack",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Klinsmann",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Karl-Heinz Riedle",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Oliver Bierhoff",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "AV",
        "nationality": "GER"
      }
    ]
  },
  {
    "id": 23,
    "name": "Werder Bremen",
    "country": "GER",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Oliver Kahn",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Bodo Illgner",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Matthias Sammer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Kohler",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Helmer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Christian Wörns",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Andreas Brehme",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Berthold",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Thomas Hässler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Andreas Möller",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mehmet Scholl",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mario Basler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Michael Ballack",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Klinsmann",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Karl-Heinz Riedle",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Oliver Bierhoff",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "AV",
        "nationality": "GER"
      }
    ]
  },
  {
    "id": 24,
    "name": "Schalke 04",
    "country": "GER",
    "rating": 88,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Oliver Kahn",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Bodo Illgner",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Matthias Sammer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Kohler",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Helmer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Christian Wörns",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Andreas Brehme",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Berthold",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Thomas Hässler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Andreas Möller",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mehmet Scholl",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mario Basler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Michael Ballack",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Klinsmann",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Karl-Heinz Riedle",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Oliver Bierhoff",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "AV",
        "nationality": "GER"
      }
    ]
  },
  {
    "id": 25,
    "name": "Kaiserslautern",
    "country": "GER",
    "rating": 88,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Oliver Kahn",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Bodo Illgner",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Matthias Sammer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Kohler",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Helmer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Christian Wörns",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Andreas Brehme",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Berthold",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Thomas Hässler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Andreas Möller",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mehmet Scholl",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mario Basler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Michael Ballack",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Klinsmann",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Karl-Heinz Riedle",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Oliver Bierhoff",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "AV",
        "nationality": "GER"
      }
    ]
  },
  {
    "id": 26,
    "name": "Hamburg",
    "country": "GER",
    "rating": 88,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Oliver Kahn",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Bodo Illgner",
        "position": "GR",
        "nationality": "GER"
      },
      {
        "name": "Matthias Sammer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Kohler",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Helmer",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Christian Wörns",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Andreas Brehme",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Thomas Berthold",
        "position": "DEF",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Thomas Hässler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Andreas Möller",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mehmet Scholl",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Mario Basler",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Michael Ballack",
        "position": "MED",
        "nationality": "GER"
      },
      {
        "name": "Jürgen Klinsmann",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Karl-Heinz Riedle",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Oliver Bierhoff",
        "position": "AV",
        "nationality": "GER"
      },
      {
        "name": "Stefan Effenberg",
        "position": "AV",
        "nationality": "GER"
      }
    ]
  },
  {
    "id": 27,
    "name": "Manchester United",
    "country": "ENG",
    "rating": 88,
    "badge": "/assets/badges/ManUtd.png",
    "primaryColor": "#DA291C",
    "secondaryColor": "#FBE122",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "David Seaman",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "Tony Adams",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Gary Pallister",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Steve Bruce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Sol Campbell",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Stuart Pearce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Des Walker",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Roy Keane",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Paul Gascoigne",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "David Platt",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Steve McManaman",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Ryan Giggs",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Alan Shearer",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Michael Owen",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Ian Wright",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "AV",
        "nationality": "ENG"
      }
    ]
  },
  {
    "id": 28,
    "name": "Arsenal",
    "country": "ENG",
    "rating": 88,
    "badge": "/assets/badges/arsenal.png",
    "primaryColor": "#EF0107",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "David Seaman",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "Tony Adams",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Gary Pallister",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Steve Bruce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Sol Campbell",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Stuart Pearce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Des Walker",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Roy Keane",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Paul Gascoigne",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "David Platt",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Steve McManaman",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Ryan Giggs",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Alan Shearer",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Michael Owen",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Ian Wright",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "AV",
        "nationality": "ENG"
      }
    ]
  },
  {
    "id": 29,
    "name": "Liverpool",
    "country": "ENG",
    "rating": 88,
    "badge": "/assets/badges/liverpool.png",
    "primaryColor": "#C8102E",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "David Seaman",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "Tony Adams",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Gary Pallister",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Steve Bruce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Sol Campbell",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Stuart Pearce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Des Walker",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Roy Keane",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Paul Gascoigne",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "David Platt",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Steve McManaman",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Ryan Giggs",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Alan Shearer",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Michael Owen",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Ian Wright",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "AV",
        "nationality": "ENG"
      }
    ]
  },
  {
    "id": 30,
    "name": "Chelsea",
    "country": "ENG",
    "rating": 88,
    "badge": "/assets/badges/chelsea.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "David Seaman",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "Tony Adams",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Gary Pallister",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Steve Bruce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Sol Campbell",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Stuart Pearce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Des Walker",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Roy Keane",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Paul Gascoigne",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "David Platt",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Steve McManaman",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Ryan Giggs",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Alan Shearer",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Michael Owen",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Ian Wright",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "AV",
        "nationality": "ENG"
      }
    ]
  },
  {
    "id": 31,
    "name": "Blackburn Rovers",
    "country": "ENG",
    "rating": 88,
    "badge": "/assets/badges/BlackR.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "David Seaman",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "Tony Adams",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Gary Pallister",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Steve Bruce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Sol Campbell",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Stuart Pearce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Des Walker",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Roy Keane",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Paul Gascoigne",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "David Platt",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Steve McManaman",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Ryan Giggs",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Alan Shearer",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Michael Owen",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Ian Wright",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "AV",
        "nationality": "ENG"
      }
    ]
  },
  {
    "id": 32,
    "name": "Newcastle United",
    "country": "ENG",
    "rating": 88,
    "badge": "/assets/badges/newcastle.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "David Seaman",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "Tony Adams",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Gary Pallister",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Steve Bruce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Sol Campbell",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Stuart Pearce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Des Walker",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Roy Keane",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Paul Gascoigne",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "David Platt",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Steve McManaman",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Ryan Giggs",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Alan Shearer",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Michael Owen",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Ian Wright",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "AV",
        "nationality": "ENG"
      }
    ]
  },
  {
    "id": 33,
    "name": "Aston Villa",
    "country": "ENG",
    "rating": 88,
    "badge": "/assets/badges/aston.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "David Seaman",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "Tony Adams",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Gary Pallister",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Steve Bruce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Sol Campbell",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Stuart Pearce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Des Walker",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Roy Keane",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Paul Gascoigne",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "David Platt",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Steve McManaman",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Ryan Giggs",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Alan Shearer",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Michael Owen",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Ian Wright",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "AV",
        "nationality": "ENG"
      }
    ]
  },
  {
    "id": 34,
    "name": "Tottenham Hotspur",
    "country": "ENG",
    "rating": 88,
    "badge": "/assets/badges/spurs.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "David Seaman",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "Tony Adams",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Gary Pallister",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Steve Bruce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Sol Campbell",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Stuart Pearce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Des Walker",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Roy Keane",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Paul Gascoigne",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "David Platt",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Steve McManaman",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Ryan Giggs",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Alan Shearer",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Michael Owen",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Ian Wright",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "AV",
        "nationality": "ENG"
      }
    ]
  },
  {
    "id": 35,
    "name": "Leeds United",
    "country": "ENG",
    "rating": 88,
    "badge": "/assets/badges/leeds.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "David Seaman",
        "position": "GR",
        "nationality": "ENG"
      },
      {
        "name": "Tony Adams",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Gary Pallister",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Steve Bruce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Sol Campbell",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Stuart Pearce",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Des Walker",
        "position": "DEF",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Roy Keane",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Paul Gascoigne",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "David Platt",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Steve McManaman",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Ryan Giggs",
        "position": "MED",
        "nationality": "ENG"
      },
      {
        "name": "Alan Shearer",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Michael Owen",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Ian Wright",
        "position": "AV",
        "nationality": "ENG"
      },
      {
        "name": "Paul Ince",
        "position": "AV",
        "nationality": "ENG"
      }
    ]
  },
  {
    "id": 36,
    "name": "Rangers",
    "country": "SCO",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "SCO"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "SCO"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "SCO"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "SCO"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "SCO"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "SCO"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "SCO"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "SCO"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "SCO"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "SCO"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "SCO"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "SCO"
      }
    ]
  },
  {
    "id": 37,
    "name": "Celtic",
    "country": "SCO",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "SCO"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "SCO"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "SCO"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "SCO"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "SCO"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "SCO"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "SCO"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "SCO"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "SCO"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "SCO"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "SCO"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "SCO"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "SCO"
      }
    ]
  },
  {
    "id": 38,
    "name": "Porto",
    "country": "POR",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#0A3D91",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Vítor Baía",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "Neno",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "Fernando Couto",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Jorge Costa",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Abel Xavier",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Dimas Teixeira",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Paulo Madeira",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Luís Figo",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Rui Costa",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "João Vieira Pinto",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Paulo Sousa",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Sérgio Conceição",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Domingos Paciência",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "João Pinto",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Nuno Gomes",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Jardel",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Luís Figo",
        "position": "AV",
        "nationality": "POR"
      }
    ]
  },
  {
    "id": 39,
    "name": "Benfica",
    "country": "POR",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#E30613",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Vítor Baía",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "Neno",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "Fernando Couto",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Jorge Costa",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Abel Xavier",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Dimas Teixeira",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Paulo Madeira",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Luís Figo",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Rui Costa",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "João Vieira Pinto",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Paulo Sousa",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Sérgio Conceição",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Domingos Paciência",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "João Pinto",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Nuno Gomes",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Jardel",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Luís Figo",
        "position": "AV",
        "nationality": "POR"
      }
    ]
  },
  {
    "id": 40,
    "name": "Sporting CP",
    "country": "POR",
    "rating": 70,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#0B7A3B",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Vítor Baía",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "Neno",
        "position": "GR",
        "nationality": "POR"
      },
      {
        "name": "Fernando Couto",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Jorge Costa",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Abel Xavier",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Dimas Teixeira",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Paulo Madeira",
        "position": "DEF",
        "nationality": "POR"
      },
      {
        "name": "Luís Figo",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Rui Costa",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "João Vieira Pinto",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Paulo Sousa",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Sérgio Conceição",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "Domingos Paciência",
        "position": "MED",
        "nationality": "POR"
      },
      {
        "name": "João Pinto",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Nuno Gomes",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Jardel",
        "position": "AV",
        "nationality": "POR"
      },
      {
        "name": "Luís Figo",
        "position": "AV",
        "nationality": "POR"
      }
    ]
  },
  {
    "id": 41,
    "name": "Marseille",
    "country": "FRA",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "Stade Vélodrome",
    "city": "Marseille",
    "stadiumImage": "",
    "players": [
      {
        "name": "Fabien Barthez",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Bernard Lama",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Laurent Blanc",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Lilian Thuram",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Bixente Lizarazu",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Frank Leboeuf",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Eric Di Meco",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Zinédine Zidane",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Emmanuel Petit",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Youri Djorkaeff",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Robert Pirès",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Christian Karembeu",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Eric Cantona",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "David Trezeguet",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Jean-Pierre Papin",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "AV",
        "nationality": "FRA"
      }
    ]
  },
  {
    "id": 42,
    "name": "Paris Saint-Germain",
    "country": "FRA",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Fabien Barthez",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Bernard Lama",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Laurent Blanc",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Lilian Thuram",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Bixente Lizarazu",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Frank Leboeuf",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Eric Di Meco",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Zinédine Zidane",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Emmanuel Petit",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Youri Djorkaeff",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Robert Pirès",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Christian Karembeu",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Eric Cantona",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "David Trezeguet",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Jean-Pierre Papin",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "AV",
        "nationality": "FRA"
      }
    ]
  },
  {
    "id": 43,
    "name": "Monaco",
    "country": "FRA",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Fabien Barthez",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Bernard Lama",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Laurent Blanc",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Lilian Thuram",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Bixente Lizarazu",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Frank Leboeuf",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Eric Di Meco",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Zinédine Zidane",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Emmanuel Petit",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Youri Djorkaeff",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Robert Pirès",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Christian Karembeu",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Eric Cantona",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "David Trezeguet",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Jean-Pierre Papin",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "AV",
        "nationality": "FRA"
      }
    ]
  },
  {
    "id": 44,
    "name": "Auxerre",
    "country": "FRA",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Fabien Barthez",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Bernard Lama",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Laurent Blanc",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Lilian Thuram",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Bixente Lizarazu",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Frank Leboeuf",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Eric Di Meco",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Zinédine Zidane",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Emmanuel Petit",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Youri Djorkaeff",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Robert Pirès",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Christian Karembeu",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Eric Cantona",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "David Trezeguet",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Jean-Pierre Papin",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "AV",
        "nationality": "FRA"
      }
    ]
  },
  {
    "id": 45,
    "name": "Bordeaux",
    "country": "FRA",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Fabien Barthez",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Bernard Lama",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Laurent Blanc",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Lilian Thuram",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Bixente Lizarazu",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Frank Leboeuf",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Eric Di Meco",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Zinédine Zidane",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Emmanuel Petit",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Youri Djorkaeff",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Robert Pirès",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Christian Karembeu",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Eric Cantona",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "David Trezeguet",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Jean-Pierre Papin",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "AV",
        "nationality": "FRA"
      }
    ]
  },
  {
    "id": 46,
    "name": "Nantes",
    "country": "FRA",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Fabien Barthez",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Bernard Lama",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Laurent Blanc",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Lilian Thuram",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Bixente Lizarazu",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Frank Leboeuf",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Eric Di Meco",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Zinédine Zidane",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Emmanuel Petit",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Youri Djorkaeff",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Robert Pirès",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Christian Karembeu",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Eric Cantona",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "David Trezeguet",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Jean-Pierre Papin",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "AV",
        "nationality": "FRA"
      }
    ]
  },
  {
    "id": 47,
    "name": "Lyon",
    "country": "FRA",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Fabien Barthez",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Bernard Lama",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Laurent Blanc",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Lilian Thuram",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Bixente Lizarazu",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Frank Leboeuf",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Eric Di Meco",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Zinédine Zidane",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Emmanuel Petit",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Youri Djorkaeff",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Robert Pirès",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Christian Karembeu",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Eric Cantona",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "David Trezeguet",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Jean-Pierre Papin",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "AV",
        "nationality": "FRA"
      }
    ]
  },
  {
    "id": 48,
    "name": "Lens",
    "country": "FRA",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Fabien Barthez",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Bernard Lama",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Laurent Blanc",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Lilian Thuram",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Bixente Lizarazu",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Frank Leboeuf",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Eric Di Meco",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Zinédine Zidane",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Emmanuel Petit",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Youri Djorkaeff",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Robert Pirès",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Christian Karembeu",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Eric Cantona",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "David Trezeguet",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Jean-Pierre Papin",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "AV",
        "nationality": "FRA"
      }
    ]
  },
  {
    "id": 49,
    "name": "Galatasaray",
    "country": "TUR",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "TUR"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "TUR"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "TUR"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "TUR"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "TUR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "TUR"
      }
    ]
  },
  {
    "id": 50,
    "name": "Fenerbahçe",
    "country": "TUR",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "TUR"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "TUR"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "TUR"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "TUR"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "TUR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "TUR"
      }
    ]
  },
  {
    "id": 51,
    "name": "Beşiktaş",
    "country": "TUR",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "TUR"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "TUR"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "TUR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "TUR"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "TUR"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "TUR"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "TUR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "TUR"
      }
    ]
  },
  {
    "id": 52,
    "name": "Steaua București",
    "country": "ROU",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ROU"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "ROU"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "ROU"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "ROU"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ROU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "ROU"
      }
    ]
  },
  {
    "id": 53,
    "name": "Rapid București",
    "country": "ROU",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ROU"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "ROU"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "ROU"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "ROU"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ROU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "ROU"
      }
    ]
  },
  {
    "id": 54,
    "name": "Dinamo București",
    "country": "ROU",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ROU"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "ROU"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "ROU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ROU"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "ROU"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "ROU"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ROU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "ROU"
      }
    ]
  },
  {
    "id": 55,
    "name": "CSKA Moscow",
    "country": "RUS",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "RUS"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "RUS"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "RUS"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "RUS"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "RUS"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "RUS"
      }
    ]
  },
  {
    "id": 56,
    "name": "Spartak Moscow",
    "country": "RUS",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "RUS"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "RUS"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "RUS"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "RUS"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "RUS"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "RUS"
      }
    ]
  },
  {
    "id": 57,
    "name": "Lokomotiv Moscow",
    "country": "RUS",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "RUS"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "RUS"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "RUS"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "RUS"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "RUS"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "RUS"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "RUS"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "RUS"
      }
    ]
  },
  {
    "id": 58,
    "name": "Dynamo Kyiv",
    "country": "UKR",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "UKR"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "UKR"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "UKR"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "UKR"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "UKR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "UKR"
      }
    ]
  },
  {
    "id": 59,
    "name": "Shakhtar Donetsk",
    "country": "UKR",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "UKR"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "UKR"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "UKR"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "UKR"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "UKR"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "UKR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "UKR"
      }
    ]
  },
  {
    "id": 60,
    "name": "Panathinaikos",
    "country": "GRE",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "GRE"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "GRE"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "GRE"
      }
    ]
  },
  {
    "id": 61,
    "name": "Olympiacos",
    "country": "GRE",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "GRE"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "GRE"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "GRE"
      }
    ]
  },
  {
    "id": 62,
    "name": "AEK Athens",
    "country": "GRE",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "GRE"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "GRE"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "GRE"
      }
    ]
  },
  {
    "id": 63,
    "name": "Rosenborg",
    "country": "NOR",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "NOR"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "NOR"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "NOR"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "NOR"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "NOR"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "NOR"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "NOR"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "NOR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "NOR"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "NOR"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "NOR"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "NOR"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "NOR"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "NOR"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "NOR"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "NOR"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "NOR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "NOR"
      }
    ]
  },
  {
    "id": 64,
    "name": "IFK Göteborg",
    "country": "SWE",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "SWE"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "SWE"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "SWE"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "SWE"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "SWE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "SWE"
      }
    ]
  },
  {
    "id": 65,
    "name": "AIK",
    "country": "SWE",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "SWE"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "SWE"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "SWE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "SWE"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "SWE"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "SWE"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "SWE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "SWE"
      }
    ]
  },
  {
    "id": 66,
    "name": "FC København",
    "country": "DEN",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "DEN"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "DEN"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "DEN"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "DEN"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "DEN"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "DEN"
      }
    ]
  },
  {
    "id": 67,
    "name": "Brøndby",
    "country": "DEN",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "DEN"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "DEN"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "DEN"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "DEN"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "DEN"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "DEN"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "DEN"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "DEN"
      }
    ]
  },
  {
    "id": 68,
    "name": "Anderlecht",
    "country": "BEL",
    "rating": 85,
    "badge": "/assets/badges/anderlecht.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "BEL"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "BEL"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "BEL"
      }
    ]
  },
  {
    "id": 69,
    "name": "Club Brugge",
    "country": "BEL",
    "rating": 85,
    "badge": "/assets/badges/brugge.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "BEL"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "BEL"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "BEL"
      }
    ]
  },
  {
    "id": 70,
    "name": "Standard Liège",
    "country": "BEL",
    "rating": 85,
    "badge": "/assets/badges/liege.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "BEL"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "BEL"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "BEL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "BEL"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "BEL"
      }
    ]
  },
  {
    "id": 71,
    "name": "Red Star Belgrade",
    "country": "SRB",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "SRB"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "SRB"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "SRB"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "SRB"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "SRB"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "SRB"
      }
    ]
  },
  {
    "id": 72,
    "name": "Partizan",
    "country": "SRB",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "SRB"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "SRB"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "SRB"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "SRB"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "SRB"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "SRB"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "SRB"
      }
    ]
  },
  {
    "id": 73,
    "name": "Dinamo Zagreb",
    "country": "CRO",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "CRO"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "CRO"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "CRO"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "CRO"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "CRO"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "CRO"
      }
    ]
  },
  {
    "id": 74,
    "name": "Hajduk Split",
    "country": "CRO",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "CRO"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "CRO"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "CRO"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "CRO"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "CRO"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "CRO"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "CRO"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "CRO"
      }
    ]
  },
  {
    "id": 75,
    "name": "Sparta Prague",
    "country": "CZE",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "CZE"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "CZE"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "CZE"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "CZE"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "CZE"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "CZE"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "CZE"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "CZE"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "CZE"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "CZE"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "CZE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "CZE"
      }
    ]
  },
  {
    "id": 76,
    "name": "Slavia Prague",
    "country": "CZE",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "CZE"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "CZE"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "CZE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "CZE"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "CZE"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "CZE"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "CZE"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "CZE"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "CZE"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "CZE"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "CZE"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "CZE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "CZE"
      }
    ]
  },
  {
    "id": 77,
    "name": "Slovan Bratislava",
    "country": "SVK",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "SVK"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "SVK"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "SVK"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "SVK"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "SVK"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "SVK"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "SVK"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "SVK"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "SVK"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "SVK"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "SVK"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "SVK"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "SVK"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "SVK"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "SVK"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "SVK"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "SVK"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "SVK"
      }
    ]
  },
  {
    "id": 78,
    "name": "Bologna",
    "country": "ITA",
    "rating": 70,
    "badge": "/assets/badges/bologna.png",
    "primaryColor": "#1A2F5A",
    "secondaryColor": "#C8102E",
    "stadium": "Stadio Renato Dall'Ara",
    "city": "Bologna",
    "stadiumImage": "",
    "players": [
      {
        "name": "Francesco Antonioli",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Alex Brunner",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Michele Paramatti",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Stefano Torrisi",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Andrea Tarozzi",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Giuseppe Cardone",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Amedeo Mangone",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Cristiano Pavone",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Giancarlo Marocchi",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Cristiano Scapolo",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Oscar Magoni",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Marco de Marchi",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Carlo Nervo",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Davide Fontolan",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Kennet Andersson",
        "position": "AV",
        "nationality": "SWE"
      },
      {
        "name": "Igor Kolyvanov",
        "position": "AV",
        "nationality": "RUS"
      },
      {
        "name": "Igor Shalimov",
        "position": "AV",
        "nationality": "RUS"
      },
      {
        "name": "Pierpaolo Bresciani",
        "position": "AV",
        "nationality": "ITA"
      }
    ]
  },
  {
    "id": 79,
    "name": "Genoa",
    "country": "ITA",
    "rating": 71,
    "badge": "/assets/badges/genoa.png",
    "primaryColor": "#C8102E",
    "secondaryColor": "#1B3A5B",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Gianluca Berti",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Mario Ielpo",
        "position": "GR",
        "nationality": "ITA"
      },
      {
        "name": "Silvio Vottorio Giampietro",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Felice Centofanti",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Davide Nicola",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Vincenzo Torrente",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Fabio Rossi",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Gianluca Francesconi",
        "position": "DEF",
        "nationality": "ITA"
      },
      {
        "name": "Mario Bortolazzi",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Filippo Masolini",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Luca Cavallo",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Gennaro Ruotolo",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Cristiano Scazzola",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Pier Giovanni Rutzittu",
        "position": "MED",
        "nationality": "ITA"
      },
      {
        "name": "Michaël Goossens",
        "position": "AV",
        "nationality": "BEL"
      },
      {
        "name": "Marco Nappi",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Dario Morello",
        "position": "AV",
        "nationality": "ITA"
      },
      {
        "name": "Luigi Beghetto",
        "position": "AV",
        "nationality": "ITA"
      }
    ]
  },
  {
    "id": 80,
    "name": "Real Zaragoza",
    "country": "ESP",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 81,
    "name": "Real Sociedad",
    "country": "ESP",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 82,
    "name": "Villarreal",
    "country": "ESP",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 83,
    "name": "Real Betis",
    "country": "ESP",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 84,
    "name": "Real Valladolid",
    "country": "ESP",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 85,
    "name": "Tenerife",
    "country": "ESP",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Andoni Zubizarreta",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Santiago Cañizares",
        "position": "GR",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Abelardo Fernández",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Rafael Alkorta",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Albert Ferrer",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Sergi Barjuán",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Miguel Ángel Nadal",
        "position": "DEF",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Luis Enrique",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Gaizka Mendieta",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "José María Bakero",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Juan Carlos Valerón",
        "position": "MED",
        "nationality": "ESP"
      },
      {
        "name": "Raúl",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Fernando Morientes",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Ronaldo Nazário",
        "position": "AV",
        "nationality": "ESP"
      },
      {
        "name": "Pep Guardiola",
        "position": "AV",
        "nationality": "ESP"
      }
    ]
  },
  {
    "id": 86,
    "name": "Montpellier",
    "country": "FRA",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Fabien Barthez",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Bernard Lama",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Laurent Blanc",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Lilian Thuram",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Bixente Lizarazu",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Frank Leboeuf",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Eric Di Meco",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Zinédine Zidane",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Emmanuel Petit",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Youri Djorkaeff",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Robert Pirès",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Christian Karembeu",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Eric Cantona",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "David Trezeguet",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Jean-Pierre Papin",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "AV",
        "nationality": "FRA"
      }
    ]
  },
  {
    "id": 87,
    "name": "Saint-Étienne",
    "country": "FRA",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Fabien Barthez",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Bernard Lama",
        "position": "GR",
        "nationality": "FRA"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Laurent Blanc",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Lilian Thuram",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Bixente Lizarazu",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Frank Leboeuf",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Eric Di Meco",
        "position": "DEF",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Zinédine Zidane",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Emmanuel Petit",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Youri Djorkaeff",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Robert Pirès",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Christian Karembeu",
        "position": "MED",
        "nationality": "FRA"
      },
      {
        "name": "Eric Cantona",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "David Trezeguet",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Jean-Pierre Papin",
        "position": "AV",
        "nationality": "FRA"
      },
      {
        "name": "Didier Deschamps",
        "position": "AV",
        "nationality": "FRA"
      }
    ]
  },
  {
    "id": 88,
    "name": "Grasshopper",
    "country": "SUI",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "SUI"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "SUI"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "SUI"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "SUI"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "SUI"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "SUI"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "SUI"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "SUI"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "SUI"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "SUI"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "SUI"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "SUI"
      }
    ]
  },
  {
    "id": 89,
    "name": "FC Basel",
    "country": "SUI",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "SUI"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "SUI"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "SUI"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "SUI"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "SUI"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "SUI"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "SUI"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "SUI"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "SUI"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "SUI"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "SUI"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "SUI"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "SUI"
      }
    ]
  },
  {
    "id": 90,
    "name": "Austria Wien",
    "country": "AUT",
    "rating": 66,
    "badge": "/assets/badges/austria-wien.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "AUT"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "AUT"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "AUT"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "AUT"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "AUT"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "AUT"
      }
    ]
  },
  {
    "id": 91,
    "name": "Rapid Wien",
    "country": "AUT",
    "rating": 64,
    "badge": "/assets/badges/rapid.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "AUT"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "AUT"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "AUT"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "AUT"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "AUT"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "AUT"
      }
    ]
  },
  {
    "id": 92,
    "name": "Salzburg",
    "country": "AUT",
    "rating": 69,
    "badge": "/assets/badges/salzb.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "AUT"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "AUT"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "AUT"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "AUT"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "AUT"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "AUT"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "AUT"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "AUT"
      }
    ]
  },
  {
    "id": 93,
    "name": "CSKA Sofia",
    "country": "BUL",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "BUL"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "BUL"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "BUL"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "BUL"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "BUL"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BUL"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "BUL"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "BUL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "BUL"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "BUL"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "BUL"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "BUL"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BUL"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "BUL"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BUL"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BUL"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "BUL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "BUL"
      }
    ]
  },
  {
    "id": 94,
    "name": "Levski Sofia",
    "country": "BUL",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "BUL"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "BUL"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "BUL"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "BUL"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "BUL"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BUL"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "BUL"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "BUL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "BUL"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "BUL"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "BUL"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "BUL"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BUL"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "BUL"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BUL"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BUL"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "BUL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "BUL"
      }
    ]
  },
  {
    "id": 95,
    "name": "PAOK",
    "country": "GRE",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "GRE"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "GRE"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "GRE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "GRE"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "GRE"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "GRE"
      }
    ]
  },
  {
    "id": 96,
    "name": "Maccabi Haifa",
    "country": "ISR",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ISR"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "ISR"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "ISR"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ISR"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "ISR"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "ISR"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ISR"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "ISR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "ISR"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "ISR"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "ISR"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "ISR"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "ISR"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ISR"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "ISR"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "ISR"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ISR"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "ISR"
      }
    ]
  },
  {
    "id": 97,
    "name": "Dinamo Tbilisi",
    "country": "GEO",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "GEO"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "GEO"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "GEO"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "GEO"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "GEO"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "GEO"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "GEO"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "GEO"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "GEO"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "GEO"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "GEO"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "GEO"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "GEO"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "GEO"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "GEO"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "GEO"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "GEO"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "GEO"
      }
    ]
  },
  {
    "id": 98,
    "name": "Vitesse",
    "country": "NED",
    "rating": 82,
    "badge": "/assets/badges/vitesse.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Edwin van der Sar",
        "position": "GR",
        "nationality": "NED"
      },
      {
        "name": "Hans van Breukelen",
        "position": "GR",
        "nationality": "NED"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Ronald Koeman",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Jaap Stam",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Michael Reiziger",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Danny Blind",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Winston Bogarde",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Frank Rijkaard",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Edgar Davids",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Marc Overmars",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Ronald de Boer",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Richard Witschge",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Dennis Bergkamp",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Patrick Kluivert",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Ruud van Nistelrooy",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Frank Rijkaard",
        "position": "AV",
        "nationality": "NED"
      }
    ]
  },
  {
    "id": 99,
    "name": "Twente",
    "country": "NED",
    "rating": 82,
    "badge": "/assets/badges/twente.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Edwin van der Sar",
        "position": "GR",
        "nationality": "NED"
      },
      {
        "name": "Hans van Breukelen",
        "position": "GR",
        "nationality": "NED"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Ronald Koeman",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Jaap Stam",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Michael Reiziger",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Danny Blind",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Winston Bogarde",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Frank Rijkaard",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Edgar Davids",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Marc Overmars",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Ronald de Boer",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Richard Witschge",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Dennis Bergkamp",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Patrick Kluivert",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Ruud van Nistelrooy",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Frank Rijkaard",
        "position": "AV",
        "nationality": "NED"
      }
    ]
  },
  {
    "id": 100,
    "name": "Heerenveen",
    "country": "NED",
    "rating": 82,
    "badge": "/assets/badges/Heerenveen.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Edwin van der Sar",
        "position": "GR",
        "nationality": "NED"
      },
      {
        "name": "Hans van Breukelen",
        "position": "GR",
        "nationality": "NED"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Ronald Koeman",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Jaap Stam",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Michael Reiziger",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Danny Blind",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Winston Bogarde",
        "position": "DEF",
        "nationality": "NED"
      },
      {
        "name": "Frank Rijkaard",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Edgar Davids",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Marc Overmars",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Ronald de Boer",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Richard Witschge",
        "position": "MED",
        "nationality": "NED"
      },
      {
        "name": "Dennis Bergkamp",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Patrick Kluivert",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Ruud van Nistelrooy",
        "position": "AV",
        "nationality": "NED"
      },
      {
        "name": "Frank Rijkaard",
        "position": "AV",
        "nationality": "NED"
      }
    ]
  },
  {
    "id": 101,
    "name": "São Paulo",
    "country": "BRA",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#E30613",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 102,
    "name": "Palmeiras",
    "country": "BRA",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#006437",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 103,
    "name": "Corinthians",
    "country": "BRA",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 104,
    "name": "Santos",
    "country": "BRA",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 105,
    "name": "Flamengo",
    "country": "BRA",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#C52613",
    "secondaryColor": "#111111",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 106,
    "name": "Vasco da Gama",
    "country": "BRA",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 107,
    "name": "Grêmio",
    "country": "BRA",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 108,
    "name": "Internacional",
    "country": "BRA",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 109,
    "name": "Cruzeiro",
    "country": "BRA",
    "rating": 89,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 110,
    "name": "Atlético Mineiro",
    "country": "BRA",
    "rating": 88,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 111,
    "name": "Botafogo",
    "country": "BRA",
    "rating": 88,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 112,
    "name": "Fluminense",
    "country": "BRA",
    "rating": 88,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 113,
    "name": "Vélez Sarsfield",
    "country": "ARG",
    "rating": 88,
    "badge": "/assets/badges/velez.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Goycochea",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "Carlos Roa",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "José Chamot",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Javier Zanetti",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Oscar Ruggeri",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Néstor Sensini",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Cáceres",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Ariel Ortega",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Sebastián Verón",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Marcelo Gallardo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Román Riquelme",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Hernán Crespo",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Claudio López",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "AV",
        "nationality": "ARG"
      }
    ]
  },
  {
    "id": 114,
    "name": "River Plate",
    "country": "ARG",
    "rating": 88,
    "badge": "/assets/badges/river.png",
    "primaryColor": "#FFFFFF",
    "secondaryColor": "#E31B23",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Goycochea",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "Carlos Roa",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "José Chamot",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Javier Zanetti",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Oscar Ruggeri",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Néstor Sensini",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Cáceres",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Ariel Ortega",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Sebastián Verón",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Marcelo Gallardo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Román Riquelme",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Hernán Crespo",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Claudio López",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "AV",
        "nationality": "ARG"
      }
    ]
  },
  {
    "id": 115,
    "name": "Boca Juniors",
    "country": "ARG",
    "rating": 88,
    "badge": "/assets/badges/boca.png",
    "primaryColor": "#003B7A",
    "secondaryColor": "#F6C400",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Goycochea",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "Carlos Roa",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "José Chamot",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Javier Zanetti",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Oscar Ruggeri",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Néstor Sensini",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Cáceres",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Ariel Ortega",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Sebastián Verón",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Marcelo Gallardo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Román Riquelme",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Hernán Crespo",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Claudio López",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "AV",
        "nationality": "ARG"
      }
    ]
  },
  {
    "id": 116,
    "name": "Independiente",
    "country": "ARG",
    "rating": 88,
    "badge": "/assets/badges/indep.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Goycochea",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "Carlos Roa",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "José Chamot",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Javier Zanetti",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Oscar Ruggeri",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Néstor Sensini",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Cáceres",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Ariel Ortega",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Sebastián Verón",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Marcelo Gallardo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Román Riquelme",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Hernán Crespo",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Claudio López",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "AV",
        "nationality": "ARG"
      }
    ]
  },
  {
    "id": 117,
    "name": "Racing Club",
    "country": "ARG",
    "rating": 88,
    "badge": "/assets/badges/racing.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Goycochea",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "Carlos Roa",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "José Chamot",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Javier Zanetti",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Oscar Ruggeri",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Néstor Sensini",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Cáceres",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Ariel Ortega",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Sebastián Verón",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Marcelo Gallardo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Román Riquelme",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Hernán Crespo",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Claudio López",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "AV",
        "nationality": "ARG"
      }
    ]
  },
  {
    "id": 118,
    "name": "San Lorenzo",
    "country": "ARG",
    "rating": 88,
    "badge": "/assets/badges/SL.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Goycochea",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "Carlos Roa",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "José Chamot",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Javier Zanetti",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Oscar Ruggeri",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Néstor Sensini",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Cáceres",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Ariel Ortega",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Sebastián Verón",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Marcelo Gallardo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Román Riquelme",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Hernán Crespo",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Claudio López",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "AV",
        "nationality": "ARG"
      }
    ]
  },
  {
    "id": 119,
    "name": "Rosario Central",
    "country": "ARG",
    "rating": 88,
    "badge": "/assets/badges/rosario.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Goycochea",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "Carlos Roa",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "José Chamot",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Javier Zanetti",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Oscar Ruggeri",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Néstor Sensini",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Cáceres",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Ariel Ortega",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Sebastián Verón",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Marcelo Gallardo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Román Riquelme",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Hernán Crespo",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Claudio López",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "AV",
        "nationality": "ARG"
      }
    ]
  },
  {
    "id": 120,
    "name": "Newell's Old Boys",
    "country": "ARG",
    "rating": 87,
    "badge": "/assets/badges/NOB.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Goycochea",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "Carlos Roa",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "José Chamot",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Javier Zanetti",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Oscar Ruggeri",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Néstor Sensini",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Cáceres",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Ariel Ortega",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Sebastián Verón",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Marcelo Gallardo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Román Riquelme",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Hernán Crespo",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Claudio López",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "AV",
        "nationality": "ARG"
      }
    ]
  },
  {
    "id": 121,
    "name": "Estudiantes",
    "country": "ARG",
    "rating": 87,
    "badge": "/assets/badges/estudiantes.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Goycochea",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "Carlos Roa",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "José Chamot",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Javier Zanetti",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Oscar Ruggeri",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Néstor Sensini",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Cáceres",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Ariel Ortega",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Sebastián Verón",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Marcelo Gallardo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Román Riquelme",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Hernán Crespo",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Claudio López",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "AV",
        "nationality": "ARG"
      }
    ]
  },
  {
    "id": 122,
    "name": "Gimnasia La Plata",
    "country": "ARG",
    "rating": 87,
    "badge": "/assets/badges/gimnLP.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Goycochea",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "Carlos Roa",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "José Chamot",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Javier Zanetti",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Oscar Ruggeri",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Néstor Sensini",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Cáceres",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Ariel Ortega",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Sebastián Verón",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Marcelo Gallardo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Román Riquelme",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Hernán Crespo",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Claudio López",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "AV",
        "nationality": "ARG"
      }
    ]
  },
  {
    "id": 123,
    "name": "Lanús",
    "country": "ARG",
    "rating": 87,
    "badge": "/assets/badges/lanus.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Goycochea",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "Carlos Roa",
        "position": "GR",
        "nationality": "ARG"
      },
      {
        "name": "José Chamot",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Javier Zanetti",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Oscar Ruggeri",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Néstor Sensini",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Cáceres",
        "position": "DEF",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Ariel Ortega",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Sebastián Verón",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Marcelo Gallardo",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Juan Román Riquelme",
        "position": "MED",
        "nationality": "ARG"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Hernán Crespo",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Claudio López",
        "position": "AV",
        "nationality": "ARG"
      },
      {
        "name": "Diego Simeone",
        "position": "AV",
        "nationality": "ARG"
      }
    ]
  },
  {
    "id": 124,
    "name": "Colo-Colo",
    "country": "CHI",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Vargas",
        "position": "GR",
        "nationality": "CHI"
      },
      {
        "name": "Nelson Tapia",
        "position": "GR",
        "nationality": "CHI"
      },
      {
        "name": "Ronald Fuentes",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Javier Margas",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Mauricio Aros",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Pedro Reyes",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Nelson Garrido",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Moisés Villarroel",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "José Luis Sierra",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Fabián Estay",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Rodrigo Barrera",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "David Pizarro",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Claudio Núñez",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Marcelo Salas",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Iván Zamorano",
        "position": "AV",
        "nationality": "CHI"
      },
      {
        "name": "Marcelo Salas",
        "position": "AV",
        "nationality": "CHI"
      },
      {
        "name": "Patricio Yáñez",
        "position": "AV",
        "nationality": "CHI"
      },
      {
        "name": "José Luis Sierra",
        "position": "AV",
        "nationality": "CHI"
      }
    ]
  },
  {
    "id": 125,
    "name": "Universidad de Chile",
    "country": "CHI",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Vargas",
        "position": "GR",
        "nationality": "CHI"
      },
      {
        "name": "Nelson Tapia",
        "position": "GR",
        "nationality": "CHI"
      },
      {
        "name": "Ronald Fuentes",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Javier Margas",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Mauricio Aros",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Pedro Reyes",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Nelson Garrido",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Moisés Villarroel",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "José Luis Sierra",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Fabián Estay",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Rodrigo Barrera",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "David Pizarro",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Claudio Núñez",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Marcelo Salas",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Iván Zamorano",
        "position": "AV",
        "nationality": "CHI"
      },
      {
        "name": "Marcelo Salas",
        "position": "AV",
        "nationality": "CHI"
      },
      {
        "name": "Patricio Yáñez",
        "position": "AV",
        "nationality": "CHI"
      },
      {
        "name": "José Luis Sierra",
        "position": "AV",
        "nationality": "CHI"
      }
    ]
  },
  {
    "id": 126,
    "name": "Universidad Católica",
    "country": "CHI",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Vargas",
        "position": "GR",
        "nationality": "CHI"
      },
      {
        "name": "Nelson Tapia",
        "position": "GR",
        "nationality": "CHI"
      },
      {
        "name": "Ronald Fuentes",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Javier Margas",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Mauricio Aros",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Pedro Reyes",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Nelson Garrido",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Moisés Villarroel",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "José Luis Sierra",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Fabián Estay",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Rodrigo Barrera",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "David Pizarro",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Claudio Núñez",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Marcelo Salas",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Iván Zamorano",
        "position": "AV",
        "nationality": "CHI"
      },
      {
        "name": "Marcelo Salas",
        "position": "AV",
        "nationality": "CHI"
      },
      {
        "name": "Patricio Yáñez",
        "position": "AV",
        "nationality": "CHI"
      },
      {
        "name": "José Luis Sierra",
        "position": "AV",
        "nationality": "CHI"
      }
    ]
  },
  {
    "id": 127,
    "name": "Peñarol",
    "country": "URU",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#FFD700",
    "secondaryColor": "#111111",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jorge Seré",
        "position": "GR",
        "nationality": "URU"
      },
      {
        "name": "Fernando Álvez",
        "position": "GR",
        "nationality": "URU"
      },
      {
        "name": "Hugo de León",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Paolo Montero",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Nelson Gutiérrez",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Gustavo Méndez",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "José Perdomo",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Alejandro Lembo",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Enzo Francescoli",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Rubén Sosa",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Gustavo Poyet",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Pablo Bengoechea",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Álvaro Recoba",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Daniel Fonseca",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Sebastián Abreu",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Marcelo Zalayeta",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Ruben Sosa",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Antonio Pacheco",
        "position": "AV",
        "nationality": "URU"
      }
    ]
  },
  {
    "id": 128,
    "name": "Nacional",
    "country": "URU",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#0B3D91",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jorge Seré",
        "position": "GR",
        "nationality": "URU"
      },
      {
        "name": "Fernando Álvez",
        "position": "GR",
        "nationality": "URU"
      },
      {
        "name": "Hugo de León",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Paolo Montero",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Nelson Gutiérrez",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Gustavo Méndez",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "José Perdomo",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Alejandro Lembo",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Enzo Francescoli",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Rubén Sosa",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Gustavo Poyet",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Pablo Bengoechea",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Álvaro Recoba",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Daniel Fonseca",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Sebastián Abreu",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Marcelo Zalayeta",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Ruben Sosa",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Antonio Pacheco",
        "position": "AV",
        "nationality": "URU"
      }
    ]
  },
  {
    "id": 129,
    "name": "Danubio",
    "country": "URU",
    "rating": 87,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jorge Seré",
        "position": "GR",
        "nationality": "URU"
      },
      {
        "name": "Fernando Álvez",
        "position": "GR",
        "nationality": "URU"
      },
      {
        "name": "Hugo de León",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Paolo Montero",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Nelson Gutiérrez",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Gustavo Méndez",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "José Perdomo",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Alejandro Lembo",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Enzo Francescoli",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Rubén Sosa",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Gustavo Poyet",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Pablo Bengoechea",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Álvaro Recoba",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Daniel Fonseca",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Sebastián Abreu",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Marcelo Zalayeta",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Ruben Sosa",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Antonio Pacheco",
        "position": "AV",
        "nationality": "URU"
      }
    ]
  },
  {
    "id": 130,
    "name": "Defensor Sporting",
    "country": "URU",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jorge Seré",
        "position": "GR",
        "nationality": "URU"
      },
      {
        "name": "Fernando Álvez",
        "position": "GR",
        "nationality": "URU"
      },
      {
        "name": "Hugo de León",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Paolo Montero",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Nelson Gutiérrez",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Gustavo Méndez",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "José Perdomo",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Alejandro Lembo",
        "position": "DEF",
        "nationality": "URU"
      },
      {
        "name": "Enzo Francescoli",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Rubén Sosa",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Gustavo Poyet",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Pablo Bengoechea",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Álvaro Recoba",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Daniel Fonseca",
        "position": "MED",
        "nationality": "URU"
      },
      {
        "name": "Sebastián Abreu",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Marcelo Zalayeta",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Ruben Sosa",
        "position": "AV",
        "nationality": "URU"
      },
      {
        "name": "Antonio Pacheco",
        "position": "AV",
        "nationality": "URU"
      }
    ]
  },
  {
    "id": 131,
    "name": "Olimpia",
    "country": "PAR",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "José Luis Chilavert",
        "position": "GR",
        "nationality": "PAR"
      },
      {
        "name": "José Luis Félix Chilavert",
        "position": "GR",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Gamarra",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Francisco Arce",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Celso Ayala",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Catalino Rivarola",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Pedro Sarabia",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Enciso",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Roberto Acuña",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "José Cardozo",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Julio César Enciso",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Gabriel González",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Humberto Paredes",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Francisco Arce",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "José Cardozo",
        "position": "AV",
        "nationality": "PAR"
      },
      {
        "name": "Raúl Vicente Amarilla",
        "position": "AV",
        "nationality": "PAR"
      },
      {
        "name": "Gabriel González",
        "position": "AV",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Gamarra",
        "position": "AV",
        "nationality": "PAR"
      }
    ]
  },
  {
    "id": 132,
    "name": "Cerro Porteño",
    "country": "PAR",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "José Luis Chilavert",
        "position": "GR",
        "nationality": "PAR"
      },
      {
        "name": "José Luis Félix Chilavert",
        "position": "GR",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Gamarra",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Francisco Arce",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Celso Ayala",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Catalino Rivarola",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Pedro Sarabia",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Enciso",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Roberto Acuña",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "José Cardozo",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Julio César Enciso",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Gabriel González",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Humberto Paredes",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Francisco Arce",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "José Cardozo",
        "position": "AV",
        "nationality": "PAR"
      },
      {
        "name": "Raúl Vicente Amarilla",
        "position": "AV",
        "nationality": "PAR"
      },
      {
        "name": "Gabriel González",
        "position": "AV",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Gamarra",
        "position": "AV",
        "nationality": "PAR"
      }
    ]
  },
  {
    "id": 133,
    "name": "Libertad",
    "country": "PAR",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "José Luis Chilavert",
        "position": "GR",
        "nationality": "PAR"
      },
      {
        "name": "José Luis Félix Chilavert",
        "position": "GR",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Gamarra",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Francisco Arce",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Celso Ayala",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Catalino Rivarola",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Pedro Sarabia",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Enciso",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Roberto Acuña",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "José Cardozo",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Julio César Enciso",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Gabriel González",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Humberto Paredes",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Francisco Arce",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "José Cardozo",
        "position": "AV",
        "nationality": "PAR"
      },
      {
        "name": "Raúl Vicente Amarilla",
        "position": "AV",
        "nationality": "PAR"
      },
      {
        "name": "Gabriel González",
        "position": "AV",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Gamarra",
        "position": "AV",
        "nationality": "PAR"
      }
    ]
  },
  {
    "id": 134,
    "name": "Guaraní",
    "country": "PAR",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "José Luis Chilavert",
        "position": "GR",
        "nationality": "PAR"
      },
      {
        "name": "José Luis Félix Chilavert",
        "position": "GR",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Gamarra",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Francisco Arce",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Celso Ayala",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Catalino Rivarola",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Pedro Sarabia",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Enciso",
        "position": "DEF",
        "nationality": "PAR"
      },
      {
        "name": "Roberto Acuña",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "José Cardozo",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Julio César Enciso",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Gabriel González",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Humberto Paredes",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "Francisco Arce",
        "position": "MED",
        "nationality": "PAR"
      },
      {
        "name": "José Cardozo",
        "position": "AV",
        "nationality": "PAR"
      },
      {
        "name": "Raúl Vicente Amarilla",
        "position": "AV",
        "nationality": "PAR"
      },
      {
        "name": "Gabriel González",
        "position": "AV",
        "nationality": "PAR"
      },
      {
        "name": "Carlos Gamarra",
        "position": "AV",
        "nationality": "PAR"
      }
    ]
  },
  {
    "id": 135,
    "name": "Emelec",
    "country": "ECU",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ECU"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "ECU"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "ECU"
      }
    ]
  },
  {
    "id": 136,
    "name": "Barcelona SC",
    "country": "ECU",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ECU"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "ECU"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "ECU"
      }
    ]
  },
  {
    "id": 137,
    "name": "LDU Quito",
    "country": "ECU",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ECU"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "ECU"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "ECU"
      }
    ]
  },
  {
    "id": 138,
    "name": "Deportivo Cali",
    "country": "COL",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "René Higuita",
        "position": "GR",
        "nationality": "COL"
      },
      {
        "name": "Óscar Córdoba",
        "position": "GR",
        "nationality": "COL"
      },
      {
        "name": "Andrés Escobar",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Luis Carlos Perea",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Iván Córdoba",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Mario Yepes",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Alexis Mendoza",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Wilson Pérez",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Carlos Valderrama",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Freddy Rincón",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Faustino Asprilla",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Adolfo Valencia",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Víctor Aristizábal",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Wilmer Cabrera",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Faustino Asprilla",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Adolfo Valencia",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Víctor Aristizábal",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Carlos Valderrama",
        "position": "AV",
        "nationality": "COL"
      }
    ]
  },
  {
    "id": 139,
    "name": "América de Cali",
    "country": "COL",
    "rating": 86,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "René Higuita",
        "position": "GR",
        "nationality": "COL"
      },
      {
        "name": "Óscar Córdoba",
        "position": "GR",
        "nationality": "COL"
      },
      {
        "name": "Andrés Escobar",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Luis Carlos Perea",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Iván Córdoba",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Mario Yepes",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Alexis Mendoza",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Wilson Pérez",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Carlos Valderrama",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Freddy Rincón",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Faustino Asprilla",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Adolfo Valencia",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Víctor Aristizábal",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Wilmer Cabrera",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Faustino Asprilla",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Adolfo Valencia",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Víctor Aristizábal",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Carlos Valderrama",
        "position": "AV",
        "nationality": "COL"
      }
    ]
  },
  {
    "id": 140,
    "name": "Atlético Nacional",
    "country": "COL",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "René Higuita",
        "position": "GR",
        "nationality": "COL"
      },
      {
        "name": "Óscar Córdoba",
        "position": "GR",
        "nationality": "COL"
      },
      {
        "name": "Andrés Escobar",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Luis Carlos Perea",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Iván Córdoba",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Mario Yepes",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Alexis Mendoza",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Wilson Pérez",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Carlos Valderrama",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Freddy Rincón",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Faustino Asprilla",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Adolfo Valencia",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Víctor Aristizábal",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Wilmer Cabrera",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Faustino Asprilla",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Adolfo Valencia",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Víctor Aristizábal",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Carlos Valderrama",
        "position": "AV",
        "nationality": "COL"
      }
    ]
  },
  {
    "id": 141,
    "name": "Millonarios",
    "country": "COL",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "René Higuita",
        "position": "GR",
        "nationality": "COL"
      },
      {
        "name": "Óscar Córdoba",
        "position": "GR",
        "nationality": "COL"
      },
      {
        "name": "Andrés Escobar",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Luis Carlos Perea",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Iván Córdoba",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Mario Yepes",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Alexis Mendoza",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Wilson Pérez",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Carlos Valderrama",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Freddy Rincón",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Faustino Asprilla",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Adolfo Valencia",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Víctor Aristizábal",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Wilmer Cabrera",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Faustino Asprilla",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Adolfo Valencia",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Víctor Aristizábal",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Carlos Valderrama",
        "position": "AV",
        "nationality": "COL"
      }
    ]
  },
  {
    "id": 142,
    "name": "Once Caldas",
    "country": "COL",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "René Higuita",
        "position": "GR",
        "nationality": "COL"
      },
      {
        "name": "Óscar Córdoba",
        "position": "GR",
        "nationality": "COL"
      },
      {
        "name": "Andrés Escobar",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Luis Carlos Perea",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Iván Córdoba",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Mario Yepes",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Alexis Mendoza",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Wilson Pérez",
        "position": "DEF",
        "nationality": "COL"
      },
      {
        "name": "Carlos Valderrama",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Freddy Rincón",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Faustino Asprilla",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Adolfo Valencia",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Víctor Aristizábal",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Wilmer Cabrera",
        "position": "MED",
        "nationality": "COL"
      },
      {
        "name": "Faustino Asprilla",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Adolfo Valencia",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Víctor Aristizábal",
        "position": "AV",
        "nationality": "COL"
      },
      {
        "name": "Carlos Valderrama",
        "position": "AV",
        "nationality": "COL"
      }
    ]
  },
  {
    "id": 143,
    "name": "Universitario",
    "country": "PER",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "PER"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "PER"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "PER"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "PER"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "PER"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "PER"
      }
    ]
  },
  {
    "id": 144,
    "name": "Alianza Lima",
    "country": "PER",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "PER"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "PER"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "PER"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "PER"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "PER"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "PER"
      }
    ]
  },
  {
    "id": 145,
    "name": "Sporting Cristal",
    "country": "PER",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "PER"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "PER"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "PER"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "PER"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "PER"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "PER"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "PER"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "PER"
      }
    ]
  },
  {
    "id": 146,
    "name": "Cobreloa",
    "country": "CHI",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Sergio Vargas",
        "position": "GR",
        "nationality": "CHI"
      },
      {
        "name": "Nelson Tapia",
        "position": "GR",
        "nationality": "CHI"
      },
      {
        "name": "Ronald Fuentes",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Javier Margas",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Mauricio Aros",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Pedro Reyes",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Nelson Garrido",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "Moisés Villarroel",
        "position": "DEF",
        "nationality": "CHI"
      },
      {
        "name": "José Luis Sierra",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Fabián Estay",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Rodrigo Barrera",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "David Pizarro",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Claudio Núñez",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Marcelo Salas",
        "position": "MED",
        "nationality": "CHI"
      },
      {
        "name": "Iván Zamorano",
        "position": "AV",
        "nationality": "CHI"
      },
      {
        "name": "Marcelo Salas",
        "position": "AV",
        "nationality": "CHI"
      },
      {
        "name": "Patricio Yáñez",
        "position": "AV",
        "nationality": "CHI"
      },
      {
        "name": "José Luis Sierra",
        "position": "AV",
        "nationality": "CHI"
      }
    ]
  },
  {
    "id": 147,
    "name": "Bolívar",
    "country": "BOL",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "BOL"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "BOL"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "BOL"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "BOL"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "BOL"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BOL"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "BOL"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "BOL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "BOL"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "BOL"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "BOL"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "BOL"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BOL"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "BOL"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BOL"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BOL"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "BOL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "BOL"
      }
    ]
  },
  {
    "id": 148,
    "name": "The Strongest",
    "country": "BOL",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "BOL"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "BOL"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "BOL"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "BOL"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "BOL"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BOL"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "BOL"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "BOL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "BOL"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "BOL"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "BOL"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "BOL"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BOL"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "BOL"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BOL"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BOL"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "BOL"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "BOL"
      }
    ]
  },
  {
    "id": 149,
    "name": "Independiente del Valle",
    "country": "ECU",
    "rating": 85,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ECU"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "ECU"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "ECU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ECU"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ECU"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "ECU"
      }
    ]
  },
  {
    "id": 150,
    "name": "Portuguesa",
    "country": "BRA",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Cláudio Taffarel",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Zetti",
        "position": "GR",
        "nationality": "BRA"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Cafu",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Roberto Carlos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Júnior Baiano",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Branco",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Márcio Santos",
        "position": "DEF",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Mazinho",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Leonardo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Raí",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Juninho Paulista",
        "position": "MED",
        "nationality": "BRA"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Bebeto",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "BRA"
      },
      {
        "name": "Dunga",
        "position": "AV",
        "nationality": "BRA"
      }
    ]
  },
  {
    "id": 151,
    "name": "Al Ahly",
    "country": "EGY",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#D71920",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Ahmed Shobair",
        "position": "GR",
        "nationality": "EGY"
      },
      {
        "name": "Nader El-Sayed",
        "position": "GR",
        "nationality": "EGY"
      },
      {
        "name": "Hany Ramzy",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Hany Mostafa",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Rabi Yassin",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Ibrahim Hassan",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Wael Gomaa",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Samir Kamouna",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Hossam Hassan",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Reda Abdel Aal",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Hazem Emam",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Hany Said",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Mohamed Youssef",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Hassan Hamdy",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Hossam Hassan",
        "position": "AV",
        "nationality": "EGY"
      },
      {
        "name": "Ahmed Belal",
        "position": "AV",
        "nationality": "EGY"
      },
      {
        "name": "Ayman Mansour",
        "position": "AV",
        "nationality": "EGY"
      },
      {
        "name": "Ahmed Hassan",
        "position": "AV",
        "nationality": "EGY"
      }
    ]
  },
  {
    "id": 152,
    "name": "Zamalek",
    "country": "EGY",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#FFFFFF",
    "secondaryColor": "#C8102E",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Ahmed Shobair",
        "position": "GR",
        "nationality": "EGY"
      },
      {
        "name": "Nader El-Sayed",
        "position": "GR",
        "nationality": "EGY"
      },
      {
        "name": "Hany Ramzy",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Hany Mostafa",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Rabi Yassin",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Ibrahim Hassan",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Wael Gomaa",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Samir Kamouna",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Hossam Hassan",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Reda Abdel Aal",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Hazem Emam",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Hany Said",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Mohamed Youssef",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Hassan Hamdy",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Hossam Hassan",
        "position": "AV",
        "nationality": "EGY"
      },
      {
        "name": "Ahmed Belal",
        "position": "AV",
        "nationality": "EGY"
      },
      {
        "name": "Ayman Mansour",
        "position": "AV",
        "nationality": "EGY"
      },
      {
        "name": "Ahmed Hassan",
        "position": "AV",
        "nationality": "EGY"
      }
    ]
  },
  {
    "id": 153,
    "name": "Ismaily",
    "country": "EGY",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Ahmed Shobair",
        "position": "GR",
        "nationality": "EGY"
      },
      {
        "name": "Nader El-Sayed",
        "position": "GR",
        "nationality": "EGY"
      },
      {
        "name": "Hany Ramzy",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Hany Mostafa",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Rabi Yassin",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Ibrahim Hassan",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Wael Gomaa",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Samir Kamouna",
        "position": "DEF",
        "nationality": "EGY"
      },
      {
        "name": "Hossam Hassan",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Reda Abdel Aal",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Hazem Emam",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Hany Said",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Mohamed Youssef",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Hassan Hamdy",
        "position": "MED",
        "nationality": "EGY"
      },
      {
        "name": "Hossam Hassan",
        "position": "AV",
        "nationality": "EGY"
      },
      {
        "name": "Ahmed Belal",
        "position": "AV",
        "nationality": "EGY"
      },
      {
        "name": "Ayman Mansour",
        "position": "AV",
        "nationality": "EGY"
      },
      {
        "name": "Ahmed Hassan",
        "position": "AV",
        "nationality": "EGY"
      }
    ]
  },
  {
    "id": 154,
    "name": "Club Africain",
    "country": "TUN",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Chokri El-Ouaer",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Sadok Sassi",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Radhi Jaïdi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Tarek Thabet",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Hédi Berkhissa",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Khaled Badra",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Zoubeir Beya",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Sami Trabelsi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Nabil Maâloul",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Hassen Gabsi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ziad Jaziri",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Adel Sellimi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Mehdi Ben Slimane",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Adel Chedly",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ziad Jaziri",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Adel Sellimi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Hassen Gabsi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Riadh Bouazizi",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
    "id": 155,
    "name": "Espérance de Tunis",
    "country": "TUN",
    "rating": 67,
    "badge": "/assets/badges/EST.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Chokri El-Ouaer",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Khaled Badra",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Radhi Jaïdi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Taoufik Hichri",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Tarek Thabet",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Bechir Sahbani",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Mourad Chebbi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Garba Lawal",
        "position": "MED",
        "nationality": "NGA"
      },
      {
        "name": "Hassen Gabsi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Hakim Nouira",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Sirajeddine Chihi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Marouane Bokri",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Maher Kanzari",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Kenneth Malitoli",
        "position": "AV",
        "nationality": "ZAM"
      },
      {
        "name": "Ayadi Hamrouni",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Sami Laroussi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Mohamed El Badraoui",
        "position": "AV",
        "nationality": "MAR"
      }
    ]
  },
  {
    "id": 156,
    "name": "Étoile du Sahel",
    "country": "TUN",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Chokri El-Ouaer",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Sadok Sassi",
        "position": "GR",
        "nationality": "TUN"
      },
      {
        "name": "Radhi Jaïdi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Tarek Thabet",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Hédi Berkhissa",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Khaled Badra",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Zoubeir Beya",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Sami Trabelsi",
        "position": "DEF",
        "nationality": "TUN"
      },
      {
        "name": "Nabil Maâloul",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Hassen Gabsi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ziad Jaziri",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Adel Sellimi",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Mehdi Ben Slimane",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Adel Chedly",
        "position": "MED",
        "nationality": "TUN"
      },
      {
        "name": "Ziad Jaziri",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Adel Sellimi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Hassen Gabsi",
        "position": "AV",
        "nationality": "TUN"
      },
      {
        "name": "Riadh Bouazizi",
        "position": "AV",
        "nationality": "TUN"
      }
    ]
  },
  {
    "id": 157,
    "name": "Raja Casablanca",
    "country": "MAR",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#00843D",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Badou Zaki",
        "position": "GR",
        "nationality": "MAR"
      },
      {
        "name": "Khalil Azmi",
        "position": "GR",
        "nationality": "MAR"
      },
      {
        "name": "Noureddine Naybet",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Abdelilah Saber",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Talal El-Karkouri",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Abdellatif Jrindou",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Lahcen Abrami",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Driss Benzekri",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Mustapha Hadji",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Rachid Daoudi",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Youssef Fertout",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Youssef Safri",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Noureddine Amrabat",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Abdeljalil Hadda",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Salaheddine Bassir",
        "position": "AV",
        "nationality": "MAR"
      },
      {
        "name": "Hassan Nader",
        "position": "AV",
        "nationality": "MAR"
      },
      {
        "name": "Youssef Fertout",
        "position": "AV",
        "nationality": "MAR"
      },
      {
        "name": "Hicham Zerouali",
        "position": "AV",
        "nationality": "MAR"
      }
    ]
  },
  {
    "id": 158,
    "name": "Wydad Casablanca",
    "country": "MAR",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#E30613",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Badou Zaki",
        "position": "GR",
        "nationality": "MAR"
      },
      {
        "name": "Khalil Azmi",
        "position": "GR",
        "nationality": "MAR"
      },
      {
        "name": "Noureddine Naybet",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Abdelilah Saber",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Talal El-Karkouri",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Abdellatif Jrindou",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Lahcen Abrami",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Driss Benzekri",
        "position": "DEF",
        "nationality": "MAR"
      },
      {
        "name": "Mustapha Hadji",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Rachid Daoudi",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Youssef Fertout",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Youssef Safri",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Noureddine Amrabat",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Abdeljalil Hadda",
        "position": "MED",
        "nationality": "MAR"
      },
      {
        "name": "Salaheddine Bassir",
        "position": "AV",
        "nationality": "MAR"
      },
      {
        "name": "Hassan Nader",
        "position": "AV",
        "nationality": "MAR"
      },
      {
        "name": "Youssef Fertout",
        "position": "AV",
        "nationality": "MAR"
      },
      {
        "name": "Hicham Zerouali",
        "position": "AV",
        "nationality": "MAR"
      }
    ]
  },
  {
    "id": 159,
    "name": "JS Kabylie",
    "country": "ALG",
    "rating": 84,
    "badge": "/assets/badges/jsk.png",
    "primaryColor": "#FFD700",
    "secondaryColor": "#00843D",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Mehdi Cerbah",
        "position": "GR",
        "nationality": "ALG"
      },
      {
        "name": "Lounès Gaouaoui",
        "position": "GR",
        "nationality": "ALG"
      },
      {
        "name": "Fodil Megharia",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Rachid Adghigh",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Djamel Menad",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Abdelhakim Serrar",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Moussa Saïb",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Kamel Djouad",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Rabah Madjer",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Lakhdar Belloumi",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Ali Benarbia",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Abdelhafid Tasfaout",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Kamel Kaci-Saïd",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Djamel Belmadi",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Rabah Madjer",
        "position": "AV",
        "nationality": "ALG"
      },
      {
        "name": "Djamel Menad",
        "position": "AV",
        "nationality": "ALG"
      },
      {
        "name": "Nacer Bouiche",
        "position": "AV",
        "nationality": "ALG"
      },
      {
        "name": "Chérif Oudjani",
        "position": "AV",
        "nationality": "ALG"
      }
    ]
  },
  {
    "id": 160,
    "name": "ES Sétif",
    "country": "ALG",
    "rating": 84,
    "badge": "/assets/badges/setif.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Mehdi Cerbah",
        "position": "GR",
        "nationality": "ALG"
      },
      {
        "name": "Lounès Gaouaoui",
        "position": "GR",
        "nationality": "ALG"
      },
      {
        "name": "Fodil Megharia",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Rachid Adghigh",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Djamel Menad",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Abdelhakim Serrar",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Moussa Saïb",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Kamel Djouad",
        "position": "DEF",
        "nationality": "ALG"
      },
      {
        "name": "Rabah Madjer",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Lakhdar Belloumi",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Ali Benarbia",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Abdelhafid Tasfaout",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Kamel Kaci-Saïd",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Djamel Belmadi",
        "position": "MED",
        "nationality": "ALG"
      },
      {
        "name": "Rabah Madjer",
        "position": "AV",
        "nationality": "ALG"
      },
      {
        "name": "Djamel Menad",
        "position": "AV",
        "nationality": "ALG"
      },
      {
        "name": "Nacer Bouiche",
        "position": "AV",
        "nationality": "ALG"
      },
      {
        "name": "Chérif Oudjani",
        "position": "AV",
        "nationality": "ALG"
      }
    ]
  },
  {
    "id": 161,
    "name": "ASEC Mimosas",
    "country": "CIV",
    "rating": 84,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Alain Gouaméné",
        "position": "GR",
        "nationality": "CIV"
      },
      {
        "name": "Gérard Gnanhouan",
        "position": "GR",
        "nationality": "CIV"
      },
      {
        "name": "Basile Aka Kouamé",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Abdoulaye Traoré",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Koffi N'Dri Romaric",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Souleymane Bamba",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Didier Zokora",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Adama Kéita",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Yaya Touré",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Bonaventure Kalou",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Joël Tiéhi",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Aruna Dindane",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Kader Keita",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Bakary Koné",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Ibrahima Bakayoko",
        "position": "AV",
        "nationality": "CIV"
      },
      {
        "name": "Ahmed Ouattara",
        "position": "AV",
        "nationality": "CIV"
      },
      {
        "name": "Abdoulaye Traoré",
        "position": "AV",
        "nationality": "CIV"
      },
      {
        "name": "Abdoulaye Traoré",
        "position": "AV",
        "nationality": "CIV"
      }
    ]
  },
  {
    "id": 162,
    "name": "Africa Sports",
    "country": "CIV",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Alain Gouaméné",
        "position": "GR",
        "nationality": "CIV"
      },
      {
        "name": "Gérard Gnanhouan",
        "position": "GR",
        "nationality": "CIV"
      },
      {
        "name": "Basile Aka Kouamé",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Abdoulaye Traoré",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Koffi N'Dri Romaric",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Souleymane Bamba",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Didier Zokora",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Adama Kéita",
        "position": "DEF",
        "nationality": "CIV"
      },
      {
        "name": "Yaya Touré",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Bonaventure Kalou",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Joël Tiéhi",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Aruna Dindane",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Kader Keita",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Bakary Koné",
        "position": "MED",
        "nationality": "CIV"
      },
      {
        "name": "Ibrahima Bakayoko",
        "position": "AV",
        "nationality": "CIV"
      },
      {
        "name": "Ahmed Ouattara",
        "position": "AV",
        "nationality": "CIV"
      },
      {
        "name": "Abdoulaye Traoré",
        "position": "AV",
        "nationality": "CIV"
      },
      {
        "name": "Abdoulaye Traoré",
        "position": "AV",
        "nationality": "CIV"
      }
    ]
  },
  {
    "id": 163,
    "name": "Asante Kotoko",
    "country": "GHA",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Richard Kingson",
        "position": "GR",
        "nationality": "GHA"
      },
      {
        "name": "Abukari Damba",
        "position": "GR",
        "nationality": "GHA"
      },
      {
        "name": "Samuel Kuffour",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "Anthony Baffoe",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "Charles Gyamfi",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "Stephen Appiah",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "Emmanuel Osei Kuffour",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "John Paintsil",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "Abedi Pele",
        "position": "MED",
        "nationality": "GHA"
      },
      {
        "name": "Tony Yeboah",
        "position": "MED",
        "nationality": "GHA"
      },
      {
        "name": "Kwame Ayew",
        "position": "MED",
        "nationality": "GHA"
      },
      {
        "name": "Augustine Ahinful",
        "position": "MED",
        "nationality": "GHA"
      },
      {
        "name": "Sulley Muntari",
        "position": "MED",
        "nationality": "GHA"
      },
      {
        "name": "Charles Gyamfi",
        "position": "MED",
        "nationality": "GHA"
      },
      {
        "name": "Tony Yeboah",
        "position": "AV",
        "nationality": "GHA"
      },
      {
        "name": "Abedi Pele",
        "position": "AV",
        "nationality": "GHA"
      },
      {
        "name": "Kwame Ayew",
        "position": "AV",
        "nationality": "GHA"
      },
      {
        "name": "Kwadwo Asamoah",
        "position": "AV",
        "nationality": "GHA"
      }
    ]
  },
  {
    "id": 164,
    "name": "Hearts of Oak",
    "country": "GHA",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Richard Kingson",
        "position": "GR",
        "nationality": "GHA"
      },
      {
        "name": "Abukari Damba",
        "position": "GR",
        "nationality": "GHA"
      },
      {
        "name": "Samuel Kuffour",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "Anthony Baffoe",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "Charles Gyamfi",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "Stephen Appiah",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "Emmanuel Osei Kuffour",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "John Paintsil",
        "position": "DEF",
        "nationality": "GHA"
      },
      {
        "name": "Abedi Pele",
        "position": "MED",
        "nationality": "GHA"
      },
      {
        "name": "Tony Yeboah",
        "position": "MED",
        "nationality": "GHA"
      },
      {
        "name": "Kwame Ayew",
        "position": "MED",
        "nationality": "GHA"
      },
      {
        "name": "Augustine Ahinful",
        "position": "MED",
        "nationality": "GHA"
      },
      {
        "name": "Sulley Muntari",
        "position": "MED",
        "nationality": "GHA"
      },
      {
        "name": "Charles Gyamfi",
        "position": "MED",
        "nationality": "GHA"
      },
      {
        "name": "Tony Yeboah",
        "position": "AV",
        "nationality": "GHA"
      },
      {
        "name": "Abedi Pele",
        "position": "AV",
        "nationality": "GHA"
      },
      {
        "name": "Kwame Ayew",
        "position": "AV",
        "nationality": "GHA"
      },
      {
        "name": "Kwadwo Asamoah",
        "position": "AV",
        "nationality": "GHA"
      }
    ]
  },
  {
    "id": 165,
    "name": "Orlando Pirates",
    "country": "RSA",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#111111",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Bruce Grobbelaar",
        "position": "GR",
        "nationality": "RSA"
      },
      {
        "name": "Andre Arendse",
        "position": "GR",
        "nationality": "RSA"
      },
      {
        "name": "Mark Fish",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Lucas Radebe",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Neil Tovey",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "David Nyathi",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Pierre Issa",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Helman Mkhalele",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Doctor Khumalo",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Jomo Sono",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "John Moshoeu",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Quinton Fortune",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Siyabonga Nomvethe",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Phelan Mkhumalo",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Benni McCarthy",
        "position": "AV",
        "nationality": "RSA"
      },
      {
        "name": "Phil Masinga",
        "position": "AV",
        "nationality": "RSA"
      },
      {
        "name": "Shaun Bartlett",
        "position": "AV",
        "nationality": "RSA"
      },
      {
        "name": "Andile Jali",
        "position": "AV",
        "nationality": "RSA"
      }
    ]
  },
  {
    "id": 166,
    "name": "Kaizer Chiefs",
    "country": "RSA",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#FFD700",
    "secondaryColor": "#111111",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Bruce Grobbelaar",
        "position": "GR",
        "nationality": "RSA"
      },
      {
        "name": "Andre Arendse",
        "position": "GR",
        "nationality": "RSA"
      },
      {
        "name": "Mark Fish",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Lucas Radebe",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Neil Tovey",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "David Nyathi",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Pierre Issa",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Helman Mkhalele",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Doctor Khumalo",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Jomo Sono",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "John Moshoeu",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Quinton Fortune",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Siyabonga Nomvethe",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Phelan Mkhumalo",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Benni McCarthy",
        "position": "AV",
        "nationality": "RSA"
      },
      {
        "name": "Phil Masinga",
        "position": "AV",
        "nationality": "RSA"
      },
      {
        "name": "Shaun Bartlett",
        "position": "AV",
        "nationality": "RSA"
      },
      {
        "name": "Andile Jali",
        "position": "AV",
        "nationality": "RSA"
      }
    ]
  },
  {
    "id": 167,
    "name": "Mamelodi Sundowns",
    "country": "RSA",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Bruce Grobbelaar",
        "position": "GR",
        "nationality": "RSA"
      },
      {
        "name": "Andre Arendse",
        "position": "GR",
        "nationality": "RSA"
      },
      {
        "name": "Mark Fish",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Lucas Radebe",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Neil Tovey",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "David Nyathi",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Pierre Issa",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Helman Mkhalele",
        "position": "DEF",
        "nationality": "RSA"
      },
      {
        "name": "Doctor Khumalo",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Jomo Sono",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "John Moshoeu",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Quinton Fortune",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Siyabonga Nomvethe",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Phelan Mkhumalo",
        "position": "MED",
        "nationality": "RSA"
      },
      {
        "name": "Benni McCarthy",
        "position": "AV",
        "nationality": "RSA"
      },
      {
        "name": "Phil Masinga",
        "position": "AV",
        "nationality": "RSA"
      },
      {
        "name": "Shaun Bartlett",
        "position": "AV",
        "nationality": "RSA"
      },
      {
        "name": "Andile Jali",
        "position": "AV",
        "nationality": "RSA"
      }
    ]
  },
  {
    "id": 168,
    "name": "Nkana Red Devils",
    "country": "ZAM",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Kalusha Bwalya",
        "position": "GR",
        "nationality": "ZAM"
      },
      {
        "name": "Efford Chabala",
        "position": "GR",
        "nationality": "ZAM"
      },
      {
        "name": "Beston Chambeshi",
        "position": "DEF",
        "nationality": "ZAM"
      },
      {
        "name": "Mordon Malitoli",
        "position": "DEF",
        "nationality": "ZAM"
      },
      {
        "name": "Austin Chishimba",
        "position": "DEF",
        "nationality": "ZAM"
      },
      {
        "name": "Wiseman Chizumira",
        "position": "DEF",
        "nationality": "ZAM"
      },
      {
        "name": "Godfrey Muselepete",
        "position": "DEF",
        "nationality": "ZAM"
      },
      {
        "name": "Dennis Kabwe",
        "position": "DEF",
        "nationality": "ZAM"
      },
      {
        "name": "Kenneth Malitoli",
        "position": "MED",
        "nationality": "ZAM"
      },
      {
        "name": "Webby Chikabala",
        "position": "MED",
        "nationality": "ZAM"
      },
      {
        "name": "Gibby Mbasela",
        "position": "MED",
        "nationality": "ZAM"
      },
      {
        "name": "Johnson Bwalya",
        "position": "MED",
        "nationality": "ZAM"
      },
      {
        "name": "Andrew Tembo",
        "position": "MED",
        "nationality": "ZAM"
      },
      {
        "name": "Kalusha Bwalya",
        "position": "MED",
        "nationality": "ZAM"
      },
      {
        "name": "Kalusha Bwalya",
        "position": "AV",
        "nationality": "ZAM"
      },
      {
        "name": "Kenneth Malitoli",
        "position": "AV",
        "nationality": "ZAM"
      },
      {
        "name": "Webby Chikabala",
        "position": "AV",
        "nationality": "ZAM"
      },
      {
        "name": "Dick Shonga",
        "position": "AV",
        "nationality": "ZAM"
      }
    ]
  },
  {
    "id": 169,
    "name": "Dynamos FC",
    "country": "ZIM",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "ZIM"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "ZIM"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "ZIM"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "ZIM"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "ZIM"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "ZIM"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "ZIM"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "ZIM"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "ZIM"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "ZIM"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "ZIM"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "ZIM"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "ZIM"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "ZIM"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "ZIM"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "ZIM"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "ZIM"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "ZIM"
      }
    ]
  },
  {
    "id": 170,
    "name": "Al-Hilal Omdurman",
    "country": "SDN",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "SDN"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "SDN"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "SDN"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "SDN"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "SDN"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "SDN"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "SDN"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "SDN"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "SDN"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "SDN"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "SDN"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "SDN"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "SDN"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "SDN"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "SDN"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "SDN"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "SDN"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "SDN"
      }
    ]
  },
  {
    "id": 171,
    "name": "Al Hilal",
    "country": "KSA",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#1E5AA8",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Mohammed Al-Deayea",
        "position": "GR",
        "nationality": "KSA"
      },
      {
        "name": "Saeed Al-Owairan",
        "position": "GR",
        "nationality": "KSA"
      },
      {
        "name": "Mohammed Al-Jahani",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Fuad Anwar",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Ahmed Jamil",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Hamad Al-Montashari",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Sami Al-Jaber",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Saleh Al-Nuwayser",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Yousuf Al-Thunayan",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Majed Abdullah",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Saeed Al-Owairan",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Fuad Amin",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Khalid Al-Muwallid",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Fahad Al-Ghesheyan",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Majed Abdullah",
        "position": "AV",
        "nationality": "KSA"
      },
      {
        "name": "Sami Al-Jaber",
        "position": "AV",
        "nationality": "KSA"
      },
      {
        "name": "Saeed Al-Owairan",
        "position": "AV",
        "nationality": "KSA"
      },
      {
        "name": "Mohammed Al-Deayea",
        "position": "AV",
        "nationality": "KSA"
      }
    ]
  },
  {
    "id": 172,
    "name": "Al Ittihad",
    "country": "KSA",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Mohammed Al-Deayea",
        "position": "GR",
        "nationality": "KSA"
      },
      {
        "name": "Saeed Al-Owairan",
        "position": "GR",
        "nationality": "KSA"
      },
      {
        "name": "Mohammed Al-Jahani",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Fuad Anwar",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Ahmed Jamil",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Hamad Al-Montashari",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Sami Al-Jaber",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Saleh Al-Nuwayser",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Yousuf Al-Thunayan",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Majed Abdullah",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Saeed Al-Owairan",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Fuad Amin",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Khalid Al-Muwallid",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Fahad Al-Ghesheyan",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Majed Abdullah",
        "position": "AV",
        "nationality": "KSA"
      },
      {
        "name": "Sami Al-Jaber",
        "position": "AV",
        "nationality": "KSA"
      },
      {
        "name": "Saeed Al-Owairan",
        "position": "AV",
        "nationality": "KSA"
      },
      {
        "name": "Mohammed Al-Deayea",
        "position": "AV",
        "nationality": "KSA"
      }
    ]
  },
  {
    "id": 173,
    "name": "Al Nassr",
    "country": "KSA",
    "rating": 83,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Mohammed Al-Deayea",
        "position": "GR",
        "nationality": "KSA"
      },
      {
        "name": "Saeed Al-Owairan",
        "position": "GR",
        "nationality": "KSA"
      },
      {
        "name": "Mohammed Al-Jahani",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Fuad Anwar",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Ahmed Jamil",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Hamad Al-Montashari",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Sami Al-Jaber",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Saleh Al-Nuwayser",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Yousuf Al-Thunayan",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Majed Abdullah",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Saeed Al-Owairan",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Fuad Amin",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Khalid Al-Muwallid",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Fahad Al-Ghesheyan",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Majed Abdullah",
        "position": "AV",
        "nationality": "KSA"
      },
      {
        "name": "Sami Al-Jaber",
        "position": "AV",
        "nationality": "KSA"
      },
      {
        "name": "Saeed Al-Owairan",
        "position": "AV",
        "nationality": "KSA"
      },
      {
        "name": "Mohammed Al-Deayea",
        "position": "AV",
        "nationality": "KSA"
      }
    ]
  },
  {
    "id": 174,
    "name": "Al Shabab",
    "country": "KSA",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Mohammed Al-Deayea",
        "position": "GR",
        "nationality": "KSA"
      },
      {
        "name": "Saeed Al-Owairan",
        "position": "GR",
        "nationality": "KSA"
      },
      {
        "name": "Mohammed Al-Jahani",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Fuad Anwar",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Ahmed Jamil",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Hamad Al-Montashari",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Sami Al-Jaber",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Saleh Al-Nuwayser",
        "position": "DEF",
        "nationality": "KSA"
      },
      {
        "name": "Yousuf Al-Thunayan",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Majed Abdullah",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Saeed Al-Owairan",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Fuad Amin",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Khalid Al-Muwallid",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Fahad Al-Ghesheyan",
        "position": "MED",
        "nationality": "KSA"
      },
      {
        "name": "Majed Abdullah",
        "position": "AV",
        "nationality": "KSA"
      },
      {
        "name": "Sami Al-Jaber",
        "position": "AV",
        "nationality": "KSA"
      },
      {
        "name": "Saeed Al-Owairan",
        "position": "AV",
        "nationality": "KSA"
      },
      {
        "name": "Mohammed Al-Deayea",
        "position": "AV",
        "nationality": "KSA"
      }
    ]
  },
  {
    "id": 175,
    "name": "Esteghlal",
    "country": "IRN",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#0057B8",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Ahmad Reza Abedzadeh",
        "position": "GR",
        "nationality": "IRN"
      },
      {
        "name": "Nasser Hejazi",
        "position": "GR",
        "nationality": "IRN"
      },
      {
        "name": "Nader Mohammadkhani",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Javad Zarincheh",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Mehdi Mahdavikia",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Hamid Estili",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Mohammad Panjali",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Bagheri Karim",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Ali Daei",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Khoddadad Azizi",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Karim Bagheri",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Dariush Yazdani",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Majid Namjoo-Motlagh",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Ali Karimi",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Ali Daei",
        "position": "AV",
        "nationality": "IRN"
      },
      {
        "name": "Khoddadad Azizi",
        "position": "AV",
        "nationality": "IRN"
      },
      {
        "name": "Mehdi Mahdavikia",
        "position": "AV",
        "nationality": "IRN"
      },
      {
        "name": "Mehdi Mahdavikia",
        "position": "AV",
        "nationality": "IRN"
      }
    ]
  },
  {
    "id": 176,
    "name": "Persepolis",
    "country": "IRN",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Ahmad Reza Abedzadeh",
        "position": "GR",
        "nationality": "IRN"
      },
      {
        "name": "Nasser Hejazi",
        "position": "GR",
        "nationality": "IRN"
      },
      {
        "name": "Nader Mohammadkhani",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Javad Zarincheh",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Mehdi Mahdavikia",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Hamid Estili",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Mohammad Panjali",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Bagheri Karim",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Ali Daei",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Khoddadad Azizi",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Karim Bagheri",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Dariush Yazdani",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Majid Namjoo-Motlagh",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Ali Karimi",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Ali Daei",
        "position": "AV",
        "nationality": "IRN"
      },
      {
        "name": "Khoddadad Azizi",
        "position": "AV",
        "nationality": "IRN"
      },
      {
        "name": "Mehdi Mahdavikia",
        "position": "AV",
        "nationality": "IRN"
      },
      {
        "name": "Mehdi Mahdavikia",
        "position": "AV",
        "nationality": "IRN"
      }
    ]
  },
  {
    "id": 177,
    "name": "PAS Tehran",
    "country": "IRN",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Ahmad Reza Abedzadeh",
        "position": "GR",
        "nationality": "IRN"
      },
      {
        "name": "Nasser Hejazi",
        "position": "GR",
        "nationality": "IRN"
      },
      {
        "name": "Nader Mohammadkhani",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Javad Zarincheh",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Mehdi Mahdavikia",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Hamid Estili",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Mohammad Panjali",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Bagheri Karim",
        "position": "DEF",
        "nationality": "IRN"
      },
      {
        "name": "Ali Daei",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Khoddadad Azizi",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Karim Bagheri",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Dariush Yazdani",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Majid Namjoo-Motlagh",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Ali Karimi",
        "position": "MED",
        "nationality": "IRN"
      },
      {
        "name": "Ali Daei",
        "position": "AV",
        "nationality": "IRN"
      },
      {
        "name": "Khoddadad Azizi",
        "position": "AV",
        "nationality": "IRN"
      },
      {
        "name": "Mehdi Mahdavikia",
        "position": "AV",
        "nationality": "IRN"
      },
      {
        "name": "Mehdi Mahdavikia",
        "position": "AV",
        "nationality": "IRN"
      }
    ]
  },
  {
    "id": 178,
    "name": "Pohang Steelers",
    "country": "KOR",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Kim Byung-ji",
        "position": "GR",
        "nationality": "KOR"
      },
      {
        "name": "Choi In-young",
        "position": "GR",
        "nationality": "KOR"
      },
      {
        "name": "Hong Myung-bo",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Kim Tae-young",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Choi Young-il",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Lee Young-jin",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Kim Pan-keun",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Park Chang-sun",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Yoo Sang-chul",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Hwang Sun-hong",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Seo Jung-won",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Ha Seok-ju",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Kim Joo-sung",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Cho Kwang-rae",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Hwang Sun-hong",
        "position": "AV",
        "nationality": "KOR"
      },
      {
        "name": "Choi Yong-soo",
        "position": "AV",
        "nationality": "KOR"
      },
      {
        "name": "Kim Do-hoon",
        "position": "AV",
        "nationality": "KOR"
      },
      {
        "name": "Lee Chun-soo",
        "position": "AV",
        "nationality": "KOR"
      }
    ]
  },
  {
    "id": 179,
    "name": "Ilhwa Chunma",
    "country": "KOR",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Kim Byung-ji",
        "position": "GR",
        "nationality": "KOR"
      },
      {
        "name": "Choi In-young",
        "position": "GR",
        "nationality": "KOR"
      },
      {
        "name": "Hong Myung-bo",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Kim Tae-young",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Choi Young-il",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Lee Young-jin",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Kim Pan-keun",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Park Chang-sun",
        "position": "DEF",
        "nationality": "KOR"
      },
      {
        "name": "Yoo Sang-chul",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Hwang Sun-hong",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Seo Jung-won",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Ha Seok-ju",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Kim Joo-sung",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Cho Kwang-rae",
        "position": "MED",
        "nationality": "KOR"
      },
      {
        "name": "Hwang Sun-hong",
        "position": "AV",
        "nationality": "KOR"
      },
      {
        "name": "Choi Yong-soo",
        "position": "AV",
        "nationality": "KOR"
      },
      {
        "name": "Kim Do-hoon",
        "position": "AV",
        "nationality": "KOR"
      },
      {
        "name": "Lee Chun-soo",
        "position": "AV",
        "nationality": "KOR"
      }
    ]
  },
  {
    "id": 180,
    "name": "Jubilo Iwata",
    "country": "JPN",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Shinkichi Kikuchi",
        "position": "GR",
        "nationality": "JPN"
      },
      {
        "name": "Yoshikatsu Kawaguchi",
        "position": "GR",
        "nationality": "JPN"
      },
      {
        "name": "Masami Ihara",
        "position": "DEF",
        "nationality": "JPN"
      },
      {
        "name": "Naoki Soma",
        "position": "DEF",
        "nationality": "JPN"
      },
      {
        "name": "Akihiro Nagashima",
        "position": "DEF",
        "nationality": "JPN"
      },
      {
        "name": "Satoshi Tsunami",
        "position": "DEF",
        "nationality": "JPN"
      },
      {
        "name": "Masanobu Okano",
        "position": "DEF",
        "nationality": "JPN"
      },
      {
        "name": "Nobuyuki Hoshino",
        "position": "DEF",
        "nationality": "JPN"
      },
      {
        "name": "Hidetoshi Nakata",
        "position": "MED",
        "nationality": "JPN"
      },
      {
        "name": "Kazuyoshi Miura",
        "position": "MED",
        "nationality": "JPN"
      },
      {
        "name": "Shinji Ono",
        "position": "MED",
        "nationality": "JPN"
      },
      {
        "name": "Ruy Ramos",
        "position": "MED",
        "nationality": "JPN"
      },
      {
        "name": "Hiroshi Nanami",
        "position": "MED",
        "nationality": "JPN"
      },
      {
        "name": "Masashi Nakayama",
        "position": "MED",
        "nationality": "JPN"
      },
      {
        "name": "Kazuyoshi Miura",
        "position": "AV",
        "nationality": "JPN"
      },
      {
        "name": "Masashi Nakayama",
        "position": "AV",
        "nationality": "JPN"
      },
      {
        "name": "Hidetoshi Nakata",
        "position": "AV",
        "nationality": "JPN"
      },
      {
        "name": "Takeshi Okada",
        "position": "AV",
        "nationality": "JPN"
      }
    ]
  },
  {
    "id": 181,
    "name": "Thai Farmers Bank",
    "country": "THA",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Thawisak Petchsingh",
        "position": "GR",
        "nationality": "THA"
      },
      {
        "name": "Kosol Srisang",
        "position": "GR",
        "nationality": "THA"
      },
      {
        "name": "Kiatisuk Senamuang",
        "position": "DEF",
        "nationality": "THA"
      },
      {
        "name": "Dusit Chalermsan",
        "position": "DEF",
        "nationality": "THA"
      },
      {
        "name": "Thawatchai Damrong-Ongtrakul",
        "position": "DEF",
        "nationality": "THA"
      },
      {
        "name": "Surachai Jaturapattarapong",
        "position": "DEF",
        "nationality": "THA"
      },
      {
        "name": "Tawan Sripan",
        "position": "DEF",
        "nationality": "THA"
      },
      {
        "name": "Nirun Kittikachorn",
        "position": "DEF",
        "nationality": "THA"
      },
      {
        "name": "Kiatisuk Senamuang",
        "position": "MED",
        "nationality": "THA"
      },
      {
        "name": "Surachai Jaturapattarapong",
        "position": "MED",
        "nationality": "THA"
      },
      {
        "name": "Dusit Chalermsan",
        "position": "MED",
        "nationality": "THA"
      },
      {
        "name": "Tawan Sripan",
        "position": "MED",
        "nationality": "THA"
      },
      {
        "name": "Thawatchai Damrong-Ongtrakul",
        "position": "MED",
        "nationality": "THA"
      },
      {
        "name": "Worrawoot Srimaka",
        "position": "MED",
        "nationality": "THA"
      },
      {
        "name": "Kiatisuk Senamuang",
        "position": "AV",
        "nationality": "THA"
      },
      {
        "name": "Worrawoot Srimaka",
        "position": "AV",
        "nationality": "THA"
      },
      {
        "name": "Sakchai Pothong",
        "position": "AV",
        "nationality": "THA"
      },
      {
        "name": "Sakchai Pothong",
        "position": "AV",
        "nationality": "THA"
      }
    ]
  },
  {
    "id": 182,
    "name": "Dalian Wanda",
    "country": "CHN",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "CHN"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "CHN"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "CHN"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "CHN"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "CHN"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "CHN"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "CHN"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "CHN"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "CHN"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "CHN"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "CHN"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "CHN"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "CHN"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "CHN"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "CHN"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "CHN"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "CHN"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "CHN"
      }
    ]
  },
  {
    "id": 183,
    "name": "Club América",
    "country": "MEX",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#FFD700",
    "secondaryColor": "#003B7A",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jorge Campos",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Oswaldo Sánchez",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Claudio Suárez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Duilio Davino",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Salvador Carmona",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Rafael Márquez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Manuel Negrete",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Ramón Ramírez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis García",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Benjamín Galindo",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Cuauhtémoc Blanco",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Jorge Rodríguez",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis Roberto Alves Zague",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Hugo Sánchez",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Luis Hernández",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Jared Borgetti",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "AV",
        "nationality": "MEX"
      }
    ]
  },
  {
    "id": 184,
    "name": "Cruz Azul",
    "country": "MEX",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#0057B8",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jorge Campos",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Oswaldo Sánchez",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Claudio Suárez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Duilio Davino",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Salvador Carmona",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Rafael Márquez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Manuel Negrete",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Ramón Ramírez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis García",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Benjamín Galindo",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Cuauhtémoc Blanco",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Jorge Rodríguez",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis Roberto Alves Zague",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Hugo Sánchez",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Luis Hernández",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Jared Borgetti",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "AV",
        "nationality": "MEX"
      }
    ]
  },
  {
    "id": 185,
    "name": "Necaxa",
    "country": "MEX",
    "rating": 82,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#E30613",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jorge Campos",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Oswaldo Sánchez",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Claudio Suárez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Duilio Davino",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Salvador Carmona",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Rafael Márquez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Manuel Negrete",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Ramón Ramírez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis García",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Benjamín Galindo",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Cuauhtémoc Blanco",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Jorge Rodríguez",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis Roberto Alves Zague",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Hugo Sánchez",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Luis Hernández",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Jared Borgetti",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "AV",
        "nationality": "MEX"
      }
    ]
  },
  {
    "id": 186,
    "name": "Puebla",
    "country": "MEX",
    "rating": 81,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jorge Campos",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Oswaldo Sánchez",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Claudio Suárez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Duilio Davino",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Salvador Carmona",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Rafael Márquez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Manuel Negrete",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Ramón Ramírez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis García",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Benjamín Galindo",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Cuauhtémoc Blanco",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Jorge Rodríguez",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis Roberto Alves Zague",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Hugo Sánchez",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Luis Hernández",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Jared Borgetti",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "AV",
        "nationality": "MEX"
      }
    ]
  },
  {
    "id": 187,
    "name": "Toluca",
    "country": "MEX",
    "rating": 81,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jorge Campos",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Oswaldo Sánchez",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Claudio Suárez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Duilio Davino",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Salvador Carmona",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Rafael Márquez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Manuel Negrete",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Ramón Ramírez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis García",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Benjamín Galindo",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Cuauhtémoc Blanco",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Jorge Rodríguez",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis Roberto Alves Zague",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Hugo Sánchez",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Luis Hernández",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Jared Borgetti",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "AV",
        "nationality": "MEX"
      }
    ]
  },
  {
    "id": 188,
    "name": "Pumas UNAM",
    "country": "MEX",
    "rating": 81,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jorge Campos",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Oswaldo Sánchez",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Claudio Suárez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Duilio Davino",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Salvador Carmona",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Rafael Márquez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Manuel Negrete",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Ramón Ramírez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis García",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Benjamín Galindo",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Cuauhtémoc Blanco",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Jorge Rodríguez",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis Roberto Alves Zague",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Hugo Sánchez",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Luis Hernández",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Jared Borgetti",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "AV",
        "nationality": "MEX"
      }
    ]
  },
  {
    "id": 189,
    "name": "Chivas Guadalajara",
    "country": "MEX",
    "rating": 81,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jorge Campos",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Oswaldo Sánchez",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Claudio Suárez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Duilio Davino",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Salvador Carmona",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Rafael Márquez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Manuel Negrete",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Ramón Ramírez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis García",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Benjamín Galindo",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Cuauhtémoc Blanco",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Jorge Rodríguez",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis Roberto Alves Zague",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Hugo Sánchez",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Luis Hernández",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Jared Borgetti",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "AV",
        "nationality": "MEX"
      }
    ]
  },
  {
    "id": 190,
    "name": "Santos Laguna",
    "country": "MEX",
    "rating": 81,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jorge Campos",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Oswaldo Sánchez",
        "position": "GR",
        "nationality": "MEX"
      },
      {
        "name": "Claudio Suárez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Duilio Davino",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Salvador Carmona",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Rafael Márquez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Manuel Negrete",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Ramón Ramírez",
        "position": "DEF",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis García",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Benjamín Galindo",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Cuauhtémoc Blanco",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Jorge Rodríguez",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Luis Roberto Alves Zague",
        "position": "MED",
        "nationality": "MEX"
      },
      {
        "name": "Hugo Sánchez",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Luis Hernández",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Jared Borgetti",
        "position": "AV",
        "nationality": "MEX"
      },
      {
        "name": "Alberto García Aspe",
        "position": "AV",
        "nationality": "MEX"
      }
    ]
  },
  {
    "id": 191,
    "name": "Deportivo Saprissa",
    "country": "CRC",
    "rating": 81,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#6A1B9A",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Luis Gabelo Conejo",
        "position": "GR",
        "nationality": "CRC"
      },
      {
        "name": "Erick Lonnis",
        "position": "GR",
        "nationality": "CRC"
      },
      {
        "name": "Luis Marín",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Mauricio Wright",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Gilberto Martínez",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Jervis Drummond",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Rónald González",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Óscar Ramírez",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Hernán Medford",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Walter Centeno",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Carlos Hernández",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Claudio Jara",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Rolando Fonseca",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Winston Parks",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Rolando Fonseca",
        "position": "AV",
        "nationality": "CRC"
      },
      {
        "name": "Hernán Medford",
        "position": "AV",
        "nationality": "CRC"
      },
      {
        "name": "Paulo Wanchope",
        "position": "AV",
        "nationality": "CRC"
      },
      {
        "name": "Paulo Wanchope",
        "position": "AV",
        "nationality": "CRC"
      }
    ]
  },
  {
    "id": 192,
    "name": "LD Alajuelense",
    "country": "CRC",
    "rating": 81,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Luis Gabelo Conejo",
        "position": "GR",
        "nationality": "CRC"
      },
      {
        "name": "Erick Lonnis",
        "position": "GR",
        "nationality": "CRC"
      },
      {
        "name": "Luis Marín",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Mauricio Wright",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Gilberto Martínez",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Jervis Drummond",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Rónald González",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Óscar Ramírez",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Hernán Medford",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Walter Centeno",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Carlos Hernández",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Claudio Jara",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Rolando Fonseca",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Winston Parks",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Rolando Fonseca",
        "position": "AV",
        "nationality": "CRC"
      },
      {
        "name": "Hernán Medford",
        "position": "AV",
        "nationality": "CRC"
      },
      {
        "name": "Paulo Wanchope",
        "position": "AV",
        "nationality": "CRC"
      },
      {
        "name": "Paulo Wanchope",
        "position": "AV",
        "nationality": "CRC"
      }
    ]
  },
  {
    "id": 193,
    "name": "CS Cartaginés",
    "country": "CRC",
    "rating": 81,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Luis Gabelo Conejo",
        "position": "GR",
        "nationality": "CRC"
      },
      {
        "name": "Erick Lonnis",
        "position": "GR",
        "nationality": "CRC"
      },
      {
        "name": "Luis Marín",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Mauricio Wright",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Gilberto Martínez",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Jervis Drummond",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Rónald González",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Óscar Ramírez",
        "position": "DEF",
        "nationality": "CRC"
      },
      {
        "name": "Hernán Medford",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Walter Centeno",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Carlos Hernández",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Claudio Jara",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Rolando Fonseca",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Winston Parks",
        "position": "MED",
        "nationality": "CRC"
      },
      {
        "name": "Rolando Fonseca",
        "position": "AV",
        "nationality": "CRC"
      },
      {
        "name": "Hernán Medford",
        "position": "AV",
        "nationality": "CRC"
      },
      {
        "name": "Paulo Wanchope",
        "position": "AV",
        "nationality": "CRC"
      },
      {
        "name": "Paulo Wanchope",
        "position": "AV",
        "nationality": "CRC"
      }
    ]
  },
  {
    "id": 194,
    "name": "DC United",
    "country": "USA",
    "rating": 81,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#E31837",
    "secondaryColor": "#111111",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Tony Meola",
        "position": "GR",
        "nationality": "USA"
      },
      {
        "name": "Kasey Keller",
        "position": "GR",
        "nationality": "USA"
      },
      {
        "name": "Alexi Lalas",
        "position": "DEF",
        "nationality": "USA"
      },
      {
        "name": "Marcelo Balboa",
        "position": "DEF",
        "nationality": "USA"
      },
      {
        "name": "Jeff Agoos",
        "position": "DEF",
        "nationality": "USA"
      },
      {
        "name": "Eddie Pope",
        "position": "DEF",
        "nationality": "USA"
      },
      {
        "name": "Paul Caligiuri",
        "position": "DEF",
        "nationality": "USA"
      },
      {
        "name": "Cobi Jones",
        "position": "DEF",
        "nationality": "USA"
      },
      {
        "name": "Claudio Reyna",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "John Harkes",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "Earnie Stewart",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "Tab Ramos",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "Eric Wynalda",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "Landon Donovan",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "Eric Wynalda",
        "position": "AV",
        "nationality": "USA"
      },
      {
        "name": "Joe-Max Moore",
        "position": "AV",
        "nationality": "USA"
      },
      {
        "name": "Brian McBride",
        "position": "AV",
        "nationality": "USA"
      },
      {
        "name": "DaMarcus Beasley",
        "position": "AV",
        "nationality": "USA"
      }
    ]
  },
  {
    "id": 195,
    "name": "LA Galaxy",
    "country": "USA",
    "rating": 81,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Tony Meola",
        "position": "GR",
        "nationality": "USA"
      },
      {
        "name": "Kasey Keller",
        "position": "GR",
        "nationality": "USA"
      },
      {
        "name": "Alexi Lalas",
        "position": "DEF",
        "nationality": "USA"
      },
      {
        "name": "Marcelo Balboa",
        "position": "DEF",
        "nationality": "USA"
      },
      {
        "name": "Jeff Agoos",
        "position": "DEF",
        "nationality": "USA"
      },
      {
        "name": "Eddie Pope",
        "position": "DEF",
        "nationality": "USA"
      },
      {
        "name": "Paul Caligiuri",
        "position": "DEF",
        "nationality": "USA"
      },
      {
        "name": "Cobi Jones",
        "position": "DEF",
        "nationality": "USA"
      },
      {
        "name": "Claudio Reyna",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "John Harkes",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "Earnie Stewart",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "Tab Ramos",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "Eric Wynalda",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "Landon Donovan",
        "position": "MED",
        "nationality": "USA"
      },
      {
        "name": "Eric Wynalda",
        "position": "AV",
        "nationality": "USA"
      },
      {
        "name": "Joe-Max Moore",
        "position": "AV",
        "nationality": "USA"
      },
      {
        "name": "Brian McBride",
        "position": "AV",
        "nationality": "USA"
      },
      {
        "name": "DaMarcus Beasley",
        "position": "AV",
        "nationality": "USA"
      }
    ]
  },
  {
    "id": 196,
    "name": "South Melbourne",
    "country": "AUS",
    "rating": 81,
    "badge": "/assets/badges/Lakers.png",
    "primaryColor": "#003DA5",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Michael Petkovic",
        "position": "GR",
        "nationality": "AUS"
      },
      {
        "name": "Peter Zoïs",
        "position": "GR",
        "nationality": "AUS"
      },
      {
        "name": "Fausto de Amicis",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Steve Iosifidis",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Robert Liparoti",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Con Anthopolous",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Con Anthios",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Tansel Baser",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "George Goutzioulis",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Danny Allsopp",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Mike Petersen",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Bill Damianos",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Jason Polak",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Steve Panopoulos",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Vaughan Coveny",
        "position": "AV",
        "nationality": "NZL"
      },
      {
        "name": "Paul Trimboli",
        "position": "AV",
        "nationality": "AUS"
      },
      {
        "name": "Michael Curcija",
        "position": "AV",
        "nationality": "AUS"
      },
      {
        "name": "Warren Spink",
        "position": "AV",
        "nationality": "AUS"
      }
    ]
  },
  {
    "id": 197,
    "name": "Sydney Olympic",
    "country": "AUS",
    "rating": 81,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Mark Bosnich",
        "position": "GR",
        "nationality": "AUS"
      },
      {
        "name": "Zeljko Kalac",
        "position": "GR",
        "nationality": "AUS"
      },
      {
        "name": "Alex Tobin",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Craig Moore",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Tony Vidmar",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Frank Farina",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Robbie Slater",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Ned Zelic",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Paul Okon",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Aurelio Vidmar",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Mark Schwarzer",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Harry Kewell",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Mark Bresciano",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Damian Mori",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Frank Farina",
        "position": "AV",
        "nationality": "AUS"
      },
      {
        "name": "Damian Mori",
        "position": "AV",
        "nationality": "AUS"
      },
      {
        "name": "Mark Viduka",
        "position": "AV",
        "nationality": "AUS"
      },
      {
        "name": "Tim Cahill",
        "position": "AV",
        "nationality": "AUS"
      }
    ]
  },
  {
    "id": 198,
    "name": "Marconi Stallions",
    "country": "AUS",
    "rating": 80,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Mark Bosnich",
        "position": "GR",
        "nationality": "AUS"
      },
      {
        "name": "Zeljko Kalac",
        "position": "GR",
        "nationality": "AUS"
      },
      {
        "name": "Alex Tobin",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Craig Moore",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Tony Vidmar",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Frank Farina",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Robbie Slater",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Ned Zelic",
        "position": "DEF",
        "nationality": "AUS"
      },
      {
        "name": "Paul Okon",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Aurelio Vidmar",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Mark Schwarzer",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Harry Kewell",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Mark Bresciano",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Damian Mori",
        "position": "MED",
        "nationality": "AUS"
      },
      {
        "name": "Frank Farina",
        "position": "AV",
        "nationality": "AUS"
      },
      {
        "name": "Damian Mori",
        "position": "AV",
        "nationality": "AUS"
      },
      {
        "name": "Mark Viduka",
        "position": "AV",
        "nationality": "AUS"
      },
      {
        "name": "Tim Cahill",
        "position": "AV",
        "nationality": "AUS"
      }
    ]
  },
  {
    "id": 199,
    "name": "Waitakere City",
    "country": "NZL",
    "rating": 80,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Jason Batty",
        "position": "GR",
        "nationality": "NZL"
      },
      {
        "name": "Ross Nicholson",
        "position": "GR",
        "nationality": "NZL"
      },
      {
        "name": "Ryan Nelsen",
        "position": "DEF",
        "nationality": "NZL"
      },
      {
        "name": "Chris Zoricich",
        "position": "DEF",
        "nationality": "NZL"
      },
      {
        "name": "Danny Hay",
        "position": "DEF",
        "nationality": "NZL"
      },
      {
        "name": "Danny Halligan",
        "position": "DEF",
        "nationality": "NZL"
      },
      {
        "name": "Wynton Rufer",
        "position": "DEF",
        "nationality": "NZL"
      },
      {
        "name": "Ricki Herbert",
        "position": "DEF",
        "nationality": "NZL"
      },
      {
        "name": "Ivan Vicelich",
        "position": "MED",
        "nationality": "NZL"
      },
      {
        "name": "Steve Sumner",
        "position": "MED",
        "nationality": "NZL"
      },
      {
        "name": "Duncan Cole",
        "position": "MED",
        "nationality": "NZL"
      },
      {
        "name": "Gavin Wilkinson",
        "position": "MED",
        "nationality": "NZL"
      },
      {
        "name": "Wynton Rufer",
        "position": "MED",
        "nationality": "NZL"
      },
      {
        "name": "Vaughan Coveny",
        "position": "MED",
        "nationality": "NZL"
      },
      {
        "name": "Wynton Rufer",
        "position": "AV",
        "nationality": "NZL"
      },
      {
        "name": "Vaughan Coveny",
        "position": "AV",
        "nationality": "NZL"
      },
      {
        "name": "Chris Killen",
        "position": "AV",
        "nationality": "NZL"
      },
      {
        "name": "Marko Rajamäki",
        "position": "AV",
        "nationality": "NZL"
      }
    ]
  },
  {
    "id": 200,
    "name": "Nadi",
    "country": "FIJ",
    "rating": 80,
    "badge": "/assets/badges/x.png",
    "primaryColor": "#333333",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Peter Schmeichel",
        "position": "GR",
        "nationality": "FIJ"
      },
      {
        "name": "Gianluca Pagliuca",
        "position": "GR",
        "nationality": "FIJ"
      },
      {
        "name": "Franco Baresi",
        "position": "DEF",
        "nationality": "FIJ"
      },
      {
        "name": "Fernando Hierro",
        "position": "DEF",
        "nationality": "FIJ"
      },
      {
        "name": "Marcel Desailly",
        "position": "DEF",
        "nationality": "FIJ"
      },
      {
        "name": "Aldair",
        "position": "DEF",
        "nationality": "FIJ"
      },
      {
        "name": "Roberto Ayala",
        "position": "DEF",
        "nationality": "FIJ"
      },
      {
        "name": "Frank de Boer",
        "position": "DEF",
        "nationality": "FIJ"
      },
      {
        "name": "Zinedine Zidane",
        "position": "MED",
        "nationality": "FIJ"
      },
      {
        "name": "Lothar Matthäus",
        "position": "MED",
        "nationality": "FIJ"
      },
      {
        "name": "Clarence Seedorf",
        "position": "MED",
        "nationality": "FIJ"
      },
      {
        "name": "Luis Figo",
        "position": "MED",
        "nationality": "FIJ"
      },
      {
        "name": "Rivaldo",
        "position": "MED",
        "nationality": "FIJ"
      },
      {
        "name": "Fernando Redondo",
        "position": "MED",
        "nationality": "FIJ"
      },
      {
        "name": "Ronaldo",
        "position": "AV",
        "nationality": "FIJ"
      },
      {
        "name": "Romário",
        "position": "AV",
        "nationality": "FIJ"
      },
      {
        "name": "Gabriel Batistuta",
        "position": "AV",
        "nationality": "FIJ"
      },
      {
        "name": "Zinedine Zidane",
        "position": "AV",
        "nationality": "FIJ"
      }
    ]
  },
  {
    "id": 201,
    "name": "Ferencváros",
    "country": "HUN",
    "rating": 76,
    "badge": "/assets/badges/ferenc.png",
    "primaryColor": "#00843D",
    "secondaryColor": "#FFFFFF",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "József Szeiler",
        "position": "GR",
        "nationality": "HUN"
      },
      {
        "name": "Attila Hajdú",
        "position": "GR",
        "nationality": "HUN"
      },
      {
        "name": "András Telek",
        "position": "DEF",
        "nationality": "HUN"
      },
      {
        "name": "Norbert Nagy",
        "position": "DEF",
        "nationality": "HUN"
      },
      {
        "name": "Mihaly Szücs",
        "position": "DEF",
        "nationality": "HUN"
      },
      {
        "name": "Zoltan Jagodics",
        "position": "DEF",
        "nationality": "HUN"
      },
      {
        "name": "János Hrutka",
        "position": "DEF",
        "nationality": "HUN"
      },
      {
        "name": "Dejan Milovanovic",
        "position": "DEF",
        "nationality": "SRB"
      },
      {
        "name": "Elek Nyilas",
        "position": "MED",
        "nationality": "HUN"
      },
      {
        "name": "László Arany",
        "position": "MED",
        "nationality": "HUN"
      },
      {
        "name": "Zsolt Limperger",
        "position": "MED",
        "nationality": "HUN"
      },
      {
        "name": "Krisztián Lisztes",
        "position": "MED",
        "nationality": "HUN"
      },
      {
        "name": "Zsolt Páling",
        "position": "MED",
        "nationality": "HUN"
      },
      {
        "name": "Gabor Zavadszky",
        "position": "MED",
        "nationality": "HUN"
      },
      {
        "name": "Ferenc Horváth",
        "position": "AV",
        "nationality": "HUN"
      },
      {
        "name": "Ihor Nichenko",
        "position": "AV",
        "nationality": "UKR"
      },
      {
        "name": "Zsolt Nagy",
        "position": "AV",
        "nationality": "HUN"
      },
      {
        "name": "Richárd Holló",
        "position": "AV",
        "nationality": "HUN"
      }
    ]
  },
  {
    "id": 202,
    "name": "Beitar Jerusalem",
    "country": "ISR",
    "rating": 75,
    "badge": "/assets/badges/beitar.png",
    "primaryColor": "#F7C600",
    "secondaryColor": "#000000",
    "stadium": "",
    "city": "",
    "stadiumImage": "",
    "players": [
      {
        "name": "Itzik Kornfein",
        "position": "GR",
        "nationality": "ISR"
      },
      {
        "name": "Shmuel Levy",
        "position": "DEF",
        "nationality": "ISR"
      },
      {
        "name": "Serhiy Tretyak",
        "position": "DEF",
        "nationality": "UKR"
      },
      {
        "name": "Ehud Cahila",
        "position": "DEF",
        "nationality": "ISR"
      },
      {
        "name": "Raanan Deree",
        "position": "DEF",
        "nationality": "ISR"
      },
      {
        "name": "David Amsalem",
        "position": "DEF",
        "nationality": "ISR"
      },
      {
        "name": "Eytan Mizrahi",
        "position": "DEF",
        "nationality": "ISR"
      },
      {
        "name": "István Pisont",
        "position": "MED",
        "nationality": "HUN"
      },
      {
        "name": "István Sallói",
        "position": "MED",
        "nationality": "HUN"
      },
      {
        "name": "Yossi Abuksis",
        "position": "MED",
        "nationality": "ISR"
      },
      {
        "name": "Jan Talesnikov",
        "position": "MED",
        "nationality": "ISR"
      },
      {
        "name": "Itzhaq Zohar",
        "position": "MED",
        "nationality": "ISR"
      },
      {
        "name": "Ronen Harazi",
        "position": "AV",
        "nationality": "ISR"
      },
      {
        "name": "Ronen Shwaig",
        "position": "AV",
        "nationality": "ISR"
      },
      {
        "name": "Eli Ohana",
        "position": "AV",
        "nationality": "ISR"
      },
      {
        "name": "Nir Sivilia",
        "position": "AV",
        "nationality": "ISR"
      }
    ]
  }
];
