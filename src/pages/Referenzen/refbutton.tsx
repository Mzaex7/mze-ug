import React from 'react';
import styled from 'styled-components';

<<<<<<< HEAD
const Button1 = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button className="cssbuttons-io-button" onClick={onClick}>
        Zurück zur Startseite
=======
const Button = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button className="cssbuttons-io-button" onClick={onClick}>
        Erfahre mehr!
>>>>>>> 0be8c27 (Modern redesign: PYSolutions-inspired minimalist design mit Scroll-Animationen, optimiertem Footer und Referenzen-Styling)
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
<<<<<<< HEAD
    background: var(--gradient-primary);
=======
    background: #479dc1;
>>>>>>> 0be8c27 (Modern redesign: PYSolutions-inspired minimalist design mit Scroll-Animationen, optimiertem Footer und Referenzen-Styling)
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
<<<<<<< HEAD
    font-size: 18px;
    font-weight: 600;
    border-radius: 12px;
=======
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
>>>>>>> 0be8c27 (Modern redesign: PYSolutions-inspired minimalist design mit Scroll-Animationen, optimiertem Footer und Referenzen-Styling)
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
<<<<<<< HEAD
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
=======
    box-shadow: inset 0 0 1.6em -0.6em #479dc1;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
    cursor: pointer;
    margin-left: 3px;
>>>>>>> 0be8c27 (Modern redesign: PYSolutions-inspired minimalist design mit Scroll-Animationen, optimiertem Footer und Referenzen-Styling)
  }

  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
<<<<<<< HEAD
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
=======
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #479dc1;
    right: 0.3em;
    transition: all 0.3s;
  }

  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
  }

  .cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
>>>>>>> 0be8c27 (Modern redesign: PYSolutions-inspired minimalist design mit Scroll-Animationen, optimiertem Footer und Referenzen-Styling)
    color: #479dc1;
  }

  .cssbuttons-io-button:hover .icon svg {
<<<<<<< HEAD
    transform: translateX(0.2em) scale(1.1);
=======
    transform: translateX(0.1em);
>>>>>>> 0be8c27 (Modern redesign: PYSolutions-inspired minimalist design mit Scroll-Animationen, optimiertem Footer und Referenzen-Styling)
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
<<<<<<< HEAD
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
=======
  }`;

export default Button;
>>>>>>> 0be8c27 (Modern redesign: PYSolutions-inspired minimalist design mit Scroll-Animationen, optimiertem Footer und Referenzen-Styling)
