import axios from "axios";

const fetchDropdown = () => axios.get("http://localhost:3001/dropdown");

export default fetchDropdown;
