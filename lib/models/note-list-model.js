class NoteList {
  constructor() {
    this.notes = [];
    this.counter = 0;
  }
  createNote(text) {
    var newNote = new Note(text, this.counter);
    this.notes.push(newNote);
    this.counter++;
  }
  returnNotes() {
    return this.notes;
  }
}
