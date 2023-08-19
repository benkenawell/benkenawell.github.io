import ejs from 'ejs';
import { fileURLToPath } from 'url';
import { join } from 'path';
import { readdirSync, mkdir } from 'fs';

const rootdir = fileURLToPath(join(import.meta.url, '../..'));
const rootdirContents = readdirSync(rootdir);
// sanity check we're in the right folder
if(!rootdirContents.includes('package.json')) {
  throw new Error('wrong file path!, it should be the project root', rootdir)
}

const viewsDir = join(rootdir, './views');
const views = readdirSync(viewsDir, {recursive: true});
console.log('views to compile:', views);

const outputDir = join(rootdir, 'dist');
// create the dist folder if we don't have one yet
// could also use fs.existsSync
if(!rootdirContents.includes('dist') {
  mkdir(outputDir); 
}

views.forEach(function (viewFilePath) {
  // TODO, how do I get the required data?
  const renderedFile = ejs.renderFile(viewFilePath);
});
