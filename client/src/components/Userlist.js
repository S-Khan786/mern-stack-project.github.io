import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Userlist() {

    const[userlist, setuserlist] = useState([]);

    useEffect(()=>{
        
        axios.post('/api/user/getusers').then(

            res=>{
                console.log( res);
                setuserlist(res.data);
            }

        ).catch(err=>{
            console.log(err);
            
        });

    },[])


    const usersdata = userlist.map((obj)=>{

        return <tr>

            <td>{obj.name}</td>
            <td>{obj.username}</td>
            <td>{obj.password}</td>
        </tr>
        
    });

    return (
        <div>
            <h1>UsersList</h1>

            <table class = "table table-dark">
                
                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>

                </thead>

                {usersdata} 

            </table>

        </div>
    );
}

export default Userlist;