import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Navbar({ onSignIn }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleNavigation = (path) => {
    if (!path) return;
    navigate(path);
  };

  const navbarStyle = {
    background: "linear-gradient(135deg, #ce6714ff 79%)",
    position: "sticky",
    top: 0,
    zIndex: 50,
    width: '100%',
    boxSizing: 'border-box'
  };

  const navbarInnerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: '100%'
  };

  const brandStyle = {
    fontSize: "2rem",
    fontWeight: 900,
    fontFamily: "'Pacifico', Segoe Script, cursive",
    letterSpacing: "0.5px",
    background: "white",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    cursor: "pointer",
    display: 'inline-block',
    paddingLeft: 8,
    paddingRight: 8,
    outline: 'none',
    border: 'none'
  };

  const navActionsStyle = {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    marginLeft: 'auto'
  };

  const commonButtonStyle = {
    color: "#ffffff",
    backgroundColor: "transparent",
    padding: "10px 18px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 600,
    border: "1px solid rgba(255,255,255,0.3)",
    cursor: "pointer",
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <header style={navbarStyle}>
      <nav style={navbarInnerStyle}>
        <div
          style={brandStyle}
          onClick={() => handleNavigation("#")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleNavigation("#");
          }}
          onFocus={(e) => {
            // remove the default focus outline but keep keyboard accessibility
            e.currentTarget.style.outline = 'none'
          }}
        >
          MyApp
        </div>

        
      </nav>
    </header>
  );
}
