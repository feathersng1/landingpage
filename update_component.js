const fs = require('fs');
const path = require('path');

const iconsArrayPath = 'icons_array.json';
const componentPath = path.join('components', 'portfolio', 'all-in-one', 'AllInOneIconSequence.tsx');

const iconsArray = JSON.parse(fs.readFileSync(iconsArrayPath, 'utf8'));
let componentContent = fs.readFileSync(componentPath, 'utf8');

const iconsString = `const ICONS = ${JSON.stringify(iconsArray, null, 2)};`;

// Replace the ICONS array in the component
// We look for "const ICONS = [" and everything until "];"
const updatedContent = componentContent.replace(/const ICONS = \[[\s\S]*?\];/, iconsString);

fs.writeFileSync(componentPath, updatedContent);
console.log('Updated AllInOneIconSequence.tsx with full icon data');
