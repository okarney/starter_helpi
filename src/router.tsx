import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import BasicQuestions from './BasicQuestions';
import DetailedQuestions from './DetailedQuestions';

const RootRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/BasicQuestions" element={<BasicQuestions />} />
                <Route path="/DetailedQuestions" element={<DetailedQuestions />} />
                {/* You can add more routes here */}
            </Routes>
        </Router>
    );
};

export default RootRouter;
