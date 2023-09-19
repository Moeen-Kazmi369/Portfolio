import { BsBoxes } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineExport } from "react-icons/ai";
import SideBtnData from "./SideBtnData"
const SideBtn = () => {
return (
        <div className="SideBtn">
                <SideBtnData logo={<BsBoxes />} title="Browse Demos"/>
                <SideBtnData logo={<BiShoppingBag />} title="Buy Now!"/>
                <SideBtnData logo={<AiOutlineExport />} title="Export Section"/>
        </div>
)
}

export default SideBtn