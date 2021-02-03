import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  
  return API.get('srvsecdemohomeapi', '/home');
  
  //const apiName = 'srvsecdemohomeapi';
  //const path = '/home';
  
  //API
  //.get(apiName, path)
  //.then(response => {
  //  console.log(response.data);
  //  // Add your code here
 // })
  //.catch(error => {
  //  console.log(error.response);
 //});
  
  //return (
 //   <div className="App">
 //     <header className="App-header">
 //       <img src={logo} className="App-logo" alt="logo" />
 //       <p>
 //         Edit <code>src/App.js</code> and save to reload.
 //       </p>
 //       <a
 //         className="App-link"
  //        href="https://reactjs.org"
 //         target="_blank"
 //         rel="noopener noreferrer"
 //       >
 //         Learn React
 //       </a>
 //       <p>
 //         Hello world
 //       </p>
 //     </header>
 //   </div>
 // );
}

export default withAuthenticator(App);
