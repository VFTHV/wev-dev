import { ReactTech, TypeScripTech, NodeTech } from './components/SVGs';
import { SiRedux } from 'react-icons/si';
import NavHeader from './components/NavHeader';
import Home from './components/Home';

function App() {
  return (
    <>
      <NavHeader />
      <Home />
      <section className="technologies" style={{ height: '200vh' }}>
        <h2 className="h2">Technologies I work with</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          provident esse distinctio, est minima quidem dolor laboriosam maxime
          reprehenderit autem.
        </p>
        <div className="techs">
          <div className="tech">
            <ReactTech />
          </div>
          <div className="tech">
            <TypeScripTech />
          </div>
          <div className="tech">
            <NodeTech />
          </div>
          <div className="tech">
            <SiRedux />
          </div>
        </div>
      </section>
      <section className="projects">
        <h2 className="h2">Selected Projects</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
    </>
  );
}

export default App;
