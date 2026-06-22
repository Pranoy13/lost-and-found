import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Lost & Found</h1>
      <p>Lost something? Found something? Help reconnect items with their owners.</p>
      <div>
        <Link to="/browse">
          <button>Browse Items</button>
        </Link>
        <Link to="/post">
          <button>Post an Item</button>
        </Link>
      </div>
    </div>
  )
}

export default Home