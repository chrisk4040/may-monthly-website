
const players = [
  { 
    id: 1,
    name: "Yuki Ishikawa",
    position: "Outside-Hitter",
    height: 191,
    age: 29,
    jerseyNumber: 14,
    club: "Allianz Milano",
    hometown: "Okazaki, Aichi Prefecture",
    specialties: ["receiving", "spiking", "leadership"],
    picture: "img/yuki_ishikawa.png"
  },
  { 
    id: 2,
    name: "Masahiro Sekita",
    position: "Setter",
    height: 181,
    age: 34,
    jerseyNumber: 1,
    club: "Panasonic Panthers",
    hometown: "Toyohashi, Aichi Prefecture",
    specialties: ["setting", "game control"],
    picture: "img/masahiro_sekita.png"
  },
  { 
    id: 3,
    name: "Yuji Nishida",
    position: "Opposite",
    height: 187,
    age: 24,
    jerseyNumber: 11,
    club: "Volley Milano",
    hometown: "Mie Prefecture",
    specialties: ["spike serve", "power hitting"],
    picture: "img/yuji_nishida.png"
  },
  { 
    id: 4,
    name: "Akihiro Yamauchi",
    position: "Middle-Blocker",
    height: 196,
    age: 29,
    jerseyNumber: 17,
    club: "JTEKT Stings",
    hometown: "Osaka Prefecture",
    specialties: ["blocking", "quick attacks"],
    picture: "img/akihiro_yamauchi.png"
  },
  { 
    id: 5,
    name: "Ran Takahashi",
    position: "Outside-Hitter",
    height: 186,
    age: 23,
    jerseyNumber: 10,
    club: "Volley Callipo",
    hometown: "Fukuoka Prefecture",
    specialties: ["all-around play", "jumping ability"],
    picture: "img/ran_takahashi.png"
  },
  { 
    id: 6,
    name: "Tatsunori Otsuka",
    position: "Outside-Hitter",
    height: 190,
    age: 25,
    jerseyNumber: 12,
    club: "JT Thunders Hiroshima",
    hometown: "Miyagi Prefecture",
    specialties: ["serving", "receiving"],
    picture: "img/tatsunori_otsuka.png"
  },
  { 
    id: 7,
    name: "Taishi Onodera",
    position: "Middle-Blocker",
    height: 205,
    age: 28,
    jerseyNumber: 5,
    club: "Suntory Sunbirds",
    hometown: "Yokohama, Kanagawa Prefecture",
    specialties: ["blocking", "height advantage"],
    picture: "img/taishi_onodera.png"
  },
  { 
    id: 8,
    name: "Kenta Takahashi",
    position: "OutsideHitter",
    height: 194,
    age: 31,
    jerseyNumber: 4,
    club: "Wolf Dogs Nagoya",
    hometown: "Kumamoto Prefecture",
    specialties: ["receiving", "consistent attack"],
    picture: "img/kentaro_takahashi.png"
  },
  { 
    id: 9,
    name: "Tomohiro Yamamoto",
    position: "Libero",
    height: 176,
    age: 35,
    jerseyNumber: 13,
    club: "Suntory Sunbirds",
    hometown: "Nagasaki Prefecture",
    specialties: ["defense", "receiving"],
    picture: "img/tomohiro_yamamoto.png"
  },
  { 
    id: 10,
    name: "Kentaro Takanashi",
    position: "Middle-Blocker",
    height: 203,
    age: 30,
    jerseyNumber: 8,
    club: "JT Thunders Hiroshima",
    hometown: "Hokkaido Prefecture",
    specialties: ["blocking", "quick attack"],
    picture: "img/kentaro_takahashi.png"
  },
  { 
    id: 12,
    name: "Masaki Oya",
    position: "Setter",
    height: 178,
    age: 30,
    jerseyNumber: 7,
    club: "Panasonic Panthers",
    hometown: "Tokyo Prefecture",
    specialties: ["setting", "tactical play"],
    picture: "img/Masaki_Oya.png"
  },
  { 
    id: 13,
    name: "Larry Ik Evbade-Dan",
    position: "Outside-Hitter",
    height: 196,
    age: 24,
    jerseyNumber: 2,
    club: "Tokyo Great Bears",
    hometown: "Shizouka Prefecture",
    specialties: ["experience", "leadership"],
    picture: "img/Larry_Ik.png"
  },
]


const japanVolleyballCoachesAndTrainers = [
  {
    id: 1,
    name: "Philippe Blain",
    position: "Head-Coach",
    age: 64,
    nationality: "French",
    yearsWithTeam: 5,
    previousExperience: ["Poland National Team Assistant Coach", "France National Team Head Coach"],
    specialties: ["tactical planning", "player development"],
    picture: "img/philippe_blain.jpg"
  },
  {
    id: 2,
    name: "Yuichi Nakagaichi",
    position: "Technical-Advisor",
    age: 57,
    nationality: "Japanese",
    yearsWithTeam: 8,
    previousExperience: ["Japan National Team Head Coach (2016-2021)", "Panasonic Panthers Coach"],
    specialties: ["technique refinement", "strategic planning"],
    picture: "img/yuichi_nakagaichi.png"
  },
  {
    id: 5,
    name: "Masayoshi Manabe",
    position: "Development-Coach",
    age: 59,
    nationality: "Japanese",
    yearsWithTeam: 3,
    previousExperience: ["Japan Women's National Team Head Coach", "Toray Arrows Coach"],
    specialties: ["talent development", "skills training"],
    picture: "img/masayoshi_manabe.jpg"
  },
  {
    id: 6,
    name: "Kenji Shimaoka",
    position: "Strength-and-Conditioning-Coach",
    age: 45,
    nationality: "Japanese",
    yearsWithTeam: 7,
    previousExperience: ["Tokyo Olympic Training Center", "Suntory Sunbirds S&C Coach"],
    specialties: ["power development", "injury prevention"],
    picture: "img/kenji_shimaoka.jpg"
  },
  {
    id: 7,
    name: "Hiroshi Toyoda",
    position: "Athletic-Trainer",
    age: 40,
    nationality: "Japanese",
    yearsWithTeam: 9,
    previousExperience: ["Japan Olympic Committee Medical Staff", "FC Tokyo Trainer"],
    specialties: ["rehabilitation", "injury treatment"],
    picture: "img/hiroshi_toyoda.gif"
  },
  {
    id: 8,
    name: "Satoshi Kanazawa",
    position: "Physiotherapist",
    age: 36,
    nationality: "Japanese",
    yearsWithTeam: 5,
    previousExperience: ["National Sports Science Center", "Panasonic Panthers Physiotherapist"],
    specialties: ["sports massage", "recovery protocols"],
    picture: "img/satoshi_kanazawa.jpg"
  },
  {
    id: 9,
    name: "Marie Tanaka",
    position: "Nutritionist",
    age: 34,
    nationality: "Japanese",
    yearsWithTeam: 4,
    previousExperience: ["Japan Olympic Committee Nutritionist", "Tokyo Sports Medicine Clinic"],
    specialties: ["performance nutrition", "recovery meal planning"],
    picture: "img/marie_tanaka.png"
  },
  {
    id: 10,
    name: "Taro Miyazaki",
    position: "Mental-Coach",
    age: 48,
    nationality: "Japanese",
    yearsWithTeam: 3,
    previousExperience: ["Sports Psychology Institute", "Japan Swimming Team Consultant"],
    specialties: ["performance anxiety management", "focus training"],
    picture: "img/taro_miyazaki.jpg"
  }
];
