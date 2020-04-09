// console.log(_.isString(true));
// console.log(_.isString(1));
// console.log(_.isString('false'));

// // var res = notes.addNote ();
// // console.log(res);

//  var addition = notes.add (9, -2);
//  console.log('The result is:', addition);




// var addition = notes.add(9, -2);
// console.log('Result = '+ addition);

// var res = notes.addNotes();
// console.log(res);





// var user = os.userInfo();
// fs.appendFile('greetings.txt', `I\'m ${user.username}! I\'m ${notes.age}`, () => {
// });


// fs.appendFile('greetings.txt', `How're you doing ${user.username}!`, () =>{
// });

//fs.appendFile('greetings.txt', 'How\'re you doing ' + user.username + '!', function (err) {
//    if (err) {
//        console.log('unable to write file');
//    }
//});
//fs.appendFile('greetings.txt' , 'Say hello to friends!', function (err) {
//    if (err) {
//        console.log('Unable to write file')
//    }
//});


console.log('Starting app.js');
  
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

console.log('yargs', argv);





var command = argv._[0];
console.log('The Command is: ', command);
if (command === 'add') {
    notes.addNotes (argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll ();
} else if (command === 'read') {
    notes.getNotes(argv.title);
} else if (command === 'remove') {
    notes.removeNotes(argv.title);
} else {
    console.log('Command provided is wrong')
};



















// var command = process.argv[2];
// console.log('Command is: ', command);

// if (command === 'dash') {
//     console.log('Dashes in the new notes');
// } else if (command === 'file') {
//     console.log('filing new notes');
// } else if (command === 'read') {
//     console.log('read all lines in the new code');
// } else if (command === 'remove') {
//     console.log('remove all unwanted notes');
// } else {
//     console.log('correct command not inputed!');
// }