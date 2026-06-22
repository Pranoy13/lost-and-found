import ItemCard from '../components/ItemCard'

const dummyItems = [
  {
    id: 1,
    title: 'Black Wallet',
    category: 'Wallet',
    location: 'LPU Gate 2',
    date: '2026-06-20',
    type: 'lost',
  },
  {
    id: 2,
    title: 'iPhone 13',
    category: 'Electronics',
    location: 'Library',
    date: '2026-06-19',
    type: 'found',
  },
  {
    id: 3,
    title: 'Blue Water Bottle',
    category: 'Personal Item',
    location: 'Cafeteria',
    date: '2026-06-18',
    type: 'lost',
  },
]

function Browse() {
  return (
    <div>
      <h1>Browse Items</h1>
      <div>
        {dummyItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Browse