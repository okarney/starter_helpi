import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export function Buttons(): JSX.Element {
    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);
    const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);

    if (goToBasicQuestionsPage) {
        return <Navigate to="/BasicQuestions"/>
    }

    if (goToDetailedQuestionsPage) {
        return <Navigate to="/DetailedQuestions"/>
    }

    return (
        <div>
            <Button onClick={() => {setGoToBasicQuestionsPage(true)}}>Basic Questions Page</Button>
            <Button onClick={() => {setGoToDetailedQuestionsPage(true)}}>Detailed Questions Page</Button>
        </div>
    )
}