
document.addEventListener('DOMContentLoaded', () => {
  let noteList = new NoteList();
  let notesController = new NoteController(noteList);
  let singleNotesController = new SingleNoteController();

  noteList.createNote('NOte !');
  noteList.createNote('NOte TWO !');

  console.log()

  notesController.getHtml();
  notesController.submitForm()

  noteList.returnNotes().map((note) => {
    singleNotesController.clickFunction(note.id);
  })
})
