import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const navigate = useNavigate()
  const [logoFile, setLogoFile] = useState(null)
  const [docs, setDocs] = useState([])
  const [error, setError] = useState('')

  const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

  function handleLogoChange(e){
    const f = e.target.files && e.target.files[0]
    if (!f) { setLogoFile(null); return }
    if (f.size > MAX_FILE_SIZE) { setError('Logo file must be < 5MB'); return }
    setError('')
    setLogoFile(f)
  }

  function handleDocsChange(e){
    const list = Array.from(e.target.files || [])
    const tooLarge = list.find(f => f.size > MAX_FILE_SIZE)
    if (tooLarge) { setError('All documents must be smaller than 5MB each'); return }
    setError('')
    setDocs(list)
  }

  function handleSubmit(e){
    e.preventDefault()
    setError('')

    // Require at least one file to be selected
    if (!logoFile && docs.length === 0) return setError('Please select a logo or at least one document to upload')

    const fd = new FormData()
    if (logoFile) fd.append('logo', logoFile)
    docs.forEach((d, i) => fd.append(`documents[${i}]`, d))

    // Here you would POST `fd` to your backend. For now we log and navigate.
    console.log('Uploading files...')
    for (const pair of fd.entries()) console.log(pair[0], pair[1])

    setTimeout(()=> navigate('/signin'), 700)
  }

  return (
    
    <div style={{minHeight:'40vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', padding:'12px 12px 24px'}}>
      <div className="page-title">
        <h1>Please Upload Your Business Documents</h1>
        <h3>The Document should contain your business data and other relevant information.</h3>
      </div>
      <style>{`
        .page-title{ width:720px; max-width:100%; text-align:left; margin-bottom:8px }
        .page-title h1{ font-size:40px; margin:0 0 8px 0 }
        .page-title h3{ margin:0; color:#0f172a; font-weight:600 }
        .reg-card{ width:720px; max-width:100%; background:#fff; border-radius:12px; box-shadow:0 20px 50px rgba(2,6,23,0.06); overflow:hidden; margin-top:12px }
        .reg-right{ padding:24px }
        .field{ margin-bottom:12px; display:flex; flex-direction:column }
        .field input { padding:10px 12px; border-radius:8px; border:1px solid #e6e9ef }
        .btn{ padding:10px 12px; border-radius:8px; border:none; cursor:pointer }
        .btn-primary{ background: linear-gradient(90deg,#7c3aed,#a855f7); color:#fff }
        .file-list { font-size:0.95rem; color:#374151; margin-top:8px }
        .logo-preview { width:110px; height:110px; object-fit:cover; border-radius:8px; border:1px solid #eee }
        @media (max-width:880px){ .reg-card{ width:100% } }
      `}</style>
      
      <div className="reg-card" role="region" aria-label="Upload files">
        <div className="reg-right">
            
          <form onSubmit={handleSubmit}>
            

            <div className="field">
              <label>Business Documents (PDF/DOC, multiple allowed, 5MB each)</label>
              <input type="file" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" multiple onChange={handleDocsChange} />
              {docs.length>0 && (
                <ul className="file-list">
                  {docs.map((d, i)=> <li key={i}>{d.name} ({Math.round(d.size/1024)} KB)</li>)}
                </ul>
              )}
            </div>

            {error && <div style={{color:'#b91c1c', marginBottom:12}}>{error}</div>}

            <div style={{display:'flex', gap:8, marginTop:8}}>
              <button type="submit" className="btn btn-primary">Upload Files</button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
