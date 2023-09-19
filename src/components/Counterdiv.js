const Counterdiv = (props) => {
return (
        <div className={props.classnames}>
                <h2 data-aos="fade-up">{props.count}</h2>
                <p data-aos="fade-up">{props.title}</p>
        </div>
)
}

export default Counterdiv