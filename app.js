const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

var titleOptions = {
        describe: 'Title of note',
        demand: true,
        alias: 't'
};
var bodyOptions = {
        describe: 'Body of note',
        demand: true,
        alias: 'b'
};

const argv = yargs
.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'Listing all notes')
.command('remove', 'Removing note', {
    title: titleOptions
})
.command('read', 'Reading all notes', {
    title: titleOptions
})
.help()
.argv;


var command = argv._[0];

console.log('Your command is:', command);

if (command === 'add') {
    var note1 = notes.addNotes(argv.title, argv.body);
    if (note1) {
        console.log('Note created');
        notes.logNotes(note1);
    } else {
        console.log('Note title taken'); 
    }
} else if (command === 'read') {
    var note1 = notes.readNotes(argv.title);
    if (note1) {
        console.log('Note was read');
        notes.logNotes(note1);
    } else {
        console.log('Note not found');
    };

} else if (command === 'remove') {
    var noteRemoved = notes.removeNotes(argv.title);
    var message = noteRemoved ? 'note was removed' : 'note was not found';
    console.log(message);
    if (note1) {
    notes.logNotes(note1);
    };
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note1) => notes.logNotes(note1));
}  else {
    console.log('Wrong command inputed!')
};

