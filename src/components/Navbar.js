import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <Wrapper className=''>
      <div className='logo__container'>
        <img src={logo} alt='virtual world logo' className='logo' />
        <h1 className='text'>
          Virtual <span>World</span>
        </h1>
      </div>

      <button
        className='btn-primary'
        onClick={() =>
          alert(
            'This is just a demo and you can create a post with out creating an account'
          )
        }
      >
        Sign in
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background: var(--white);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 3%;
  .logo__container {
    display: flex;
    align-items: center;
    .logo {
      cursor: pointer;
      width: 3rem;
    }
    .text {
      color: #f14668;
      margin-left: 15px;
    }
    /* span {
        color: #4a47a3;
        margin-left: 5px;
      } */
  }
`;
export default Navbar;
