const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'pages');
fs.readdirSync(dir).forEach(file => {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  content = content.replace(/ ="">/g, '>');
  fs.writeFileSync(path.join(dir, file), content);
});
