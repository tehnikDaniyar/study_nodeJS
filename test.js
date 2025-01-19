const flag = process.argv[2];

if (!flag) {
   console.log('input flag -d or -v');
   process.exit()
};

if (flag === '-d') {
   console.log(__dirname);
}

if (flag === '-f') {
   console.log(__filename);
}

const total = 100;
let progress = 0;

const interval = setInterval(() => {
   progress += 10;
   process.stdout.write(`\rProgress: ${progress}%`);
   if (progress === total) {
      clearInterval(interval);
      console.log("\nDone!");
   }
}, 100);
