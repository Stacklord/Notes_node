const fs = require('fs');

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('note-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return[];
    }
};

var saveNotes = (note) => {
    fs.writeFileSync('note-data.json', JSON.stringify(note));
}

var addNotes = (title, body) => {
    var note = fetchNotes();
    var note1 = {
        title,
        body
    };

    var duplicateNotes = note.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        note.push(note1);
        saveNotes(note);
        return(note1);
    } 
};

var readNotes = (title) => {
    var note = fetchNotes(); 
    var filteredReadNotes = note.filter((note) => note.title === title);
    return filteredReadNotes[0];
};



var removeNotes = (title) => {
    //fetchNotes 
    //filter notes, removing the one with title of argument
    //save new notes array
    var note = fetchNotes();
    var filteredNotes = note.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return note.length !== filteredNotes.length
};


var getAll = () => {
    return fetchNotes();     
};

var logNotes = (note1) => {
    console.log('--');
    console.log(`Title: ${note1.title}`);
    console.log(`Body: ${note1.body}`);
};

module.exports = {
    addNotes,
    readNotes,
    removeNotes,
    getAll,
    logNotes 
};