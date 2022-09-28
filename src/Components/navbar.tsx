import '../Css/navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im' 
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Car } from '../Interfaces/car'


const Navbar = () => {
    let [showNav, setShowNav ] = useState(false); 
    const car:Car[] = useSelector((state : any)=> state.car);




  return (
<>
<nav className='flex justify-between items-center'>

{/* w1/5  */}
<div className="logo w-3/5 lg:w-1/5" >
    <img src="/images/logo.svg" alt="nothing to show" />
</div>

<div className="links flex justify-between w-4/5 items-center ">
    <ul className='hidden  justify-around items-center w-3/5 lg:flex'>
       {
         car && car.map((car:Car)=> <li key={car.id} className='hover navLink'>{car.title}</li>)
       }
    </ul>

{/* w/1/5  */}
    <ul className='otherLinks flex justify-between  items-center w-full lg:w-1/5'>


    <li className="navlink hover">
        shop 
    </li>
    <li className="navlink hover">
        Account
    </li>
    <div className='hamburger'  onClick={()=> setShowNav(true)}>
    <GiHamburgerMenu style={{
        fontSize : "1.3rem",
        marginRight : "10px",
        cursor : "pointer"
    }} />
    </div>


    </ul>
</div>

    
<div className="mobile__menu" style={
  {
    right : showNav ? "0px" : "-110%",
    transition : "right .5s ease-in-out"
  }
}>
          <div className="cross" onClick={()=> setShowNav(false)}>
        <ImCross></ImCross>
    </div>
    <ul className="mobile__links">
<li className='hover'>Existing Inventory</li>
<li className='hover'>Used Inventory</li>
<li className='hover'>Trade-In</li>
<li className='hover'>Test Drive</li>
<li className='hover'>Insurance</li>
<li className='hover'>Cybertruck</li>
<li className='hover'>Roadster</li>
<li className='hover'>Semi</li>
<li className='hover'>Charging</li>
<li className='hover'>Powerwall</li>
<li className='hover'>Commercial Energy</li>
<li className='hover'>Utilities</li>
<li className='hover'>Find Us</li>

    </ul>


 
</div>



</nav>
</>
  )
}

export default Navbar