import BorderWrapper from '../BorderWrapper';
import { testimonials } from '../../assets/testimonials';
import { nanoid } from 'nanoid';
import './testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials container">
      <h2 className="h2">Customer / Partners Testimonials</h2>
      <p className="descr">
        Here is what my colleagues and clients are telling about the service.
        Please feel free to read below
      </p>
      <div className="card-wrapper">
        {testimonials.map((item) => {
          const { icon: Icon, description, src, name, title } = item;
          return (
            <BorderWrapper key={nanoid()}>
              <div className="testimonial">
                <Icon />
                <p className="text">{description}</p>
                <div className="testimonial-img">
                  <img src={src} alt="testimonial person image" />
                </div>
                <div className="text">{name}</div>
                <div className="descr">{title}</div>
              </div>
            </BorderWrapper>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
