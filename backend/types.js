const zod = require('zod');

const createFeedback = zod.object({
    name: zod.string(),
    feedback: zod.string(),
});

const updateFeedback = zod.object({
    id: zod.string(),
});

module.exports = {
    createFeedback: createFeedback,
    updateFeedback: updateFeedback
};