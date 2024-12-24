import React from 'react';
import styled from 'styled-components';

const Button1 = () => {
  return (
    <StyledWrapper>
      <button>Berufserfahrungen im Angestelltenverhältnis</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    width: 350px;
    height: 60px;
    border: 3px solid #479dc1;
    border-radius: 45px;
    transition: all 0.3s;
    cursor: pointer;
    background: white;
    font-size: 1.2em;
    font-weight: 550;
  }

  button:hover {
    background: #479dc1;
    color: white;
    font-size: 1.5em;
  }`;

export default Button1;
