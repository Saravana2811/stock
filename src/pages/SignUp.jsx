import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/one.jpg";
/**
 * Single-file SignUp component with:
 * - background image + gradient overlay
 * - animated floating blobs
 * - subtle particle shimmer
 *
 * If the image doesn't appear, move the image to `public/` and change the image URL in CSS to:
 *   background-image: linear-gradient(...), url("/8966558e-4277-48dd-969b-b0f0d5d54478.png");
 */
export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Automatically disable page scrolling while the sign-up page is mounted
  React.useEffect(() => {
    const prevHtml = document.documentElement.style.overflow
    const prevBody = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = prevHtml || ''
      document.body.style.overflow = prevBody || ''
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) return alert("Invalid email");
    if (password.length < 6) return alert("Password too short");
    setTimeout(() => navigate("/"), 600);
  }

  return (
    <>
      <style>{`
        /* ---------- Page & Background ---------- */
        :root{
          --accent1: #7c3aed;
          --accent2: #a855f7;
          --card-radius: 18px;
        }
        body, html, #root {
          height: 100%;
        }

        .enhanced-bg {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          position: relative;
          overflow: hidden;
          /* IMAGE + gradient overlay. Adjust path below if needed. */
          background-image:
            linear-gradient(180deg, rgba(95,46,234,0.22) 0%, rgba(167,139,250,0.22) 100%),
            url(${bg});
          background-size: cover;
          background-position: center;
          /* on mobile, fixed attachment causes issues — will be overridden below */
          background-attachment: fixed;
        }

        /* soft vignette */
        .enhanced-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.02), rgba(0,0,0,0.12));
          pointer-events: none;
        }

        /* ---------- Animated Floating Blobs ---------- */
        .blob {
          position: absolute;
          filter: blur(40px) saturate(140%);
          opacity: 0.7;
          transform: translate3d(0,0,0);
          mix-blend-mode: screen;
          will-change: transform;
        }

        .blob.b1 {
          width: 420px;
          height: 420px;
          left: -80px;
          top: -60px;
          background: linear-gradient(135deg, rgba(124,58,237,0.9), rgba(168,85,247,0.8));
          border-radius: 50%;
          animation: float1 12s ease-in-out infinite;
        }

        .blob.b2 {
          width: 300px;
          height: 300px;
          right: -40px;
          bottom: -40px;
          background: linear-gradient(135deg, rgba(124,58,237,0.6), rgba(121,86,255,0.45));
          border-radius: 40%;
          animation: float2 16s ease-in-out infinite;
        }

        .blob.b3 {
          width: 220px;
          height: 220px;
          left: 10%;
          bottom: 10%;
          background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(167,139,250,0.2));
          border-radius: 50%;
          animation: float3 18s ease-in-out infinite;
        }

        @keyframes float1 {
          0% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(24px) translateX(18px) scale(1.03); }
          100% { transform: translateY(0) translateX(0) scale(1); }
        }
        @keyframes float2 {
          0% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-30px) translateX(-20px) rotate(8deg); }
          100% { transform: translateY(0) translateX(0) rotate(0deg); }
        }
        @keyframes float3 {
          0% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(18px) translateX(-14px) scale(0.98); }
          100% { transform: translateY(0) translateX(0) scale(1); }
        }

        /* ---------- Particle shimmer overlay ---------- */
        .shimmer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.03) 0px, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.02) 0px, transparent 35%),
            linear-gradient(90deg, rgba(255,255,255,0.01), rgba(0,0,0,0));
          animation: shimmerMove 12s linear infinite;
          mix-blend-mode: overlay;
        }

        @keyframes shimmerMove {
          0% { transform: translateX(-4%); opacity: 0.9; }
          50% { transform: translateX(4%); opacity: 1; }
          100% { transform: translateX(-4%); opacity: 0.9; }
        }

        /* ---------- Card ---------- */
        .glass {
          width: 900px;
          max-width: calc(100% - 80px);
          display: flex;
          background: rgba(255, 255, 255, 0.98);
          border-radius: var(--card-radius);
          box-shadow: 0 30px 60px rgba(11, 12, 20, 0.35);
          overflow: hidden;
          z-index: 2;
          transform: translateZ(0);
        }

        /* Left decorative panel uses partially transparent gradient to show bg behind */
        .left-panel {
          flex: 1;
          padding: 60px 56px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, rgba(124,58,237,0.95), rgba(168,85,247,0.9));
        }

        .left-panel h1 {
          font-size: 34px;
          margin: 0 0 18px 0;
          font-weight: 700;
          letter-spacing: -0.4px;
        }

        .left-panel p {
          color: rgba(255,255,255,0.92);
          max-width: 380px;
          line-height: 1.6;
          margin: 0;
        }

        .right-panel {
          flex: 1;
          padding: 40px 56px;
          background: white;
        }

        .right-panel h2 {
          margin: 2px 0 18px 0;
          color: var(--accent1);
          font-size: 22px;
          font-weight: 700;
        }

        .form-area {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .field label {
          display: block;
          margin-bottom: 8px;
          color: #333;
          font-weight: 500;
          font-size: 14px;
        }

        .field input {
          padding: 12px 14px;
          font-size: 15px;
          border: 1px solid #e6e6e6;
          border-radius: 10px;
          transition: box-shadow .18s ease, border-color .18s ease, transform .18s ease;
          outline: none;
          width: 100%;
          box-sizing: border-box;
        }

        .field input::placeholder {
          color: #bdbdbd;
        }

        .field input:focus {
          border-color: var(--accent1);
          box-shadow: 0 8px 20px rgba(124,58,237,0.12);
          transform: translateY(-1px);
        }

        .btn-primary {
          padding: 13px;
          font-size: 16px;
          border-radius: 10px;
          background: linear-gradient(90deg, var(--accent1), var(--accent2));
          color: white;
          border: none;
          cursor: pointer;
          transition: transform .14s ease, box-shadow .14s ease;
          box-shadow: 0 8px 20px rgba(124,58,237,0.18);
        }

        .btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(124,58,237,0.25);
        }

        .btn-secondary {
          padding: 12px;
          font-size: 14px;
          border-radius: 10px;
          background: #f5f5f7;
          color: var(--accent1);
          cursor: pointer;
          border: 1px solid #eee;
        }

        /* subtle responsive tweaks */
        @media (max-width: 900px) {
          .glass {
            flex-direction: column;
          }
          .left-panel, .right-panel {
            padding: 28px;
          }
          .left-panel h1 {
            font-size: 24px;
            margin-bottom: 12px;
          }
          .left-panel p { max-width: unset; font-size: 14px; }
        }

        /* Mobile-specific fixes */
        @media (max-width: 600px) {
          .enhanced-bg { padding: 18px }
          .glass { width: 100%; max-width: 100%; box-shadow: 0 12px 30px rgba(11,12,20,0.18) }
          .left-panel { padding: 20px }
          .right-panel { padding: 20px }
          .left-panel h1 { font-size: 20px }
          .form-area { gap: 12px }
          .btn-primary, .btn-secondary { width: 100%; display: block }
          .blob.b1, .blob.b2, .blob.b3 { display: none }
          .enhanced-bg { background-attachment: scroll }
        }

      `}</style>

      <div className="enhanced-bg">
        {/* animated blobs */}
        <div className="blob b1" aria-hidden />
        <div className="blob b2" aria-hidden />
        <div className="blob b3" aria-hidden />
        {/* shimmer overlay */}
        <div className="shimmer" aria-hidden />

        {/* Card */}
        <div className="glass" role="region" aria-label="Sign up form">
          <div className="left-panel" aria-hidden>
            <h1>Create Your Account</h1>
            <p>
              Join our AI-powered operations platform and optimize your quick
              commerce workflow. Get insights, automate tasks, and reduce stockouts.
            </p>
          </div>

          <div className="right-panel">
            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit} className="form-area" noValidate>
              <div className="field">
                <label htmlFor="su-email">Email</label>
                <input
                  id="su-email"
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="su-pass">Password</label>
                <input
                  id="su-pass"
                  type="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary">
                Create Account
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => navigate("/signin")}
              >
                Already have an account?
              </button>
            </form>
          </div>        
        </div>
      </div>
    </>
  );
}
