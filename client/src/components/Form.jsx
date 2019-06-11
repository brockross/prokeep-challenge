import React from 'react';
import styled from 'styled-components';
import { validate } from 'email-validator';

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Label = styled.label`
  font-family: Helvetica;
  text-align: left;
`

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <FlexForm>
        <Label>Email:</Label>
        <input type="text"></input>
        <Label>Password:</Label>
        <input type="text"></input>
        <input type="submit"></input>
      </FlexForm>
    )
  }
}

export default Form;
