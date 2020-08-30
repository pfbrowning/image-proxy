const express = require('express')
const request = require('request');

const port = process.env.PORT || 3000

const app = express()

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

app.get('/image', function(req, res) {
    var url = req.query.url;
    request
        .get(url)
        .on('error', (err) => console.error('error caught', url, err))
        .pipe(res);
});