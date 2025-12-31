const fs = require('fs');
const path = require('path');

// File path
const filePath = path.join(__dirname, 'notes.txt');

// Add a new note
function addNote(note) {
  fs.appendFileSync(filePath, note + '\n');
  console.log('✅ Note added successfully');
}

// Read all notes (synchronous)
function readNotes() {
  if (!fs.existsSync(filePath)) {
    console.log('⚠ No notes found');
    return;
  }

  const data = fs.readFileSync(filePath, 'utf8');
  console.log('📖 Your Notes:\n');
  console.log(data);
}

// Read notes asynchronously
function readNotesAsync() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log('⚠ Error reading file');
    } else {
      console.log('📖 Your Notes (Async):\n');
      console.log(data);
    }
  });
}

// Example usage
addNote('Learn fs module');
addNote('Practice Node.js');
readNotes();
// readNotesAsync();
