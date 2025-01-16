const { stdin, stdout } = process;
const flag = process.argv.slice(2);
console.log('enter numbers', flag[0]);

stdin.on('data', (data) => {
   const inputedData = data.toString().split("");
   const numbers = inputedData
      .filter((item) => /\d/.test(item))
      .map((string) => +string);
   console.log(calc(flag[0], numbers));
});


function calc(flag, numbers) {
   if (flag === '-m') {
      return numbers.reduce((prev, item) => {
         return prev * item
      }, 1)
   };

   if (flag === '-s') {
      return numbers.reduce((prev, item) => {
         return prev + item
      }, 0)
   };

   return 'flag is not correct';
}