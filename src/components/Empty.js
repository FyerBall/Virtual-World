import React from 'react';
import styled from 'styled-components';
import blog from '../assets/blog.svg';
function Empty() {
  return (
    <Wrapper>
      <h3>Be the first one to create a post</h3>
      <img src={blog} alt='blog' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  background-color: var(--primary-color-light);
  padding: 20px;
  border-radius: 2rem;

  img {
    width: 300px;
    margin-top: 1rem;
  }
`;

export default Empty;
