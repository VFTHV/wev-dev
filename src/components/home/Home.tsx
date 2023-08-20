import { AiOutlineArrowDown } from 'react-icons/ai';
import './home.css';
import Carousel from './carousel/Carousel';
import ScrollFigures from './scroll-figures/ScrollFigures';

function Home() {
  return (
    <section id="home" className="home container">
      <div className="home-wrapper">
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
            <AiOutlineArrowDown />
          </div>
        </div>
        <h3 className="descr">Trusted by</h3>
        <Carousel />
      </div>
      <ScrollFigures />
    </section>
  );
}

export default Home;
