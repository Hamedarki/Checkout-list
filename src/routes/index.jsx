import {BrowserRouter, Routes, Route} from "react-router-dom";
// import your route components too
import Home from '../pages/home'
const AppRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </BrowserRouter>
}

export default AppRouter;