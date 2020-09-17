class SingleNote {
  constructor(noteObject) {
    this.noteObject = noteObject;
  }

  getHtml() {
    return `<div>${this.noteObject.getText()}</div>`;
  }
}
