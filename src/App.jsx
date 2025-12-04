import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import FeatureCards from './components/FeatureCards'
import Hero from './components/Hero'
import MediaFeatureCards from './components/MediaFeatureCards'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Footer from './components/Footer.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const location = useLocation()

  const hideNavPaths = ['/signin', '/signup']

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
              <MediaFeatureCards />
            </main>
          }
        />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>

      { !hideNavPaths.includes(location.pathname) && <Footer /> }
    </>
  )
}

export default App
