const fs = require('fs');
const path = require('path');

const files = ["home-inspection.svg", "home1.svg", "shop.svg", "shop-like.svg", "bank.svg", "home-chimney.svg", "saving-bank.svg"];
const results = {};

files.forEach(file => {
  const filePath = path.join('c:/Users/ASUS/landingpage/public/aio', file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const viewBoxMatch = content.match(/viewBox="([^"]+)"/);
    const paths = [];
    const pathMatch = /d="([^"]+)"/g;
    let match;
    while ((match = pathMatch.exec(content)) !== null) {
      paths.push(match[1]);
    }
    results[file.replace('.svg', '')] = {
      viewBox: viewBoxMatch ? viewBoxMatch[1] : '',
      paths: paths
    };
  }
});

fs.writeFileSync('svg_data.json', JSON.stringify(results, null, 2));
