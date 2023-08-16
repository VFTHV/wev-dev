import '../styles/portfolio.css';
import Project from './Project';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio container">
      <h2 className="h2">Selected Projects</h2>
      <p className="descr">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        laboriosam inventore doloremque minus
      </p>
      <div className="card-wrapper">
        <Project
          href="#"
          imgSrc="portfolio.png"
          h3="Portfolio Website"
          technologies={['TypeScript', 'NodeJS']}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ea.
        </Project>
        <Project
          href="#"
          imgSrc="portfolio.png"
          h3="Portfolio Website"
          technologies={['TypeScript', 'NodeJS']}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ea.
        </Project>
        <Project
          href="#"
          imgSrc="portfolio.png"
          h3="Portfolio Website"
          technologies={['TypeScript', 'NodeJS']}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ea.
        </Project>
      </div>
    </section>
  );
}

export default Portfolio;
