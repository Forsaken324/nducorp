import { useEffect, useState } from "react"
import { NavLink, } from "react-router-dom"
import { assets } from "../assets/assets";
import { MenuIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [mobile, setMobile] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);


    const handleWindow = () => {
      setMobile(window.innerWidth <= 768);
    }
    const closeDrawer = () => {
      setMenuOpen(false);
    }
    useEffect(() => {
      handleWindow();
      const handleScroll = () => setScrolled(window.scrollY > 1010)
      window.addEventListener('resize', handleWindow);
      window.addEventListener('scroll', handleScroll);

      // return a clean up function to remove event listners so they dont persist beyond mount
      return () => {
        window.removeEventListener('resize', handleWindow);
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])
    window.onresize = () => handleWindow();
  return (
    <nav className={`fixed w-full absolute z-100 flex justify-between px-3 md:px-5 lg:px-25 text-white items-center py-4 transition duration-300 ease-in ${scrolled ? "bg-primary" : ""}`}>
        <MenuIcon className="md:hidden" onClick={() => setMenuOpen(true)} />
        <NavLink to={'/'}><img src={mobile ? assets.logoShort : assets.logo} alt="logo" /></NavLink>
        <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row max-md:bg-primary max-md:h-screen transition-[width] duration-300 overflow-hidden max-md:justify-center max-md:items-center gap-5 ${menuOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>
            <XIcon className="md:hidden ml-60" onClick={() => setMenuOpen(false)} />
            <NavLink to={'/'} onClick={closeDrawer}>Home</NavLink>
            <NavLink to={'/hotels'} onClick={closeDrawer}>Hotels</NavLink>
            <NavLink to={'/experiences'} onClick={closeDrawer}>Experiences</NavLink>
            <NavLink to={'/about'} onClick={closeDrawer}>About</NavLink>
        </div>
        <div className="flex gap-5">
            <button><img src={assets.searchIcon} alt="search-icon" /></button>
            <button><img src={assets.userIcon} alt="user-icon" /></button>
            <button className={`w-[95px] h-[34px] rounded-full transition duration-300 ease-in ${scrolled ? 'bg-gray-600 text-white' : 'bg-primary text-white'}`}>Login</button>
        </div>
    </nav>
  )
}

export default NavBar