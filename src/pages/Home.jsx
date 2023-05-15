import React, {useState} from 'react';
import "./Home.css";
const Home = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 게시글 등록 처리 로직을 작성하세요
    console.log('Title:', title);
    console.log('Content:', content);
    // 게시글 등록 후 필드 초기화
    setTitle('');
    setContent('');
  };

  return (
    <div className="main-container">
      <h2 className="main-title">New Post</h2>
      <form className="main-form" onSubmit={handleSubmit}>
        <label className="main-label">
          Title:
          <input
            className="main-input"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </label>
        <br />
        <label className="main-label">
          Content:
          <textarea
            className="main-textarea"
            value={content}
            onChange={handleContentChange}
          ></textarea>
        </label>
        <br />
        <button className="main-button" type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Home;
