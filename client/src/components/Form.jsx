import React from 'react';
import styled from 'styled-components';

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = (props) => {
  return (
    <FlexForm>
      <label>Email:</label>
      <input type="text"></input>
      <label>Password:</label>
      <input type="text"></input>
      <input type="submit"></input>
    </FlexForm>
  )
}

export default Form;
