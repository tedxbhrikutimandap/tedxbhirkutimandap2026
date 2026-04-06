export interface TeamMember {
  name: string;
  role: string;
  department: Department;
  image: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
  };
}

export type Department =
  | "Leadership"
  | "Curation"
  | "Design"
  | "Technology"
  | "Operations"
  | "Marketing"
  | "Finance";

export const departments: Department[] = [
  "Leadership",
  "Curation",
  "Design",
  "Technology",
  "Operations",
  "Marketing",
  "Finance",
];

export const teamMembers: TeamMember[] = [
  // Leadership
  {
    name: "Priya Sharma",
    role: "Licensee & Lead Organizer",
    department: "Leadership",
    image: "/images/speaker-placeholder.png",
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Rajesh Adhikari",
    role: "Co-Organizer",
    department: "Leadership",
    image: "/images/speaker-placeholder.png",
    socials: { linkedin: "#" },
  },

  // Curation
  {
    name: "Anisha Thapa",
    role: "Head of Curation",
    department: "Curation",
    image: "/images/speaker-placeholder.png",
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Bikash Manandhar",
    role: "Speaker Coordinator",
    department: "Curation",
    image: "/images/speaker-placeholder.png",
    socials: { linkedin: "#" },
  },

  // Design
  {
    name: "Suman Karki",
    role: "Head of Design",
    department: "Design",
    image: "/images/speaker-placeholder.png",
    socials: { instagram: "#" },
  },
  {
    name: "Nisha Rai",
    role: "Visual Designer",
    department: "Design",
    image: "/images/speaker-placeholder.png",
    socials: { instagram: "#" },
  },

  // Technology
  {
    name: "Apil Khadka",
    role: "Technical Lead",
    department: "Technology",
    image: "/images/speaker-placeholder.png",
    socials: { linkedin: "https://www.linkedin.com/in/apil-khadka/", instagram: "https://www.instagram.com/apil.me/" },
  },
  {
    name: "Dipesh Shrestha",
    role: "Web Developer",
    department: "Technology",
    image: "/images/speaker-placeholder.png",
    socials: { linkedin: "#" },
  },

  // Operations
  {
    name: "Mina Gurung",
    role: "Head of Operations",
    department: "Operations",
    image: "/images/speaker-placeholder.png",
    socials: { linkedin: "#" },
  },
  {
    name: "Arun Tamang",
    role: "Logistics Coordinator",
    department: "Operations",
    image: "/images/speaker-placeholder.png",
    socials: { linkedin: "#" },
  },

  // Marketing
  {
    name: "Shreya Maharjan",
    role: "Head of Marketing",
    department: "Marketing",
    image: "/images/speaker-placeholder.png",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Kiran Basnet",
    role: "Social Media Manager",
    department: "Marketing",
    image: "/images/speaker-placeholder.png",
    socials: { instagram: "#" },
  },

  // Finance
  {
    name: "Ravi Poudel",
    role: "Head of Finance",
    department: "Finance",
    image: "/images/speaker-placeholder.png",
    socials: { linkedin: "#" },
  },
];
