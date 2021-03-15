
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import {createStore} from 'redux'

//temporarily to declare a variable
const initialState = ['Sai','Charan'];


const reducer = (state=initialState, action) =>{
  switch (action.type) {
    case "ADD_NAME":
      return [...state, action.data];
    case "DELETE_NAME":
      let names = [...state];
      names.splice(action.data,1);
      return names;
    default:
      return state;
  }

}

const store = createStore(reducer);
window['store']=store


const submitHandler=(evt)=>
{
  evt.preventDefault();
  const name=document.getElementById("name").value;
  const action ={type:"ADD_NAME",data:name};
  store.dispatch(action);
  document.getElementById("name").value=""
  document.getElementById("name").focus()
}


document.getElementById("form1").onsubmit=submitHandler

const updatedList = ()=>{
  let names = store.getState();
  let list = names.map((name,index)=>
    '<li class="list-group-item"><button class="btn btn-danger" onclick="deleteName('+index+')">X</button>'+name+'</li>'
  )
  let listItems=list.join("")
  document.getElementById("namesList").innerHTML=listItems;
}

window['updatedList']=updatedList;

updatedList()
store.subscribe(updatedList)


window['deleteName']=(index)=>{
  const action ={type:"DELETE_NAME",data:index};
  store.dispatch(action);


};


// '<div class="row"><div class="col-md-10"><li class="list-group-item">'+name+'</li></div><div class="col-md-2"><button class="btn btn-danger" onclick="clickHandler">X</button></div></div>'

