import BorderWrapper from '../../BorderWrapper';
import './project.css';

interface ProjectProps {
  href: string;
  imgSrc: string;
  h3: string;
  children: string;
  technologies: string[];
}

function Project({ href, imgSrc, h3, children, technologies }: ProjectProps) {
  return (
    <BorderWrapper>
      <>
        <a href={href} className="project-wrapper">
          <div className="proj-item">
            <img src={imgSrc} alt="Portfolio project image" />
            <div className="project-info">
              <h3 className="h3">{h3}</h3>
              <p className="descr">{children}</p>
              <div className="tech-card-wrapper">
                {technologies.map((tech) => {
                  return (
                    <div key={tech} className="tech-card">
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div className="view">View Project {'>'}</div>
            </div>
          </div>
        </a>
      </>
    </BorderWrapper>
  );
}

export default Project;
