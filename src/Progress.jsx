import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample() {
  const now = localStorage.getItem('ball');
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default WithLabelExample;