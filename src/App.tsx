import NavHeader from './components/NavHeader';
import Home from './components/Home';
import Techonologies from './components/Techonologies';

function App() {
  return (
    <>
      <NavHeader />
      <Home />
      <Techonologies />
      <section className="projects">
        <h2 className="h2">Selected Projects</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
    </>
  );
}

export default App;
