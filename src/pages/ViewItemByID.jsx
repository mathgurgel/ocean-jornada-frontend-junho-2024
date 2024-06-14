import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ViewItemByID.css'

function ViewItemByID() {

  const [item, setItem] = useState()

  const { itemID } = useParams()

  async function getData() {
    const apiURL = 'https://dattebayo-api.onrender.com/characters/' + itemID

    const response = await fetch(apiURL)
    const body = await response.json()
    console.log("body", body)
    setItem(body)
  }

  useEffect(function () {
    getData()
  }, [])

  if (!item) {
    return <div>Loading...</div>
  }
  
  return (
    <>
      <div className="view_item">
        <Link to="/">Back</Link>
        <h1>{item.name}</h1>

        <div class="content">
          <div>
            <img src={item.images[0]} />
          </div>
          <div className="attributes">
            <div className="attribute">
              <h2>Jutsus</h2>
              {
                item.jutsu?.map((jutsu, index) => (
                  <p key={index}>{jutsu}</p>
                )) ?? 'None'
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewItemByID
