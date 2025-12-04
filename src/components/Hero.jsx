import React from 'react'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner container">
        <div className="hero-left">
          <div className="kicker">New</div>
          <h1 className="hero-title">Find anything. Protect everything.</h1>
          <p className="hero-sub">Find, organize, and protect your operational work with AI-powered insights — advanced search across sales, inventory and workflows to keep fast commerce moving.</p>
          <div className="hero-ctas">
            <button className="btn primary">What's new</button>
            <button className="btn outline">Try it free</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="preview-card">
            <div className="preview-image">
              {/* using vite logo as placeholder; replace with real screenshot */}
              <img src="/vite.svg" alt="preview" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
