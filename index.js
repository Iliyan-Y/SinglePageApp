document.addEventListener('DOMContentLoaded', () => {
  let noteList = new NoteList();
  let notesController = new NoteController(noteList);

  noteList.createNote('NOte !');
  noteList.createNote('NOte TWO !');

  notesController.getHtml();

  function clickFunction(id) {
    let noteDiv = document.getElementById(id);
    let noteAtag = noteDiv.getElementsByTagName('a');
    noteAtag[0].addEventListener('click', function (clickEvent) {
      clickEvent.preventDefault();
      makeNote(noteAtag);
    });
  }

  function makeNote(noteAtag) {
    document.getElementById('app').innerHTML = noteAtag[0].innerText;
  }
  clickFunction('note-1');

  // refactured
  // let app = document.getElementById('app');
  // let links = app.getElementsByTagName('li');

  // [...links].map((link) => {
  //   link.getElementsByTagName('div')[0].addEventListener('click', function () {
  //     clickNote(link);
  //   });
  // });
});

// let clickNote = (link) => {
//   let id = link.getElementsByTagName('div')[0].id;
//   let text = document.getElementById(id).innerHTML;
//   let app = document.getElementById('app');
//   app.innerHTML = text;
// };
