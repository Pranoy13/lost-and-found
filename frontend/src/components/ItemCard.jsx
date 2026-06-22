import { Link } from 'react-router-dom'

function ItemCard({ item }) {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>Category: {item.category}</p>
      <p>Location: {item.location}</p>
      <p>Date: {item.date}</p>
      <p>Type: {item.type}</p>
      <Link to={`/item/${item.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  )
}

export default ItemCard