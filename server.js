const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

const posts = require("./controllers/posts");

app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>');
});

app.get("/post", posts.index)

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});