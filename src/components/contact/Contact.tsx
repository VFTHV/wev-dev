import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import Form from './form/Form';
import './contact.css';

function Contact() {
  return (
    <section
      id="contact"
      className="contact container"
      aria-label="contact details section"
    >
      <div>
        <h2 className="h2">Get in Touch</h2>
        <p className="descr">
          Drop me a line, give me a call, or send me a message by submitting the
          form.
        </p>
        <div className="contact-detail" aria-label="email details">
          <div className="contact-icon">
            <AiOutlineMail />
          </div>
          <a className="text" href="mailto:vadfthv@gmail.com">
            vadfthv@gmail.com
          </a>
        </div>
        <div className="contact-detail" aria-label="phone number details">
          <div className="contact-icon">
            <BsTelephone />
          </div>
          <a className="text" href="tel:+14782541272">
            +1 (478) 254-1272
          </a>
        </div>
      </div>
      <Form />
    </section>
  );
}

export default Contact;
