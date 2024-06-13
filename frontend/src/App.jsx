import './App.css'
import { CreateFeedback } from './components/CreateFeedback'
import { Feedbacks } from './components/Feedbacks'
import React from 'react'

function App() {
  const [feedbacks, setFeedbacks] = React.useState([]);
  React.useEffect(function() {
    fetch('http://localhost:3000/feedbacks')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setFeedbacks(data.feedbacks);
    });
  }, []);
  return (
    <div>
      <CreateFeedback/>
      <Feedbacks feedbacks={feedbacks}></Feedbacks>
    </div>
  )
}
export default App