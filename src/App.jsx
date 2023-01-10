import React from 'react'
import Navbar from "./components/nav.jsx"
import Hero from "./components/hero.jsx"
import Card from "./components/card.jsx"
import data from "./data.jsx"

import './App.css'

function App() {
  const Cards = data.map(card=>{
    return <Card 
        key={card.id}
        img= {card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
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
