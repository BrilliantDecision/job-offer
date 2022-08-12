const InputText = ({ph, setVal}) => {
    return (
        <input type="text" placeholder={ph} onChange={(e) => setVal(() => e.target.value)} className="placeholder:text-slate-800 bg-gray-200 border-0 rounded-lg px-3 py-2 my-3 outline-0"/>
    )
}

export default InputText;
