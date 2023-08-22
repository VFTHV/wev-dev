import { ReactTech, TypeScripTech, NodeTech } from '../components/SVGs';
import { SiRedux, SiExpress } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { IconType } from 'react-icons';

interface Technologies {
  icon: IconType;
  span?: string;
  className?: string;
}

export const technologies: Technologies[] = [
  {
    icon: ReactTech,
  },
  {
    icon: TypeScripTech,
  },
  {
    icon: SiRedux,
    span: 'Redux',
    className: 'redux',
  },
  {
    icon: NodeTech,
  },
  {
    icon: SiExpress,
    span: 'ExpressJS',
    className: 'express',
  },
  {
    icon: BiLogoMongodb,
    span: 'MongoDB',
    className: 'mongo-db',
  },
];
