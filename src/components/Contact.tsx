import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import Form from './Form';
import '../styles/contact.css';

function Contact() {
  return (
    <section id="contact" className="contact container">
      <div>
        <h2 className="h2">Get in Touch</h2>
        <p className="descr">
          Drop me a line, give me a call, or send me a message by submitting the
          form.
        </p>
        <div className="contact-detail">
          <div className="contact-icon">
            <AiOutlineMail />
          </div>
          <a className="text" href="mailto:someone@example.com">
            vfthv@vfthv.com
          </a>
        </div>
        <div className="contact-detail">
          <div className="contact-icon">
            <BsTelephone />
          </div>
          <a className="text" href="tel:+13172039800">
            +1 (234) 5678910
          </a>
        </div>
      </div>
      <Form />
    </section>
  );
}

export default Contact;
