import {Route, Routes} from "react-router-dom";
import Dropdown from "./pages/Dropdown";
import SignUp from "./pages/SignUp";
import LayoutHeader from "./Layout/LayoutHeader";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LayoutHeader/>}>
                <Route path="/dropdown" element={<Dropdown/>} />
                <Route path="/signUp" element={<SignUp/>} />
            </Route>
        </Routes>
    );
}

export default App;
