export interface NavItem {
  label: string;
  href: string;
}

export const primaryNavigation: NavItem[] = [
  { label: "Work", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Experience", href: "/experience" },
  { label: "Achievements", href: "/achievements" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
