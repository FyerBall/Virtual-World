import React from 'react';
import styled from 'styled-components';
import CreatePost from '../components/CreatePost';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';

function HomePage() {
  return (
    <Wrapper className=''>
      <Sidebar />
      <div className='body'>
        <CreatePost />
        <Feed />
      </div>
      <Widgets />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 200px 2fr 1fr;

  @media (max-width: 920px) {
    grid-template-columns: 80px 2fr;
    gap: 0.5rem;
  }
`;

export default HomePage;
