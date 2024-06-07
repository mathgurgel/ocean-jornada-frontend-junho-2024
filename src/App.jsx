import './App.css'
import Card from './components/Card/Card'

function App() {

  const item1 = {
    name: "Naruto Uzumaki",
    image: "https://static.wikia.nocookie.net/naruto/images/3/33/Naruto_Uzumaki_%28Parte_I_-_HD%29.png/revision/latest/scale-to-width/360?cb=20160316113315&path-prefix=pt-br",
    level: "Genin",
    team: "7",
    village: "Folha"
  }
  const item2 = {
    name: "Sasuke Uchiha",
    image: "https://static.wikia.nocookie.net/naruto/images/e/e7/Sasuke_epi_319.png/revision/latest?cb=20130629210647&path-prefix=pt-br",
    level: "Genin",
    team: "7",
    village: "Folha"
  }
  const item3 = {
    name: "Sakura Haruno",
    image: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/03/Haruno_Sakura.jpg/280px-Haruno_Sakura.jpg",
    level: "Genin",
    team: "7",
    village: "Folha"
  }
  const item4 = {
    name: "Kakashi Hatake",
    image: "https://static.wikia.nocookie.net/naruto/images/c/ca/Kakashi_Hatake_%28Infobox_-_Naruto%29.PNG/revision/latest?cb=20221012051237&path-prefix=pt-br",
    level: "Jonin",
    team: "7",
    village: "Folha"
  }

  const items = [item1, item2, item3, item4]
  
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

export default App
