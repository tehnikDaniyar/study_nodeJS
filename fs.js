const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, "newDir"), (err) => {
   if (err) throw err;

   console.log('complete');
});

fs.writeFile(path.join(__dirname, "newDir", "newFile.html"), "hello", (err) => {
   if (err) throw err;

   console.log("file has been created");
});

