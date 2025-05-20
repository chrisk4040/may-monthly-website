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
    picture: "yuki_ishikawa.jpg"
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
    picture: "masahiro_sekita.jpg"
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
    picture: "yuji_nishida.jpg"
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
    picture: "akihiro_yamauchi.jpg"
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
    picture: "ran_takahashi.jpg"
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
    picture: "tatsunori_otsuka.jpg"
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
    picture: "taishi_onodera.jpg"
  },
  { 
    id: 8,
    name: "Kentaro Takahashi",
    position: "Outside Hitter",
    height: 194,
    age: 31,
    jerseyNumber: 4,
    club: "Wolf Dogs Nagoya",
    hometown: "Kumamoto Prefecture",
    specialties: ["receiving", "consistent attack"],
    picture: "kentaro_takahashi.jpg"
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
    picture: "tomohiro_yamamoto.jpg"
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
    picture: "kenta_takanashi.jpg"
  },
  { 
    id: 12,
    name: "Takahiro Ogata",
    position: "Setter",
    height: 180,
    age: 26,
    jerseyNumber: 7,
    club: "Panasonic Panthers",
    hometown: "Tokyo Prefecture",
    specialties: ["setting", "tactical play"],
    picture: "takahiro_ogata.jpg"
  },
  { 
    id: 13,
    name: "Tatsuya Fukuzawa",
    position: "Outside-Hitter",
    height: 191,
    age: 37,
    jerseyNumber: 2,
    club: "Tokyo Great Bears",
    hometown: "Shizouka Prefecture",
    specialties: ["experience", "leadership"],
    picture: "tatsuya_fukuzawa.jpg"
  },
  { 
    id: 14,
    name: "Kento Miyaura", 
    position: "Opposite",
    height: 193,
    age: 29,
    jerseyNumber: 3,
    club: "Panasonic Panthers",
    hometown: "Aichi Prefecture",
    specialties: ["powerful attack", "serving"],
    picture: "kento_miyaura.jpg"
  }
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
    picture: "philippe_blain.jpg"
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
    picture: "yuichi_nakagaichi.jpg"
  },
  {
    id: 3,
    name: "Akihiro Yamanaka",
    position: "Assistant-Coach",
    age: 42,
    nationality: "Japanese",
    yearsWithTeam: 4,
    previousExperience: ["JTEKT Stings Assistant Coach", "Japan Youth Team Coach"],
    specialties: ["blocking techniques", "defense systems"],
    picture: "akihiro_yamanaka.jpg"
  },
  {
    id: 4,
    name: "Vincent Lacombe",
    position: "Serving-and-Attacking-Coach",
    age: 47,
    nationality: "French",
    yearsWithTeam: 2,
    previousExperience: ["France Youth National Team Coach", "Montpellier Volleyball Technical Director"],
    specialties: ["jump serve technique", "spike training"],
    picture: "vincent_lacombe.jpg"
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
    picture: "masayoshi_manabe.jpg"
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
    picture: "kenji_shimaoka.jpg"
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
    picture: "hiroshi_toyoda.jpg"
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
    picture: "satoshi_kanazawa.jpg"
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
    picture: "marie_tanaka.jpg"
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
    picture: "taro_miyazaki.jpg"
  }
];


