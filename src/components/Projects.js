import ProjectText from "./ProjectText"
import ProjectImg from "./ProjectImg"
const Projects = () => {
return (
<section id="Project">
        <div className="Projects">
                <div className="project1 Subprojects">
                        <ProjectText num="1" title="Branding Nice Studio" des="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."/>
                        <div className="projectImgWrapper">
                                <ProjectImg src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-1-img.jpg"/>
                        </div>
                </div>
                <div className="project2 Subprojects">
                        <ProjectText num="2" title="Mobile Card App" des="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."/>
                        <div className="projectImgWrapper">
                                <ProjectImg src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-2-img.jpg"/>
                        </div>
                </div>
                <div className="project3 Subprojects">
                        <ProjectText num="3" title="Resturant Landing Page" des="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."/>
                        <div className="projectImgWrapper">
                                <ProjectImg src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-3-img.jpg"/>
                        </div>
                </div>
                <h1 className='viewBtn'><span>View All</span></h1>
        </div>
</section>
)
}

export default Projects