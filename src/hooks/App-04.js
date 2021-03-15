import React, { useState, useEffect } from 'react'

function App(){
const [data, setData] = useState([])

useEffect(()=>{
    fetch("https://api.github.com/users")
        .then(resp=>resp.json())
        .then(setData)
},[])

if(data){
    return(
        <div>
            <button onClick={()=>{setData([])}} >Remove</button>

            <ul>
                {data.map((user,key)=>(
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
        </div>
    )
}

return <p>No users Found</p>
}
export default App;