import React from 'react'
import Navbar from "./components/nav.jsx"
import Hero from "./components/hero.jsx"
import Card from "./components/card.jsx"
import data from "./data.js"

import './App.css'

function App() {
  const Cards = data.map(card=>{
    return <Card 
        img= {card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country={card.location}
        title={card.title}
        price={card.price}
      />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {Cards}
      </section>
    </div> 
  )
}

export default App
