const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(cors());

const port = 3000

app.get('/', (req, res) => {
    res.send('Tere, Maailm!')
})

app.post('/arvuta', (req, res) => {
    // ['1', '-', '2']
    let vastus = Number(req.body[0]);
    for (let i = 1; i < req.body.length; i++) {
        if (req.body[i] === '+') {
            i++;
            vastus += Number(req.body[i]);
        } else if (req.body[i] === '-') {
            i++;
            vastus -= Number(req.body[i]);
        } else if (req.body[i] === 'x') {
            i++;
            vastus *= Number(req.body[i]);
        } else if (req.body[i] === '/') {
            i++;
            vastus /= Number(req.body[i]);
        }
    }
    console.log('vastus:', vastus);
    res.send(JSON.stringify({ vastus: vastus }))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

