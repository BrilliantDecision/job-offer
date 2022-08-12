import CustomDropdown from "../components/CustomDropdown";
import {useEffect, useState} from "react";
import fetchDropdown from "../api/fetchDropdown";

const Dropdown = () => {
    const [dropdown, setDropdown] = useState({
        main: {
            title: '',
            path: ''
        },
        items: [
            {
                id: '',
                title: '',
                path: ''
            }
        ]
    });

    const fetchDrop = async () => {
        const response = await fetchDropdown();
        setDropdown(() => response.data);
    }

    useEffect(() => {
        fetchDrop();
    }, []);

    return (
        <div className="flex justify-center bg-blue-300">
            <CustomDropdown {...dropdown}/>
        </div>
    )
}

export default Dropdown;
