import { useParams } from "react-router-dom"
import "./UpdatePlant.css"
import { useEffect, useState } from "react";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast"
import { Link } from "react-router-dom";

function UpdatePlant() {

  const { id } = useParams();

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("0")
  const [description, setDescription] = useState("")

  const updatePlant = async () => {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`, {
      name: name,
      price: price,
      image: image,
      description: description,
      category: category
    })

    toast.success(response.data.message)

  }

  const loadPlant = async () => {
    if (!id) {
      return
    }
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)

    const {
      name,
      image,
      price,
      category,
      description
    } = response.data.data

    setName(name)
    setImage(image)
    setPrice(price)
    setCategory(category)
    setDescription(description)
  }

  useEffect(() => {
    if (id) {
      loadPlant(id)
    }
  }, [id])

  return (
    <div>UpdatePlant:{id}

      <form>
        <input
          type="text"
          placeholder="Enter plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="plant-input"
        />

        <input
          type="number"
          placeholder="Enter plant price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="plant-input"
        />

        <input
          type="text"
          placeholder="Enter plant category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="plant-input"
        />

        <img src={image} className="img-preview" />

        <input
          type="text"
          placeholder="Enter plant image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="plant-input"
        />

        <input
          type="text"
          placeholder="Enter plant description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="plant-input"
        />


        <button type="button" onClick={updatePlant} >Update Plant</button>

      </form>
      <br/>
      <br/>

      <Link to="/">
        Show All Plants
      </Link>

      <Toaster />

    </div>
  )
}

export default UpdatePlant