import React from 'react';
import styled from 'styled-components';
function Icons({ Icon, title, color }) {
  return (
    <Wrapper className=''>
      {Icon && <Icon style={{ color: color }} />}

      <span className='title'>{title}</span>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  margin: 20px auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: object-fit;
  padding: 10px 20px;
  justify-content: flex-start;

  transition: var(--transition);
  border-radius: 2rem;
  span {
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }
  svg {
    font-size: 25px;
    margin-right: 0px;
  }

  &:hover {
    background: #e5e7eb;
  }
`;
export default Icons;
