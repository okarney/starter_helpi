import '../App.css';
import { Button } from 'react-bootstrap';
import '../App';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import olivia from './logo.png'
import Zahra from './Zahra.jpg'
import purpleLI from './pLinkedIn.jpg'



function About() {
    const navigate = useNavigate();
 
    const goToHome = () => {
 
        // This will navigate to second component
        navigate('/Home');
    };
    const goToSurvey = () => {

      // This will navigate to second component
      navigate('/Survey');
    };
    const goToZahraLinkedIn = () => {

      // This will navigate to second component
      <Link to={{ pathname: "https://www.linkedin.com/in/zahra-temori/" }} target="_blank">Click to open HereWeCode (new tab)</Link>
      //navigate('https://www.linkedin.com/in/zahra-temori/');
    };

    
   return (
    <div className="App">
        <div className="App-header2">
        <div className = "navbar">
        
        <img src = {olivia} alt = "logo" id = "image" className='fram'/>
        <ul>
        <li><Button className="BasicButton" onClick={goToHome}> Home </Button></li>
        <li><Button className="BasicButton"> About </Button></li>
        <li><Button className="BasicButton" onClick={goToSurvey}> Survey </Button></li>
          
        </ul>
        </div> 
      </div>
      <header className="App-header">
        <div className='banner'>
          <div className='left-column'>
         {/*<video controls autoPlay loop muted playsInline>
        <source src= 'src/Components/office.mp4' type="video/mp4"/>
        Your browser does not support the video tag.
    </video>*/}
            <h2>About Us</h2>

            <hr></hr>

            <br></br>
            
            <h3>Olivia Karney</h3> 
            <span>Email: okarney@udel.edu</span>
            <br></br>
            <span>LinkedIn: </span>     
            <br></br>
       
            <h3>Khadija Mohammadi</h3>
            <span>Email: khadija@udel.edu</span>
            <br></br>
            <span>LinkedIn: </span> 
            <br></br>

            <h3>Zahra Temori</h3>
            <span>Email: zahratm@udel.edu</span>
            <br></br>
            <span>LinkedIn: </span>
            <Link to="https://www.linkedin.com/in/zahra-temori/">
            <Button style={{ background: '#c3b1e1' }} type="button"><img src = {purpleLI} alt = "logo" id = "image" style={{height:100, width:100}}/>
            </Button>
            </Link>
            <br></br>

            <h3>Jacob Whitman</h3>
            <span>Email: jacobwhi@udel.edu</span>
            <br></br>
            <span>LinkedIn: </span>           

          </div>
          <div className='right-column'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <img src = {Zahra} alt = "logo" id = "image" style={{height:100, width:100}}/>
          <span> person </span>
          <div className='btn'>
          {/* <Container>
                <Row>
                    <Col>
                    <Button className="BasicButton" onClick={goToBasic}> Basic Assessment </Button>
                    <p style={{ fontSize: '13px' }}> Discover your potential career path through our refined multiple-choice assessment.</p>
                    </Col>
                    <Col>
                    <Button className="DetailedButton" onClick={goToDetailed}>Detailed Assessment</Button>
                    <p style={{ fontSize: '13px' }}>Discover your potential career path through our comprehensive detailed questions.</p>
                    </Col>
                </Row>
            </Container> */}
            </div>
          </div>
        </div>
        
      </header>
      {/* <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form> */}
      {/*<span>Created By: Olivia Karney, Khadija Mohammadi, Zahra Temori, and Jacob Whitman</span>*/}
    </div>
  );
}

export default About;

/*
<li>Home</li>
          <li><a href = "#">About</a></li>
          <li><a href = "#">Contact</a></li>*/