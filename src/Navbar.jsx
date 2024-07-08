import './Navbar.css'



const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <div className="logo-circ"></div>
      </div>
      <div className="contents">
        <div className="rect"></div>
        <div className="sqr"></div>
        <div className="rect"></div>
        <div className="circle"></div>
      </div>
    </nav>
  )
}

export default Navbar
