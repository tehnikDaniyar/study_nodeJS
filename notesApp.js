const fs = require("fs");

const [command, title, content] = process.argv.slice(2);

switch (command) {
   case "create":
      create(title, content)
      break;
   case "list":
      list();
      break;
   case "view":
      view(title)
      break;
   case "remove":
      remove(title);
      break;
   default:
      console.log("input corect command");
};

function create(title, content) {
   const time = new Date();
   let notes = [];

   //====create new note
   const newNote = {
      time: time,
      title: title,
      content: content
   };

   fs.readFile('./notes.json', 'utf-8', (err, data) => {
      if (!err) {
         notes = JSON.parse(data);
      };

      notes.push(newNote);

      fs.writeFile("./notes.json", JSON.stringify(notes), (error) => {
         if (error) throw error;
         console.log('write complete');
      });
   });

};

function list() {
   let notes;
   fs.readFile('./notes.json', 'utf-8', (err, data) => {
      if (err) {
         console.log("There not a any notes, please add note ues command create");
      } else {
         notes = JSON.parse(data);
         console.log(notes);
      }
   });
};

function view(title) {
   let notes;
   fs.readFile('./notes.json', 'utf-8', (err, data) => {
      if (err) {
         console.log("There not a any notes, please add note ues command create");
      } else {
         let found = false;
         notes = JSON.parse(data);
         notes.forEach((note) => {
            if (title === note.title) {
               console.log(note.content);
               found = true;
            };
         });
         if (!found) console.log('not found');
      }
   });

};

function remove(title) {
   let notes;
   fs.readFile('./notes.json', 'utf-8', (err, data) => {
      if (err) {
         console.log("There not a any notes, please add note ues command create");
      } else {
         notes = JSON.parse(data);
         let newDate = [];
         notes.forEach((note) => {
            if (title !== note.title) {
               newDate.push(note);
            };
         });

         fs.writeFile('./notes.json', JSON.stringify(newDate), (err) => {
            if (err) throw err;
         })
      }
   });
};
