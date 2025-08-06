import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets";
import { MenuIcon, XIcon } from "lucide-react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [mobile, setMobile] = useState<boolean>(false);
    const handleWindow = () => {
      if(window.innerWidth <= 768)
      {
        setMobile(true);
        return;
      }
      setMobile(false);
    }
    useEffect(() => {
      handleWindow()
    }, [])
    window.onresize = () => handleWindow();
  return (
    <nav className="fixed w-full absolute z-100 flex justify-between px-3 md:px-5 lg:px-25 text-white items-center py-4">
        <MenuIcon className="md:hidden" onClick={() => setMenuOpen(true)} />
        <NavLink to={'/'}><img src={mobile ? assets.logoShort : assets.logo} alt="logo" /></NavLink>
        <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row max-md:bg-primary max-md:h-screen transition-[width] duration-300 overflow-hidden max-md:justify-center max-md:items-center gap-5 ${menuOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>
            <XIcon className="md:hidden" onClick={() => setMenuOpen(false)} />
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