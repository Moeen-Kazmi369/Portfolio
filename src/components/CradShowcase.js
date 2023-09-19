
const CradShowcase = (props) => {

  return (
    <div className="ShowCaseCards" data-aos="zoom-out">
        <span>{props.logo}</span>
        <h3>{props.title}</h3>
        <h4>{props.des}</h4>
    </div>
  )
}

export default CradShowcase