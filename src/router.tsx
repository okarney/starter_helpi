
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import App from "./App";
import Detailed from "./DetailedQuestions";
import Basic from "./BasicQuestions";
 
function Routerer() {
    return (
        <Router>
            <Routes>
                <Route path="/first"
                    element={<Basic />} />
                <Route path="/second"
                    element={<Detailed />} />
                <Route path="/"
                    element={<App />} />
            </Routes>
        </Router>
        
    );
}
 
export default Routerer;