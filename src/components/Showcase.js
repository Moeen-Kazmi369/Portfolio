import CradShowcase from "./CradShowcase"
import { PiCubeFocus } from "react-icons/pi";
import { RxLayers } from "react-icons/rx";
import { MdImportantDevices } from "react-icons/md";
import { FaAtom } from "react-icons/fa";
const Showcase = () => {
return (
<section id="showcase">
        <div className="showcase">
                <div className="showcaseLeft">
                        <div className="showcaseLeftL">
                                <CradShowcase logo = {<PiCubeFocus />} title='Product Design' des="The technological revolution is changing aspect"/>
                                <CradShowcase logo = {<RxLayers/>} title='UI Design' des="The technological revolution is changing aspect"/>
                        </div>
                        <div className="showcaseLeftR">
                                <CradShowcase logo = {<MdImportantDevices />} title='Icon Design' des="The technological revolution is changing aspect"/>
                                <CradShowcase logo = {<FaAtom />} title='Logo Design' des="The technological revolution is changing aspect"/>
                        </div>
                </div>
                <div className="showcaseRight" data-aos="fade-right">
                        <h3 className="miniHeadline">--- My Skills</h3>
                        <h2>Why Hire Me For Next Project?</h2>
                        <h4>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</h4>
                        <a className="btn">Download CV</a>
                </div>
        </div>
</section>
)
}

export default Showcase