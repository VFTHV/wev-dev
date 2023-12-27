import { AiOutlineArrowDown } from 'react-icons/ai';
import './home.css';
import Carousel from './carousel/Carousel';
import ScrollFigures from './scroll-figures/ScrollFigures';

function Home() {
  return (
    <section
      id="home"
      className="home container"
      aria-label="home section about developer"
    >
      <div className="home-wrapper">
        <div className="hero-img">
          <img src="avatar.jpeg" alt="web developer image" />
        </div>
        <h1 className="h1">
          I'm a web developer based in Sugar Land, Tx, specializing in MERN
          stack
        </h1>
        <div className="scroll-down">
          <p className="descr">Scroll Down</p>
          <div className="down">
            <AiOutlineArrowDown />
          </div>
        </div>
        <h3 className="descr btm-item">Trusted by</h3>
        <Carousel />
      </div>
      <ScrollFigures />
    </section>
  );
}

export default Home;
