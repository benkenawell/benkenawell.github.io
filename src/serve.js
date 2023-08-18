import express from 'express';

const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('Hello World')
});

app.listen(port, () => {console.log(`listening at ${port}`)});
