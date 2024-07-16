import toast from "react-hot-toast"
import "./PlantCard.css"
import axios from "axios"
import { Link } from "react-router-dom"

function PlantCard({ _id, name, category, price, image, description, loadPlants }) {

  const deletePlant = async (plantId) => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`)

    toast.success(response.data.message)

    loadPlants()

  }
  return (
    <div className="plant-card">
      <h1 className="plant-title">{name}</h1>
      <p className="plant-price">Price: {price}</p>
      <p>{description}</p>

      <img src={image} className="plant-card-img" />

      <div>
        <Link to = {`/update/${_id}`}
          className="plant-card-action-button">
          Edit
        </Link>

        <button
          type="button"
          className="plant-card-action-button"
          onClick={() => {
            deletePlant(_id)
          }}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default PlantCard
