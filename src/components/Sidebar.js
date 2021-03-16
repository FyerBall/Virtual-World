import React, { useRef, useEffect } from 'react';
import Icons from '../Helpers/Icons';
import { SiMessenger } from 'react-icons/si';
import { ImNewspaper } from 'react-icons/im';
import { RiLiveLine } from 'react-icons/ri';
import { TiGroup } from 'react-icons/ti';
import { MdEvent } from 'react-icons/md';
import { FaRegNewspaper } from 'react-icons/fa';
import styled from 'styled-components';

function Sidebar() {
  const wrapperRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    const iconsHeight = iconsRef.current.getBoundingClientRect().height;

    console.log('Ref Height is =>', iconsHeight);

    wrapperRef.current.style.height = `${iconsHeight}px`;
  }, []);
  return (
    <Wrapper ref={wrapperRef}>
      {/* <h2 className='header'>sidebar</h2> */}
      <div className='icons' ref={iconsRef}>
        <Icons Icon={SiMessenger} title='messenger' color='#0053FF' />

        <Icons Icon={ImNewspaper} title='news feed' color='#ffbf01' />

        <Icons Icon={RiLiveLine} title='watch live' color='#FF4154' />
        <hr />
        <Icons Icon={TiGroup} title='group' color='#55b9f3' />
        <Icons Icon={MdEvent} title='events' color='#ffbf01' />
        <Icons Icon={FaRegNewspaper} title='pages' color='#e54756' />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--white);
  border-radius: 2rem;
  transition: var(--transition);

  position: sticky;
  top: 0;

  .header {
    text-align: center;
    text-transform: capitalize;
    color: var(--primary-color);
  }

  .icons {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .header,
  .title {
    display: none;
  }

  @media (min-width: 920px) {
    padding: 1rem;
    .header,
    .title {
      display: block;
    }
    svg {
      margin-right: 10px;
    }
  }
`;

export default Sidebar;
