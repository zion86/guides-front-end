const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

readline.on('line', (line) => {
    lines.push(line);
})

readline.on('close', () => {
  const output = lines.filter(word => {
    const s = new Set([...word]).size;
    return s === 3 || s === 2
  });
  process.stdout.write(output.toString())
});