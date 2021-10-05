require('dotenv').config();
const express = require('express');

const app = express();
app.get('/test', (req, res) => {
    console.log('Got request')
    res.send('hello')
})

const port = process.env.PORT || 8000;
const server = app.listen(port, function() {
    console.log('Server started', server.address());
});

// Prevent duplicate requests.
// See https://github.com/expressjs/express/issues/2512
server.timeout = 1000 * 60 * 10; // 10 minutes

