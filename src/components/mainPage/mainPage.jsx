import Todos from '../todos';
import Comments from '../comments';
import { useState } from 'react';
import { ThemeProvider } from '../../Contexts/themeContext';

function MainPage() {
  const [page, setPage] = useState('todos');
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <button
              className={'m-4 btn btn-primary'}
              onClick={() => {
                setPage('todos');
              }}>
              TODOS
            </button>
          </li>
          <li className="nav-item">
            <button
              className={'m-4 btn btn-primary'}
              onClick={() => {
                setPage('comments');
              }}>
              COMMENTS
            </button>
          </li>
          <li className="bg-light">
            <button
              className={'m-4 btn btn-secondary'}
              onClick={() => {
                setTheme('light');
              }}>
              LIGHT
            </button>
          </li>
          <li className="bg-light">
            <button
              className={'m-4 btn btn-dark'}
              onClick={() => {
                setTheme('dark');
              }}>
              DARK
            </button>
          </li>
        </ul>
      </nav>

      <ThemeProvider value={theme}>
        {page === 'todos' && <Todos />}
        {page === 'comments' && <Comments />}
      </ThemeProvider>
    </div>
  );
}

export default MainPage;
