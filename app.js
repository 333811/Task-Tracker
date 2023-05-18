const express = require("express")
const users = require("./mongoUsers")
const events = require("./mongoEvents")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", cors(), (req, res) => {
})


app.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const check = await users.findOne({ email: email })
        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }
    }
    catch (e) {
        res.json("fail")
    }
})

app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body

    const data = {
        name: name,
        email: email,
        password: password
    }

    try {
        const check = await users.findOne({ email: email })
        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await users.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})

app.post("/addEvent", async (req, res) => {
    const { email, title, start, end } = req.body

    const data = {
        email: email,
        title: title,
        start: start,
        end: end
    }
    try {
        res.json("added")
        await events.insertMany([data])
    }
    catch (e) {
        res.json("fail")
    }

})

app.post("/events", async (req, res) => {
    const {email} = req.body

    const data = {
        email: email
    }

    try {
        const eventList = await events.find({ email: email } , 'title start end')
        if (eventList) {
            res.json(eventList)
        }
        else {
            res.json("notexist")
        }

    }
    catch (e) {
        res.json("fail")
    }

})

app.listen(5000, () => {
    console.log("Listening on port:5000");
})
