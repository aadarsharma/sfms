import './App.css';
import { CreateFeedback } from './components/CreateFeedback';
import { Feedbacks } from './components/Feedbacks';
import React, { useState, useEffect } from 'react';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/feedbacks')
      .then(response => response.json())
      .then(data => setFeedbacks(data.feedbacks))
      .catch(error => console.error('Error fetching feedbacks:', error));
  }, []);

  return (
    <div className="App">
      <CreateFeedback />
      <Feedbacks feedbacks={feedbacks} />
    </div>
  );
}

export default App;
