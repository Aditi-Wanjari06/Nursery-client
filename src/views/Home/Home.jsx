import "./Home.css"
import PlantCard from "../../components/PlantCard/PlantCard"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

function Home() {

  const [plants, setPlants] = useState([])

  const loadPlants = async () => {
    const response = await axios.get("http://localhost:8000/plants")
    setPlants(response.data.data)
  }

  useEffect(() => {
    loadPlants()
  }, [])

  return (
    <div>
      <h1>Plants</h1>

      {
        plants.map((plant, i) => {
          const {
            _id,
            name,
            category,
            image,
            price,
            description
          } = plant

          return (<PlantCard
            key={i}
            _id={_id}
            name={name}
            category={category}
            image={image}
            price={price}
            description={description}
          />
          )
        })
      }
    </div>
  )
}

export default Home