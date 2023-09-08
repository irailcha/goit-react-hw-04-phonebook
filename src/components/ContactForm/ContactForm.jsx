import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledField, SubmitButton } from './ContactForm.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';


const userSchema = yup.object().shape({
  name: yup.string().required().label("Ім'я"),
  number: yup.string().required().label('Номер'),
});


const ContactForm = ({ addContact }) => {
  const onSubmit = (values, { resetForm }) => {
    const newContact = { ...values, id: nanoid() };
    addContact(newContact);
    resetForm();
  };
 

return (
  <Formik initialValues={{name:'', number:''}} validationSchema={userSchema} onSubmit={onSubmit}>
    {({ handleSubmit, handleChange, values, errors }) => (
    <StyledForm autoComplete='off' onSubmit={handleSubmit}>
    <label htmlFor='name'> 
    Name
    <StyledField 
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
  />
    </label>
    <label htmlFor='number'>
    Number
    <StyledField
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
  />
    </label>
    <SubmitButton type='submit' >Add contact</SubmitButton>
    </StyledForm>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired
};

export default ContactForm;
