import "./App.css";
import { BrowserRouter as Routes, Route }

    from "react-router-dom";
//import App from "./App";
import Detailed from "./DetailedQuestions";
import Basic from "./BasicQuestions";
import Home from "./HomeQuestions";

 
function Routerer() {
    return (
        <div>
            
            <Routes>
                <Route path="/basic" element={<Basic />} />
                <Route path="/detailed" element={<Detailed />} />
                <Route path="/" element={<Home />} /> {/* Assuming Home is your landing page */}
            </Routes>
            
        </div>
    );
}
 
export default Routerer;