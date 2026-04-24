export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Speakers", href: "/speakers" },
  { label: "Team", href: "/team" },
  // { label: "Schedule", href: "/schedule" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export const ctaNav = {
  label: "Secure Thy Attendance",
  href: "/tickets",
};
