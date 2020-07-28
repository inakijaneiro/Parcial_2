const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("You are on the homepage");
})

app.post("/post", (req, res) => {
    res.send(`Welcome ${req.body["user"]}`)
})

app.delete("/delete", (req, res) => {
    res.json({delete: true});
})

app.put("/put/:id", (req, res) => {
    res.send(`Task ${req.params.id} has been updated`)
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})