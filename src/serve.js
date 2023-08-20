import express from 'express';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { resume } from '../data/data.js';

const app = express();
const port = 3000;

const rootdir = fileURLToPath(join(import.meta.url, "../.."));
const viewdir = join(rootdir, 'views');

app.set('view engine', 'ejs');
app.set('views', viewdir);
app.use(express.static(join(rootdir, 'static')));

app.get('/', function(req, res) {
  const byCategory = resume.reduce((acc, cur) => {
    if(Array.isArray(acc[cur.category])) {
      acc[cur.category].push(cur);
    } else {
      acc[cur.category] = [cur];
    }
    return acc;
  }, {});
  const r = JSON.parse(readFileSync(join(rootdir, "data/data.json"), {encoding: 'utf8'}));
  console.log(r);
  res.render('index.ejs', {data: [], resume: r});
});

app.listen(port, () => {console.log(`listening at ${port}`)});
