import React from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import GlobalStyle from './GlobalStyle';
import './App.styled';
import {SectionStyle, TitleStyle, TitleContactsStyle, ContactListStyle} from './App.styled'
import { nanoid } from 'nanoid';


class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  
  }

  componentDidMount () {
    const savedFilter=localStorage.getItem("contacts");
    if (savedFilter !==null){
      const contact=JSON.parse(savedFilter);
    this.setState({
      contact,
    })
  }};
  
  
    componentDidUpdate(prevProps, prevState) {
      if(prevState.contacts !==this.state.contacts){
  
  localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  } }

  addContact = newContact => {
    
    const {name, number} = newContact;

    const isExist = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase())
      
    if (isExist) {
      alert(`${name} is already in contacts.`);
      
      return;
    }
    const newContactData = {
    name: name,
    number: number,
    id: nanoid()
  };

  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContactData]
  }));
};
  


  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };


  changeContact=newContact=>{

this.setState(prevState => ({
  filter: newContact
}))
  };



  resetFilter=()=>{
    this.setState({filter: ''})
  };
  

  

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      
    );
    return (
      <SectionStyle>
        <TitleStyle>Phonebook</TitleStyle>
        <ContactForm addContact={this.addContact} 
        />
        <TitleContactsStyle>Contacts</TitleContactsStyle>

        <ContactListStyle>
        <Filter 
        name={this.state.filter}
        changeContact={this.changeContact}
        onReset={this.resetFilter}
        />
        <ContactList
  
        onDelete={this.deleteContact}
        contacts={filteredContacts}/>
        </ContactListStyle>

        <GlobalStyle/>
      </SectionStyle>
    );
  }
}

export default App;
