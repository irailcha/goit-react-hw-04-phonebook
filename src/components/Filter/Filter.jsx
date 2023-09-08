import React from 'react';
import './Filter.styled'
import PropTypes from 'prop-types';
import {FilterStyle} from './Filter.styled';


const Filter = ({ name, changeContact, onReset}) => {
    
return(
<FilterStyle>
    <input
    type='text'
    name="Find contact"
    value={name}
    onChange={evt=>
        changeContact(evt.target.value)
    
    }
    placeholder='Filter'
/>
    <button onClick={onReset}>Reset filter</button>
</FilterStyle>
)
}

Filter.propTypes = {
    name: PropTypes.string.isRequired,
    changeContact: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
   
  };


export default Filter; 