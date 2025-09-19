import {Routes, Route} from "react-router-dom"
import { DefaultLayout } from "./layouts/Default"
import { HomePage } from "./pages/home"
import Quiz from "./components/retos/Quiz"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
            <Route index element={<HomePage/>} />

            <Route path="reto/quiz" element={<Quiz/>} />
            </Route>
        </Routes>
    )
}