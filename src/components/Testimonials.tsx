import BorderWrapper from './BorderWrapper';
import { BsLinkedin } from 'react-icons/bs';
import '../styles/testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials container">
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              modi pariatur culpa impedit iusto assumenda in vero consequatur
              quo doloribus.
            </p>
            <div className="testimonial-img">
              <img src="customer.png" alt="testimonial customer image" />
            </div>
            <div className="descr light">Elliot John</div>
            <div className="descr">Marketing Executive</div>
          </div>
        </BorderWrapper>
        <BorderWrapper>
          <div className="testimonial">
            <BsLinkedin />
            <p className="descr light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              modi pariatur culpa impedit iusto assumenda in vero consequatur
              quo doloribus.
            </p>
            <div className="testimonial-img">
              <img src="customer.png" alt="testimonial customer image" />
            </div>
            <div className="descr light">Elliot John</div>
            <div className="descr">Marketing Executive</div>
          </div>
        </BorderWrapper>
      </div>
    </section>
  );
}

export default Testimonials;
