import styled from 'styled-components';
import { Field } from 'formik';



export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledField = styled(Field)`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap:10px;
`;

export const SubmitButton = styled.button`
  font-weight: 500;
  cursor: pointer;
  border-style: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  margin: auto;
  font-size: 20px;
  padding: 10px 24px;
  text-transform: uppercase;
  

  transition-property: background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #939495;
    border: 2px solid #ccc;
  }
`;
