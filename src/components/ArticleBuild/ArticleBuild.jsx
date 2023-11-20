import React, { useState, useEffect } from 'react';
import './ArticleBuild.css';

import { RiTwitterXLine } from 'react-icons/ri';
import { FaRedditAlien } from "react-icons/fa"

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

      <a href= {link} target='_blank' 
        style={{ display: 'flex', alignItems: 'center' }}>
        <FaRedditAlien className='icons' size={30} />
        <div className="article-content" style={{ margin: '20px', color: '#ff9b02', textDecoration: "underline"  }}>
          <p>Read more and share on Reddit</p>
        </div>
      </a>

    </>
  );

  useEffect(() => {
    const handleResize = () => {
      // Adjust maxLines based on window width
      if (window.innerWidth > 900) {
        setMaxLines(4); // Large screen
      } else {
        setMaxLines(2); // Small screen
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
          {additionalContent}
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