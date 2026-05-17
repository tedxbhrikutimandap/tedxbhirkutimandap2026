export interface Speaker {
  id: string;
  name: string;
  title: string;
  organization: string;
  talkTitle: string;
  bio: string;
  image: string;
  featured?: boolean;
  socials?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    instagram?: string;
  };
}

export const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Ashesh Malla",
    title: "Founder",
    organization: "Sarwanam Theatre",
    talkTitle: "The Evolution of Modern Nepali Theatre",
    bio: "Ashesh Malla is a pioneering figure in Nepali literature and theater, widely recognized as the founder of the Sarwanam Theatre Group. Born in 1954 in Dhankuta, Malla is credited with revolutionizing the performing arts in Nepal by introducing Street Theater (Sadak Natak). His vision transformed the stage into a powerful medium for social change, using performance to challenge the status quo and amplify the voices of the marginalized. A prolific playwright, director, and poet, Malla’s work often explores the intricate themes of social justice, human rights, and the resilience of the common citizen. His immense contributions have been honored with several of Nepal's most prestigious awards, including the Sajha Puraskar and the Moti Puraskar. Beyond his artistic creations, he is a dedicated academic and mentor. Through Sarwanam, he has established a permanent home for creative activism, ensuring his legacy as a pillar of Nepal’s cultural and intellectual history continues to inspire future generations.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1776608668/Ashesh_Malla_waondl.webp",
    featured: true,
  },
  {
    id: "speaker-2",
    name: "Suchan Bajracharya & Sachina Bajracharya",
    title: "Co-Founders",
    organization: "Puppeteer Lounge",
    talkTitle: "Why Local Stories Matter: The Future of Nepali Animation",
    bio: "Suchan Bajracharya and Sachina Shakhya are a dynamic husband-and-wife duo who have pioneered a new era of digital storytelling and animation in Nepal. As the visionary co-founders of Puppeteers Lounge, they have combined their creative strengths to build a world-class animation studio that brings Nepali narratives to life through cutting-edge 3D technology. Together, they are the creators of the beloved Nani Babu cartoon series, a viral sensation that has captured the hearts of millions of children and parents across the globe. Their partnership is defined by a shared mission: to provide the next generation of Nepali children with high-quality, localized content that celebrates their culture, language, and identity. While Suchan brings a focus on technical innovation and operational strategy, Sachina complements this with her expertise in character development and creative leadership. Their collaborative journey has not only professionalized the local animation landscape but has also proven that a family-led creative venture can achieve global impact, making them true icons of modern Nepali entrepreneurship and digital media.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1776608670/Nani_Banu_Cartoon_zjklxh.webp",
    featured: true,
  },
  {
    id: "speaker-3",
    name: "Keshav Pandey",
    title: "Former Sr. Vice President of the Trekking Agencies Association of Nepal",
    organization: "Trekking Agencies' Association of Nepal (TAAN)",
    talkTitle: "Navigating the Peaks: Resilience and the Future of Nepali Tourism",
    bio: "Keshav Pandey is a distinguished figure in Nepal’s tourism and hospitality sector, recognized for his extensive leadership within the Trekking Agencies' Association of Nepal (TAAN). With decades of experience navigating the rugged terrains of the Himalayas and the complexities of the travel industry, Pandey has been a vocal advocate for sustainable tourism, safety protocols, and the global promotion of Nepal’s natural heritage. His perspective on life and industry is uniquely defined by his survival of the 2018 US-Bangla Airlines flight 211 crash. Having emerged from one of Nepal’s greatest aviation tragedies, Pandey transformed a harrowing personal experience into a powerful narrative of resilience and professional rebirth. Today, he merges his deep industry expertise with a profound appreciation for the \"second chance,\" mentoring young entrepreneurs and working to ensure that Nepal remains a safe, vibrant, and welcoming destination for the world. His journey stands as a testament to the enduring spirit of the Nepali people and the unbreakable bond between the land and those who serve it.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1776608669/Keshav_Pandey_jp4d8q.webp",
    featured: true,
  },
  {
    id: "speaker-4",
    name: "Radha Poudel",
    title: "Menstrual Health & Dignity Activist",
    organization: "Radha Poudel Foundation",
    talkTitle: "To be announced",
    bio: "Radha Paudel is a leading voice in Nepal’s movement for dignified menstruation, known for transforming menstrual health from a hidden issue into a national and global conversation on human rights and dignity. A trained nurse and the founder of the Radha Paudel Foundation, she has spent decades working across remote communities, witnessing firsthand the harmful effects of stigma and practices like chhaupadi. Her work goes beyond health—Paudel frames menstruation as a matter of dignity, equality, and social justice. Through advocacy, education, and grassroots campaigns, she promotes access to safe menstrual care, challenges deep-rooted taboos, and empowers women and girls to live without shame. Today, she is widely recognized as a Dignified Menstruation Campaigner, inspiring change at both community and policy levels. Her journey reflects a commitment to ensuring that every individual can experience menstruation with respect, safety, and pride.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777035404/Radha_Poudel_vdlxqe.webp",
    featured: true,
  },
  {
    id: "speaker-5",
    name: "Sarosy Neupane",
    title: "Transgender Rights Activist and Social Inclusion Advocate",
    organization: "",
    talkTitle: "To be announced",
    bio: "Sarosy Neupane is an emerging voice in Nepal’s movement for transgender rights and gender inclusion, dedicated to creating a more equitable and accepting society. Through her advocacy, she works to amplify the voices of transgender and gender-diverse communities, challenging stigma, discrimination, and systemic barriers. Her work focuses on promoting human rights, dignity, and equal opportunities—including access to education, healthcare, employment, and legal recognition. Drawing from lived experiences and community engagement, Neupane highlights the everyday struggles faced by transgender individuals while advocating for policy reform and social awareness. Today, she stands as a powerful advocate for inclusion and identity, inspiring dialogue, empowering marginalized communities, and working toward a Nepal where diversity is respected and celebrated.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777035533/Sarosy_Neupane_gc4bxg.webp",
    featured: true,
  },
  {
    id: "speaker-6",
    name: "Prajwol Bikram Rana",
    title: "Environmental Law Advocate and Climate Change Activist",
    organization: "Membership Engagement Coordinator – World’s Youth for Climate Justice",
    talkTitle: "To be announced",
    bio: "Prajwol Bikram Rana is engaged in the field of law with a focus on climate change and environmental justice. Combining legal insight with environmental advocacy, he works to address the growing impact of climate change in Nepal, especially in vulnerable communities and ecosystems. His work highlights the importance of environmental laws, policy reform, and accountability, promoting sustainable development and legal frameworks that protect natural resources. Through awareness, research, and public engagement, Rana emphasizes the role of law in tackling climate challenges. As a speaker, he brings a legal perspective to climate change, advocating for stronger policies and collective action to ensure a sustainable and just future.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777035446/Prajwol_Bikram_Rana_qicssl.webp",
    featured: true,
  },
  {
    id: "speaker-7",
    name: "Bhawani Rana",
    title: "First Female President of FNCCI and Business Leader",
    organization: "Federation of Nepalese Chambers of Commerce and Industry (FNCCI)",
    talkTitle: "To be announced",
    bio: "Bhawani Rana is a leading Nepali entrepreneur and former President of FNCCI, becoming the first woman to head Nepal’s largest business organization. Known for her strong leadership and advocacy for women in business, she has inspired many young entrepreneurs across the country. She has worked to promote entrepreneurship, economic growth, and greater opportunities for women in leadership. Through her public engagement and business experience, Rana encourages innovation, confidence, and inclusive development in Nepal. As a speaker, she shares inspiring insights on leadership, business growth, and the changing role of women in shaping Nepal’s future.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1778990492/Bhawani_rana_a7ov42.webp",
    featured: true,
  },
  {
    id: "speaker-8",
    name: "Sajina Khanal",
    title: "Model, Influencer, and Youth Advocate",
    organization: "Miss Supranational Nepal 2024",
    talkTitle: "To be announced",
    bio: "Sajina is a Nepali model and beauty pageant titleholder who represented Nepal at Miss Supranational 2024. She is known for promoting confidence, women’s empowerment, and social awareness through public engagement and advocacy. Along with her work in pageantry, she has supported social causes related to youth, education, and community development. As a speaker, she shares inspiring perspectives on confidence, representation, and creating positive change through leadership and self-belief.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1778990522/Sajina_Khanal_lzfocp.webp",
    featured: true,
  },
];


