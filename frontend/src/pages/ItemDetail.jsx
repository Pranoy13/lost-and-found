import { useParams, Link } from 'react-router-dom'

const dummyItems = [
  {
    id: 1,
    title: 'Black Wallet',
    category: 'Wallet',
    location: 'LPU Gate 2',
    date: '2026-06-20',
    type: 'lost',
    description: 'A black leather wallet with some cards inside. Lost near the gate 2 entrance.',
  },
  {
    id: 2,
    title: 'iPhone 13',
    category: 'Electronics',
    location: 'Library',
    date: '2026-06-19',
    type: 'found',
    description: 'Found an iPhone 13 on the second floor of the library, near the study tables.',
  },
  {
    id: 3,
    title: 'Blue Water Bottle',
    category: 'Personal Item',
    location: 'Cafeteria',
    date: '2026-06-18',
    type: 'lost',
    description: 'A blue steel water bottle, has a small sticker on it. Left at the cafeteria.',
  },
]

function ItemDetail() {
  const { id } = useParams()
  const item = dummyItems.find((item) => item.id === parseInt(id))

  if (!item) {
    return <h2>Item not found</h2>
  }

  return (
    <div>
      <Link to="/browse">← Back to Browse</Link>
      <h1>{item.title}</h1>
      <p>Category: {item.category}</p>
      <p>Location: {item.location}</p>
      <p>Date: {item.date}</p>
      <p>Type: {item.type}</p>
      <p>Description: {item.description}</p>
      <button>Contact Poster</button>
    </div>
  )
}

export default ItemDetail