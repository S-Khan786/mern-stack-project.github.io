import React from 'react';
import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Userlist from './components/Userlist';

function App() {
  return (
    <div className="App">
        <h1>MERN Stack Project</h1>

        <div className="row">

            <div className= "col-md-6">

                <Register/>

            </div>

            <div className='col-md-6'>

                <Login/>

            </div>

        </div>

        <div className="row justify-content-center">

            <div className='col-md-8'>

                <Userlist/>

            </div>
        </div>

    </div>
  );
}

export default App;
