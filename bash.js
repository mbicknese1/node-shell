let imprt = require('./pwd')
let ls = require('./ls')


process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {

  const cmd =  data.toString().trim();
  if(cmd === "pwd"){
    process.stdout.write(`${imprt()}`);
  }
  else if (cmd === "ls") {
      process.stdout.write(`${ls()}`);
  }
  else {
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
    }

//   process.stdout.write('\nprompt > ');
})
