import React, { useState } from 'react';
import axios from 'axios'

function Login() {
    
    const[username, setusername] = useState('');
    const[password, setpassword] = useState('');


    function login(event) {

        event.preventDefault();


        var user = {

            username : username,
            password : password

        }
        
        axios.post('api/user/loginuser', user)
        .then(res=>{
            console.log(res);
            alert(res.data);
            
        }).catch(err=>{
            console.log(err);

        });
    }

    return (
        <div>

            <form onSubmit={login}>
                
                <h1>Login</h1>
                <input type="text" placeholder='username' className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                <input type="text" placeholder='password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

                <input type = "submit" value = 'login' className='btn btn-primary'/>
            </form>
        </div>
    );
};

export default Login;
