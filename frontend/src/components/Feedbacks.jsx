export function Feedbacks({feedbacks}) {
    return <div>
        {feedbacks.map(function(feedback) {
            return <div>
                <h1>{feedback.name}</h1>
                <p>{feedback.feedback}</p>
            </div>
        })}
    </div>
}