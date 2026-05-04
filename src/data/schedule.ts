export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  type: "talk" | "break" | "ceremony" | "networking";
}

export const schedule: ScheduleItem[] = [
  {
    time: "08:00",
    title: "Registration & Coffee",
    description: "Check-in, grab your badge, and enjoy artisan coffee from local roasters.",
    type: "ceremony",
  },
  {
    time: "09:00",
    title: "Opening Ceremony",
    description: "Welcome to TEDxBhrikutiMandap 2026. Setting the stage for ideas worth spreading.",
    type: "ceremony",
  },
  {
    time: "09:30",
    title: "Melting Mountains: Nepal's Climate Emergency",
    description: "Exploring the urgent reality of glacial retreat and what it means for millions downstream.",
    speaker: "Dr. Samjhana Basnet",
    type: "talk",
  },
  {
    time: "10:00",
    title: "Turning Waste into Opportunity",
    description: "How a circular economy model is transforming waste management in Kathmandu.",
    speaker: "Aayush Pandey",
    type: "talk",
  },
  {
    time: "10:30",
    title: "Tea Break",
    description: "Networking and refreshments in the exhibition area.",
    type: "break",
  },
  {
    time: "11:00",
    title: "Art as Resistance: Digital Creativity in Nepal",
    description: "The intersection of traditional Nepali art and cutting-edge digital technology.",
    speaker: "Roshani Tamang",
    type: "talk",
  },
  {
    time: "11:30",
    title: "Rewiring the Brain: Neuroplasticity and Learning",
    description: "New frontiers in understanding how our brains adapt, learn, and grow.",
    speaker: "Nirajan Shrestha",
    type: "talk",
  },
  {
    time: "12:00",
    title: "Lunch Break",
    description: "Enjoy a curated Nepali cuisine experience while connecting with fellow attendees.",
    type: "break",
  },
  {
    time: "13:30",
    title: "Beyond the Summit: Redefining Leadership",
    description: "Lessons from the world's highest peaks on resilience, teamwork, and shattering glass ceilings.",
    speaker: "Kabita Gurung",
    type: "talk",
  },
  {
    time: "14:00",
    title: "AI for Good: Building Technology for Emerging Economies",
    description: "Making artificial intelligence accessible and impactful for underserved communities.",
    speaker: "Sagar Dhakal",
    type: "talk",
  },
  {
    time: "14:30",
    title: "Closing Ceremony",
    description: "Reflecting on the ideas shared and looking forward to action.",
    type: "ceremony",
  },
  {
    time: "15:00",
    title: "Networking Reception",
    description: "Continue the conversation over drinks and hors d'oeuvres.",
    type: "networking",
  },
];
