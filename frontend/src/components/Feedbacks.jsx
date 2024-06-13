export function Feedbacks({ feedbacks }) {
    return (
        <div>
            {feedbacks.map((feedback, index) => (
                <div key={index} style={feedbackContainerStyle}>
                    <h1 style={nameStyle}>{feedback.name}</h1>
                    <p style={feedbackTextStyle}>{feedback.feedback}</p>
                </div>
            ))}
        </div>
    );
}

const feedbackContainerStyle = {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px'
};

const nameStyle = {
    fontSize: '20px',
    margin: '0 0 5px 0'
};

const feedbackTextStyle = {
    fontSize: '16px',
    margin: '0'
};
