import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './ArticleBuild.css'; 

function Article({ articlePath }) {
  const [articleContent, setArticleContent] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [articleDate, setArticleDate] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [maxLines, setMaxLines] = useState(10);

  useEffect(() => {
    // Adjust maxLines based on window size
    const handleResize = () => {
      setMaxLines(window.innerWidth <= 768 ? 5 : 10);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const publicUrl = process.env.PUBLIC_URL;
    fetch(`${publicUrl}${articlePath}`)
      .then((response) => response.text())
      .then((data) => {
        // Split the content into front matter and article content
        const contentParts = data.split('---');
        if (contentParts.length >= 3) {
          const frontMatter = contentParts[1].trim();
          const content = contentParts.slice(2).join('---').trim();

          // Extract title and date from front matter
          const titleMatch = /title:\s*(.*)/.exec(frontMatter);
          if (titleMatch) {
            setArticleTitle(titleMatch[1]);
          }
          const dateMatch = /date:\s*(.*)/.exec(frontMatter);
          if (dateMatch) {
            setArticleDate(dateMatch[1]);
          }

          // Set the article content
          setArticleContent(content);
        }
      });
  }, [articlePath]);
  
  // Function to toggle content expansion
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Function to truncate the content
  const truncateContent = (content, maxLines) => {
    const lines = content.split('\n');
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join('\n');
    }
    return content;
  };

  return (
    <div className="article-container">
      <div className="article-heading">{articleTitle}</div>
      <div className="mdtext-container">
        <div className="article-text">
          <ReactMarkdown className="markdown">
            {expanded ? articleContent : truncateContent(articleContent, maxLines)}
          </ReactMarkdown>
        
        {articleContent.split('\n').length > maxLines && (
          <button onClick={toggleExpanded}>
            <span style={{ color: "blue", textDecoration: "underline" }}>
                {expanded ? 'Read Less' : 'Read More'}
            </span>
          </button>
        )}
        </div>
        <div className="article-date">{articleDate}</div>
      </div>
    </div>
  );
}

export default Article;