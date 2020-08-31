const express = require('express')
const axios = require('axios');

const port = process.env.PORT || 3000

const app = express()

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

const allowedMimeTypes = [ 'image/jpeg', 'image/png', 'image/x-icon', 'image/vnd.microsoft.icon', 'image/svg+xml' ];
const disallowedMimeTypes = [ 'text/html; charset=UTF-8', ]

app.get('/image', function(req, res) {
  const url = req.query.url;
  axios({ method: 'get', url, responseType: 'arraybuffer' })
    .then(response => {
      const fetchedContentType =  response.headers['content-type'];
      if (allowedMimeTypes.includes(fetchedContentType)) {
        res.set('content-type', fetchedContentType);
        res.status(200);
        res.end(response.data, 'binary');
      } else {
        res.status(502).set('content-type', 'text/plain').send(`Invalid content type: ${fetchedContentType}`);
      }
    })
    .catch(error => {
      const statusCode = error.response && error.response.status;
      res.status(statusCode || 500).set('content-type', 'text/plain').send(error.message);
    });
});