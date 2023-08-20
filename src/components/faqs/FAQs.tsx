import './faqs.css';
import FAQ from './faq/FAQ';

function FAQs() {
  return (
    <section className="faqs container">
      <h2 className="h2">FAQs</h2>
      <p className="descr">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni cum,
        nobis reprehenderit a aspernatur dolores eveniet quis eligendi?
        Praesentium, enim?
      </p>
      <FAQ questionText="What techonology stack do you use?">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse
          nisi quasi ullam, sed ipsa dolorem eaque voluptatibus cum quibusdam?
        </p>
      </FAQ>
      <FAQ questionText="What is your experience level?">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint error
          totam autem rerum tempora!
        </p>
      </FAQ>
      <FAQ questionText="What is your pricing?">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          pariatur.
        </p>
      </FAQ>
    </section>
  );
}

export default FAQs;
