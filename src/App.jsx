import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx'
import Footer from './components/Footer.jsx'
import ArticleSection from './components/ArticleSection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <section>
      <NavBar />
      {/* gray divider line */}
        <hr class="border-t border-gray-300 my-0"></hr>
      <HeroSection />
      <ArticleSection />
      <Footer />
    </section>
  )
}

export default App
