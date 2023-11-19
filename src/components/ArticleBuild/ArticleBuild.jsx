import React, { useState, useEffect } from 'react';
import './ArticleBuild.css';

function Article({ title, content, link, date }) {
  const [showMore, setShowMore] = useState(false);
  const [maxLines, setMaxLines] = useState(4); // Initial value, you can adjust as needed
  const contentHTML = { __html: content };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedContent = showMore
    ? content
    : content
        .split('\n') // Split content into lines
        .slice(0, maxLines) // Display the determined number of lines
        .join('\n'); // Join the lines back into a string

  const additionalContent = showMore && (
    <>
      <div className = "article-content" style={{ marginTop: '20px', color: 'green' }}>
        <p>This content is displayed when the window is expanded.</p>
      </div>
    </>
  );

  useEffect(() => {
    const handleResize = () => {
      // Adjust maxLines based on window width
      if (window.innerWidth > 900) {
        setMaxLines(10); // Large screen
      } else {
        setMaxLines(5); // Small screen
      }
    };

    // Initial adjustment
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="article-container">
      <span className="heading">{title}</span>
      <div className="content-container">
        <>
          <div className="article-content" dangerouslySetInnerHTML={{ __html: displayedContent }} />
          {/*{additionalContent}*/}
          {content.split('\n').length > maxLines && (
            <button onClick={toggleShowMore}>
              <span className="article-content" style={{ color: "blue", textDecoration: "underline" }}>
                {showMore ? 'Read Less' : 'Read More'}
              </span>
            </button>
          )}
          <br /><br />
        </>
        <span className="date">{date}</span>
      </div>
    </div>
  );
}

export default Article;