import { ThemeConsumer } from '../../Contexts/themeContext';

var data = [];

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

try {
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'GET',
  })
    .then(function (response) {
      if (response.status !== 200) {
        throw response.status;
      }
      return response.json();
    })
    .then(function (responseData) {
      responseData.forEach((e) => {
        data.push(e);
      });
    })
    .catch(function (error) {
      if (error === 404) {
        console.log('Page Not found', error);
      } else {
        console.log('Server Error');
      }
      console.log(error);
    });
} catch (error) {
  ErrorFallback(error);
}

function Comments() {
  return (
    <ThemeConsumer>
      {(theme) => {
        return (
          <div>
            {data.map((e) => (
              <div className={'rounded m-3 p-2 w-50 bg-' + theme + ' d-block'}>
                <h5 className="text-danger"> {e.email} </h5>
                <h6 className="text-warning">{e.name}</h6>
                <p className="text-primary">{e.body}</p>
              </div>
            ))}
          </div>
        );
      }}
    </ThemeConsumer>
  );
}

export default Comments;
