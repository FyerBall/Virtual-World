import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';

function Comments({ comments, username, timestamp }) {
  return (
    <Wrapper>
      {comments ? (
        <p>
          <strong>{username}:</strong> {comments} <br />
          <small className='time'>
            <Moment unix fromNow>
              {timestamp?.seconds}
            </Moment>
          </small>
        </p>
      ) : (
        <p>
          <strong>username:</strong> This is a temporary comment for testing
          purpose and you can write your own.
        </p>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  line-height: 2;
  /* Getting it form the parent -> post */
  /* .time {
    color: #9ca3af;
  } */
`;
export default Comments;
