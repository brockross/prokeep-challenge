import React from "react";
import styled from "styled-components";
import { validate } from "email-validator";

const FormWrapper = styled.div`
  background-color: lightgrey;
  color: #262626;
  border-radius: 5px;
  width: 33vw;
  padding: 2vw;
`;

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputField = styled.input`
  border: none;
  border-radius: 2px;
  height: 2em;
  width: 80%;
`;

const SubmitBtn = styled.input`
  border: none;
  border-radius: 2px;
  height: 2em;
  width: 30%;
  background-color: ${props => {
    return props.disabled ? "white" : "#008d95";
  }};
  color: ${props => {
    return props.disabled ? "lightgrey" : "white";
  }};
`;

const Label = styled.label`
  font-family: Helvetica;
  text-align: left;
  margin-bottom: 4px;
`;

const InvalidMessage = styled.p`
  visibility: ${props => (props.isValid ? "hidden" : "visible")};
  color: #c14321;
  font-family: Helvetica;
  font-size: 0.75em;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleInput(e) {
    e.preventDefault();

    let text = e.target.value;
    let field = e.target.name;

    this.setState({
      [field]: text
    });
  }

  validatePW(password) {
    return !!password.length;
  }

  validateEmail(email) {
    return validate(email.toString());
  }

  handleSubmit() {
    const { email, password } = this.state;

    fetch("https://reqres.in/api/login  ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => response.json())
      .then(data => {
        let message = data.token
          ? "Login successful."
          : "No user found with those credentials.";

        alert(message);
      });
  }

  render() {
    const { email, password } = this.state;
    return (
      <FormWrapper>
        <FlexForm>
          <Label>Email:</Label>
          <InputField
            id="emailField"
            type="text"
            name="email"
            onChange={e => this.handleInput(e)}
          ></InputField>
          <InvalidMessage isValid={this.validateEmail(email)}>
            Please enter a valid email.
          </InvalidMessage>

          <Label>Password:</Label>
          <InputField
            id="passwordField"
            type="password"
            name="password"
            onChange={e => this.handleInput(e)}
          ></InputField>
          <InvalidMessage isValid={this.validatePW(password)}>
            Please enter a password.
          </InvalidMessage>

          <SubmitBtn
            id="submitButton"
            type="submit"
            disabled={!(this.validateEmail(email) && this.validatePW(password))}
            onClick={e => {
              e.preventDefault();
              this.handleSubmit(e);
            }}
          ></SubmitBtn>
        </FlexForm>
      </FormWrapper>
    );
  }
}

export default Form;
