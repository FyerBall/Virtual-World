import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../server/firebase';
import Empty from './Empty';
import Post from './Post';

function Feed() {
  const [feed, setFeed] = useState([]);

  console.log(feed);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setFeed(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  console.log(feed.length);
  return (
    <Wrapper className=''>
      {feed.map(({ id, post }) => {
        const { avatarUrl, caption, photoUrl, timestamp, username } = post;
        return (
          <Post
            key={id}
            id={id}
            username={username}
            avatarUrl={avatarUrl}
            photoUrl={photoUrl}
            caption={caption}
            timestamp={timestamp}
            posts={post}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1fr; */
  justify-content: center;
`;

export default Feed;
