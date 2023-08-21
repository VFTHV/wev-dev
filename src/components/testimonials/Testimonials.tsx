import BorderWrapper from '../BorderWrapper';
import { BsLinkedin } from 'react-icons/bs';
import './testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials container">
      <h2 className="h2">Customer Testimonials</h2>
      <p className="descr">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
        earum.
      </p>
      <div className="card-wrapper">
        <BorderWrapper>
          <div className="testimonial">
            <BsLinkedin />
            <p className="descr light">
              I've had an opportunity to work with Vadim on the one of web
              applications for oil and gas industry. He has a great knowledge of
              technical aspects combined with programming skills in JavaScript
              and ReactJS. I would highly recommend Vadim to any progressive
              software company or any modern-tech company.
            </p>
            <div className="testimonial-img">
              <img src="testimonial.jpg" alt="testimonial customer image" />
            </div>
            <div className="descr light">Andrey Semeyko</div>
            <div className="descr">
              General Manager at Abilon Software LLC, Oil & Gas, MBA
            </div>
          </div>
        </BorderWrapper>
        <BorderWrapper>
          <div className="testimonial">
            <BsLinkedin />
            <p className="descr light">
              I have been mentoring Vadim for about five months. I saw how he
              developed his skills by grinding the subject and deepened his
              knowledge by asking sophisticated questions. Vadim is a very
              proactive, result-oriented and diligent person. He is always
              willing to put all his energy and time into getting his knowledge
              to the next level.
            </p>
            <div className="testimonial-img">
              <img src="testimonial2.jpg" alt="testimonial customer image" />
            </div>
            <div className="descr light">Yurii Husak</div>
            <div className="descr">Front-end Developer</div>
          </div>
        </BorderWrapper>
      </div>
    </section>
  );
}

export default Testimonials;
