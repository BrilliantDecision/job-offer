import axios from "axios";

const createAccount = ({email, name, password}) => axios.post("http://localhost:3001/users", {
        email,
        name,
        password
    });

export default createAccount;
