/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

render(
  // wrap the App in the Provider and pass in the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents')
);



// import React from 'react';
// import ReactDOM from 'react-dom';

// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {name: 'Medium'};
//   }
//   handleChange(e) {
//     this.setState({name: e.target.value});
//   }
//   render() {
//     return (
//       <div style={{textAlign: 'center'}}>
//         <h1>Welcome</h1>
//         <p>Hello {this.state.name}</p>
//         <input onChange={this.handleChange} defaultValue={this.state.name}/>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Welcome/>, document.getElementById('app'));