interface Projects {
  href: string;
  imgSrc: string;
  h3: string;
  technologies: string[];
  description: string;
}

export const projects: Projects[] = [
  {
    href: 'https://ynv-beauty.com/',
    imgSrc: 'proj-ynv.png',
    h3: 'Beauty Salon Website',
    technologies: ['React', 'Typescript', 'SCSS'],
    description:
      'This project was built for beauty salon in Sugar Land, Tx, USA. Page is responsive for several screen sizes. For animations I used framer-motion and react-smooth-scroll libraries.',
  },
  {
    href: 'https://sdg-ai-lab.github.io/DSVI_Tool_v3/#!',
    imgSrc: 'proj-un.png',
    h3: 'In Collaboration with UN: Social Vulnerability Score Tool',
    technologies: ['NextJS', 'React'],
    description:
      'I am currently working cooperating with UN maintaining this online tool. This DSVI online tool offers an intuitive interface for dynamic visualization, providing SV scores, analysis modes, and data layers for social vulnerability.',
  },

  {
    href: 'https://wireline-calcs.netlify.app/',
    imgSrc: 'proj-calcs.png',
    h3: 'Calculation Tool for Oilfield Engineers',
    technologies: ['React', 'Redux', 'TypeScript'],
    description:
      'This project is a comprehensive web application designed for engineers in the oil and gas industry. It provides a suite of tools and calculations, offering assistance in various aspects of oilfield operations, equipment sizing, and data analysis',
  },
  {
    href: 'https://rest-countries-react-redux.netlify.app/',
    imgSrc: 'proj-rest.png',
    h3: 'REST API Countries App',
    technologies: ['React', 'Redux', 'Axios'],
    description:
      'This project required me to build a responsive RESTful app that pulled data from a 3rd party server. It also had to have a color theme switcher. Built with React/Redux/React-router-dom. Styles with SCSS. Axios API library was used for making GET requests',
  },
  {
    href: 'https://react-redux-ip-trckr.netlify.app/',
    imgSrc: 'proj-ip.png',
    h3: 'IP Address Tracker App',
    technologies: ['React', 'Redux', 'Axios', 'Multiple APIs'],
    description:
      'Responsive IP Address and Domain tracker app. This app makes RESTful GET requests to 2 API servers: ipify.org and leafletjs.com. I did 2 variations of this project. On the first one I used vanilla HTML, SCSS and JavaScript. On the second one I used React, Redux, Axios',
  },
  {
    href: 'https://ent-web-app-react-redux.netlify.app/',
    imgSrc: 'proj-movies.png',
    h3: 'Movies Entertainment App',
    technologies: ['React', 'Redux', 'Bootstrap'],
    description:
      'In this project I had to build mobile and desktop designs so that it was fully-responsive. I took a mobile-first approach and used Bootstrap CSS library for layout purposes.',
  },
  {
    href: 'https://vfthv.github.io/Clubs-Fool/',
    imgSrc: 'proj-cards.png',
    h3: 'Cards Game "Clubs Fool',
    technologies: ['HTML', 'Vanilla JS', 'Bootstrap'],
    description:
      'Russian-Ukrainian card game. Designed in raw JavaScript code (no libraries). It manipulates DOM and relies on both event handling and the use of objects',
  },
];
