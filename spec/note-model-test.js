describe(Note, function () {
  it('should have a text property after being created', function () {
    var testNote = new Note('This is a test note');
    expect(testNote.getText()).toBe('This is a test note');
  });
  it('Has a unique id number', () => {
    var testNote = new Note('This is a test note', 0);
    expect(testNote.id).toBe(0);
  });
});
