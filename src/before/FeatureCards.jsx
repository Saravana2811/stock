import React from 'react'

const features = [
  {
    title: 'Sales Analysis',
    desc: 'Automatic trend detection, peak hours, and SKU-level performance to prioritize stock allocation.',
    icon: '📈'
  },
  {
    title: 'Inventory Insights',
    desc: 'Current coverage, aging stock, and reorder risk so you avoid stockouts and overstock.',
    icon: '📦'
  },
  {
    title: 'Allocation Recommendations',
    desc: 'AI-driven suggestions for transferring or producing units across locations for optimal fill rates.',
    icon: '⚖️'
  },
  {
    title: 'Automated Workflows',
    desc: 'Trigger n8n webhooks to create POs, notify vendors, or send escalation emails.',
    icon: '🤖'
  }
]

export default function FeatureCards() {
  return (
    <section className="features">
      <div className="features-inner">
        {features.map((f) => (
          <article
            className="feature-card"
            key={f.title}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const btn = e.currentTarget.querySelector('button')
                if (btn) btn.focus()
              }
            }}
          >
            <div className="feature-icon" aria-hidden>
              {f.icon}
            </div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
            
          </article>
        ))}
      </div>
    </section>
  )
}
