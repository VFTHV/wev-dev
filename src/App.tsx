import NavHeader from './components/nav-header/NavHeader';
import Home from './components/home/Home';
import Techonologies from './components/technologies/Techonologies';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import FAQs from './components/faqs/FAQs';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <NavHeader />
      <Home />
      <Techonologies />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
