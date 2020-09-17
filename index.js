document.addEventListener('DOMContentLoaded', () => {
  let noteList = new NoteList();
  let notesController = new NoteController(noteList);

  noteList.createNote('NOte !');
  noteList.createNote('NOte TWO !');

  notesController.getHtml();

  let app = document.getElementById('app');
  let links = app.getElementsByTagName('li');

  [...links].map((link) => {
    link.getElementsByTagName('div')[0].addEventListener('click', function () {
      clickNote(link);
    });
  });
});

let clickNote = (link) => {
  let id = link.getElementsByTagName('div')[0].id;
  let text = document.getElementById(id).innerHTML;
  let app = document.getElementById('app');
  app.innerHTML = text;
};
