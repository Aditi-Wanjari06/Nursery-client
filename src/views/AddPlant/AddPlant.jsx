import { useState } from "react"
import "./AddPlant.css"
import toast from "react-hot-toast"
import { Toaster } from "react-hot-toast"
import axios from "axios"
import { Link } from "react-router-dom"

function AddPlant() {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("0")
  const [description, setDescription] = useState("")

  const addPlant = async () => {
    toast.loading("Adding Plants..")

    if (!name || !category || !price || !image || !description) {
      toast.error("Please enter all details..")
      return
    }

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`,
      {
        name: name,
        price: price,
        image: image,
        category: category,
        description: description
      })

    toast.dismiss()
    toast.success(response.data.message)

    setName("")
    setCategory("")
    setImage("")
    setPrice("")
    setDescription("")
  }

  return (
    <div>
      <h1>AddPlant</h1>

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


        <button type="button" onClick={addPlant}>Add Plant</button>

      </form>
      <br />
      <br />

      <Link to="/">
        Show All Plants
      </Link>

      <Toaster />
    </div>
  )
}

export default AddPlant