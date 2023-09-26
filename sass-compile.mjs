/* eslint-disable */
import fs from 'fs';
import { readdir } from 'fs/promises';
import path from 'path';
import sass from 'sass';
import stylelint from 'stylelint';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ignoredFiles = ['_mixins.scss', '_variables.scss', 'styles/_variables.scss', 'styles/_mixins.scss'];

const compileAndSave = async (sassFile) => {
  const dest = sassFile.replace(path.extname(sassFile), '.css');

  fs.writeFile(dest, sass.compile(sassFile).css, (err) => {
    if (err) console.log(err);
    console.log(`Compiled ${sassFile} to ${dest}`);
  });
  stylelint
    .lint({
      files: dest,
      fix: true,
    })
    .then((data) => {
      // do things with data.output, data.errored,
      // and data.results
    })
    .catch((err) => {
      // do things with err e.g.
      console.error(err.stack);
    });
};

const processFiles = async (parent) => {
  let files = await readdir(parent, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      await processFiles(path.join(parent, file.name));
    }
    if (path.extname(file.name) === '.scss') {
      if (!ignoredFiles.includes(file.name)) {
        await compileAndSave(path.join(parent, file.name));
      } else {
        console.log(`${file.name} has been explicitly ignored for compilation`);
      }
    }
  }
};

// Program execution process
for (const folder of ['styles', 'blocks']) {
  try {
    await processFiles(path.join(__dirname, folder));
  } catch (err) {
    console.error(err);
  }
}

fs.watch('.', { recursive: true }, (eventType, fileName) => {
  if (path.extname(fileName) === '.scss' && eventType === 'change') {
    if (!ignoredFiles.includes(fileName)) {
      compileAndSave(path.join(__dirname, fileName));
    } else {
      console.log(`${fileName} has been explicitly ignored for compilation`);
    }
  }
});