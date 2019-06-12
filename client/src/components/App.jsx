import React from "react";
import styled from "styled-components";

import Form from "./Form.jsx";

const Logo = styled.img`
  width: 150px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <Logo src="https://fec-brox.s3-us-west-2.amazonaws.com/images/brox-logo.png" />
        <Wrapper>
          <Form />
        </Wrapper>
      </div>
    );
  }
}

export default App;
