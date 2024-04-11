import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function Basic() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  //function App(): JSX.Element {
    // This is the State (Model)
    const [choice, setChoice] = useState<string>("");
    const [choice2, setChoice2] = useState<string>("");
    const [choice3, setChoice3] = useState<string>("");
    const [choice4, setChoice4] = useState<string>("");
    const [choice5, setChoice5] = useState<string>("");
    const [choice6, setChoice6] = useState<string>("");
    const [choice7, setChoice7] = useState<string>("");
  //}
    // This is the Control
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    function updateChoice2(event: React.ChangeEvent<HTMLSelectElement>) {
      setChoice2(event.target.value);
  }
    function updateChoice3(event: React.ChangeEvent<HTMLSelectElement>) {
      setChoice3(event.target.value);
}
    function updateChoice4(event: React.ChangeEvent<HTMLSelectElement>) {
      setChoice4(event.target.value);
}
    function updateChoice5(event: React.ChangeEvent<HTMLSelectElement>) {
      setChoice5(event.target.value);
}
    function updateChoice6(event: React.ChangeEvent<HTMLSelectElement>) {
      setChoice6(event.target.value);
}
    function updateChoice7(event: React.ChangeEvent<HTMLSelectElement>) {
      setChoice7(event.target.value);
}

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Basic Questions</h1>
        <br></br>
        <div>
            <Form.Group controlId="basicQuestions">
                <Form.Label>Which work environment aligns best with your interests?</Form.Label>
                <Form.Select value = {choice} onChange={updateChoice}>
                <option value="">Select an option</option>
                    <option value="Structured and organized">Structured and organized</option>
                    <option value="Problem-solving and analytical">Problem-solving and analytical</option>
                    <option value="Collaborative and people-oriented">Collaborative and people-oriented</option>
                    <option value="Creative and innovative">Creative and innovative</option>
                    <option value=" Hands-on and practical"> Hands-on and practical</option>
                    <option value="Leadership-driven and competitive">Leadership-driven and competitive</option>

                </Form.Select>
            </Form.Group>
            
            <Form.Group controlId="basicQuestions">
                <Form.Label>Which personality traits do you resonate with the most?</Form.Label>
                <Form.Select value={choice2} onChange={updateChoice2}>
                <option value="">Select an option</option>
                    <option value="Detail-oriented and meticulous">Detail-oriented and meticulous</option>
                    <option value="Logical and analytical">Logical and analytical</option>
                    <option value="Compassionate and empathetic">Compassionate and empathetic</option>
                    <option value="Imaginative and expressive">Imaginative and expressive</option>
                    <option value="Practical and resourceful"> Practical and resourceful</option>
                    <option value="Confident and decisive">Confident and decisive</option>
                    <option value="None of the above">None of the above</option>


                </Form.Select>
            </Form.Group>

            <Form.Group controlId="basicQuestions">
                <Form.Label>Which of the following is true about you?</Form.Label>
                <Form.Select value={choice3} onChange={updateChoice3}>
                <option value="">Select an option</option>
                    <option value="Very organized">Very organized</option>
                    <option value="Organized">Organized</option>
                    <option value="Somewhat organized">Somewhat organized</option>
                    <option value="Not organized">Not organized</option>

                </Form.Select>
            </Form.Group>

            <Form.Group controlId="basicQuestions">
                <Form.Label>Which career-related activities do you find most fulfilling?</Form.Label>
                <Form.Select value={choice4} onChange={updateChoice4}>
                <option value="">Select an option</option>
                    <option value="Organizing and maintaining order">Organizing and maintaining order</option>
                    <option value="Analyzing data and solving complex problems">Analyzing data and solving complex problems</option>
                    <option value="Helping others and fostering connections">Helping others and fostering connections</option>
                    <option value="Expressing creativity and originality">Expressing creativity and originality</option>
                    <option value="Engaging in practical tasks and hands-on work"> Engaging in practical tasks and hands-on work</option>
                    <option value="Leading teams and driving projects forward">Leading teams and driving projects forward</option>

                </Form.Select>
            </Form.Group>

            <Form.Group controlId="basicQuestions">
                <Form.Label>Which challenges are you eager to take on?</Form.Label>
                <Form.Select value={choice5} onChange={updateChoice5}>
                <option value="">Select an option</option>
                    <option value="Ensuring accuracy and precision">Ensuring accuracy and precision</option>
                    <option value="Tackling intellectual puzzles and scientific inquiries">Tackling intellectual puzzles and scientific inquiries</option>
                    <option value="Addressing social issues and making a difference">Addressing social issues and making a difference</option>
                    <option value="Pushing boundaries and exploring new ideas">Pushing boundaries and exploring new ideas</option>
                    <option value="Overcoming technical obstacles and mastering skills">Overcoming technical obstacles and mastering skills</option>
                    <option value="Taking risks and embracing leadership opportunities">Taking risks and embracing leadership opportunities</option>

                </Form.Select>
            </Form.Group>

            <Form.Group controlId="basicQuestions">
                <Form.Label>What would you do on a weekend?</Form.Label>
                <Form.Select value={choice6} onChange={updateChoice6}>
                <option value="">Select an option</option>
                    <option value="Go to the movies with a friend or boy/girlfriend">Go to the movies with a friend or boy/girlfriend</option>
                    <option value="Go for a walk along the nearest lake near your housel">Go for a walk along the nearest lake near your house</option>
                    <option value="Go to a party with friends">Go to a party with friends</option>
                    <option value="Do homework">Do homework</option>
                    <option value="Do nothing. I am antisocial">Do nothing. I am antisocial</option>
                    <option value="Doing outdoor sports(mountain climbing, sky-diving, hiking…)">Doing outdoor sports(mountain climbing, sky-diving, hiking…)</option>

                </Form.Select>
            </Form.Group>

            <Form.Group controlId="basicQuestions">
                <Form.Label>Which academic area do you prefer?</Form.Label>
                <Form.Select value={choice7} onChange={updateChoice7}>
                <option value="">Select an option</option>
                    <option value="Technology/Engineering">Technology/Engineering</option>
                    <option value="Humanities">Humanities</option>
                    <option value="Business">Business</option>
                    <option value="Natural Sciences">Natural Sciences</option>
                    <option value=" Health Sciences"> Health Sciences</option>
                    <option value="Music">Music</option>
                    <option value="Other">Other</option>

                </Form.Select>
            </Form.Group>
            {/*The user is feeling {emotion}.*/}
        </div>
        {/*<span>Basic Questions!</span>*/}
        
        <br></br>
        {/*Insert Next Name Below!!!*/}
        
        <p>
        <Link to="/">go back</Link>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}
export default Basic;