const ProjectImg = (props) => {
return (
    <div className="ProjectImg">
        <img src={props.src} alt="Project Image" data-aos="zoom-out"/>
        <div className="blurBG"></div>
    </div>
  )
}

export default ProjectImg