import { useState } from 'react';

export function CreateFeedback(props) {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    return <div>
        <input style={{
            width: '10%',
            padding: '10px',
            fontSize: '16px',
            margin: 10
        }}type="text" placeholder="name" onChange={function(e) {
            setName(e.target.value);
        }}/><br />
        <input style={{
            width: '10%',
            padding: '10px',
            fontSize: '16px',
            margin: 10
            
        }} type="text" placeholder="feedback" onChange={function(e) {
            setFeedback(e.target.value);
        }}/> <br />
        <button style={{
            padding: '10px',
            fontSize: '16px',
            margin: 10
        }} onClick={() => {
            fetch("http://localhost:3000/feedback", {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    feedback: feedback,
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Feedback published successfully");
                })
        }}>Give feedback</button>
    </div>
}