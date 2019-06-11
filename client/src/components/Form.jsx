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

const InvalidMessage = styled.p`
  visibility: ${props => props.isValid ? 'hidden' : 'visible'};
`

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleInput(e) {
    let text = e.target.value;
    let field = e.target.name;

    this.setState({
      [field] : [text]
    })
  }

  render() {
    return (
      <FlexForm>
        <Label>Email:</Label>
        <input type="text" name="email" onChange={(e) => this.handleInput(e)}></input>
        <InvalidMessage isValid={validate(this.state.email.toString())}>Please enter a valid email.</InvalidMessage>
        <Label>Password:</Label>
        <input type="text" name="password" onChange={(e) => this.handleInput(e)}></input>
        <input type="submit"></input>
      </FlexForm>
    )
  }
}

export default Form;
