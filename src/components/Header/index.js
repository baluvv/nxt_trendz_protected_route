import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="nav-container">
    <Link to="/">
      <li className="nav-item">Home</li>
    </Link>
    <Link to="/about">
      <li className="nav-item">About</li>
    </Link>
  </ul>
)

export default Header
