

const { stdin, stdout } = process;
stdout.write('what is your name??? niger \n');
stdin.on("data", (data) => {
   stdout.write(`Hello Niger ${data}`);
   stdout.write(data.toString().split('').reverse().join(''))
   process.exit();
});

process.on('exit', () => {
   stdout.write(` by by niger`)
})

