interface SideMenu {
  to: string;
  content: string;
}

export const sideMenu: SideMenu[] = [
  {
    to: 'home',
    content: 'About',
  },
  {
    to: 'technologies',
    content: 'Tech Stack',
  },
  {
    to: 'portfolio',
    content: 'Projects',
  },
  {
    to: 'testimonials',
    content: 'Testimonials',
  },
  {
    to: 'faqs',
    content: 'FAQs',
  },
  {
    to: 'contact',
    content: 'Get in Touch',
  },
];
