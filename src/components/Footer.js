import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
return (
<footer>
        <div className="footer">
                <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg" alt="Logo" />
                <p>© 2023 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</p>
                <div className="footerList">
                        <span><BiMessageRoundedDetail /></span>
                        <span><FaBehance /></span>
                        <span><FaInstagram /></span>
                        <span><FaLinkedinIn /></span>
                </div>
        </div>
</footer>
)
}

export default Footer
