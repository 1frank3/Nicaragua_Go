import {Routes, Route} from "react-router-dom"
import { DefaultLayout } from "./layouts/Default"
import { HomePage } from "./pages/home"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
            <Route index element={<HomePage/>} />
            </Route>
        </Routes>
    )
}