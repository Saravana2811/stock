import React from 'react'

export default function Steps(){
  const steps = [
    {
      title: '1 — Onboard & Account Setup',
      summary: 'Create organization account and configure basic settings.',
      details: [
        'Create admin user and organization profile.',
        'Set timezone, currency, and basic preferences.',
        'Invite team members or create service accounts.'
      ]
    },
    {
      title: '2 — Upload & Connect Data',
      summary: 'Provide source data for inventory, orders, SKUs, and locations.',
      details: [
        'Upload CSV / Excel files or connect to data sources (S3, Google Sheets).',
        'Provide product master, historical sales, lead times and forecast windows.',
        'Attach verification docs (logo, business docs) if required.'
      ]
    },
    {
      title: '3 — Ingest & Validate',
      summary: 'System parses and validates incoming data, reports issues.',
      details: [
        'Schema checks (required columns, types, formats).',
        'Missing data or inconsistent SKUs are flagged with line-level errors.',
        'Validation report with actionable fixes returned to user.'
      ]
    },
    {
      title: '4 — Model & Recommendations',
      summary: 'Run demand, safety-stock and replenishment models to produce recommendations.',
      details: [
        'Compute demand signals, seasonality, and forecast horizons.',
        'Generate suggested allocations, reorder points, and transfer plans.',
        'Display confidence intervals and rationale per suggestion.'
      ]
    },
    {
      title: '5 — Automate & Trigger Workflows',
      summary: 'Turn recommendations into actions via workflows and webhooks.',
      details: [
        'Create rules to auto-approve or review recommendations.',
        'Trigger n8n/webhook flows to notify, create tasks, or update remote systems.',
        'Audit log stored for all automated actions.'
      ]
    },
    {
      title: '6 — Monitor, Feedback & Iterate',
      summary: 'Monitor outcomes, collect feedback, and retrain models.',
      details: [
        'Track KPIs (fill rate, stockouts, carrying costs).',
        'Capture user feedback on suggestions to improve models.',
        'Schedule periodic retraining and parameter tuning.'
      ]
    }
  ]

  return (
    <section style={{padding:'36px 20px', background:'#f1f8ff', minHeight:'60vh'}}>
      <div style={{maxWidth:1100, margin:'0 auto'}}>
        <h1 style={{margin:0, fontSize:34}}>Implementation Flow — Step-by-step</h1>
        <p style={{color:'#334155', marginTop:8}}>Follow the numbered steps below; each step includes inputs, outputs and recommended actions.</p>

        <div style={{marginTop:28, display:'grid', gridTemplateColumns:'1fr', gap:18}}>
          {steps.map((s, idx) => (
            <article key={idx} style={{display:'flex', gap:18, alignItems:'flex-start'}}>
              <div style={{minWidth:64, display:'flex', justifyContent:'center'}}>
                <div style={{width:56, height:56, borderRadius:999, background:'#fff', boxShadow:'0 8px 20px rgba(2,6,23,0.08)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, color:'#7c3aed'}}>
                  {idx+1}
                </div>
              </div>
            <style>
                
            </style>
              <div style={{flex:1}}>
                <h3 style={{margin:'0 0 8px 0', fontSize:20}}>{s.title}</h3>
                <div style={{color:'#334155', marginBottom:8}}>{s.summary}</div>
                <ul style={{margin:0, paddingLeft:18, color:'#475569'}}>
                  {s.details.map((d,i) => <li key={i} style={{marginBottom:6}}>{d}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
       
      </div>
    </section>
  )
}
