import "./PlantCard.css"

function PlantCard({_id, name, category, price, image, description}) {
  return (
    <div className="plant-card">
      <h1 className="plant-title">{name}</h1>
      <p className="plant-price">{price}</p>
    </div>
  )
}

export default PlantCard
