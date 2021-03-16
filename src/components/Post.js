import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { AiFillHeart } from 'react-icons/ai';
import { HiOutlineBookmark, HiDotsVertical } from 'react-icons/hi';
import Caption from './Caption';
import Comment from './Comment';
import { AiOutlineSend } from 'react-icons/ai';
import Comments from './Comments';
import { db } from '../server/firebase';
import Moment from 'react-moment';

function Post({ caption, username, avatarUrl, photoUrl, id, timestamp }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (id) {
      db.collection('posts')
        .doc(id)
        .collection('comments')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      console.log("Don't forget to clean up");
    };
  }, [id]);

  return (
    <Wrapper>
      <div className='header'>
        <div className='person'>
          <Avatar alt={username} src={avatarUrl} />
          <h4 className='name'>
            {username}
            <br />
            <small className='time'>
              <Moment unix fromNow>
                {timestamp?.seconds}
              </Moment>
            </small>
          </h4>
        </div>
        <HiDotsVertical />
      </div>
      <div className='body'>
        <img src={photoUrl} alt='bear' />
        <ul className='icons'>
          <AiFillHeart className='heart' />
          <HiOutlineBookmark className='bookmark' />
        </ul>
      </div>

      <div className='caption'>
        {/* Limited to num of Char. */}
        <Caption username={username} caption={caption} />
      </div>

      {comments?.splice(0, 3).map((comment, _id) => (
        <div className='comments' key={_id}>
          <Comments
            username={comment.username}
            comments={comment.body}
            timestamp={comment.timestamp}
          />
        </div>
      ))}

      <Comment
        send={<AiOutlineSend />}
        placeholder={'share your thoughts'}
        addComment
        postId={id}
      />
    </Wrapper>
  );
}

const Wrapper = styled.article`
  background: var(--white);
  padding: 3%;
  margin: 2rem 0;
  border-radius: 2rem;

  width: 400px;

  svg {
    font-size: 20px;
    cursor: pointer;
    color: var(--icons);
  }

  .header,
  .person {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .name {
      margin-left: 10px;
    }
  }

  .body {
    img {
      width: 100%;
      object-fit: contain;
      margin: 0.5rem 0;
      cursor: pointer;
      border-radius: 2rem;
    }
    ul {
      display: flex;
      justify-content: space-between;
      .heart {
        color: #f44335;
      }
      .bookmark {
      }
    }
  }

  .comments,
  .caption {
    margin-top: 0.5rem;
    padding: 0.5rem;
  }
  .comments {
    background: var(--gray);
    border-radius: 1rem;
  }
  .caption {
    background: #eef2ff;
    border-radius: 0.3rem;
  }
  .time {
    color: #9ca3af;
  }
`;
export default Post;
