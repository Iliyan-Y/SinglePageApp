class SingleNoteController {
    
     clickFunction(id) {
        let noteDiv = document.getElementById(`note-${id}`);
        let noteAtag = noteDiv.getElementsByTagName('a');
        noteAtag[0].addEventListener('click', function (clickEvent) {
          clickEvent.preventDefault();
      
          let doc = document.getElementById('app')
          doc.innerHTML = noteAtag[0].innerText;
        
        });
      }

    
    }
    

