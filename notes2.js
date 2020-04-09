// console.log('Starting notes.js');

// module.exports.add = (a,b) => {
//     return (a + b);
// }

// module.exports.add = (a, b) => {
//     return (a + b);
// };

// module.exports.addNotes = () => {
//     console.log('addNotes');
//     return 'New notes';
// };

const fs = require('fs');
var addNotes = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    notes.push(note);
    fs.writeFileSync('notes-file.json', JSON.stringify(notes));

}; 

var getAll = () => {
    console.log('Getting all files');
};

var getNotes = (title) => {
    console.log('Getting notes from node:', title);
};

var removeNotes = (title) => {
    console.log('Remove all bad notes from node:', title);
};

module.exports = {
    addNotes,
    getAll,
    getNotes,
    removeNotes
};
