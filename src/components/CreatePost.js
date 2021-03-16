import React from 'react';
import Comment from './Comment';
import { AiOutlineSend } from 'react-icons/ai';
import styled from 'styled-components';
function CreatePost() {
  let user = true;
  return (
    <Wrapper>
      {user ? (
        <Comment
          send={<AiOutlineSend />}
          upload='true'
          placeholder={'share your story'}
        />
      ) : (
        <button className='btn-primary alert'>Sign in to post</button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default CreatePost;
