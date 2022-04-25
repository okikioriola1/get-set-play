import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import Logo from '../../images/gsp-logo.svg'
import './navbar.css'
const Navbar = () => {

    const Menu =()=>(
        <>
     {/* <p><a href="#home">Home</a></p> */}
     <p><a href="#about">About</a></p>
     <p><a href="#token">Play to Earn</a></p>
     <p><a href="#roadmap">Roadmap</a></p>
     <p><a href="#team">Team</a></p>
     <button className="nav-explore"><a href="">Whitepaper</a></button>
        </>
    )
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className="gsp__navbar">
            <div className="gsp__navbar-container">
                <div className="gsp__logo">
                    <img src={Logo} alt="logo" className="gsp__nav-logo"/>
                </div>
                <div className="gsp__nav-links">
                    <Menu/>
                </div>
            
            <div className="gsp__navbar-menu">
                {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/>
                    :<RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>}
                    {toggleMenu && (
                        <div className="gsp__menu-container scale-up-center">
                            <Menu/>
                        </div>

                    )}
            </div>
            </div>
            
        </div>
    )
}

export default Navbar
