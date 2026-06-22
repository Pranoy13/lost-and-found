import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Lost & Found</Link>
      <div>
        <Link to="/browse">Browse</Link>
        <Link to="/post">Post Item</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar