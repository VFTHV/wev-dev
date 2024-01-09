import './portfolio.css';
import Project from './project/Project';
import { projects } from '../../assets/projects';

function Portfolio() {
  // portfolio item
  // portfolio item
  return (
    <section
      id="portfolio"
      className="portfolio container"
      aria-label="our portfolio section"
    >
      <h2 className="h2">Some of my Projects</h2>
      <p className="descr">
        You are welcome to browse through a selection of my projects, reflecting
        my skills and expertise
      </p>
      <div className="card-wrapper">
        {projects.map((proj, i) => {
          const { href, imgSrc, h3, technologies, description } = proj;
          return (
            <Project
              key={i}
              href={href}
              imgSrc={imgSrc}
              h3={h3}
              technologies={technologies}
            >
              {description}
            </Project>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
