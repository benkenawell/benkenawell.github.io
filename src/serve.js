import express from 'express';
import { join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const rootdir = fileURLToPath(join(import.meta.url, "../.."));
const viewdir = join(rootdir, 'views');

app.set('view engine', 'ejs');
app.set('views', viewdir);
app.use(express.static(join(rootdir, 'static')));

app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.listen(port, () => {console.log(`listening at ${port}`)});
