const players = [
 {
    id: 1,
    name: "Yuji Nishida",
    position: "Opposite",
    height: 186,
    age: 24,
    jerseyNumber: 11,
    club: "JTEKT Stings",
    hometown: "Mie Prefecture",
    specialties: ["spike serve", "power hitting"],
    picture: "yuji_nishida.jpg"
  },
  {
    id: 2,
    name: "Yuki Ishikawa",
    position: "Outside Hitter",
    height: 191,
    age: 29,
    jerseyNumber: 14,
    club: "Milano Volley",
    hometown: "Okazaki, Aichi",
    specialties: ["all-around play", "leadership"],
    picture: "yuki_ishikawa.jpg"
  },
  {
    id: 3,
    name: "Ran Takahashi",
    position: "Outside Hitter",
    height: 186,
    age: 23,
    jerseyNumber: 7,
    club: "Wolfdogs Nagoya",
    hometown: "Fukuoka Prefecture",
    specialties: ["jump serve", "defense"],
    picture: "ran_takahashi.jpg"
  },
  {
    id: 4,
    name: "Akihiro Yamauchi",
    position: "Middle Blocker",
    height: 205,
    age: 27,
    jerseyNumber: 12,
    club: "Panasonic Panthers",
    hometown: "Tokyo",
    specialties: ["blocking", "quick attacks"],
    picture: "akihiro_yamauchi.jpg"
  },
  {
    id: 5,
    name: "Taishi Onodera",
    position: "Middle Blocker",
    height: 203,
    age: 29,
    jerseyNumber: 5,
    club: "VC Cannes",
    hometown: "Miyazaki Prefecture",
    specialties: ["slide attacks", "serving"],
    picture: "taishi_onodera.jpg"
  },
  {
    id: 6,
    name: "Masahiro Sekita",
    position: "Setter",
    height: 182,
    age: 33,
    jerseyNumber: 3,
    club: "JTEKT Stings",
    hometown: "Osaka Prefecture",
    specialties: ["setting", "game management"],
    picture: "masahiro_sekita.jpg"
  },
  {
    id: 7,
    name: "Taichiro Koga",
    position: "Libero",
    height: 180,
    age: 28,
    jerseyNumber: 10,
    club: "JT Thunders",
    hometown: "Kagoshima Prefecture",
    specialties: ["receiving", "defense"],
    picture: "taichiro_koga.jpg"
  },
  {
    id: 8,
    name: "Kentaro Takahashi",
    position: "Outside Hitter",
    height: 192,
    age: 25,
    jerseyNumber: 15,
    club: "Suntory Sunbirds",
    hometown: "Hiroshima Prefecture",
    specialties: ["hitting", "blocking"],
    picture: "kentaro_takahashi.jpg"
  },
  {
    id: 9,
    name: "Tatsunori Otsuka",
    position: "Outside Hitter",
    height: 187,
    age: 26,
    jerseyNumber: 8,
    club: "Toray Arrows",
    hometown: "Shiga Prefecture",
    specialties: ["receiving", "serve"],
    picture: "tatsunori_otsuka.jpg"
  },
  {
    id: 10,
    name: "Akihiro Fukatsu",
    position: "Setter",
    height: 185,
    age: 31,
    jerseyNumber: 9,
    club: "Panasonic Panthers",
    hometown: "Nagano Prefecture",
    specialties: ["setting", "serving"],
    picture: "akihiro_fukatsu.jpg"
  },
  {
    id: 11,
    name: "Haku Lee",
    position: "Opposite",
    height: 195,
    age: 25,
    jerseyNumber: 20,
    club: "FC Tokyo",
    hometown: "Tokyo",
    specialties: ["serving", "attacking"],
    picture: "haku_lee.jpg"
  },
  {
    id: 12,
    name: "Tomohiro Yamamoto",
    position: "Libero",
    height: 175,
    age: 27,
    jerseyNumber: 2,
    club: "JTEKT Stings",
    hometown: "Hyogo Prefecture",
    specialties: ["receiving", "defense"],
    picture: "tomohiro_yamamoto.jpg"
  },
  {
    id: 13,
    name: "Shoma Tomita",
    position: "Middle Blocker",
    height: 198,
    age: 26,
    jerseyNumber: 18,
    club: "Wolfdogs Nagoya",
    hometown: "Shizuoka Prefecture",
    specialties: ["blocking", "middle attacks"],
    picture: "shoma_tomita.jpg"
  },
  {
    id: 14,
    name: "Yuki Higuchi",
    position: "Middle Blocker",
    height: 200,
    age: 23,
    jerseyNumber: 17,
    club: "JT Thunders",
    hometown: "Kanagawa Prefecture",
    specialties: ["quick attacks", "serving"],
    picture: "yuki_higuchi.jpg"
  }
]


const japanVolleyballCoachesAndTrainers = [
  {
    id: 1,
    name: "Philippe Blain",
    position: "Head Coach",
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
    position: "Technical Advisor",
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
    position: "Assistant Coach",
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
    position: "Serving and Attacking Coach",
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
    position: "Development Coach",
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
    position: "Strength and Conditioning Coach",
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
    position: "Athletic Trainer",
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
    position: "Mental Coach",
    age: 48,
    nationality: "Japanese",
    yearsWithTeam: 3,
    previousExperience: ["Sports Psychology Institute", "Japan Swimming Team Consultant"],
    specialties: ["performance anxiety management", "focus training"],
    picture: "taro_miyazaki.jpg"
  }
];


