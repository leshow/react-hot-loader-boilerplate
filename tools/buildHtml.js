// This script copies src/index.html into /dist/index.html
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */

import fs from 'fs';
import colors from 'colors'; // eslint-disable-line no-unused-vars
import cheerio from 'cheerio';

fs.readFile('index.html', 'utf8', (readError, markup) => {
  if (readError) {
    return console.log(readError);
  }

  const $ = cheerio.load(markup);

  // since a separate spreadsheet is only utilized for the production build
  // need to dynamically add this here.
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (writeError) => {
    if (writeError) {
      return console.log(writeError);
    }
    console.log('index.html written to /dist'.green);

    return writeError;
  });

  return readError;
});
