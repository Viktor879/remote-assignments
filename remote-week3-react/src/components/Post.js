import React, { useState } from 'react';
import styled from 'styled-components';
import { getPostData } from '../getPostData';

const PostContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
`;

const LikeButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Post = () => {
  const mockData = getPostData();
  const [likes, setLikes] = useState(mockData.likes);
  const [content, setContent] = useState(mockData.content);

  const handleLike = () => {
    setLikes((prevLikes) => (prevLikes === 0 ? 1 : 0));
  };

  return (
    <PostContainer>
      <p>{content}</p>
      <LikeButton onClick={handleLike}>
        👍 {likes}
      </LikeButton>
      <div>
        <h3>Understanding Check</h3>
        {mockData.understandingCheck.map((item, index) => (
          <div key={`question-${index}`}>
            <p><strong>{item.question}</strong></p>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </PostContainer>
  );
};

export default Post;

