const fs = require('fs');
const path = require('path');

// Define directories to search for SCSS files
const cssDir = path.join(__dirname, 'src/app/css');
const componentsDir = path.join(__dirname, 'src/app/components');

// Function to recursively get all SCSS files
function getScssFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getScssFiles(filePath, fileList);
    } else if (file.endsWith('.scss')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Function to generate relative import statements
function getRelativePath(filePath) {
  return path.relative(path.join(__dirname, 'src/app'), filePath).replace(/\\/g, '/');
}

// Function to generate SCSS imports
function generateScssImports() {
  const cssFiles = getScssFiles(cssDir);
  const componentFiles = getScssFiles(componentsDir);

  const importStatements = cssFiles
    .concat(componentFiles)
    .map((file) => `@import '${getRelativePath(file)}';`)
    .join('\n');

  const outputFilePath = path.join(__dirname, 'src/app/generated-imports.scss');
  fs.writeFileSync(outputFilePath, importStatements);
}

generateScssImports();
