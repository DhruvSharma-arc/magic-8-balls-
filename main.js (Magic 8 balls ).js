// theb traditionl Magic 8 ball game through Javascript basic tools 
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('welcome to a 8 ball magic game');

const responses = [
  'Yes definitely',
  'It is decidedly so.',
  'Without a doubt.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.'
];

r1.question('what is your question bitch 🙄', function(question) {
  // The random number generation looks good here
  const randomNumber = Math.floor(Math.random() * responses.length); // Use responses.length for the upper bound

  // Corrected console.log line
  console.log('Magic 8 Ball says: ' + responses[randomNumber]);

  // Don't forget to close the readline interface when done
  r1.close();
});
