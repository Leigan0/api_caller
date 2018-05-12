import express from 'express';
const app  = express();

app.get('/', (req, res) => res.send('Hello World!'))

var server = app.listen(3000, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("app listening at http://%s:%s", host, port)
})
