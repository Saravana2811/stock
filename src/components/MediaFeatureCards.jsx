import React from 'react'

const mediaFeatures = [
  {
    title: '1.Sign In Dashboard',
    desc: 'Sign in to a unified dashboard to access all features and insights in one place.',
    img: '/vite.svg'
  },
  {
    title: '2.Register Your Store ',
    desc: 'Easily register your store or company to start tracking sales and inventory data.',
    img: '/vite.svg'
  },
  {
    title: '3.Upload Sales Data',
    desc: 'Upload your sales and inventory data securely to get real-time insights and analytics.',
    img: '/vite.svg'
  },
  {
    title: '4.Monitor Workflows',
    desc: 'Set up and monitor automated workflows to streamline your operations and improve efficiency.',
    img: '/vite.svg'
  }
]

export default function MediaFeatureCards() {
  return (
    <section className="media-features">
      <div className="media-inner container">
        {mediaFeatures.map((m) => (
          <article className="media-card" key={m.title} tabIndex={0} role="button">
            <figure className="media-preview">
              <img src={m.img} alt={`${m.title} preview`} />
            </figure>
            <div className="media-body">
              <h3 className="media-title">{m.title}</h3>
              <p className="media-desc">{m.desc}</p>
              
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
