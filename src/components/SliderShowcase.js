import { FaQuoteLeft } from "react-icons/fa";
import ProjectImg from "./ProjectImg"
const SliderShowcase = () => {
return (
<section id="SliderShowcase">
        <div className="sliderShowcase">
                <div className="sliderDiv S1">
                        <div className="sliderImageDiv">
                                <ProjectImg className="sliderImage" src="https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </div>
                        <div className="sliderTextDiv">
                                <span><FaQuoteLeft /></span>
                                <p>Life is a series of natural and spontaneous changes. Don't resist them—that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like</p>
                                <h4>Roberto Carlos</h4>
                                <h5>CEO of Football</h5>
                        </div>
                </div>
        </div>
</section>
                /* <div className="sliderDiv S2">
                        <div className="sliderImageDiv">
                                <ProjectImg className="sliderImage" src="https://images.pexels.com/photos/5265000/pexels-photo-5265000.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </div>
                        <div className="sliderTextDiv">
                                <span><FaQuoteLeft /></span>
                                <p></p>
                                <h5></h5>
                                <h5></h5>
                        </div>
                </div> */
)
}

export default SliderShowcase