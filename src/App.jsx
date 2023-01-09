import React from 'react'
import Navbar from "./components/nav.jsx"
import Hero from "./components/hero.jsx"
import Card from "./components/card.jsx"
import './App.css'

function App() {
  

  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
        img="katie.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div> 
  )
}

export default App
