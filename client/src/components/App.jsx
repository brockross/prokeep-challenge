import React from 'react';
import styled from 'styled-components';

import Form from './Form.jsx';

const Logo = styled.img`
  width: 150px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Logo src="https://fec-brox.s3-us-west-2.amazonaws.com/images/brox-logo.png" />
        <Wrapper>
          <Form />
        </Wrapper>
      </div>

    )
  }
}

export default App;


/*

Build a React app using your favorite boilerplate or seed (or from scratch), that consists of a login form that sends a login REST post request to this stubbed REST service: https://reqres.in   You are free to use whatever tooling you want and whatever libraries you feel best solves the problem. Bonus points if the form looks sharp.

1. The login form should have an email input and a password input.
2. The login form should validate that the email is a valid email input and the password field has at least one character before you process the submit action.
3. You are free to do real-time, on change, or submit validation - extra points for realtime.
4. Build a unit test for the form - testing both a valid login and an invalid login. you are free to use whatever testing stack you like.
5. Include a "dev" or "run" script in your package.json scripts
6. Include a "test" script in your package.json scripts
7. Upload to a code sharing service such as GitHub, Gitlab, etc. and let us know where to find it.
reqres.in
Reqres - A hosted REST-API ready to respond to your AJAX requests

*/