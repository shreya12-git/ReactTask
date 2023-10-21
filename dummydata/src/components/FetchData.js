import { useEffect, useState } from 'react';
function FetchData(){
    const[data,setData]=useState([]);
useEffect(()=>{
  fetch('https://dummyjson.com/users')
  .then(response=>response.json())
  .then(res=>setData(res.users))
  .catch(err=> console.log(err))
},[])
return(
    <div className='container'>
        <div className='table'>
            <thead className='column'>
                <tr> 
                    <th>Sno</th> 
                    <th>Profile Pic</th>
                    <th>First Name</th> 
                    <th>Last Name</th> 
                    <th>Gender</th> 
                    <th>E-mail</th> 
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                </tr>
            </thead>  
            <tbody className='rows'>
                {
                    data.map((user,index)=>{
                        return <tr key={index}>
                            <td>{user.id}</td>
                            <td>{<img className="image"src={user.image}></img>}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.domain}</td>
                            <td>{user.ip}</td>
                            <td>{user.university}</td>
                        </tr>
                    })
                }
            </tbody>
        </div>
    </div>
)
}
export default FetchData;
