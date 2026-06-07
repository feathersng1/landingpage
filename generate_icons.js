const fs = require('fs');
const data = JSON.parse(fs.readFileSync('svg_data.json', 'utf8'));

const ICONS = Object.entries(data).map(([name, icon]) => {
  return {
    name,
    viewBox: icon.viewBox,
    paths: icon.paths.filter(p => p.startsWith('M') && !p.includes('H248.727V0Z')) // Filter out mask paths
  };
});

fs.writeFileSync('icons_array.json', JSON.stringify(ICONS, null, 2));
console.log('Generated icons_array.json');
