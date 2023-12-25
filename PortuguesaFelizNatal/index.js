const fs = require('fs');
const path = require('path');

const folderPath = './images'; // Substitua pelo caminho da sua pasta

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Erro ao ler a pasta:', err);
    return;
  }

  const memories = [];

  files.forEach(file => {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      const fileExtension = path.extname(file).toLowerCase();
      const fileNameWithoutExtension = path.basename(file, fileExtension);

      if (fileExtension === '.mp4' || fileExtension === '.jpg' || fileExtension === '.png') {
        // Adapte conforme necessário para outros tipos de arquivo (como .png, .gif, etc.)
        const memory = {
          type: fileExtension === '.mp4' ? 'video' : 'image',
          source: filePath,

          // Outros dados podem ser adicionados, como 'poster' para vídeos, se necessário
        };
        memories.push(memory);
      }
    }
  });

  const output = `const memories = ${JSON.stringify(memories, null, 2)};\n\nmodule.exports = memories;`;

  fs.writeFile('memories.js', output, err => {
    if (err) {
      console.error('Erro ao gravar arquivo de memórias:', err);
      return;
    }
    console.log('Arquivo de memórias gerado com sucesso!');
  });
});