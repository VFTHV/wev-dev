import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import BorderWrapper from '../../BorderWrapper';
import './form.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [state, handleSubmit] = useForm('xrgwpwgr');

  if (state.succeeded) {
    return <h2 className="h2">Thank you for contacting me</h2>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="submit" className="form">
        <div className="input-data">
          <label htmlFor="name" className="text">
            Name
          </label>
          <BorderWrapper transformEnd={0.35}>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </BorderWrapper>
        </div>
        <div className="input-data">
          <label htmlFor="email" className="text">
            Email
          </label>
          <BorderWrapper transformEnd={0.35}>
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </BorderWrapper>
          <ValidationError
            prefix="This box"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="input-data">
          <label htmlFor="message" className="text">
            Message
          </label>
          <BorderWrapper transformEnd={0.35}>
            <textarea
              id="message"
              name="message"
              value={message}
              rows={10}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </BorderWrapper>
        </div>
        <button className="cta-btn">Submit</button>
      </form>
    </>
  );
}

export default Form;
