import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class TestApp extends React.Component {
  render () {
    return <div>TestApp</div>
  }
}

// ReactDOM.render(<App key="App" />, document.getElementById('root1'));

// ReactDOM.createRoot(document.getElementById('root')).render(App)

ReactDOM.createPortal('#root1')