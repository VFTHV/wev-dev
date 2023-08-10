import {
  JsxTag,
  NeuronIcon,
  ReactTech,
  TypeScripTech,
  NodeTech,
} from './components/SVGs';

import { HiOutlineCubeTransparent } from 'react-icons/hi';
import { BsArrowDown } from 'react-icons/bs';
import { GoGlobe } from 'react-icons/go';
import { SiRedux } from 'react-icons/si';
import './styles/home.css';
import NavHeader from './components/NavHeader';

function App() {
  return (
    <div className="container">
      <NavHeader />
      <section className="home">
        <div className="hero-img">
          <img src="avatar.png" alt="web developer image" />
        </div>
        <h1 className="h1">
          I'm a web developer based in Sugar Land, Tx, specializing in
          React+Redux
        </h1>
        <div className="scroll-down">
          <p>Scroll Down</p>
          <div className="down">
            <BsArrowDown />
          </div>
        </div>
        <div className="figures">
          <div className="cube">
            <HiOutlineCubeTransparent />
          </div>
          <div className="globe">
            <GoGlobe />
          </div>
          <div className="jsx-tag">
            <JsxTag />
          </div>
          <div className="neuron">
            <NeuronIcon />
          </div>
        </div>
      </section>
      <section className="technologies">
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
    </div>
  );
}

export default App;
