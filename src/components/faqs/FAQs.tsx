import './faqs.css';
import FAQ from './faq/FAQ';
import { faqs } from '../../assets/faqs';
import { nanoid } from 'nanoid';

function FAQs() {
  return (
    <section
      className="faqs container"
      aria-label="frequently asked questions section"
    >
      <h2 className="h2">FAQs</h2>
      <p className="descr">
        Got Questions? Here are Answers to Common Inquiries About My Web
        Development Expertise.
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
