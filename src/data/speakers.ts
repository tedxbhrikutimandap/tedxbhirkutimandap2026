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
  };
}

export const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Dr. Samjhana Basnet",
    title: "Climate Scientist",
    organization: "Kathmandu University",
    talkTitle: "Melting Mountains: Nepal's Climate Emergency",
    bio: "Dr. Basnet has spent 15 years researching glacial retreat in the Himalayas. Her work has been featured in Nature and Science journals, bringing global attention to Nepal's climate challenges.",
    image: "/images/speaker-placeholder.png",
    featured: true,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: "speaker-2",
    name: "Aayush Pandey",
    title: "Social Entrepreneur",
    organization: "Founder, EcoVenture Nepal",
    talkTitle: "Turning Waste into Opportunity",
    bio: "Aayush founded EcoVenture at 22, creating a circular economy model that has diverted over 500 tons of waste from Kathmandu's landfills while providing employment to 200+ people.",
    image: "/images/speaker-placeholder.png",
    featured: true,
    socials: { linkedin: "#", website: "#" },
  },
  {
    id: "speaker-3",
    name: "Roshani Tamang",
    title: "Digital Artist & Educator",
    organization: "Kathmandu Contemporary Arts Centre",
    talkTitle: "Art as Resistance: Digital Creativity in Nepal",
    bio: "Roshani blends traditional Nepali art with digital technology, creating immersive installations that have been exhibited in galleries across Asia and Europe.",
    image: "/images/speaker-placeholder.png",
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
