import { useState } from 'react';
import '../styles/form.css';
import BorderWrapper from './BorderWrapper';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form action="submit" className="form">
      <div className="input-data">
        <label htmlFor="name" className="text">
          Name
        </label>
        <BorderWrapper>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </BorderWrapper>
      </div>
      <div className="input-data">
        <label htmlFor="email" className="text">
          Email
        </label>
        <BorderWrapper>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </BorderWrapper>
      </div>
      <div className="input-data">
        <label htmlFor="message" className="text">
          Message
        </label>
        <BorderWrapper>
          <textarea
            id="message"
            name="message"
            value={message}
            rows={10}
            onChange={(e) => setMessage(e.target.value)}
          />
        </BorderWrapper>
      </div>
      <button className="cta-btn">Submit</button>
    </form>
  );
}

export default Form;
