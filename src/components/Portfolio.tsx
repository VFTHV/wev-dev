import '../styles/portfolio.css';
import BorderWrapper from './BorderWrapper';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio container">
      <h2 className="h2">Selected Projects</h2>
      <p className="descr">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        laboriosam inventore doloremque minus
      </p>
      <div className="card-wrapper">
        <BorderWrapper>
          <div className="project-wrapper">
            <img src="portfolio.png" alt="Portfolio project image" />
            <div className="project-info">
              <h3 className="h3">Ecommerce Website</h3>
              <p className="descr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quos, magni nihil obcaecati nulla consequatur.
              </p>
              <div className="tech-card-wrapper">
                <div className="tech-card">React</div>
                <div className="tech-card">React</div>
              </div>
              <a href="#">View Project {'>'}</a>
            </div>
          </div>
        </BorderWrapper>
        <BorderWrapper>
          <div className="project-wrapper">
            <img src="portfolio.png" alt="Portfolio project image" />
            <div className="project-info">
              <h3 className="h3">Ecommerce Website</h3>
              <p className="descr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quos, magni nihil obcaecati nulla consequatur.
              </p>
              <div className="tech-card-wrapper">
                <div className="tech-card">React</div>
                <div className="tech-card">React</div>
              </div>
              <a href="#">View Project {'>'}</a>
            </div>
          </div>
        </BorderWrapper>
        <BorderWrapper>
          <div className="project-wrapper">
            <img src="portfolio.png" alt="Portfolio project image" />
            <div className="project-info">
              <h3 className="h3">Ecommerce Website</h3>
              <p className="descr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quos, magni nihil obcaecati nulla consequatur.
              </p>
              <div className="tech-card-wrapper">
                <div className="tech-card">React</div>
                <div className="tech-card">React</div>
              </div>
              <a href="#">View Project {'>'}</a>
            </div>
          </div>
        </BorderWrapper>
      </div>
    </section>
  );
}

export default Portfolio;
