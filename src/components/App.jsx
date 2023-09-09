import React, {useState, useEffect} from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import GlobalStyle from './GlobalStyle';
import './App.styled';
import {SectionStyle, TitleStyle, TitleContactsStyle, ContactListStyle} from './App.styled'
import { nanoid } from 'nanoid';

const App = () => {
  
  const [contacts, setContacts]=useState([]);
  const [filter, setFilter]=useState('');


  
  useEffect(() => {
    const savedFilter=JSON.parse(localStorage.getItem("contacts"));
    if (savedFilter){
      setContacts(savedFilter)
    }}, []);

  useEffect(()=> {
      localStorage.setItem("contacts", JSON.stringify(contacts))
    }, [contacts])
  


const  addContact = newContact => {
    
    const {name, number} = newContact;

    const isExist =contacts.find(
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
  
  setContacts(prevContacts =>[...prevContacts, newContactData]);
};



const deleteContact =( contactId )=> {
  setContacts(prevContact => prevContact.filter(contact => contact.id !== contactId)
  );
};


const changeContact= (newContact) => {setFilter(newContact)};

const  resetFilter=()=>{
  setFilter('')};

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
      
    );

    return (
      <SectionStyle>
        <TitleStyle>Phonebook</TitleStyle>
        <ContactForm addContact={addContact} 
        />
        <TitleContactsStyle>Contacts</TitleContactsStyle>

        <ContactListStyle>
        <Filter 
        name={filter}
        changeContact={changeContact}
        onReset={resetFilter}
        />
        <ContactList
  
        onDelete={deleteContact}
        contacts={filteredContacts}/>
        </ContactListStyle>

        <GlobalStyle/>
      </SectionStyle>
    );

}

export default App;
