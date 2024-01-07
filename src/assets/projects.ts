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
      'This project was built for beauty salon. Page is responsive for several screen sizes. For animations I used framer-motion and react-smooth-scroll libraries.',
  },
  {
    href: 'https://sdg-ai-lab.github.io/DSVI_Tool_v3/#!',
    imgSrc: 'proj-un.png',
    h3: 'In Collaboration with UN: Social Vulnerability Score Tool',
    technologies: ['NextJS', 'React'],
    description:
      'Online social vulnerability tool in cooperation with the UN. It offers an intuitive interface for dynamic visualization, providing SV scores, analysis modes, and data layers for social vulnerability.',
  },
  {
    href: 'https://github.com/VFTHV/SDG-AI-Lab-DSVI_Tool_v3-server',
    imgSrc: 'proj-dsvi-server.png',
    h3: 'Server for United Nations SDG Tool',
    technologies: ['NodeJS', 'Express', 'MongoDB'],
    description:
      'This project targets new functionality such as account creation, forgot password, reset password, assignment of different rights to users.',
  },
  {
    href: 'https://wireline-calcs.netlify.app/',
    imgSrc: 'proj-calcs.png',
    h3: 'Calculation Tool for Oilfield Engineers',
    technologies: ['React', 'Redux', 'TypeScript'],
    description:
      'Comprehensive web application designed for engineers in the oil and gas industry. It provides a suite of tools and calculations  in various aspects of oilfield operations',
  },
  {
    href: 'https://rest-countries-react-redux.netlify.app/',
    imgSrc: 'proj-rest.png',
    h3: 'REST API Countries App',
    technologies: ['React', 'Redux', 'Axios'],
    description:
      'This is a responsive RESTful app that pulled data from a 3rd party server. It also had to have a color theme switcher. Built with React/Redux/React-router-dom. Styles with SCSS. Axios API library was used for making GET requests',
  },
  {
    href: 'https://react-redux-ip-trckr.netlify.app/',
    imgSrc: 'proj-ip.png',
    h3: 'IP Address Tracker App',
    technologies: ['React', 'Redux', 'Axios'],
    description:
      "Responsive IP Address and Domain tracker app. This app makes RESTful GET requests to 2 API servers: ipify.org and leafletjs.com. I practiced using 2 API's at the same time",
  },
  {
    href: 'https://ent-web-app-react-redux.netlify.app/',
    imgSrc: 'proj-movies.png',
    h3: 'Movies Entertainment App',
    technologies: ['React', 'Redux', 'Bootstrap'],
    description:
      'In this project I had to build mobile and desktop designs so that it was fully-responsive. I took a mobile-first approach and used Bootstrap CSS library for layout purposes.',
  },
];
