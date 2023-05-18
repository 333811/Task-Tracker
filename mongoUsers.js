const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Misbah:Gfw9VgLRAqGWPoYI@tasktracker.r8icjc5.mongodb.net/task_tracker?retryWrites=true&w=majority")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })

const users = mongoose.model('users', {
    name: { type: String },
    email: { type: String },
    password: { type: String }
});

module.exports = users