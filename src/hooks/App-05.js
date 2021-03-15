import React, { useReducer } from 'react'

function App(){
const [data, setData] = useReducer((data,addNum)=>data+addNum,0);

    return(

        <h1 onClick={()=>{setData(2)}}>{data}</h1>

    )
}


export default App;