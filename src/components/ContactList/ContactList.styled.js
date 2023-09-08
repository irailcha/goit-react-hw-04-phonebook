import styled from 'styled-components'

export const ContactStyle=styled.li`
display: flex;
gap: 15px;
align-items: center;

`

export const ContactListStyle=styled.ul`
display: flex;
flex-direction: column;
gap: 15px;
align-items: center;

`
export const BtnDeleteStyle=styled.button`
font-weight: 400;
cursor: pointer;
border-style: none;
border: 2px solid #ccc;
border-radius: 5px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
margin: auto;
font-size: 15px;
padding: 5px 10px;



transition-property: background-color, box-shadow;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
  background-color: #939495;
  border: 2px solid #ccc;
}
`;
