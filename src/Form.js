import React from 'react'

function Form(props){
    return(
        <form onSubmit={props.onFormSubmit}>
            <label>name <input
                onChange={props.onInputChange} // callback takes an event object
                value={props.formData.name}
                name='name'
                type='text'
            /></label>
            <label>email <input
                onChange={props.onInputChange} // callback takes an event object
                value={props.formData.email}
                name='email'
                type='text'
            /></label>
            <label>role <input
                onChange={props.onInputChange} // callback takes an event object
                value={props.formData.fname}
                name='role'
                type='text'
            /></label>
            <input type='submit'/>
        </form>
    )
}



export default Form