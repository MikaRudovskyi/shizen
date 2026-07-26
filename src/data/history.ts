import type { HistoryEra } from "@/types";

export const historyEras: HistoryEra[] = [
  {
    id: "jomon-yayoi",
    period: "Ancient Japan",
    years: "c. 14,000 BCE – 300 CE",
    jp: "縄文・弥生時代",
    title: "Jomon & Yayoi Periods",
    summary:
      "Japan's earliest known culture, the Jomon, produced some of the world's oldest pottery. The Yayoi period that followed introduced wet-rice farming, bronze and iron working, likely via migration and contact with the Asian mainland.",
    highlights: [
      "Jomon pottery, dated to roughly 14,000 BCE, is among the oldest pottery found anywhere in the world.",
      "Wet-rice agriculture, introduced during the Yayoi period, reshaped Japanese settlement patterns and social structure.",
      "Early class stratification and regional polities began to emerge by the late Yayoi period.",
    ],
  },
  {
    id: "asuka-nara",
    period: "Ancient Japan",
    years: "538 – 794",
    jp: "飛鳥・奈良時代",
    title: "Asuka & Nara Periods",
    summary:
      "Buddhism arrived from Korea and was formally adopted by the imperial court. Japan built its first permanent capital at Nara in 710, modeled on the Chinese capital Chang'an, and codified its first centralized legal and administrative systems.",
    highlights: [
      "Buddhism was introduced around 552 CE and became state-sponsored under Emperor Shomu.",
      "Nara (Heijo-kyo) became Japan's first fixed capital in 710.",
      "Todai-ji's Great Buddha was completed in 752 as a national protective project.",
    ],
  },
  {
    id: "heian",
    period: "Ancient Japan",
    years: "794 – 1185",
    jp: "平安時代",
    title: "Heian Period",
    summary:
      "The capital moved to Heian-kyo (Kyoto), ushering in a golden age of court culture, literature and aesthetics. The world's first novel, The Tale of Genji, was written by court lady Murasaki Shikibu during this era.",
    highlights: [
      "Kyoto served as the imperial capital continuously from 794 to 1868.",
      "The Tale of Genji, written around 1008, is widely regarded as the world's first novel.",
      "Provincial warrior clans grew increasingly powerful, setting the stage for the samurai era.",
    ],
  },
  {
    id: "kamakura-samurai",
    period: "The Samurai Era",
    years: "1185 – 1333",
    jp: "鎌倉時代",
    title: "Kamakura Shogunate",
    summary:
      "Minamoto no Yoritomo established Japan's first shogunate, moving real political power away from the imperial court to a military government for the first time. The samurai class became the country's ruling power for the next 700 years.",
    highlights: [
      "Japan's first shogunate was established at Kamakura in 1185.",
      "Zen Buddhism was introduced from China and adopted widely by the samurai class.",
      "Mongol invasion fleets in 1274 and 1281 were repelled, partly by typhoons later mythologized as kamikaze, 'divine wind.'",
    ],
  },
  {
    id: "muromachi-sengoku",
    period: "The Samurai Era",
    years: "1336 – 1603",
    jp: "室町・戦国時代",
    title: "Muromachi Period & Sengoku Warring States",
    summary:
      "Central authority weakened into a prolonged era of civil war among rival feudal lords (daimyo). The period also produced lasting cultural achievements — Noh theatre, ink painting and the tea ceremony — alongside near-constant conflict.",
    highlights: [
      "The Ashikaga shogunate's weakening central authority triggered over a century of civil war.",
      "Kyoto's Kinkaku-ji and Ginkaku-ji were built as shogunal retirement villas during this period.",
      "Oda Nobunaga, Toyotomi Hideyoshi and Tokugawa Ieyasu successively unified the country by 1603.",
    ],
  },
  {
    id: "edo-shogunate",
    period: "Shogunate & Isolation",
    years: "1603 – 1868",
    jp: "江戸時代",
    title: "Edo Period",
    summary:
      "Tokugawa Ieyasu founded a shogunate based in Edo (Tokyo) that brought over 250 years of relative peace, enforced through a strict social hierarchy and a policy of national isolation (sakoku) that sharply limited foreign contact.",
    highlights: [
      "The Tokugawa shogunate ruled from Edo, transforming it into one of the world's largest cities.",
      "Sakoku isolation policy, in effect from the 1630s, restricted nearly all foreign trade and travel for over two centuries.",
      "Commodore Matthew Perry's 1853 arrival forced Japan to begin reopening to foreign trade.",
    ],
  },
  {
    id: "meiji",
    period: "Modern Japan",
    years: "1868 – 1912",
    jp: "明治時代",
    title: "Meiji Restoration",
    summary:
      "Imperial rule was formally restored and the feudal shogunate system dismantled in a sweeping drive to modernize. Japan rapidly industrialized, adopted Western technology and institutions, and transformed from an isolated agrarian society into a rising global power within a single generation.",
    highlights: [
      "The samurai class was formally abolished in 1876.",
      "The capital moved from Kyoto to Tokyo (formerly Edo) in 1868.",
      "Japan's first railway opened between Tokyo and Yokohama in 1872.",
    ],
  },
  {
    id: "taisho-showa-early",
    period: "Modern Japan",
    years: "1912 – 1945",
    jp: "大正・昭和初期",
    title: "Taisho Democracy & Early Showa",
    summary:
      "A period of growing liberal democracy and urban culture gave way to militarism through the 1930s, culminating in Japan's involvement in World War II and the atomic bombings of Hiroshima and Nagasaki in 1945.",
    highlights: [
      "The 1923 Great Kanto earthquake devastated Tokyo and Yokohama, killing over 100,000 people.",
      "Rising militarism through the 1930s reshaped Japan's government and foreign policy.",
      "Atomic bombs were dropped on Hiroshima and Nagasaki in August 1945, precipitating Japan's surrender.",
    ],
  },
  {
    id: "postwar-modern",
    period: "Modern Japan",
    years: "1945 – Present",
    jp: "戦後・現代",
    title: "Postwar Reconstruction & Contemporary Japan",
    summary:
      "Under a new pacifist constitution, Japan rebuilt into one of the world's largest economies within a generation, hosted the 1964 and 2020 Tokyo Olympics, and became a leading global exporter of technology and popular culture.",
    highlights: [
      "Japan adopted a new constitution in 1947 renouncing war as a sovereign right.",
      "The 1964 Tokyo Olympics marked Japan's reemergence as a modern global power.",
      "The Tokaido Shinkansen, the world's first high-speed rail line, opened in 1964 between Tokyo and Osaka.",
    ],
  },
];
