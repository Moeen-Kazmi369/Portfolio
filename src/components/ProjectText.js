import { PiArrowElbowDownRightDuotone } from "react-icons/pi"
const ProjectText = (props) => {
return (
        <div className="ProjectsText">
                <h4 className="miniHeadline">---- Project {props.num}</h4>
                <h2 data-aos="fade-up">{props.title}</h2>
                <p data-aos="fade-up">{props.des}</p>
                <a data-aos="fade-down"><PiArrowElbowDownRightDuotone /> Read More</a>
        </div>
)
}

export default ProjectText