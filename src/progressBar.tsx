import ProgressBar from 'react-bootstrap/ProgressBar';
interface Bar {
    progress: number
}
export function BasicExample({progress}: Bar):JSX.Element {
  return (
    <div>
        <h1>There is a progress bar under here</h1>
  <ProgressBar now={progress} />
  </div>
  );
}

