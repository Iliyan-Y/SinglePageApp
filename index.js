
document.addEventListener('DOMContentLoaded', () => {
  let noteList = new NoteList();
  let notesController = new NoteController(noteList);
  let singleNotesController = new SingleNoteController();

  noteList.createNote('NOte !');
  noteList.createNote('NOte TWO !');

  notesController.getHtml();

  noteList.returnNotes().map((note) => {
    singleNotesController.clickFunction(note.id);
  })
})
