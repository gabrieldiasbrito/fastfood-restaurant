import { useState } from "react";
import { IoSearch , IoBagHandleOutline , IoFastFoodOutline , IoMenu } from "react-icons/io5";
import "./navbar.css"

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false)

    return(
        <nav >
            <IoFastFoodOutline className="logo"/>
            <ul className={`${isOpen && "open"}`}>
                <li><a href="">Home</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Serviços</a></li>
                <li><a href="">Combos</a></li>
            </ul> 
            
            <div className="icon">
                <IoSearch className="search"/>
                <IoBagHandleOutline className="bag"/>
            </div>
                <IoMenu className={`checkbtn`} onClick={() => setIsOpen(!isOpen)}/>
        </nav>
    )
}