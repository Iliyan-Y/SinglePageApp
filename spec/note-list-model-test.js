describe(NoteList, function () {
  it('should be able to create a note, store the note object in an array and return the array', function () {
    var testNoteList = new NoteList();
    testNoteList.createNote('This is a test note');
    expect(testNoteList.returnNotes()[0].getText()).toBe('This is a test note');
  });

  it('Assign unique ID for each note ', function () {
    var testNoteList = new NoteList();
    testNoteList.createNote('This is a test note');
    testNoteList.createNote('This is a test note 2');
    expect(testNoteList.returnNotes()[1].id).toBe(1);
  });
});
