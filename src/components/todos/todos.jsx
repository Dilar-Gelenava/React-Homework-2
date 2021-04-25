import Form from '../form';
import Notes from '../notes';
import { useState } from 'react';

function Todos() {
  const [notes, setNote] = useState([]);

  const addNote = (note) => {
    setNote(notes.concat([note]));
  };

  const deleteNote = (id) => {
    const newNotesList = notes.filter((n) => n.id !== id);
    setNote(newNotesList);
  };

  return (
    <div>
      <Form onSubmit={addNote} />
      <Notes notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default Todos;
