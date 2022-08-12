import Icon from "./Icon";

const DropdownMenuItem = ({title, path}) => {
    return (
        <div className="flex flex-row justify-between p-4 w-72 bg-gray-50 text-slate-800 filter contrast-100 hover:contrast-75">
            <p>{title}</p>
            <Icon path={path}/>
        </div>
    )
}

export default DropdownMenuItem;
