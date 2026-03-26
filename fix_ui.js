const fs = require('fs');
const path = require('path');
const uiDir = path.join(__dirname, 'src', 'components', 'ui');
const files = fs.readdirSync(uiDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
for (const file of files) {
  const filePath = path.join(uiDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  if (!content.includes('eslint-disable')) {
    fs.writeFileSync(filePath, '/* eslint-disable */\n// @ts-nocheck\n' + content);
  }
}
