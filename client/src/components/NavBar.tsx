import { useState } from "react"
import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets";
import { MenuIcon, XIcon } from "lucide-react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className="fixed w-full absolute z-100 flex justify-between px-25 text-white items-center py-4">
        <NavLink to={'/'}><img src={assets.logo} alt="logo" /></NavLink>
        <MenuIcon className="md:hidden" />
        <div className="flex gap-5">
            <XIcon className="md:hidden" />
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/hotels'}>Hotels</NavLink>
            <NavLink to={'/experiences'}>Experiences</NavLink>
            <NavLink to={'/about'}>About</NavLink>
        </div>
        <div className="flex gap-5">
            <button><img src={assets.searchIcon} alt="search-icon" /></button>
            <button><img src={assets.userIcon} alt="user-icon" /></button>
            <button className="w-[95px] h-[34px] rounded-full bg-primary">Login</button>
        </div>
    </nav>
  )
}

export default NavBar