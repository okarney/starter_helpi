import ProgressBar from 'react-bootstrap/ProgressBar';
interface Bar {
    progress: number
}
export function BasicExample({progress}: Bar):JSX.Element {
  return (
    <div>
      <div className='progressBar'>
        <div style= {{
          height: "10%",
          width: "50%",
          backgroundColor: "black",

        }}></div>
          <ProgressBar now={progress} className='Progress-bar'/>
      </div>
  </div>
  );
}

