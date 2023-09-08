import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.styled';
import {ContactStyle, ContactListStyle, BtnDeleteStyle} from './ContactList.styled'

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactListStyle>
      {contacts.map(contact => (
        <ContactStyle key={contact.id}>
          {contact.name} : {contact.number}
          <BtnDeleteStyle onClick={() => onDelete(contact.id)}>Delete</BtnDeleteStyle>
        </ContactStyle>
      ))}
    </ContactListStyle>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ContactList;
