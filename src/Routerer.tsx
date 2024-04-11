import "./App.css";
import { BrowserRouter as Routes, Route, BrowserRouter }

    from "react-router-dom";
//import App from "./App";
import Detailed from "./DetailedQuestions";
import Basic from "./BasicQuestions";
import Home from "./HomeQuestions";

 
function Routerer() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/basic" element={<Basic />} />
                <Route path="/detailed" element={<Detailed />} />
                <Route path="/" element={<Home />} /> {/* Assuming Home is your landing page */}
            </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default Routerer;