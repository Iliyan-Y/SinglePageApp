describe(SingleNote, () => {
  it('Return a single note', () => {
    let noteObject = new Note('THE TEXT');
    let note = new SingleNote(noteObject);

    expect(note.getHtml()).toBe('<div>THE TEXT</div>');
  });
});
