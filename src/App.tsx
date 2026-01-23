import './App.css'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import CoffeeProfile from './components/CoffeeProfile'
import Process from './components/Process'
import Innovation from './components/Innovation'
import Markets from './components/Markets'
import SenaProject from './components/SenaProject'
import Contact from './components/Contact'
import { getImagePath } from './utils/imagePaths'

function App() {
  useEffect(() => {
    // Establecer variables CSS para las imágenes de fondo
    document.documentElement.style.setProperty('--hero-bg-image', `url('${getImagePath('cafe-premium.jpg')}')`)
    document.documentElement.style.setProperty('--coffee-profile-bg-image', `url('${getImagePath('escogiendo-cafe.jpeg')}')`)
  }, [])

  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Features />
      <CoffeeProfile />
      <Process />
      <Innovation />
      <Markets />
      <SenaProject />
      <Contact />
    </div>
  )
}

export default App
