import Counterdiv from "./Counterdiv"
const Counter = () => {
return (
<section id="Counter">
        <div className="Counter">
                <Counterdiv classnames="counterdiv C1" count="45"  title="Happy Clients"/>
                <Counterdiv classnames="counterdiv C2" count="423"  title="Projects done"/>
                <Counterdiv classnames="counterdiv C3" count="7" title="Awards Winning"/>
                <Counterdiv classnames="counterdiv C4" count="12" title="Experience"/>
        </div>
</section>

)
}

export default Counter