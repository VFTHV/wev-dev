import './faqs.css';
import FAQ from './faq/FAQ';
import { faqs } from '../../assets/faqs';
import { nanoid } from 'nanoid';

function FAQs() {
  return (
    <section className="faqs container">
      <h2 className="h2">FAQs</h2>
      <p className="descr">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni cum,
        nobis reprehenderit a aspernatur dolores eveniet quis eligendi?
        Praesentium, enim?
      </p>
      {faqs.map((faq) => {
        const { question, answer } = faq;
        return (
          <FAQ key={nanoid()} questionText={question}>
            <p>{answer}</p>
          </FAQ>
        );
      })}
    </section>
  );
}

export default FAQs;
