import BorderWrapper from './BorderWrapper';

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
          <div className="testimonial"></div>
        </BorderWrapper>
      </div>
    </section>
  );
}

export default Testimonials;
