import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = () => {
  return (
    <div className="App">
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
