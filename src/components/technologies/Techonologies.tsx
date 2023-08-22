import { technologies } from '../../assets/technologies';
import './techonoloiges.css';
import RevealHeight from '../RevealHeight';
import { nanoid } from 'nanoid';

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
        {technologies.map((item) => {
          const { icon: Icon, span, className } = item;
          return (
            <RevealHeight key={nanoid()}>
              <>
                <Icon />
                {span && <span className={className}>{span}</span>}
              </>
            </RevealHeight>
          );
        })}
      </div>
    </section>
  );
}

export default Techonologies;
