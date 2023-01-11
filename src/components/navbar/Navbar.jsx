import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <div className='logo'>Mc2Booking</div>
        <div className='navItems'>
          <button className='navButton'>Register</button>
          <button className='navButton'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
