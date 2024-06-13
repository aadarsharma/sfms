const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://admin:%40Darsh.56763@cluster0.von7nfx.mongodb.net/todos")
const feedbackSchema = mongoose.Schema({
    name: String,
    feedback: String,
});

const feedback = mongoose.model('feedbacks', feedbackSchema);
module.exports = {
    feedback,
};