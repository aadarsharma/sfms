const express = require('express');
const { createFeedback } = require('./types');
const { feedback } = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.post('/feedback', async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createFeedback.safeParse(createPayload);
    if(!parsedPayload) {
        res.status(411).json({
            msg: 'You sent the wrong inputs',
        });
        return;
    }
    await feedback.create({
        name: createPayload.name,
        feedback: createPayload.feedback,
    });
    res.status(201).json({
        msg: 'Feedback created successfully',
    });
});

app.get('/feedbacks', async function(req, res) {
    const feedbacks = await feedback.find({});
    res.status(200).json({
        feedbacks: feedbacks,
    });
});

app.listen(3000);