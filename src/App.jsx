import { useState } from 'react'
import './App.css'
import Navbar from './before/Navbar.jsx'
import FeatureCards from './before/FeatureCards.jsx'
import Hero from './before/Hero.jsx'
import MediaFeatureCards from './before/MediaFeatureCards.jsx'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './after/home'
import Steps from './after/Steps'
// map `/login` to the existing SignIn page
import Footer from './before/Footer.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const location = useLocation()

  const hideNavPaths = ['/signin', '/signup', '/home']

  return (
    <>
      { !hideNavPaths.includes(location.pathname) && <Navbar /> }
      <Routes>
        <Route
          path="/"
          element={
            <main className="app-body">
              <Hero />
              <div className="container">
                <h2 className="section-title">What we do</h2>
                <p className="section-sub">Quick Commerce operations: insights, allocation, and automation.</p>
              </div>
              <FeatureCards />
              <div className="container">
                <h2 className="section-title">What You Should Do</h2>
                </div>
              <MediaFeatureCards />
            </main>
          }
        />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<SignIn />} />

      </Routes>

      { !hideNavPaths.includes(location.pathname) && <Footer /> }
    </>
  )
}

export default App
