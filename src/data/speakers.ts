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
    talkTitle: "To be announced",
    bio: "Ashesh Malla is the visionary founder of Sarwanam Theatre and a pioneering figure in Nepali drama. As a playwright and director, he has been instrumental in the development of street theatre and contemporary plays in Nepal, using the stage as a powerful medium for social change and storytelling.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1776608668/Ashesh_Malla_waondl.jpg",
    featured: true,
  },
  {
    id: "speaker-2",
    name: "Suchan Bajracharya & Sachina Shakhya",
    title: "Founders",
    organization: "Nani Baby Cartoons",
    talkTitle: "To be announced",
    bio: "Suchan Bajracharya and Sachina Shakhya are the creative minds behind Nani Baby Cartoons. They have dedicated themselves to creating engaging, educational, and culturally relevant animated content for children, playing a crucial role in shaping early childhood education through digital media in Nepal.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1776608670/Nani_Banu_Cartoon_zjklxh.jpg",
    featured: true,
  },
  {
    id: "speaker-3",
    name: "Keshav Pandey",
    title: "Former Sr. Vice President",
    organization: "Trekking Agencies Association of Nepal",
    talkTitle: "To be announced",
    bio: "Keshav Pandey is a seasoned professional in Nepal's tourism and mountain trekking industry. As the former Senior Vice President of the Trekking Agencies Association of Nepal (TAAN), he has been a strong advocate for sustainable tourism practices and the development of trekking infrastructure across the Himalayas.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1776608669/Keshav_Pandey_jp4d8q.png",
    featured: true,
  },
  {
    id: "speaker-4",
    name: "Radha Poudel",
    title: "Founder / Author / Activist",
    organization: "Global South Coalition for Dignified Menstruation",
    talkTitle: "To be announced",
    bio: "Radha Poudel is an author, activist, and the founder of the Global South Coalition for Dignified Menstruation. She has dedicated her life to challenging menstrual taboos and advocating for women's health, dignity, and human rights, leading grassroots movements and international campaigns to bring about systemic change.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777035404/Radha_Poudel_vdlxqe.jpg",
    featured: true,
  },
  {
    id: "speaker-5",
    name: "Sarosy Neupane",
    title: "Child & Adolescent Psychologist",
    organization: "",
    talkTitle: "To be announced",
    bio: "Sarosy Neupane is a dedicated Child and Adolescent Psychologist. She specializes in understanding and supporting the mental health needs of young people, working to create safe environments and effective interventions that foster resilience and emotional well-being in the next generation.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777035533/Sarosy_Neupane_gc4bxg.jpg",
    featured: true,
  },
  {
    id: "speaker-6",
    name: "Prajwol Bikram Rana",
    title: "Co-founder / CEO",
    organization: "Gham Power",
    talkTitle: "To be announced",
    bio: "Prajwol Bikram Rana is the Co-founder and CEO of Gham Power. He is at the forefront of Nepal's renewable energy sector, leading initiatives to provide clean, reliable, and accessible solar energy solutions to off-grid communities and businesses, driving both economic empowerment and environmental sustainability.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777035446/Prajwol_Bikram_Rana_qicssl.jpg",
    featured: true,
  },
];
