import React from 'react';
import './Testimonials.scss';

const testimonials = [
  { text: 'ArcTech transformou meu negócio...', rating: 5 },
  { text: 'Tive uma experiência incrível...', rating: 4 },
  { text: 'O suporte é excelente...', rating: 5 },
];

const Testimonials = () => (
  <section className="testimonials">
    <h2>Depoimentos de nossos clientes</h2>
    <div className="testimonials__list">
      {testimonials.map((item, index) => (
        <div key={index} className="testimonial-card">
          <p>{item.text}</p>
          <p>⭐️ {item.rating}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
