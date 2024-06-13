import { useState } from 'react';

export function CreateFeedback(props) {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleFeedbackChange = (e) => setFeedback(e.target.value);
    const handleSubmit = () => {
        fetch("http://localhost:3000/feedback", {
            method: 'POST',
            body: JSON.stringify({ name, feedback }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(async (res) => {
            const json = await res.json();
            alert("Feedback published successfully");
        })
        .catch(err => alert("Error publishing feedback"));
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <input
                style={inputStyle}
                type="text"
                placeholder="Name"
                onChange={handleNameChange}
                value={name}
            />
            <input
                style={inputStyle}
                type="text"
                placeholder="Feedback"
                onChange={handleFeedbackChange}
                value={feedback}
            />
            <button
                style={buttonStyle}
                onClick={handleSubmit}
            >
                Give Feedback
            </button>
        </div>
    );
}

const inputStyle = {
    width: '90%',
    padding: '10px',
    fontSize: '16px',
    margin: '10px 0',
    display: 'block'
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '10px 0',
    display: 'block'
};
