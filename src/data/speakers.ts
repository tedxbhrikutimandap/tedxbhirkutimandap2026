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
    talkTitle: "Title of the Talk",
    bio: "Ashesh Malla is the founder of Sarwanam Theatre and a prominent figure in Nepali theatre. He has been instrumental in the development of street theatre and contemporary drama in Nepal.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1776608668/Ashesh_Malla_waondl.jpg",
    featured: true,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: "speaker-2",
    name: "Suchan Bajracharya & Sachina Sakhya",
    title: "Founders",
    organization: "Nani Baby Cartoons",
    talkTitle: "Title of the Talk",
    bio: "Suchan Bajracharya and Sachina Sakhya are the visionaries behind Nani Baby Cartoons, focusing on creating educational and entertaining content for children in Nepali language.",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1776608670/Nani_Banu_Cartoon_zjklxh.jpg",
    featured: true,
    socials: { linkedin: "#", website: "#" },
  },
  {
    id: "speaker-3",
    name: "Keshav Pandey",
    title: "Formal Sr. Vice President",
    organization: "Trekking Agencies Association of Nepal",
    talkTitle: "Title of the Talk",
    bio: "Keshav Pandey is a seasoned professional in the tourism and mountain trekking industry of Nepal, having served as the Senior Vice President of the Trekking Agencies Association of Nepal (TAAN).",
    image: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1776608669/Keshav_Pandey_jp4d8q.png",
    featured: true,
    socials: { instagram: "#", website: "#" },
  },
  {
    id: "speaker-4",
    name: "Nirajan Shrestha",
    title: "Neuroscientist",
    organization: "MIT Media Lab",
    talkTitle: "Rewiring the Brain: Neuroplasticity and Learning",
    bio: "Born in Bhaktapur, Nirajan's research at MIT on brain-computer interfaces is pushing the boundaries of how we understand human learning and cognitive adaptation.",
    image: "/images/speaker-placeholder.png",
    featured: false,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: "speaker-5",
    name: "Kabita Gurung",
    title: "Mountaineer & Advocate",
    organization: "Women in Mountaineering Nepal",
    talkTitle: "Beyond the Summit: Redefining Leadership",
    bio: "Kabita has summited six 8000m peaks and advocates for gender equality in Nepal's adventure sports industry, mentoring the next generation of women climbers.",
    image: "/images/speaker-placeholder.png",
    featured: false,
    socials: { instagram: "#" },
  },
  {
    id: "speaker-6",
    name: "Sagar Dhakal",
    title: "AI Researcher",
    organization: "Google DeepMind",
    talkTitle: "AI for Good: Building Technology for Emerging Economies",
    bio: "Sagar leads a team focused on applying AI to healthcare challenges in South Asia. His work on low-resource language processing is making AI accessible to millions who don't speak English.",
    image: "/images/speaker-placeholder.png",
    featured: true,
    socials: { linkedin: "#", twitter: "#", website: "#" },
  },
];
