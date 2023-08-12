import { ReactTech, TypeScripTech, NodeTech } from '../components/SVGs';
import { SiRedux } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import '../styles/techonoloiges.css';

function Techonologies() {
  return (
    <section id="technologies" className="technologies container">
      <div className="tech-wrapper">
        <h2 className="h2">Technologies I work with</h2>
        <p className="descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          provident esse distinctio, est minima quidem dolor laboriosam maxime
          reprehenderit autem.
        </p>
      </div>
      <div className="techs">
        <div className="tech">
          <ReactTech />
        </div>
        <div className="tech">
          <TypeScripTech />
        </div>
        <div className="tech">
          <SiRedux /> Redux
        </div>
        <div className="tech">
          <NodeTech />
        </div>
        <div className="tech">
          <SiExpress /> <span>ExpressJS</span>
        </div>
        <div className="tech">
          <BiLogoMongodb /> <span>MongoDB</span>
        </div>
      </div>
    </section>
  );
}

export default Techonologies;
