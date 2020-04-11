const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(new Date());
    req.time = new Date();
    next();
});

function checkToken(req, res, next) { 
    next() 
};

//method path
app.get("/people/:id", function(req, res){
    res.send("hello world");
});

app.get('/greeting', checkToken, (req, res) => {
    res.send("hello");
})

//route params
app.get('/greeting/:name/:title', (req, res) => {
    const { name, title } = req.params;
    res.send(`hello ${title}.${name}`);
})

//query params
app.get('/greeting/:name', (req, res) => {
    const { name } = req.params;
    const { title } = req.query;
    res.send(`hello ${title}.${name}`);
})

app.get("/time", (req, res) => {
    res.send(req.time);
});

app.listen(3000);

// api.example.com
// wwww.example.com/api/v1/