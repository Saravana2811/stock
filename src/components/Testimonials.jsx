import React from 'react'

const DATA = [
  { name: 'Patel', avatar: '👤', quote: 'Our technicians are factory-trained and certified with 10+ years experience' },
  { name: 'Sudharsan', avatar: '👥', quote: 'Same-day service available with 24/7 emergency support' },
  { name: 'Prabhu', avatar: '👥', quote: 'No hidden fees with upfront pricing and satisfaction guarantee' },
  { name: 'Lava', avatar: '👤', quote: 'We use only OEM or high-quality aftermarket components' }
]

export default function Testimonials(){
  return (
    <section className="ac-why-us1" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="ac-why-us1-h2">What Your Customers Say?</h2>

      <div className="ac-benefits-grid">
        {DATA.map((t, i) => (
          <article key={i} className="testimonial-card" tabIndex={0} aria-label={`Testimonial by ${t.name}`}>
            <div className="testimonial-card-inner">
              <div className="testimonial-avatar" aria-hidden>{t.avatar}</div>
              <div className="testimonial-body">
                <blockquote className="testimonial-quote">{t.quote}</blockquote>
                <div className="testimonial-meta">
                  <strong className="testimonial-name">{t.name}</strong>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
