import { useEffect, useState } from 'react'
import Card from '../components/Card/Card'

function Home() {

  const [items, setItems] = useState([])

  async function getData() {
    const apiURL = 'https://dattebayo-api.onrender.com/characters'

    const response = await fetch(apiURL)
    const body = await response.json()
    const characters = body.characters
    console.log(characters)

    setItems(characters)
  }

  useEffect(function () {
    getData()
  }, [])
  
  return (
    <>
      <div className="cards">
        {items.map(function (element) {
          return <Card item={element} />
        })}
      </div>
    </>
  )
}

export default Home
