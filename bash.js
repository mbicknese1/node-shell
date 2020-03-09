let imprt = require('./pwd')



process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {

  const cmd =  data.toString().trim();
  if(cmd === "pwd"){
    process.stdout.write(`${imprt}`);
  }
  process.stdout.write('You typed: ' + cmd);

  process.stdout.write('\nprompt > ');
})
