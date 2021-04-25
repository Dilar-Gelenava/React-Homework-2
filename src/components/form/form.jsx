import { ThemeConsumer } from '../../Contexts/themeContext';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const submit = () => {
    onSubmit({
      id: Math.floor(Math.random() * 1000000),
      title: title,
      description: description,
    });
  };

  return (
    <div className="mb-3 m-2 w-25">
      <ThemeConsumer>
        {(theme) => {
          return (
            <form
              action=""
              className={'rounded bg-' + theme + ' p-4'}
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}>
              <div className="form-group">
                <label className="text-primary">
                  Title:
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    onChange={({ target }) => {
                      setTitle(target.value);
                    }}
                  />
                </label>
              </div>
              <div className="form-group">
                <label className="text-primary">
                  description:
                  <textarea
                    className="form-control"
                    name="description"
                    cols="30"
                    rows="3"
                    onChange={({ target }) => {
                      setDescription(target.value);
                    }}></textarea>
                </label>
              </div>

              <button type="submit" className={'btn btn-primary'}>
                SAVE
              </button>
            </form>
          );
        }}
      </ThemeConsumer>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
