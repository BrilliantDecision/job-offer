import FormSignUp from "../components/FormSignUp";

const SignUp = () => {
    return (
        <div className="flex flex-col justify-center w-96 bg-blue-200 mx-auto border rounded-lg">
            <h1 className="text-center text-3xl  m-5">Регистрация</h1>
            <FormSignUp/>
        </div>
    )
}

export default SignUp;
