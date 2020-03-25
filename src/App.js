import React, {useState} from 'react';
import './App.css';
import './Form'
import Form from './Form';

const initialTeam = [
  {id:1, name:'fighter', email:'fake1@fake.com', role:'tanky-boi'},
  {id:2, name:'ranger', email:'fake2@fake.com', role:'dps-boi'},
  {id:3, name:'rogue', email:'fake3@fake.com', role:'sneaky-boi'},
]

let isEditing=false

function App() {
  const[teamMembers, setTeamMembers] = useState(initialTeam)
  const[formData, setFormData] = useState({
    id:'',
    name:'',
    email:'',
    role:'',
  })
  const[member, selectMember] = useState()


  const onInputChange = event => {
    const inputThatChanged = event.target.name
    const valueOfInput = event.target.value

    setFormData({...formData, [inputThatChanged]:valueOfInput})

  }

  const onFormSubmit = event => {
    event.preventDefault()
    const newTeamMember = {
      id:formData.id,
      name:formData.name,
      email:formData.email,
      role:formData.role,
    }
    if(isEditing){
      editMember(member)
    }else{
      setTeamMembers([...teamMembers, newTeamMember])
    }
    
  }

  const memberToEdit = memberObj =>{
    selectMember(memberObj)
    setFormData(memberObj)
    isEditing=true;
  }

  const editMember = function(member){
    teamMembers.map((item ,index)=> {
      if(member.id===item.id){
        teamMembers[index]=member
      }
    })
    console.log(teamMembers)
  }

  console.log(member)

  return (
    <div className="App">
      <h1>The Party</h1>
      <Form 
        formData={formData}
        onInputChange={onInputChange}
        onFormSubmit={onFormSubmit}
        memberToEdit={memberToEdit}
        member={member}
      />
      {
        teamMembers.map((item) => (
          <div>
            <div>{item.name} {item.email} {item.role}</div>
            <button onClick={() => (memberToEdit(item))}>edit</button>
          </div>
        ))
      }
    </div>
  );
}

// function Form(){

// }

export default App;
