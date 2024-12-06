import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"

export const Routing = () =>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/Tailwind-Landing-page" element={<Home/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}