import InputText from "./InputText";
import InputSubmit from "./InputSubmit";
import {useState} from "react";
import createAccount from "../api/createAccount";

const FormSignUp = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');

    const handleSubmit = async (e) => {
        if (password !== passRepeat) {
            alert("Pass conflicts");
            return;
        }
        e.preventDefault();
        await createAccount({email, name, password});
        alert("success");
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col px-10">
            <InputText ph="Введите Email"  setVal={setEmail}/>
            <InputText ph="Введите имя" setVal={setName}/>
            <InputText ph="Введите пароль" setVal={setPassword}/>
            <InputText ph="Повторите пароль" setVal={setPassRepeat}/>
            <InputSubmit val="Создать аккаунт"/>
            <p className="mb-5 text-blue-500">Уже есть аккаунт</p>
        </form>
    )
}

export default FormSignUp;
