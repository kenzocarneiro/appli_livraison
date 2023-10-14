// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Order from "./pages/Order";

import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.css";

//en utilisant le composant Route
export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Auth />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<Order />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}
