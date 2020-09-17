describe(NoteListView, function () {
  it('it stores a NoteList object with no notes and returns view with only ul tags', function () {
    var notelist = new NoteList();
    var notelistview = new NoteListView(notelist);
    expect(notelistview.returnView()).toBe('<ul></ul>');
  });
  it('it stores a NoteList object with one note, and returns the note in structured html', function () {
    var notelist = new NoteList();
    notelist.createNote('This is a test note');
    var notelistview = new NoteListView(notelist);
    expect(notelistview.returnView()).toBe(
      '<ul><li id="note-0" ><div><a href="#0">This is a test note</a></div></li></ul>'
    );
  });
  it('it stores a NoteList object with more than one note, and returns the notes in structured html', function () {
    var notelist = new NoteList();
    notelist.createNote('This is a test note');
    notelist.createNote('This is also a test note');
    var notelistview = new NoteListView(notelist);
    expect(notelistview.returnView()).toBe(
      '<ul><li id="note-0" ><div><a href="#0">This is a test note</a></div></li><li id="note-1" ><div><a href="#1">This is also a test n</a></div></li></ul>'
    );
  });

  it('it stores a NoteList object with a note with only 20 characters, and returns the note in structured html', function () {
    var notelist = new NoteList();
    notelist.createNote(
      'it stores a NoteList object with a note with only 20 characters, and returns the note in structured html'
    );
    var notelistview = new NoteListView(notelist);
    expect(notelistview.returnView()).toBe(
      '<ul><li id="note-0" ><div><a href="#0">it stores a NoteList </a></div></li></ul>'
    );
  });
});
