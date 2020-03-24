import React, {useState} from 'react';
import './App.css';
import './Form'
import Form from './Form';

const initialTeam = [
  {name:'fighter', email:'fake1@fake.com', role:'tanky-boi'},
  {name:'ranger', email:'fake2@fake.com', role:'dps-boi'},
  {name:'rogue', email:'fake3@fake.com', role:'sneaky-boi'},
]

function App() {
  const[teamMembers, setTeamMembers] = useState(initialTeam)
  const[formData, setFormData] = useState({
    name:'',
    email:'',
    role:'',
  })
  const onInputChange = event => {
    const inputThatChanged = event.target.name
    const valueOfInput = event.target.value

    setFormData({...formData, [inputThatChanged]:valueOfInput})

  }
  const onFormSubmit = event => {
    event.preventDefault()
    const newTeamMember = {
      name:formData.name,
      email:formData.email,
      role:formData.role,
    }
    setTeamMembers([...teamMembers, newTeamMember])

  }
  return (
    <div className="App">
      <h1>The Party</h1>
      <Form 
        formData={formData}
        onInputChange={onInputChange}
        onFormSubmit={onFormSubmit}
      />
      {
        teamMembers.map(item => (
          <div>{item.name} {item.email} {item.role}</div>
        ))
      }
    </div>
  );
}

// function Form(){

// }

export default App;
