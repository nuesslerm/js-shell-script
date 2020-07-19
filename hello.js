const args = process.argv.slice(2);
const [name] = args;

if (name === undefined) {
  console.error('Please pass a name, e.g. node hello.js Markus');
  process.exit(9);
}

console.log(`Good day to you, ${name}`);
