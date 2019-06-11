import React from 'react';

import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Please log in.</h2>
        <Form />
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