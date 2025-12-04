import React from 'react'
import Footer from './Footer.jsx'
import Banner from './Banner.jsx'
import Navbar from './Navbar.jsx'
import Register from './Register.jsx'
import Steps from './Steps.jsx'
import Testimonials from '../components/Testimonials'
export default function Home() {
	return (
        <>
        <Navbar />
        <main className="app-body">
            
            <Banner />
            <Register />
            
            <Steps />
            <Testimonials />
        </main>
        <Footer />
        </>
		
			
		
	)
}

