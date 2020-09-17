class NoteController {
  constructor(noteList) {
    this.noteList = noteList;
    this.noteView = new NoteListView(this.noteList);
  }

  getHtml() {
    let app = document.getElementById('app');
    app.innerHTML = this.noteView.returnView();
  }
}


