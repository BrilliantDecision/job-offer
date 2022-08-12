import DropdownMenuItem from "./DropdownMenuItem";
import "../styles/CustomDropdown.css"

const CustomDropdown = ({main, items}) => {
    return (
        <div className="my-20 h-96 group overflow-hidden">
            <DropdownMenuItem title={main.title} path={main.path}/>
            <div className="CustomDropdown">
                {
                    items.map((v) =>
                        <DropdownMenuItem key={v.id} title={v.title} path={v.path}/>
                    )
                }
            </div>
        </div>
    )
}

export default CustomDropdown;
