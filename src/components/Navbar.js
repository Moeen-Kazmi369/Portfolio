import { FaDribbble } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
return (
        <nav className='Navbar'>
                <div className='NavbarMainDiv'>
                        
                <div className='logo'>
                        <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg" alt="Logo" />
                </div>
                <div className='navlist'>
                        <a href='#' style={{ borderBottom: '2px solid white' }}>Home</a>
                        <a href='#'>Portfolio</a>
                        <a href='#'>Contact</a>
                </div>
                <div className='LeftNav'>
                        <h3><AiOutlineMenu /></h3>
                        <span href='#'><FaDribbble /></span>
                        <h2 className="btn" data-aos="fade-left" >Contact&nbsp; Me</h2>
                </div>

                </div>
        </nav>
)

}

export default Navbar