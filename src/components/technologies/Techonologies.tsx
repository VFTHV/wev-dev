import { ReactTech, TypeScripTech, NodeTech } from '../SVGs';
import { SiRedux } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import './techonoloiges.css';
import RevealHeight from '../RevealHeight';

function Techonologies() {
  return (
    <section id="technologies" className="technologies container">
      <div className="tech-wrapper">
        <h2 className="h2">Technologies I work with</h2>
        <p className="descr">
          Leveraging the power of React, Redux, and TypeScript, I engineer
          modern web solutions.
          <br />I am on my way to mastering the art of building efficient
          backends for dynamic and scalable applications with Node, Express, and
          MongoDB
        </p>
      </div>
      <div className="techs">
        <RevealHeight>
          <ReactTech />
        </RevealHeight>
        <RevealHeight>
          <TypeScripTech />
        </RevealHeight>
        <RevealHeight span="Redux">
          <SiRedux />
        </RevealHeight>
        <RevealHeight>
          <NodeTech />
        </RevealHeight>
        <RevealHeight span="ExpressJS">
          <SiExpress />
        </RevealHeight>
        <RevealHeight span="MongoDB">
          <BiLogoMongodb />
        </RevealHeight>
      </div>
    </section>
  );
}

export default Techonologies;
