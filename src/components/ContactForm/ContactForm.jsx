import React, { Component } from 'react';
export class ContactForm extends Component{ 

  state = {
    name: '',
    number: ''
  }

  onChange =e=>{
    
    this.setState({[e.target.name]: e.target.value})
    }

 handleSubmit= e=>{
  e.preventDefault()
  const { onSubmit, nameAlreadyExists, numberAlreadyExists } = this.props;
  const { name, number } = e.target.elements
  
  if(nameAlreadyExists(name.value)){
    alert(`${name.value} already exists!`)
    return
  }
  if(numberAlreadyExists(number.value)){
    alert(`${number.value} already exists in Your Contact list`)
    return
  }

  const data = {
    name: name.value,
    number: number.value,
  };

onSubmit(data);
console.log('sdda');

 }



  render(){
  return (
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name= "name"
        value = {this.state.name}
        onChange={this.onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Number</label>
      <input
        id="number"
        type="tel"
        name="number"
        value={this.state.number}
        onChange={this.onChange}
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  )};
};
