import React, { Component } from 'react';
import { nanoid } from 'nanoid';


import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };


  onChange =e=>{
  this.setState({[e.target.name]: e.target.value})
  }

  onFilter =()=>{
    return this.state.contacts.filter(contact=> contact.name.toLowerCase().match(this.state.filter.toLowerCase())
    )

  }


  render() {
    return (
  <div>
  <h1>Phonebook</h1>
  <ContactForm  />

  <Contacts title= "Contacts">
  <Filter  filter = {this.state.filter} onChange = {this.onChange} />
  <ContactList contacts={this.onFilter()}  key={this.state.contacts.id} name={this.state.contacts.name} number={this.state.contacts.number}/>
  </Contacts>
</div>
    );
  }
}
