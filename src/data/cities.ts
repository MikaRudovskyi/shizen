import type { City } from "@/types";

// NOTE: heroImage/galleryImages use seeded picsum.photos placeholders so the
// project runs immediately without licensing risk. Swap these for licensed
// photography (or your own Unsplash/Wikimedia-sourced, rights-cleared set)
// before shipping publicly — see README.

const img = (seed: string, w = 1600, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const cities: City[] = [
  {
    id: "tokyo",
    slug: "tokyo",
    name: "Tokyo",
    jp: "東京",
    region: "Kanto",
    tagline: "Where centuries-old shrines sit in the shadow of glass towers",
    founded: "1457 (as Edo Castle); renamed Tokyo in 1868",
    population: "≈14 million (city), ≈37 million (greater metro)",
    heroImage: img("tokyo-hero"),
    galleryImages: [img("tokyo-1"), img("tokyo-2"), img("tokyo-3"), img("tokyo-4")],
    coordinates: { x: 62, y: 58 },
    intro:
      "Tokyo is Japan compressed into a single, sleepless organism — a capital that rebuilt itself after fire, earthquake and war and kept moving forward each time. Ginza's neon sits three train stops from a 400-year-old imperial garden.",
    history:
      "Founded as the fishing village of Edo, the city became the seat of the Tokugawa shogunate in 1603, growing into one of the largest cities on Earth by the 18th century entirely under a policy of national isolation. Renamed Tokyo ('Eastern Capital') with the 1868 Meiji Restoration, it was leveled twice in the 20th century — by the 1923 Great Kanto earthquake and by Allied firebombing in 1945 — and rebuilt each time into a denser, more vertical city.",
    architecture:
      "A layered skyline: the low wooden machiya of old shitamachi neighborhoods, Meiji-era brick survivors like Tokyo Station, Kenzo Tange's Metabolist landmarks, and a forest of contemporary towers engineered against earthquakes with tuned mass dampers and base isolation.",
    traditionalCulture:
      "Senso-ji temple still draws worshippers through Asakusa's Kaminarimon gate every morning; sumo tournaments fill Ryogoku Kokugikan three times a year; the Tsukiji outer market carries on the city's centuries-old relationship with the sea even after the wholesale auction moved to Toyosu.",
    modernCulture:
      "Shibuya and Harajuku set fashion cycles that ripple out across Asia; Akihabara is the physical home of anime and gaming otaku culture; a dense, genuinely world-class restaurant scene spans everything from ¥300 standing-bar ramen to more Michelin stars than any other city.",
    bestSeason: ["spring", "autumn"],
    nightlife:
      "Golden Gai's 200-odd matchbox bars in Shinjuku, the elevated hum of Shibuya's Center Gai, and Roppongi's late-night scene for visitors — most neighborhoods have their own distinct after-dark character rather than one central strip.",
    transportation:
      "One of the densest, most punctual rail networks in the world — JR Yamanote loop line plus Tokyo Metro and Toei subway make almost anywhere reachable without a car; an IC card (Suica/Pasmo) covers trains, buses and convenience stores alike.",
    facts: [
      "Tokyo's metro area is the most populous in the world.",
      "The Tsukiji-to-Toyosu fish market handles over 1,000 metric tons of seafood a day.",
      "Shinjuku Station is used by roughly 3.5 million passengers daily, the busiest station on Earth.",
      "Tokyo has been rebuilt substantially at least twice in the last century.",
    ],
    attractions: [
      { id: "senso-ji", name: "Senso-ji", category: "temple", description: "Tokyo's oldest temple, founded in 645, reached through the Kaminarimon 'Thunder Gate' and a market street of traditional snacks.", tip: "Arrive before 8am to see the grounds without the crowds." },
      { id: "meiji-jingu", name: "Meiji Shrine", category: "shrine", description: "A Shinto shrine set inside a 700,000-tree forest planted by volunteers a century ago, dedicated to Emperor Meiji and Empress Shoken.", tip: "Weekend mornings sometimes feature traditional Shinto weddings near the main hall." },
      { id: "teamlab", name: "teamLab Planets / Borderless", category: "museum", description: "Immersive digital art museums where rooms respond to visitors' movement — walk barefoot through mirrored infinity rooms and knee-deep water.", tip: "Book tickets online weeks ahead; they routinely sell out." },
      { id: "shibuya-crossing", name: "Shibuya Crossing", category: "landmark", description: "The world's busiest pedestrian scramble, with up to 3,000 people crossing at once under a wall of video screens.", tip: "Get the view from the Starbucks or Shibuya Sky observation deck above." },
      { id: "shinjuku-gyoen", name: "Shinjuku Gyoen", category: "nature", description: "A 58-hectare park blending French formal, English landscape and traditional Japanese garden styles, a former imperial estate.", tip: "One of Tokyo's best hanami spots, but no alcohol is allowed, unlike most city parks." },
    ],
    food: [
      { id: "sushi", name: "Edomae sushi", jp: "江戸前寿司", description: "Tokyo's own sushi style, developed as Edo-period fast food using vinegared rice and fish cured or aged before serving." },
      { id: "monjayaki", name: "Monjayaki", jp: "もんじゃ焼き", description: "A runnier cousin of okonomiyaki native to Tsukishima, cooked on a communal griddle and eaten straight off it with tiny spatulas." },
      { id: "soba", name: "Edo soba", jp: "江戸そば", description: "Buckwheat noodles served chilled with a concentrated dipping sauce — a fast, everyday meal since the 18th century." },
    ],
    hiddenGems: [
      "Yanaka Ginza — a shitamachi shopping street that survived the 1923 earthquake and 1945 bombing largely intact.",
      "Nezu Shrine's tunnel of hundreds of vermillion torii gates, far quieter than Kyoto's Fushimi Inari.",
      "Shimokitazawa's vintage shops and small live-music venues, a favorite of Tokyo's own creative class.",
    ],
    photographySpots: [
      "Shibuya Sky at golden hour, looking toward Mount Fuji on clear winter days.",
      "The Asakusa riverside with Tokyo Skytree framed behind Senso-ji's pagoda.",
      "Omoide Yokocho's lantern-lit alleys in Shinjuku after dark.",
    ],
    travelTips: [
      "Buy a Suica or Pasmo IC card on arrival — it works on nearly all transit and at convenience stores.",
      "Most restaurants are cash-friendly but carry some cash for smaller izakaya.",
      "Rush hour (7:30–9:30am) on the Yamanote and subway lines is genuinely intense — plan around it if possible.",
    ],
    nearby: ["yokohama", "kamakura", "hakone", "nikko"],
    itinerary: [
      { day: 1, plan: "Asakusa and Senso-ji in the morning, Ueno's museums after lunch, Akihabara at night." },
      { day: 2, plan: "Meiji Shrine at opening, Harajuku's Takeshita Street, Shibuya Crossing and Shibuya Sky at dusk." },
      { day: 3, plan: "Tsukiji outer market breakfast, teamLab, Odaiba waterfront, Shinjuku's Golden Gai in the evening." },
    ],
  },
  {
    id: "kyoto",
    slug: "kyoto",
    name: "Kyoto",
    jp: "京都",
    region: "Kansai",
    tagline: "Japan's imperial capital for over a thousand years, and its spiritual one still",
    founded: "794 (as Heian-kyo)",
    population: "≈1.46 million",
    heroImage: img("kyoto-hero"),
    galleryImages: [img("kyoto-1"), img("kyoto-2"), img("kyoto-3"), img("kyoto-4")],
    coordinates: { x: 48, y: 63 },
    intro:
      "Kyoto served as Japan's capital from 794 until 1868, and it wears that history openly: over 1,600 Buddhist temples and 400 Shinto shrines, largely spared from WWII bombing, sit inside a modern, workaday city.",
    history:
      "Established as Heian-kyo on a Chinese-inspired grid plan, Kyoto was the imperial seat through the Heian, Muromachi and much of the Edo periods, developing the refined court culture — poetry, calligraphy, incense ceremony — that still defines 'classical' Japanese aesthetics. The capital moved to Tokyo in 1868, and Kyoto's historic core was deliberately left off Allied bombing target lists during WWII.",
    architecture:
      "Machiya townhouses with narrow street frontages and deep interiors, Zen temple complexes built around dry rock gardens, and the layered wooden geometry of temples like Kiyomizu-dera, built without a single nail.",
    traditionalCulture:
      "The geisha (geiko) district of Gion still operates by its centuries-old apprenticeship system; tea ceremony schools headquartered here trace direct lineages to Sen no Rikyu; Nishijin weaving has produced kimono textiles for over 1,200 years.",
    modernCulture:
      "A university city — Kyoto University's research culture coexists with a design and craft scene that reinterprets traditional techniques (lacquerware, ceramics, textiles) for contemporary use; Nintendo was founded here in 1889, originally making hanafuda playing cards.",
    bestSeason: ["spring", "autumn"],
    nightlife:
      "Quieter and more intimate than Tokyo's — Pontocho's riverside alley of restaurants and bars, and small standing-bar streets around Kiyamachi, rather than large entertainment districts.",
    transportation:
      "A compact bus network covers most temples; the city is genuinely walkable and increasingly popular for cycling; a JR line and two subway lines connect to the outskirts and to Osaka in under an hour.",
    facts: [
      "Kyoto has 17 UNESCO World Heritage sites within and around the city.",
      "It served as Japan's capital for over 1,000 years, longer than any other city.",
      "Kinkaku-ji's pavilion is covered in genuine gold leaf, rebuilt after a 1950 arson fire.",
      "Nintendo's original 1889 headquarters building still stands in the city.",
    ],
    attractions: [
      { id: "fushimi-inari", name: "Fushimi Inari Taisha", category: "shrine", description: "Thousands of vermillion torii gates climb Mount Inari, each donated by a business seeking prosperity.", tip: "Most visitors turn back after 20 minutes — hike further up for near-empty paths." },
      { id: "kinkaku-ji", name: "Kinkaku-ji (Golden Pavilion)", category: "temple", description: "A gold-leaf-covered Zen temple reflected in a still pond, originally built as a shogun's retirement villa in 1397.", tip: "Photograph from the pond's edge in early morning light for the classic reflection shot." },
      { id: "arashiyama", name: "Arashiyama Bamboo Grove", category: "nature", description: "A towering bamboo corridor on Kyoto's western edge, adjoining Tenryu-ji temple's UNESCO-listed garden.", tip: "Combine with the nearby Monkey Park for city views over the grove." },
      { id: "kiyomizu-dera", name: "Kiyomizu-dera", category: "temple", description: "A wooden temple stage built on a hillside without nails, offering sweeping views over Kyoto below.", tip: "The approach streets, Sannen-zaka and Ninen-zaka, are preserved Edo-period shopping lanes worth slowing down for." },
      { id: "gion", name: "Gion District", category: "district", description: "Kyoto's most famous geiko and maiko district, with preserved teahouses lining Hanamikoji Street.", tip: "Chasing or photographing geiko in the street is now restricted by local ordinance — be respectful." },
    ],
    food: [
      { id: "kaiseki", name: "Kaiseki", jp: "懐石料理", description: "A multi-course haute cuisine tradition rooted in tea-ceremony hospitality, built around the season's best ingredients." },
      { id: "yudofu", name: "Yudofu", jp: "湯豆腐", description: "Simmered tofu, a temple-cuisine staple born from Kyoto's historically excellent tofu-making water." },
      { id: "matcha-sweets", name: "Uji matcha sweets", jp: "宇治抹茶", description: "Kyoto's nearby Uji region has produced some of Japan's finest matcha for centuries, used in everything from parfaits to warabimochi." },
    ],
    hiddenGems: [
      "Philosopher's Path at dawn, before the tour groups arrive.",
      "Shisen-do, a quiet hillside temple garden almost never crowded.",
      "The Kyoto International Manga Museum, housed in a converted 1929 elementary school.",
    ],
    photographySpots: [
      "The tunnel of torii gates at Fushimi Inari before 7am.",
      "Sannen-zaka's stone steps leading up to Kiyomizu-dera's pagoda.",
      "Arashiyama's bamboo grove in soft overcast light.",
    ],
    travelTips: [
      "A one- or two-day bus pass pays for itself after 3–4 rides.",
      "Book kaiseki dinners in advance — the best counters seat only a handful of guests.",
      "Many temples close their gates by 5pm; check hours before planning a route.",
    ],
    nearby: ["osaka", "nara", "kanazawa"],
    itinerary: [
      { day: 1, plan: "Fushimi Inari at sunrise, Kyoto Station's rooftop, Gion and Pontocho at night." },
      { day: 2, plan: "Arashiyama bamboo grove and Tenryu-ji, then Kinkaku-ji and Ryoan-ji's rock garden." },
      { day: 3, plan: "Higashiyama district on foot — Kiyomizu-dera down through Sannen-zaka to Yasaka Shrine." },
    ],
  },
  {
    id: "osaka",
    slug: "osaka",
    name: "Osaka",
    jp: "大阪",
    region: "Kansai",
    tagline: "The nation's kitchen, and its most unpretentious big city",
    founded: "Settled since antiquity; rose as a merchant city in the 16th century",
    population: "≈2.75 million (city), ≈19 million (metro)",
    heroImage: img("osaka-hero"),
    galleryImages: [img("osaka-1"), img("osaka-2"), img("osaka-3"), img("osaka-4")],
    coordinates: { x: 47, y: 66 },
    intro:
      "Osaka built its identity as a merchant city under Toyotomi Hideyoshi, and it has stayed proudly commercial and food-obsessed ever since — locals greet each other not with 'how are you' but with 'mokarimakka', roughly 'making money?'",
    history:
      "Hideyoshi built Osaka Castle in 1583 to anchor his rule, and the surrounding city grew into Japan's rice and commodity trading hub — the Dojima Rice Exchange is considered a forerunner of modern futures markets. Heavily bombed in WWII, it rebuilt as an industrial and commercial powerhouse distinct from Tokyo's bureaucratic identity.",
    architecture:
      "A reconstructed concrete Osaka Castle keep sits atop massive Edo-period stone ramparts; the Dotonbori canal district is a wall of oversized, illuminated signage that's become architecture in its own right; Umeda's Sky Building links twin towers with a floating garden observatory.",
    traditionalCulture:
      "Bunraku puppet theatre and a distinct comic tradition (manzai) both trace roots to Osaka; the city's merchant-class history shaped a culture that prizes wit, bargaining and hospitality over formality.",
    modernCulture:
      "Japan's stand-up-comedy capital, home to the Yoshimoto Kogyo talent agency; Universal Studios Japan draws visitors citywide; a street-food culture (takoyaki, okonomiyaki, kushikatsu) that locals treat as a point of civic pride.",
    bestSeason: ["spring", "autumn"],
    nightlife:
      "Dotonbori and Namba run late with izakaya, karaoke and bars stacked vertically in narrow buildings; Shinsekai's retro-futurist streets built around the 1912 Tsutenkaku tower add a rougher, nostalgic edge.",
    transportation:
      "A dense subway and JR loop line network; Kansai International Airport connects directly by rail; the city is a natural base for day trips to Kyoto and Nara, both under an hour away.",
    facts: [
      "Osaka Castle's current keep is a 1931 concrete reconstruction; the original burned in 1615.",
      "The Dojima Rice Exchange, established in the 1730s, is regarded as one of the world's first organized futures markets.",
      "Osaka is considered the birthplace of Japan's modern stand-up comedy tradition, manzai.",
      "Takoyaki, the octopus-filled batter ball, was invented in Osaka in the 1930s.",
    ],
    attractions: [
      { id: "osaka-castle", name: "Osaka Castle", category: "castle", description: "A reconstructed keep atop the original Edo-period stone base, set in a park famous for cherry blossoms.", tip: "The museum inside is skippable if short on time — the grounds and moat views are the real draw." },
      { id: "dotonbori", name: "Dotonbori", category: "district", description: "A canalside strip of oversized illuminated signage — the running Glico Man is the city's unofficial mascot.", tip: "Eat standing at a takoyaki stall rather than a sit-down restaurant here — it's the authentic way." },
      { id: "shitennoji", name: "Shitenno-ji", category: "temple", description: "One of Japan's oldest officially administered temples, founded in 593 by Prince Shotoku.", tip: "Its flea market on the 21st and 22nd of each month is a local institution." },
      { id: "umeda-sky", name: "Umeda Sky Building", category: "landmark", description: "Two towers connected by a 'floating garden' observatory 170 meters up, with an open-air rooftop deck.", tip: "Go at sunset to see the city lights come on from above." },
      { id: "kuromon", name: "Kuromon Ichiba Market", category: "district", description: "A 190-year-old covered market known as 'Osaka's Kitchen,' full of stalls selling fresh seafood to eat on the spot.", tip: "Go hungry — this is a grazing market, not a sit-down meal." },
    ],
    food: [
      { id: "takoyaki", name: "Takoyaki", jp: "たこ焼き", description: "Ball-shaped batter snacks filled with diced octopus, invented in Osaka and now a nationwide street food." },
      { id: "okonomiyaki", name: "Okonomiyaki", jp: "お好み焼き", description: "A savory cabbage-and-batter pancake cooked on a griddle, often at the table, topped with sauce, mayo and bonito flakes." },
      { id: "kushikatsu", name: "Kushikatsu", jp: "串カツ", description: "Skewered, breaded and deep-fried meat and vegetables, eaten in Shinsekai under one strict rule: no double-dipping the sauce." },
    ],
    hiddenGems: [
      "Nakazakicho, a pocket of retro cafes near Umeda largely missed by tourists.",
      "Shinsekai after dark, lit by Tsutenkaku's tower lights and kushikatsu shop signs.",
      "Tempozan Ferris wheel at the harbor, with views toward Kobe on clear days.",
    ],
    photographySpots: [
      "Dotonbori canal at night with the Glico sign reflected in the water.",
      "Osaka Castle's keep framed through cherry blossoms in early April.",
      "Shinsekai's Tsutenkaku tower from the retro shopping streets below.",
    ],
    travelTips: [
      "The Osaka Amazing Pass covers transit plus free entry to dozens of attractions — worth it for a packed day.",
      "Bargaining, once common in shotengai markets, has faded but a friendly ask still occasionally works.",
      "Osaka is a genuinely efficient base for Kyoto and Nara day trips if you'd rather stay in one hotel.",
    ],
    nearby: ["kyoto", "nara"],
    itinerary: [
      { day: 1, plan: "Osaka Castle in the morning, Kuromon Market for lunch, Dotonbori and Shinsaibashi at night." },
      { day: 2, plan: "Umeda Sky Building, Nakazakicho cafes, Shinsekai and Tsutenkaku after dark." },
    ],
  },
  {
    id: "nara",
    slug: "nara",
    name: "Nara",
    jp: "奈良",
    region: "Kansai",
    tagline: "Japan's first permanent capital, where 1,300 deer roam freely",
    founded: "710 (as Heijo-kyo)",
    population: "≈352,000",
    heroImage: img("nara-hero"),
    galleryImages: [img("nara-1"), img("nara-2"), img("nara-3"), img("nara-4")],
    coordinates: { x: 49, y: 65 },
    intro:
      "Nara was Japan's first fixed capital, built in 710 in imitation of the Tang Chinese capital Chang'an. It lasted only 74 years as the seat of government, but that brief window produced some of Japan's oldest surviving wooden architecture.",
    history:
      "The Nara period (710–794) saw Buddhism formally adopted as a state religion, with the Emperor Shomu commissioning Todai-ji's Great Buddha as a national protective project. The capital relocated to Kyoto in 794 partly to escape the growing political power of Nara's Buddhist temples — but those temples, and the city around them, remained.",
    architecture:
      "Todai-ji's Great Buddha Hall is among the largest wooden buildings on Earth despite being a smaller 1692 reconstruction of the original; the nearby Horyu-ji temple complex contains the oldest surviving wooden structures in the world, dating to around 700.",
    traditionalCulture:
      "Kasuga Taisha's 3,000 stone and bronze lanterns are lit twice a year in the Mantoro festival; Nara's deer, considered messengers of the shrine's deity, have shaped local etiquette (a bow can get one to bow back) for centuries.",
    modernCulture:
      "A smaller, slower city than Kyoto or Osaka, largely built around preservation and day-trip tourism rather than nightlife or industry; craft traditions in ink (sumi) and writing brushes persist here.",
    bestSeason: ["spring", "autumn"],
    nightlife:
      "Minimal — Nara is best experienced as a day trip or an early-evening stay, with a few quiet izakaya near the station rather than a real nightlife district.",
    transportation:
      "Easily reached from Kyoto (45 min) or Osaka (35–45 min) by train; the historic core around Nara Park is entirely walkable.",
    facts: [
      "Todai-ji's Great Buddha (Daibutsu) is roughly 15 meters tall and cast from an estimated 500 tons of bronze.",
      "Nara's deer are legally protected as natural monuments and roam freely through the city center.",
      "Horyu-ji contains structures believed to be the oldest wooden buildings in the world.",
      "Nara served as Japan's capital for just 74 years before the court relocated to Kyoto.",
    ],
    attractions: [
      { id: "todai-ji", name: "Todai-ji", category: "temple", description: "Home to Japan's largest bronze Buddha statue, housed in what remains one of the world's largest wooden buildings.", tip: "One pillar has a hole said to match the Buddha's nostril — squeezing through it is said to bring enlightenment." },
      { id: "nara-park", name: "Nara Park", category: "nature", description: "A 660-hectare park where over 1,000 wild sika deer roam freely and will bow for deer crackers.", tip: "Hold crackers away from your body — enthusiastic deer are not always gentle." },
      { id: "kasuga-taisha", name: "Kasuga Taisha", category: "shrine", description: "A vermillion Shinto shrine founded in 768, famous for its thousands of bronze and stone lanterns donated over centuries.", tip: "Walk the moss-lined approach path early for the best light through the cedar forest." },
      { id: "horyu-ji", name: "Horyu-ji", category: "temple", description: "A temple complex on Nara's outskirts containing the oldest wooden buildings in the world, founded by Prince Shotoku around 607.", tip: "Less crowded than central Nara — worth the short train ride for the significance alone." },
    ],
    food: [
      { id: "kakinoha-zushi", name: "Kakinoha-zushi", jp: "柿の葉寿司", description: "Pressed mackerel or salmon sushi wrapped in persimmon leaves, developed inland where fresh fish once had to travel." },
      { id: "chagayu", name: "Nara-zuke & chagayu", jp: "奈良漬・茶粥", description: "Vegetables pickled in sake lees alongside a simple rice porridge brewed with tea — humble, ancient temple-town staples." },
    ],
    hiddenGems: [
      "Naramachi's preserved merchant quarter, quieter than the deer park but full of small craft shops.",
      "Mount Wakakusa at dusk, above the crowds, with the whole park visible below.",
      "Isuien Garden, a lesser-visited Meiji-era strolling garden beside Todai-ji.",
    ],
    photographySpots: [
      "Kasuga Taisha's lantern-lined stone path in the cedar forest.",
      "Deer resting beneath the five-story pagoda at Kofuku-ji.",
      "Todai-ji's Nandaimon gate framed against Mount Wakakusa.",
    ],
    travelTips: [
      "Buy deer crackers only from official stalls — vendors sell them wrapped, feed them unwrapped.",
      "Nara works well as a half- or full-day trip from Kyoto or Osaka rather than requiring an overnight stay.",
      "Visit Todai-ji before 9:30am to beat both crowds and the day's heat in summer.",
    ],
    nearby: ["kyoto", "osaka"],
    itinerary: [
      { day: 1, plan: "Todai-ji and the Great Buddha at opening, Nara Park deer, Kasuga Taisha, Naramachi in the afternoon." },
    ],
  },
  {
    id: "hiroshima",
    slug: "hiroshima",
    name: "Hiroshima",
    jp: "広島",
    region: "Chugoku",
    tagline: "A city that turned devastation into a global message of peace",
    founded: "1589",
    population: "≈1.2 million",
    heroImage: img("hiroshima-hero"),
    galleryImages: [img("hiroshima-1"), img("hiroshima-2"), img("hiroshima-3"), img("hiroshima-4")],
    coordinates: { x: 32, y: 71 },
    intro:
      "Hiroshima was destroyed by the first atomic bomb used in warfare on August 6, 1945. It rebuilt as a modern, green city organized around the Peace Memorial Park — a deliberate act of remembrance and a working, everyday city at once.",
    history:
      "Founded in 1589 by feudal lord Mori Terumoto around Hiroshima Castle, the city grew into a regional military and industrial center — which is precisely why it was selected as an atomic bomb target in 1945. An estimated 140,000 people died by the end of that year from the bombing. Reconstruction began almost immediately, and the city was formally rebuilt as a 'City of Peace.'",
    architecture:
      "The Atomic Bomb Dome, the skeletal ruin of the former Industrial Promotion Hall, was preserved exactly as it stood at ground zero as a UNESCO World Heritage site; the rebuilt Hiroshima Castle is a 1958 concrete reconstruction of the 16th-century original.",
    traditionalCulture:
      "Miyajima's Itsukushima Shrine, a short ferry ride away, has stood on the same tidal site since the 6th century, its 'floating' torii gate among Japan's most photographed images.",
    modernCulture:
      "A well-regarded contemporary food and craft scene, an active pro-peace civic culture built around annual August 6th commemorations, and a beloved local baseball team, the Hiroshima Toyo Carp.",
    bestSeason: ["spring", "autumn"],
    nightlife:
      "Nagarekawa is the main entertainment district, with a dense concentration of izakaya, bars and okonomiyaki restaurants stacked in narrow buildings.",
    transportation:
      "A historic streetcar (tram) network — some cars dating to before WWII — still runs through the city center alongside a modern network; a ferry connects directly to Miyajima island.",
    facts: [
      "The Atomic Bomb Dome has been deliberately preserved unrepaired since 1945 as a permanent memorial.",
      "Hiroshima's streetcar network includes trams that survived the atomic bombing and remain in service today.",
      "Miyajima's Itsukushima Shrine has been rebuilt on the same site roughly every 30–60 years for over a millennium.",
      "Okonomiyaki-mura, a single building of over 20 stacked okonomiyaki stalls, is a Hiroshima institution.",
    ],
    attractions: [
      { id: "peace-park", name: "Peace Memorial Park & Museum", category: "landmark", description: "A memorial park and museum documenting the atomic bombing and advocating for global nuclear disarmament.", tip: "Allow at least two hours for the museum — it is dense and emotionally heavy by design." },
      { id: "genbaku-dome", name: "Atomic Bomb Dome", category: "landmark", description: "The preserved ruin of the former Industrial Promotion Hall, left standing near the bomb's hypocenter as it was in 1945.", tip: "The riverside view at dusk, lights reflected in the water, is quietly powerful." },
      { id: "itsukushima", name: "Itsukushima Shrine, Miyajima", category: "shrine", description: "A shrine built over the water on Miyajima island, famous for its vermillion torii gate that appears to float at high tide.", tip: "Check tide tables — the gate looks entirely different (and walkable to) at low tide." },
      { id: "hiroshima-castle", name: "Hiroshima Castle", category: "castle", description: "A rebuilt concrete keep on the original 16th-century foundations, housing a museum on the city's samurai-era history.", tip: "The castle grounds are a quieter, less crowded cherry blossom spot than most of the city." },
    ],
    food: [
      { id: "hiroshima-okonomiyaki", name: "Hiroshima-style okonomiyaki", jp: "広島風お好み焼き", description: "Built in distinct layers with noodles and a mountain of cabbage, cooked and served directly on the griddle — locals insist it's a different dish entirely from Osaka's version." },
      { id: "oysters", name: "Hiroshima oysters", jp: "広島牡蠣", description: "The bay produces roughly 60% of Japan's farmed oysters, served grilled, fried or raw across the city." },
    ],
    hiddenGems: [
      "Shukkei-en Garden, a compact Edo-period landscape garden that survived and was later restored.",
      "Miyajima's quieter mountain trails up Mount Misen, away from the shrine crowds.",
      "The Hiroshima Toyo Carp's home stadium, MAZDA Zoom-Zoom Stadium, for a genuinely local evening out.",
    ],
    photographySpots: [
      "The Atomic Bomb Dome reflected in the Motoyasu River at dusk.",
      "Itsukushima's floating torii gate at high tide, ideally at sunset.",
      "The view over Miyajima and the Inland Sea from Mount Misen's summit.",
    ],
    travelTips: [
      "Miyajima is a straightforward half-day trip by ferry — combine it with a Hiroshima city morning.",
      "The Peace Memorial Museum is intense; pace your day around it rather than rushing straight to Miyajima after.",
      "A one-day streetcar pass is inexpensive and covers most central sightseeing.",
    ],
    nearby: [],
    itinerary: [
      { day: 1, plan: "Peace Memorial Park and Museum in the morning, Atomic Bomb Dome, Nagarekawa for dinner." },
      { day: 2, plan: "Ferry to Miyajima, Itsukushima Shrine, hike or ropeway up Mount Misen." },
    ],
  },
  {
    id: "sapporo",
    slug: "sapporo",
    name: "Sapporo",
    jp: "札幌",
    region: "Hokkaido",
    tagline: "A planned northern city built for snow, beer and open space",
    founded: "1868 (formally planned in 1871)",
    population: "≈1.97 million",
    heroImage: img("sapporo-hero"),
    galleryImages: [img("sapporo-1"), img("sapporo-2"), img("sapporo-3"), img("sapporo-4")],
    coordinates: { x: 68, y: 15 },
    intro:
      "Sapporo is young by Japanese standards — a grid-planned city built from scratch in the 1870s to develop and defend Hokkaido's frontier. That planned layout, wide streets and heavy snowfall give it a character unlike any city further south.",
    history:
      "Meiji-era Japan established the Hokkaido Development Commission in 1869, hiring American and European advisors to plan Sapporo on a North American-style grid — a rarity in Japanese urban planning. The city hosted the 1972 Winter Olympics, cementing its identity around winter sport and events.",
    architecture:
      "Wide, grid-straight boulevards unusual for Japan; the wooden Clock Tower (1878), one of the few remaining Western-style buildings from the city's founding; the futuristic red steel Sapporo TV Tower anchoring Odori Park.",
    traditionalCulture:
      "Hokkaido was historically Ainu land, and Sapporo hosts Ainu cultural exhibits and events acknowledging that indigenous heritage, distinct from mainland Japanese tradition.",
    modernCulture:
      "Home to the Sapporo Beer brewery, founded in 1876 as Japan's first brewery; the Sapporo Snow Festival each February draws over two million visitors to see enormous snow and ice sculptures across Odori Park.",
    bestSeason: ["winter", "summer"],
    nightlife:
      "Susukino is one of Japan's largest entertainment districts north of Tokyo — dense with ramen shops (Ramen Yokocho alley in particular), izakaya and bars.",
    transportation:
      "A compact subway network plus an underground pedestrian concourse connecting Sapporo Station to Susukino, essential during heavy snow; New Chitose Airport is about 40 minutes away by rail.",
    facts: [
      "Sapporo was purpose-built on a North American-style grid, unusual among Japanese cities.",
      "It hosted the 1972 Winter Olympics, the first held in Asia.",
      "The Sapporo Snow Festival features sculptures that can reach over 15 meters tall.",
      "Sapporo Beer, founded 1876, was Japan's first brewery.",
    ],
    attractions: [
      { id: "odori-park", name: "Odori Park", category: "landmark", description: "A 1.5km green boulevard through the city center, host to the Snow Festival in winter and a beer garden in summer.", tip: "Climb the TV Tower at the park's east end for a full view down its length." },
      { id: "clock-tower", name: "Sapporo Clock Tower", category: "landmark", description: "A wooden 1878 building, one of the last visible remnants of the city's Meiji-era founding, now a small museum.", tip: "It's smaller in person than photos suggest — set expectations accordingly." },
      { id: "shiroi-koibito", name: "Shiroi Koibito Park", category: "museum", description: "A whimsical chocolate-factory theme park built around Hokkaido's famous Shiroi Koibito cookie, with a European-style garden.", tip: "Better for families or a rainy-day break than a must-see landmark." },
      { id: "moerenuma", name: "Moerenuma Park", category: "nature", description: "A former waste landfill transformed by sculptor Isamu Noguchi into a geometric land-art park, his final major work.", tip: "It's outside the center — a worthwhile half-day for design and architecture fans." },
    ],
    food: [
      { id: "miso-ramen", name: "Sapporo miso ramen", jp: "札幌味噌ラーメン", description: "The city where miso-broth ramen was popularized, rich and hearty to stand up to Hokkaido winters." },
      { id: "jingisukan", name: "Jingisukan (Genghis Khan)", jp: "ジンギスカン", description: "Grilled lamb and mutton cooked table-side on a domed skillet with vegetables — a Hokkaido specialty named, loosely, for Genghis Khan." },
      { id: "hokkaido-dairy", name: "Hokkaido dairy & seafood", jp: "北海道の乳製品と海鮮", description: "Hokkaido's cool climate makes it Japan's dairy heartland, alongside some of the country's best uni, crab and scallops." },
    ],
    hiddenGems: [
      "Nijo Market, a compact fish market a few blocks from Odori, quieter than the main tourist stalls.",
      "Maruyama Park and its adjoining primeval forest shrine, a short subway ride from downtown.",
      "The underground Chika-ho pedestrian walkway during a snowstorm — a genuinely useful piece of civic design.",
    ],
    photographySpots: [
      "Odori Park's illuminated snow sculptures during the February festival.",
      "The Clock Tower against fresh snowfall.",
      "Moerenuma Park's glass pyramid at sunset.",
    ],
    travelTips: [
      "Pack for serious cold — Sapporo winters regularly drop well below freezing with heavy snow.",
      "Book Snow Festival accommodation many months ahead; it is the city's single busiest week.",
      "The underground concourse between the station and Susukino is worth using in winter to avoid surface ice.",
    ],
    nearby: [],
    itinerary: [
      { day: 1, plan: "Odori Park and Clock Tower, Nijo Market lunch, Susukino's Ramen Yokocho for dinner." },
      { day: 2, plan: "Moerenuma Park in daylight, Sapporo Beer Museum, Maruyama Park in the afternoon." },
    ],
  },
  {
    id: "fukuoka",
    slug: "fukuoka",
    name: "Fukuoka",
    jp: "福岡",
    region: "Kyushu",
    tagline: "Japan's gateway to Asia, and its most livable big city",
    founded: "Merged from Fukuoka and Hakata in 1889",
    population: "≈1.63 million",
    heroImage: img("fukuoka-hero"),
    galleryImages: [img("fukuoka-1"), img("fukuoka-2"), img("fukuoka-3"), img("fukuoka-4")],
    coordinates: { x: 22, y: 68 },
    intro:
      "Fukuoka sits closer to Seoul than to Tokyo, and its history as a trading gateway to the Asian continent still shapes the city — a compact, easygoing metropolis regularly ranked among the world's most livable.",
    history:
      "Originally two adjacent cities — merchant Hakata and castle-town Fukuoka — merged in 1889 under the Fukuoka name after a close local vote. The port at Hakata Bay was Japan's primary point of contact with Korea and China for centuries, including as the landing site of the failed 13th-century Mongol invasions.",
    architecture:
      "Fukuoka Tower's mirrored glass facade over the Momochi waterfront; the reconstructed stone base of Fukuoka Castle; the striking stepped, plant-covered ACROS Fukuoka building integrating architecture directly with a public park.",
    traditionalCulture:
      "The Hakata Gion Yamakasa festival each July sends teams racing through the streets carrying one-ton decorated floats; Hakata ningyo clay dolls and Hakata-ori woven textiles are centuries-old local crafts.",
    modernCulture:
      "A growing startup and tech hub encouraged by favorable city policy; a beloved local baseball and basketball sports culture; famously the origin city of tonkotsu ramen and yatai street-food stall culture.",
    bestSeason: ["spring", "autumn"],
    nightlife:
      "Nakasu island's yatai (open-air food stall) rows are the city's signature night-time experience, alongside Tenjin's denser bar and restaurant district.",
    transportation:
      "One of Japan's most compact major cities — the airport is a five-minute subway ride from downtown, unusually close for a city of its size.",
    facts: [
      "Fukuoka Airport is one of the closest major airports to a city center in the world.",
      "Tonkotsu ramen, the rich pork-bone broth style now found worldwide, originated in Hakata.",
      "The city was formed by merging two historic rival towns, Hakata and Fukuoka, in 1889.",
      "Fukuoka has ranked among the top cities globally in livability and startup-friendliness surveys.",
    ],
    attractions: [
      { id: "yatai", name: "Nakasu & Tenjin Yatai Stalls", category: "district", description: "Open-air food stalls that set up nightly along the river and downtown streets, seating a handful of diners each.", tip: "Order a light dish at your first stall — hopping between two or three yatai in one night is the local way." },
      { id: "dazaifu", name: "Dazaifu Tenmangu", category: "shrine", description: "A shrine dedicated to the deified scholar Sugawara no Michizane, a major pilgrimage site for students before exams.", tip: "The approach street's plum-blossom sweets, umegae mochi, are a local specialty worth trying." },
      { id: "ohori-park", name: "Ohori Park", category: "nature", description: "A large pond-centered park built on the former outer moat of Fukuoka Castle, with an adjoining Japanese garden.", tip: "Rent a rowboat on the pond for a slower-paced afternoon." },
      { id: "canal-city", name: "Canal City Hakata", category: "landmark", description: "A curved, colorful shopping and entertainment complex built around an artificial canal with a choreographed fountain show.", tip: "Time your visit for one of the evening fountain and light shows." },
    ],
    food: [
      { id: "tonkotsu-ramen", name: "Hakata tonkotsu ramen", jp: "博多とんこつラーメン", description: "Thin noodles in a cloudy, pork-bone broth simmered for hours — the style that put Fukuoka on the global ramen map." },
      { id: "motsunabe", name: "Motsunabe", jp: "もつ鍋", description: "A hotpot of beef or pork offal simmered with chives, garlic and cabbage in a miso or soy broth, often finished with noodles." },
      { id: "mentaiko", name: "Mentaiko", jp: "明太子", description: "Spicy marinated pollock roe, a Fukuoka specialty eaten on its own, over rice, or folded into pasta." },
    ],
    hiddenGems: [
      "Yanagibashi Rengo Market, a local seafood market with far fewer tourists than Osaka's Kuromon.",
      "Shofuku-ji, considered the first Zen temple established in Japan, tucked away from the main tourist track.",
      "Uminonakamichi Seaside Park, a flower- and cycling-focused park on a peninsula across the bay.",
    ],
    photographySpots: [
      "Nakasu's riverside yatai stalls lit up after dark.",
      "Fukuoka Tower reflecting the sunset over Momochi Beach.",
      "Dazaifu Tenmangu's plum trees in early spring bloom.",
    ],
    travelTips: [
      "Fukuoka is an efficient base for day trips further into Kyushu, including Yufuin and Beppu's hot springs.",
      "Yatai stalls are cash-friendly and often cash-only — carry small bills.",
      "The city's compact size makes a rental bicycle a genuinely practical way to get around.",
    ],
    nearby: [],
    itinerary: [
      { day: 1, plan: "Dazaifu Tenmangu in the morning, Canal City in the afternoon, Nakasu yatai stalls at night." },
      { day: 2, plan: "Ohori Park and the adjoining garden, Fukuoka Tower and Momochi Beach at sunset." },
    ],
  },
  {
    id: "kanazawa",
    slug: "kanazawa",
    name: "Kanazawa",
    jp: "金沢",
    region: "Chubu",
    tagline: "A castle town spared by war, still gilded in gold leaf",
    founded: "1583 (castle town)",
    population: "≈453,000",
    heroImage: img("kanazawa-hero"),
    galleryImages: [img("kanazawa-1"), img("kanazawa-2"), img("kanazawa-3"), img("kanazawa-4")],
    coordinates: { x: 51, y: 55 },
    intro:
      "Kanazawa was, for over two centuries, the wealthy seat of the Maeda clan, Japan's second-most powerful feudal family after the shogunate itself. Untouched by WWII bombing, its Edo-period districts survive largely intact.",
    history:
      "The Maeda clan built Kanazawa Castle in 1583 and used the domain's enormous rice wealth to patronize arts and crafts rather than military expansion, a deliberate strategy to avoid shogunate suspicion. That patronage produced gold-leaf work, lacquerware, ceramics and Noh theatre traditions that still define the city.",
    architecture:
      "Preserved samurai residences in the Nagamachi district behind traditional earthen walls; the wooden teahouses of the Higashi Chaya geisha district; Kenroku-en, ranked one of Japan's three most beautiful landscape gardens.",
    traditionalCulture:
      "Kanazawa produces roughly 99% of Japan's gold leaf, used on everything from temple roofs to soft-serve ice cream cones sold to tourists; Kutani ceramics and Kaga Yuzen silk dyeing remain active local crafts.",
    modernCulture:
      "The 21st Century Museum of Contemporary Art, with its circular glass building and James Turrell installation, has made Kanazawa a design-tourism destination without displacing its historic core.",
    bestSeason: ["spring", "autumn", "winter"],
    nightlife:
      "Modest and refined rather than lively — small bars in Katamachi, and traditional teahouse experiences in Higashi Chaya for those who book ahead.",
    transportation:
      "Reachable from Tokyo in about 2.5 hours via the Hokuriku Shinkansen since 2015; the historic center is compact and best explored on foot or by loop bus.",
    facts: [
      "Kanazawa produces around 99% of Japan's gold leaf.",
      "Kenroku-en is traditionally ranked as one of Japan's three great landscape gardens.",
      "The city was untouched by WWII bombing, preserving its Edo-period districts intact.",
      "The Hokuriku Shinkansen extension in 2015 cut travel time from Tokyo to under 2.5 hours.",
    ],
    attractions: [
      { id: "kenrokuen", name: "Kenroku-en Garden", category: "nature", description: "A strolling garden completed over nearly two centuries by the Maeda clan, designed to reveal a different composition from every path.", tip: "Visit at dawn for free entry before the ticket gate opens and near-empty paths." },
      { id: "higashi-chaya", name: "Higashi Chaya District", category: "district", description: "A preserved geisha entertainment quarter of wooden latticed teahouses dating to 1820.", tip: "Several teahouses now offer gold-leaf application workshops for visitors." },
      { id: "21st-century-museum", name: "21st Century Museum of Contemporary Art", category: "museum", description: "A circular glass museum with no fixed 'front,' home to Leandro Erlich's famous Swimming Pool installation.", tip: "The Swimming Pool piece often has a long line — go right at opening." },
      { id: "nagamachi", name: "Nagamachi Samurai District", category: "district", description: "Preserved mud-walled lanes where mid-ranking samurai once lived, including the restored Nomura family residence.", tip: "The Nomura residence garden is small but considered one of the finest examples in the city." },
    ],
    food: [
      { id: "kaga-cuisine", name: "Kaga ryori", jp: "加賀料理", description: "The refined regional cuisine of the old Kaga domain, built around Kanazawa's excellent seafood and mountain vegetables." },
      { id: "gold-leaf-sweets", name: "Gold leaf sweets", jp: "金箔スイーツ", description: "Soft-serve, sweets and even sake finished with a sheet of edible gold leaf, a distinctly Kanazawa indulgence." },
      { id: "kaisen-don", name: "Omicho Market kaisen-don", jp: "近江町市場の海鮮丼", description: "Fresh seafood rice bowls sold throughout Kanazawa's 280-year-old Omicho Market, drawing on the Sea of Japan's cold-water catch." },
    ],
    hiddenGems: [
      "Nishi Chaya, a smaller and quieter sister district to Higashi Chaya.",
      "Oyama Shrine's unusual stained-glass and Dutch-influenced gate, built by a Meiji-era architect.",
      "The Kutani Kosen kiln district for ceramics collectors seeking work directly from artisans.",
    ],
    photographySpots: [
      "Kenroku-en's Kotoji-toro stone lantern beside Kasumi-ga-ike pond.",
      "Higashi Chaya's wooden lattice facades in early morning light.",
      "The 21st Century Museum's glass exterior at dusk.",
    ],
    travelTips: [
      "A loop bus pass covers most sights efficiently for a compact one- or two-day visit.",
      "Omicho Market is best for lunch — many stalls wind down by early evening.",
      "Kanazawa pairs naturally with Shirakawa-go and the Japan Alps for a wider Chubu itinerary.",
    ],
    nearby: [],
    itinerary: [
      { day: 1, plan: "Kenroku-en at dawn, Kanazawa Castle Park, Omicho Market for lunch, 21st Century Museum." },
      { day: 2, plan: "Nagamachi samurai district in the morning, Higashi Chaya district and a gold-leaf workshop in the afternoon." },
    ],
  },
  {
    id: "hakone",
    slug: "hakone",
    name: "Hakone",
    jp: "箱根",
    region: "Kanto",
    tagline: "Hot springs, volcanic hills and Mount Fuji views, an hour from Tokyo",
    founded: "Developed as a post town from the early Edo period",
    population: "≈11,000",
    heroImage: img("hakone-hero"),
    galleryImages: [img("hakone-1"), img("hakone-2"), img("hakone-3"), img("hakone-4")],
    coordinates: { x: 63, y: 62 },
    intro:
      "Hakone is a volcanic caldera town turned onsen resort, close enough to Tokyo for a day trip yet feeling entirely removed from it — a landscape of hot springs, mountain lakes and, on clear days, a direct view of Mount Fuji.",
    history:
      "Hakone grew around a checkpoint (sekisho) on the Edo-period Tokaido highway connecting Edo to Kyoto, where travelers and goods were inspected. The checkpoint's reconstruction still stands beside Lake Ashi. The area's onsen culture predates that, with hot springs recorded in use since at least the 8th century.",
    architecture:
      "The reconstructed Hakone Checkpoint recreates the Edo-period inspection station in wood; contemporary ryokan built directly over natural hot spring sources; the Hakone Open-Air Museum, blending sculpture with mountain landscape.",
    traditionalCulture:
      "Ryokan onsen culture here is considered some of the finest in the Kanto region, built around communal bathing etiquette that dates back centuries; yosegi-zaiku marquetry woodwork remains a local craft specialty.",
    modernCulture:
      "A well-developed tourism infrastructure of ropeways, pirate-ship-styled sightseeing boats on Lake Ashi and a mountain railway, all designed to move visitors scenically rather than efficiently.",
    bestSeason: ["autumn", "winter"],
    nightlife:
      "Essentially none in the conventional sense — evenings here center on ryokan dinners and onsen bathing rather than bars or entertainment districts.",
    transportation:
      "The Hakone Tozan switchback mountain railway, a cable car, ropeway and Lake Ashi sightseeing boats connect the region's sights in one scenic, purpose-built loop; roughly 90 minutes from Tokyo by limited express train.",
    facts: [
      "Hakone sits inside the caldera of a volcano that last erupted roughly 3,000 years ago; the Owakudani valley still vents visible sulfurous steam.",
      "The Hakone Tozan Railway includes switchbacks where the train reverses direction to climb the steep grade.",
      "Lake Ashi was formed by that same volcanic activity roughly 3,000 years ago.",
      "The Hakone Open-Air Museum, opened in 1969, was Japan's first open-air sculpture museum.",
    ],
    attractions: [
      { id: "owakudani", name: "Owakudani Valley", category: "nature", description: "An active volcanic valley reachable by ropeway, with sulfurous vents and black eggs boiled in the hot springs, said to add years to your life.", tip: "On clear days, Mount Fuji is visible directly from the ropeway car." },
      { id: "lake-ashi", name: "Lake Ashi", category: "nature", description: "A caldera lake crossed by replica pirate-ship sightseeing boats, with a floating torii gate at Hakone Shrine's shoreline.", tip: "The Hakone Shrine torii is one of the region's most photographed spots, especially at sunrise." },
      { id: "open-air-museum", name: "Hakone Open-Air Museum", category: "museum", description: "A sculpture park set into the hills with an entire pavilion dedicated to Picasso's works.", tip: "There's a foot-bath onsen inside the museum grounds — bring a small towel." },
      { id: "hakone-checkpoint", name: "Hakone Checkpoint", category: "landmark", description: "A reconstructed Edo-period inspection station where travelers on the Tokaido road were once checked for weapons.", tip: "Combine with a walk along the surviving cedar-lined stretch of the old Tokaido highway nearby." },
    ],
    food: [
      { id: "black-eggs", name: "Kuro-tamago (black eggs)", jp: "黒たまご", description: "Eggs boiled in Owakudani's sulfurous hot springs, turning the shells black — a local souvenir food said to extend life by seven years per egg." },
      { id: "soba", name: "Hakone soba", jp: "箱根そば", description: "Mountain-region buckwheat noodles, often served with local mountain vegetables in a simple, warming broth." },
    ],
    hiddenGems: [
      "The preserved cedar-avenue stretch of the old Tokaido road near Moto-Hakone.",
      "Amazake-chaya, a centuries-old teahouse still serving travelers along the old highway.",
      "Gora Park's smaller, quieter French-style garden away from the main tourist loop.",
    ],
    photographySpots: [
      "Hakone Shrine's torii gate rising from Lake Ashi at sunrise.",
      "Owakudani's steaming vents with Mount Fuji behind on a clear day.",
      "The switchback curves of the Hakone Tozan Railway through summer hydrangeas.",
    ],
    travelTips: [
      "The Hakone Free Pass covers the full railway–cable car–ropeway–boat loop plus discounts on museums.",
      "Mount Fuji is only visible on clear days, most common in winter mornings — check forecasts before planning around it.",
      "Book a ryokan with a private or reserved-time onsen bath if traveling with tattoos, still restricted at many public baths.",
    ],
    nearby: ["tokyo", "kamakura"],
    itinerary: [
      { day: 1, plan: "Hakone Open-Air Museum, Gora, cable car and ropeway to Owakudani, boat across Lake Ashi to Hakone Shrine." },
    ],
  },
  {
    id: "nikko",
    slug: "nikko",
    name: "Nikko",
    jp: "日光",
    region: "Kanto",
    tagline: "A mountain shrine town built to glorify the founder of the Tokugawa shogunate",
    founded: "Shrine complex established 1617",
    population: "≈77,000",
    heroImage: img("nikko-hero"),
    galleryImages: [img("nikko-1"), img("nikko-2"), img("nikko-3"), img("nikko-4")],
    coordinates: { x: 63, y: 48 },
    intro:
      "Nikko exists largely because of one building project: the mausoleum shrine of Tokugawa Ieyasu, founder of the shogunate that ruled Japan for 250 years. The result is a lavishly decorated shrine complex set into old-growth cedar forest, unlike almost anywhere else in Japan.",
    history:
      "Tokugawa Ieyasu died in 1616 and was enshrined here a year later; his grandson Iemitsu rebuilt the complex in 1636 on a deliberately opulent scale to project Tokugawa authority. The surrounding cedar avenue, over 35km long and planted in the 1600s, remains one of the longest tree-lined avenues in the world.",
    architecture:
      "Tosho-gu shrine breaks from typically restrained Shinto architecture with dense, colorful carving and gold leaf on nearly every surface, including the famous 'see no evil, hear no evil, speak no evil' monkey carvings.",
    traditionalCulture:
      "A biannual Grand Festival re-enacts the 17th-century procession that once moved Ieyasu's remains, with over a thousand participants in full samurai-era costume.",
    modernCulture:
      "Largely a preservation- and tourism-oriented town today, serving as a gateway to the mountain lakes and hot springs of Nikko National Park.",
    bestSeason: ["autumn", "spring"],
    nightlife:
      "Minimal — most visitors are day-trippers from Tokyo or overnight in onsen ryokan near Lake Chuzenji, well outside conventional nightlife territory.",
    transportation:
      "Roughly two hours from Tokyo by direct Tobu or JR train; local buses connect the shrine complex to Lake Chuzenji and Kegon Falls further up the mountain.",
    facts: [
      "The cedar-lined avenue to Nikko, planted in the 1600s, is recognized by Guinness World Records as the longest tree-lined avenue in the world.",
      "Tosho-gu's carvings include the original 'three wise monkeys' motif that later spread worldwide.",
      "Nikko and its shrines were designated a UNESCO World Heritage Site in 1999.",
      "Lake Chuzenji, above the shrine complex, was formed roughly 20,000 years ago by a volcanic eruption damming a river.",
    ],
    attractions: [
      { id: "toshogu", name: "Tosho-gu Shrine", category: "shrine", description: "The elaborately carved and gilded mausoleum of Tokugawa Ieyasu, breaking sharply from typical Shinto restraint.", tip: "Look up at the ceiling of the Yakushido hall for the famous 'crying dragon,' which echoes distinctly when clapped beneath." },
      { id: "shinkyo", name: "Shinkyo Bridge", category: "landmark", description: "A vermillion sacred bridge over the Daiya River, traditionally the ceremonial entrance to Nikko's shrine district.", tip: "Best photographed from the road bridge just downstream, especially with autumn foliage." },
      { id: "kegon-falls", name: "Kegon Falls", category: "nature", description: "A 97-meter waterfall draining Lake Chuzenji, reachable by an elevator down to a dedicated observation deck.", tip: "Autumn (mid-October) draws large crowds for the foliage — a weekday visit helps." },
      { id: "chuzenji", name: "Lake Chuzenji", category: "nature", description: "A volcanic lake in the mountains above the shrine complex, ringed with onsen ryokan and hiking trails.", tip: "The Irohazaka driving road up to the lake has 48 hairpin turns and is a destination in itself for autumn colors." },
    ],
    food: [
      { id: "yuba", name: "Nikko yuba", jp: "日光ゆば", description: "Fresh tofu skin, a delicate local specialty served in everything from sushi to simple simmered dishes." },
      { id: "shimotsuke-soba", name: "Shimotsuke soba", jp: "下野そば", description: "Regional buckwheat noodles from the surrounding Tochigi countryside, often paired with mountain vegetables." },
    ],
    hiddenGems: [
      "Takino-o Shrine, a quiet forest walk beyond Tosho-gu that most day-trippers skip.",
      "Ryuzu Falls above Lake Chuzenji, smaller and far less crowded than Kegon.",
      "Nikko Tamozawa Imperial Villa, a Meiji-era imperial retreat open to visitors.",
    ],
    photographySpots: [
      "Shinkyo Bridge against autumn maple foliage.",
      "Tosho-gu's Yomeimon Gate, densely carved and gilded.",
      "Kegon Falls from the lower observation deck in autumn.",
    ],
    travelTips: [
      "Nikko can be a long but doable day trip from Tokyo, though an overnight near Lake Chuzenji allows a far less rushed pace.",
      "Autumn foliage (early-to-mid October at the lake, later in the town below) draws heavy weekend crowds — go on a weekday if possible.",
      "A World Heritage combination ticket covers Tosho-gu, Futarasan Shrine and Rinno-ji together.",
    ],
    nearby: ["tokyo"],
    itinerary: [
      { day: 1, plan: "Shinkyo Bridge, Tosho-gu and the shrine complex in the morning, bus up to Lake Chuzenji and Kegon Falls in the afternoon." },
    ],
  },
  {
    id: "kamakura",
    slug: "kamakura",
    name: "Kamakura",
    jp: "鎌倉",
    region: "Kanto",
    tagline: "Japan's first samurai capital, now a seaside town of temples",
    founded: "1185 (as shogunate seat)",
    population: "≈172,000",
    heroImage: img("kamakura-hero"),
    galleryImages: [img("kamakura-1"), img("kamakura-2"), img("kamakura-3"), img("kamakura-4")],
    coordinates: { x: 63, y: 60 },
    intro:
      "Kamakura was Japan's political capital for roughly 150 years starting in 1185, the seat of the country's first shogunate. It's now a low-key coastal town of over a hundred temples and shrines, an easy day trip from Tokyo with a beach town's pace.",
    history:
      "Minamoto no Yoritomo established Japan's first shogunate here in 1185, choosing a naturally defensible site hemmed by hills and sea. The Kamakura period that followed established the samurai class as Japan's ruling power for the next 700 years. The city's political importance faded after the shogunate's fall in 1333, leaving it as a religious and later resort town.",
    architecture:
      "The Great Buddha (Kotoku-in), a 13.4-meter bronze statue cast in 1252 and open-air since a 15th-century tsunami destroyed its hall; Kencho-ji, Japan's oldest Zen training monastery, founded in 1253.",
    traditionalCulture:
      "Kamakura is closely associated with the introduction of Zen Buddhism to Japan's warrior class, and several of its major temples remain active Zen training monasteries today.",
    modernCulture:
      "A beach-town identity has grown up alongside the historic one — Yuigahama beach draws surfers and summer crowds, and Komachi-dori street offers a dense strip of shops and snacks near Tsurugaoka Hachimangu.",
    bestSeason: ["spring", "autumn"],
    nightlife:
      "Quiet — Kamakura is overwhelmingly a day-trip destination, with most restaurants and shops closing by early evening.",
    transportation:
      "About an hour from central Tokyo by JR train; the Enoden, a charming single-track local tram line, connects Kamakura to the coast and Enoshima.",
    facts: [
      "The Kamakura shogunate (1185–1333) was Japan's first, establishing the samurai as the country's ruling class.",
      "The Great Buddha has stood in the open air since a tsunami destroyed its enclosing hall in 1498.",
      "Kamakura has well over 100 temples and shrines within a relatively small area.",
      "The Enoden tram line, opened in 1902, still runs along a single track for much of its route.",
    ],
    attractions: [
      { id: "kotoku-in", name: "Kotoku-in (Great Buddha)", category: "temple", description: "A 13.4-meter, 121-ton bronze Buddha cast in 1252, standing in the open air for over 500 years.", tip: "For a small fee, you can step inside the hollow statue itself." },
      { id: "hasedera", name: "Hase-dera", category: "temple", description: "A hillside temple with sweeping views over Kamakura's coastline and a large wooden Kannon statue.", tip: "The hillside observation deck is one of the best free coastal views in town." },
      { id: "tsurugaoka", name: "Tsurugaoka Hachimangu", category: "shrine", description: "Kamakura's most important shrine, founded by Minamoto no Yoritomo as the spiritual center of his new shogunate.", tip: "The approach avenue, Wakamiya Oji, is lined with cherry trees in spring." },
      { id: "enoshima", name: "Enoshima Island", category: "nature", description: "A small tied island just past Kamakura, reachable by the Enoden tram, with a shrine, sea caves and coastal views.", tip: "Combine with a sunset stop — Enoshima faces west across Sagami Bay toward Mount Fuji." },
    ],
    food: [
      { id: "shirasu-don", name: "Shirasu-don", jp: "しらす丼", description: "A rice bowl topped with tiny local whitebait, raw or boiled, a signature dish of Kamakura's coastline." },
      { id: "kamakura-vegetables", name: "Kamakura vegetables", jp: "鎌倉野菜", description: "A regional pride in small-batch, unusual local vegetable varieties, showcased on menus across the old town." },
    ],
    hiddenGems: [
      "The Daibutsu Hiking Trail, a quiet forest path connecting several temples away from the main streets.",
      "Zeniarai Benzaiten, a shrine tucked in a cave-like rock cleft where visitors wash money believed to double it.",
      "Sasuke Inari Shrine, a small torii-gated shrine well off the main tourist route.",
    ],
    photographySpots: [
      "The Great Buddha framed by the surrounding cedar trees.",
      "Komachi-dori and the shrine approach during spring cherry blossoms.",
      "The Enoden tram passing directly beside the coast near Kamakura Kokomae station, made famous by anime.",
    ],
    travelTips: [
      "Kamakura works well as a full day trip from Tokyo — start early to beat both crowds and closing times.",
      "A one-day Enoden pass is worth it if planning to combine Kamakura with Enoshima.",
      "Many temples charge small separate entry fees — carry cash in small denominations.",
    ],
    nearby: ["tokyo", "yokohama", "hakone"],
    itinerary: [
      { day: 1, plan: "Tsurugaoka Hachimangu and Komachi-dori in the morning, Great Buddha and Hase-dera in the afternoon, Enoden ride to Enoshima at sunset." },
    ],
  },
  {
    id: "yokohama",
    slug: "yokohama",
    name: "Yokohama",
    jp: "横浜",
    region: "Kanto",
    tagline: "The fishing village that became Japan's window to the world",
    founded: "Opened as a treaty port in 1859",
    population: "≈3.76 million",
    heroImage: img("yokohama-hero"),
    galleryImages: [img("yokohama-1"), img("yokohama-2"), img("yokohama-3"), img("yokohama-4")],
    coordinates: { x: 63, y: 59 },
    intro:
      "Yokohama was a small fishing village until 1859, when it was designated one of Japan's first ports opened to foreign trade after over two centuries of national isolation. It grew almost overnight into Japan's principal gateway to the world.",
    history:
      "The 1854 Convention of Kanagawa and subsequent treaties forced Japan to open selected ports to foreign trade; Yokohama was chosen partly to keep foreign traders at a safe distance from Edo (Tokyo). Foreign merchants, technology and culture flowed through Yokohama first — Japan's first railway (to Tokyo, 1872), first foreign settlement, and one of its first Chinatowns all developed here.",
    architecture:
      "The historic Yokohama Red Brick Warehouses, built 1911–1913 as customs facilities and now shops and event space; the futuristic Minato Mirai waterfront skyline, including the Landmark Tower and the giant Cosmo Clock 21 Ferris wheel.",
    traditionalCulture:
      "Yokohama Chinatown, established by Chinese traders after the port opened, is the largest Chinatown in Asia, with over 250 restaurants inside a relatively compact grid of streets.",
    modernCulture:
      "A significant convention, shipping and corporate hub in its own right, distinct from being 'Tokyo's suburb'; the Minato Mirai district has become a favored filming and date-spot backdrop for its harbor skyline.",
    bestSeason: ["spring", "summer", "autumn"],
    nightlife:
      "Noge, a retro alleyway district of small izakaya near Sakuragicho Station, offers a grittier, more local nightlife scene than the polished Minato Mirai waterfront.",
    transportation:
      "About 30 minutes from central Tokyo by train; the Minatomirai Line and a compact network of JR and private lines cover the waterfront and Chinatown areas easily on foot once arrived.",
    facts: [
      "Yokohama's Chinatown is the largest in Asia.",
      "Japan's first railway line, opened in 1872, ran between Yokohama and Tokyo.",
      "Yokohama was a small fishing village of a few hundred people before its 1859 port opening.",
      "The Cosmo Clock 21 Ferris wheel doubles as the world's largest clock face.",
    ],
    attractions: [
      { id: "minato-mirai", name: "Minato Mirai", category: "district", description: "A waterfront redevelopment district of futuristic towers, the Landmark Tower observatory and the Cosmo Clock 21 Ferris wheel.", tip: "The Landmark Tower's Sky Garden observatory is often cheaper and less crowded than Tokyo equivalents." },
      { id: "chinatown", name: "Yokohama Chinatown", category: "district", description: "The largest Chinatown in Asia, packed with restaurants, temples and street-food stalls behind ornate painted gates.", tip: "Kanteibyo temple, dedicated to the deified general Guan Yu, is a striking, less-visited stop inside the district." },
      { id: "red-brick", name: "Red Brick Warehouses", category: "landmark", description: "Restored early-20th-century customs warehouses on the waterfront, now housing shops, restaurants and seasonal events.", tip: "The plaza between the warehouses hosts an ice rink in winter and markets throughout the year." },
      { id: "sankeien", name: "Sankei-en Garden", category: "nature", description: "A large traditional garden assembled by a silk trader in 1906 around relocated historic buildings, including a three-story pagoda.", tip: "Less crowded than most famous gardens and particularly good for autumn foliage." },
    ],
    food: [
      { id: "yokohama-chinese", name: "Yokohama Chinatown cuisine", jp: "横浜中華街の中華料理", description: "A distinct regional style shaped by over 150 years of Chinese immigration, from steamed buns to full banquet-style dinners." },
      { id: "shumai", name: "Shumai", jp: "シウマイ", description: "Yokohama's famous steamed pork dumpling, sold as a travel souvenir at the train station by the Kiyoken company since 1928." },
    ],
    hiddenGems: [
      "Noge's narrow alleyway bars, a short walk from Sakuragicho Station and largely untouched by tourism.",
      "The Yokohama Doll Museum, a niche but genuinely interesting small collection.",
      "Motomachi shopping street, an understated, longtime local fashion district beside Chinatown.",
    ],
    photographySpots: [
      "Minato Mirai's skyline reflected across the harbor at blue hour.",
      "The Red Brick Warehouses lit up against the evening waterfront.",
      "Chinatown's Zenrin-mon gate framed by lanterns after dark.",
    ],
    travelTips: [
      "Yokohama makes an easy half- or full-day trip from central Tokyo, or a lower-key overnight base.",
      "Chinatown restaurants range widely in price and quality — look for lines of local diners rather than the flashiest storefront.",
      "Minato Mirai's best skyline photos are typically 30–45 minutes after sunset, once building lights are fully on.",
    ],
    nearby: ["tokyo", "kamakura"],
    itinerary: [
      { day: 1, plan: "Minato Mirai and the Red Brick Warehouses by day, Chinatown for dinner, harbor skyline at night." },
    ],
  },
];

export const getCityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
