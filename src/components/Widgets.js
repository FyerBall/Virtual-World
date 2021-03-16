// TODO Use ref to get the height dynamically
// TODO "body" can be a component
import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import Icons from '../Helpers/Icons';
import { SiMessenger } from 'react-icons/si';
import { MdLocalActivity } from 'react-icons/md';
import { FiActivity } from 'react-icons/fi';
import { FaFly } from 'react-icons/fa';
function Widgets() {
  return (
    <Wrapper>
      <div className='header'>
        <h4 className='title'>Suggested Groups</h4>
        <button>see more</button>
      </div>
      <div className='body'>
        <img
          src='https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
          alt='star wars'
        />
        <button className='btn-primary label'>join now</button>
      </div>
      <div className='info'>
        <div className='status'>
          <h2>Star Wars Fans</h2>
          <small>65 friends | 1.5k members</small>
        </div>
        <div className='joined'>
          <Avatar
            className='avatar imageOne'
            src='https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1300&q=80'
            alt='avatar'
          />

          <Avatar
            className='avatar imageTwo'
            src='https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1498&q=80'
            alt='avatar'
          />
          <Avatar
            className='avatar imageThree'
            src='https://images.unsplash.com/photo-1495055154266-57bbdeada43e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            alt='avatar'
          />
          <Avatar
            className='avatar imageFour'
            src='https://images.unsplash.com/photo-1579935110464-fcd041be62d0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=8080'
            alt='avatar'
          />
        </div>
      </div>
      <br />
      <div className='activity'>
        <h2 className=''>Activities</h2>
        <ul className='activities'>
          <Icons Icon={SiMessenger} title='Lorem ipsum dolor' color='#f0304e' />
          <Icons
            Icon={MdLocalActivity}
            title='Lorem ipsum dolor'
            color='#f0304e'
          />
        </ul>
        <ul className='activities'>
          <Icons Icon={FiActivity} title='Lorem ipsum dolor' color='#f0304e' />
          <Icons Icon={FaFly} title='Lorem ipsum dolor' color='#f0304e' />
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--white);
  transition: var(--transition);
  border-radius: 2rem;
  padding: 10px 20px;
  width: 100%;

  height: 715px;

  .header {
    text-transform: capitalize;
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    margin: 20px auto;

    .title {
      letter-spacing: var(--spacing);
    }
    button {
      color: var(--primary-color);
    }
  }

  .body {
    position: relative;
    width: 400px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 240px;
      object-fit: cover;
      border-radius: 20px;
    }
    .label {
      position: absolute;
      bottom: 0;
      right: 0;

      outline: none;
      border: none;
      margin: 1rem;
    }
  }

  .info {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

    .joined {
      display: flex;
      justify-content: center;
      position: relative;
      .avatar {
        position: absolute;
        cursor: pointer;
        border: 1px solid transparent;

        transition: var(--transition);
        &:hover {
          border: 1px solid var(--primary-color);
          z-index: 10;
          transform: scale(1.1);
        }
      }
      .imageOne {
        z-index: 0;
        margin-left: 0;
      }
      .imageTwo {
        z-index: 1;
        margin-left: -40px;
      }
      .imageThree {
        z-index: 2;
        border: 1px solid purple;
        margin-left: -80px;
      }
      .imageFour {
        z-index: 3;

        margin-left: -120px;
      }
    }
    .status {
      small {
        color: var(--primary-color);
      }
    }
  }

  .activity {
    background-color: var(--gray);
    padding: 10px 20px;
    margin-bottom: 10px;
    border-radius: 2rem;
    /* 
    padding: 10px 20px;
    */

    .activities {
      display: flex;
    }
    svg {
      margin-right: 10px;
    }
    h2 {
      letter-spacing: var(--spacing);
      text-align: center;
    }
  }

  @media (max-width: 930px) {
    display: none;
  }

  @media (max-width: 1070px) {
    .body {
      width: 335px;
    }
    img {
      width: 100%;
    }
    .info {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
  }
`;
export default Widgets;
