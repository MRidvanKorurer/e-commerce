import React from 'react'
import NavbarLeft from '../components/Navbar/NavbarLeft';
import NavbarMidd from '../components/Navbar/NavbarMidd';
import NavbarRight from '../components/Navbar/NavbarRight';


const Navbar: React.FC = () => {
  return (
    <div className=' flex justify-between items-center border-b py-8'>
        <div>
            <NavbarLeft />
        </div>

        <div>
            <NavbarMidd />
        </div>

        <div>
            <NavbarRight />
        </div>
    </div>
  )
}

export default Navbar