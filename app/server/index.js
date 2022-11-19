const express = require('express');
const bp = require('body-parser');
const controllers = require('./controllers.js');

const app = express();
const PORT = 8080;

app.use(bp.json());

app.get('/sitters', controllers.getSitters);
app.post('/sitters', controllers.addSitter);
app.delete('/sitters/:_id/remove', controllers.removeSitter);
app.get('/requests/:sitterId', controllers.getBookings);
app.post('/requests', controllers.bookSitter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})