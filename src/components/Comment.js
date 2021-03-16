import React, { useState } from 'react';
import styled from 'styled-components';

import { AiOutlineCloudUpload } from 'react-icons/ai';
import { db, storage } from '../server/firebase';
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase';

// TODO Disable button if fields are empty
// TODO Send on enter
function Comment({ send, upload, placeholder, addComment, postId }) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    if (image === null) {
      alert('please add an image');
    } else {
      console.log(image);
      let imageName = uuidv4();
      const uploadTask = storage
        .ref(
          `images/${image.name
            .split('.')
            .slice(0, -1)
            .join('.')} - ${imageName}.jpg`
        )
        .put(image);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          alert(error);
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            db.collection('posts').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption,
              username: 'Meshari',
              avatarUrl:
                'https://lh3.googleusercontent.com/proxy/MPbtbxIpBNNanDxbMUxNI0hnqWsPUYiGi0UYuA0HAokF9OCPP-ZEzNrljkF0gAaDSzGENnQ7sRMcPYr1PmvA7q6nQ8-MQrWWs_aF_s-bBIrqRBrFjbVqjQ',
              photoUrl: downloadURL,
            });
          });
        }
      );

      setImage(null);
      setProgress(0);
      setCaption('');
    }
  };

  const addNewComment = () => {
    // TODO
    console.log(
      'comments are spliced and only showing 3 add a func. to show more or total num of comment'
    );
    db.collection('posts').doc(postId).collection('comments').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      body: caption,
      username: 'No Auth rn',
    });
    setCaption('');
  };
  return (
    <Wrapper>
      <textarea
        rows='3'
        placeholder={placeholder}
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      ></textarea>
      {upload && (
        <>
          {image && progress !== 0 ? <progress value={progress} /> : ''}

          <div className={`${image}` ? 'image__preview' : null}>
            <img
              src={image ? URL.createObjectURL(image) : null}
              alt={image ? image.name : null}
            />
          </div>
        </>
      )}
      {upload && (
        <div className='upload'>
          <button className='btn-primary' onClick={() => handleChange}>
            <label htmlFor='file-input'>
              <AiOutlineCloudUpload />
            </label>
          </button>

          <input
            id='file-input'
            type='file'
            accept='image/*'
            onChange={handleChange}
          />
        </div>
      )}

      {/* <div className='button__container'> */}
      <button
        className='btn-primary'
        onClick={addComment ? addNewComment : handleUpload}
        disabled={!caption}
      >
        {send}
      </button>
      {/* </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* margin: 1rem auto; */
  /* display: block; */
  width: 100%;

  textarea {
    width: 100%;
    height: 100px;
    margin: 1rem auto;
    border: 1px solid #f3f4f6;
    resize: none;
    background-color: var(--gray);
    padding: 1rem 0.5rem;
    border-radius: 1rem;
    transition: all 0.3s linear;

    &:focus {
      border: 1px solid var(--primary-color);
      outline: none;
    }
  }

  button {
    margin-left: 11px;
    display: inline;

    &:disabled {
      background-color: lightgray;
      cursor: default;
    }

    svg {
      display: block;
      /* margin: auto; */
      color: var(--white);
      font-size: 20px;
    }
  }

  .image__preview {
    img {
      width: 5rem;
      margin: 1rem auto;
      object-fit: contain;
      border: 1px solid var(--icons);
      margin-left: 11px;
      border-radius: 10px;
    }
  }
  .upload {
    display: inline;
    label {
      cursor: pointer;
    }
    input {
      display: none;
    }
  }
`;

export default Comment;
