import './index.css'
import LogoutButton from '../LogoutButton'

import Header from '../Header'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <h1 className="about-heading">About Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default About
