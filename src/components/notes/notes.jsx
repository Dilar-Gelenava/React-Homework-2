import { ThemeConsumer } from '../../Contexts/themeContext';
import PropTypes from 'prop-types';

function Notes({ notes, onDelete }) {
  return (
    <div className="d-flex flex-wrap">
      {notes.map((note) => {
        return (
          <ThemeConsumer>
            {(theme) => {
              return (
                <div
                  className={'m-2 p-2 rounded bg-' + theme}
                  style={{ width: '300px' }}>
                  <h3 className="text-primary">{note.title}</h3>
                  <p className="text-success">{note.description}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      onDelete(note.id);
                    }}>
                    DELETE
                  </button>
                </div>
              );
            }}
          </ThemeConsumer>
        );
      })}
    </div>
  );
}

Notes.propTypes = {
  notes: PropTypes.array,
  onDelete: PropTypes.func,
};

export default Notes;
