import { useState } from 'react';
import { getPostData } from '../getPostData';

const Post = () => {
  const mockData = getPostData();
  const [likes, setLikes] = useState(mockData.likes);
  const [content, setContent] = useState(mockData.content);

  const handleLike = () => {
    setLikes((prevLikes) => (prevLikes === 0 ? 1 : 0));
  };

  return (
    <div className="border p-4 m-4 rounded">
      <p>{content}</p>
      <button
        type="button"
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleLike}
      >
        👍 {likes}
      </button>
      <div>
        <h3 className="text-xl font-bold">Understanding Check</h3>
        {mockData.understandingCheck.map((item, index) => (
          <div key={`question-${index}`} className="mb-4">
            <p className="font-semibold">{item.question}</p>
            <div className="mt-2">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
