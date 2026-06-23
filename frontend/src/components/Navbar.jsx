import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logoutUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutUser()
    navigate('/')
  }

  return (
    <nav>
      <Link to="/">Lost & Found</Link>
      <div>
        <Link to="/browse">Browse</Link>
        <Link to="/post">Post Item</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/profile">Profile</Link>

        {user ? (
          <>
            <span> Hi, {user.name} </span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar