class NoteController {
  constructor(noteList) {
    this.noteList = noteList;
    this.noteView = new NoteListView(this.noteList);
  }

  getHtml() {
    let app = document.getElementById('app');
    app.innerHTML = this.noteView.returnView();
  }

  submitForm() {
    document
      .getElementById('text')
      .addEventListener('submit', function (submitEvent) {
        submitEvent.preventDefault();
        var inputVal = document.getElementById('textbox').value;
        console.log(inputVal);
      });
  }
}
