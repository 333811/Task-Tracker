const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Misbah:Gfw9VgLRAqGWPoYI@tasktracker.r8icjc5.mongodb.net/task_tracker?retryWrites=true&w=majority")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })

const events = mongoose.model('events', {
    email: { type: String },
    title: { type: String },
    start: { type: String },
    end: { type: String }
});

module.exports = events