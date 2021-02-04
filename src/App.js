import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
import React, { useEffect, useState } from 'react'

Amplify.configure(awsconfig);

function App() {
 
 const [output, apiOutput] = useState([]);
 
 async function getHomePage() {
    try {
      const apiName = 'srvsecdemohomeapi';
      const path = '/home';
      // const data = await API.get('cryptoapi', '/coins')
      const data = await API.get(apiName, path, {'responseType': 'json',});
      console.log('data from Lambda REST API: ', data);
      apiOutput(data.home);
    } catch (err) {
      console.log('error fetching data..', err);
    }
  }
  
 useEffect(() => {
    getHomePage();
  }, []);
 
 return(
   <div className="App">
    <div className="heading">
     <h1>Amplify Todo</h1>
    </div>
    <div>
     <h2>{output}</h2>
    </div>
    <form className="getHomePage" onSubmit={getHomePage}>
     <fieldset>
      <label>
       <p>Name</p>
       <input name="name" />
      </label>
     </fieldset>
     <button type="submit">Submit</button>
    </form>
    <div className="sign-out">
     <AmplifySignOut/>
    </div>
   </div>
  );
 
 //return (
 //  <div className="App">
 //   <div className="heading">
 //    <h1>Amplify Todo</h1>
 //   <div className="sign-out">
 //    <AmplifySignOut/>
 //   </div>
 //  </div>
 // );
  
  //return API.get('srvsecdemohomeapi', '/home');
  
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
