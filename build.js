/**
 * This file builds the static content
 */

const configPath = process.argv.length > 2 ? process.argv[2] : './config';
const config = require(`./${configPath}`);
const { renderFile } = require('pug');
const fs = require('fs');

// Constants
const TEMPLATE_DIR = './templates';
const PUBLIC_DIR = './public';

const templates = [
  'index',
  'save',
];

// Check if public dir exists
if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR);

// Build files
templates
  // Render HTML
  .map(template => [template, renderFile(`${TEMPLATE_DIR}/${template}.pug`, config)])
  // Write to file
  .forEach(([ name, html ]) => fs.writeFile(`${PUBLIC_DIR}/${name}.html`, html, console.log));
