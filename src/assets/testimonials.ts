import { BsLinkedin, BsGoogle } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Testimonials {
  icon: IconType;
  description: string;
  src: string;
  name: string;
  title: string;
}

export const testimonials: Testimonials[] = [
  {
    icon: BsGoogle,
    description:
      'I had the pleasure of working with Vadim on the same project, and I was thoroughly impressed by his ability to quickly understand the objectives and deliver high-quality results. Despite being relatively new to the company, he adapted seamlessly and took ownership of his tasks. Vadim demonstrated strong proficiency with map modules in ReactJS, contributing significantly to the project’s success. Beyond his technical skills, he communicates clearly and effectively with the team and consistently performs under pressure. Vadim’s combination of technical expertise, collaboration, and composure makes him an outstanding software engineer.',
    src: 'testimonial4.jpg',
    name: 'Nikita Yasenkov',
    title: 'Senior Data Engineer at EOG Resources',
  },
  {
    icon: BsGoogle,
    description:
      "Vadim's talent brought my beauty salon's vision to life online. His creativity and technical skills created a website that perfectly captures the essence of YNV Beauty. Thank you for making our online presence shine!",
    src: 'testimonial3.jpg',
    name: 'Yevgeniya Nicole',
    title: 'Esthetician, Cosmetologist',
  },
  {
    icon: BsLinkedin,
    description:
      "I've had an opportunity to work with Vadim on the one of web applications for oil and gas industry. He has a great knowledge of technical aspects combined with programming skills in JavaScript and ReactJS. I would highly recommend Vadim to any progressive software company or any modern-tech company.",
    src: 'testimonial.jpg',
    name: 'Andrey Semeyko',
    title: 'General Manager at Abilon Software LLC',
  },
  {
    icon: BsLinkedin,
    description:
      'I have been mentoring Vadim for about five months. I saw how he developed his skills by grinding the subject and deepened his knowledge by asking sophisticated questions. Vadim is a very proactive, result-oriented and diligent person. He is always willing to put all his energy and time into getting his knowledge to the next level.',
    src: 'testimonial2.jpg',
    name: 'Yurii Husak',
    title: 'Senior Front End Developer',
  },
];
