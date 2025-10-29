import React from 'react';
import styled from 'styled-components';

const Button1 = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button className="cssbuttons-io-button" onClick={onClick}>
        Zurück zur Startseite
        <div className="icon">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cssbuttons-io-button {
    background: var(--gradient-primary);
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 18px;
    font-weight: 600;
    border-radius: 12px;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: var(--shadow-md);
    overflow: hidden;
    position: relative;
    height: 3.2em;
    padding-right: 3.5em;
    cursor: pointer;
    margin: 40px auto;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .cssbuttons-io-button:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-3px) scale(1.02);
  }

  .cssbuttons-io-button:active {
    transform: translateY(-1px) scale(1);
  }

  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.4em;
    width: 2.4em;
    border-radius: 8px;
    box-shadow: 0.1em 0.1em 0.8em 0.2em rgba(71, 157, 193, 0.4);
    right: 0.4em;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.8em);
    border-radius: 8px;
  }

  .cssbuttons-io-button .icon svg {
    width: 1.3em;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: #479dc1;
  }

  .cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.2em) scale(1.1);
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    .cssbuttons-io-button {
      font-size: 16px;
      height: 2.8em;
      padding-right: 3.2em;
    }
    
    .cssbuttons-io-button .icon {
      height: 2.2em;
      width: 2.2em;
    }
  }
`;

export default Button1;
