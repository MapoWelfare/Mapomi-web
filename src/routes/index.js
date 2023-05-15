import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";

const RootRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/1' element={<Home/>} />
                <Route path='/' element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute;