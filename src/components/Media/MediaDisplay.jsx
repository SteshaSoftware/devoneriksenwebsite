import React from 'react'
import './MediaDisplay.css'

const MediaDisplay = ({ media }) => {
    return (
      <div className="media-container">
        {media.map((item, index) => (
          <>
            <span className="heading">{item.title}</span>
            <div key={index} className="content-container">
              <div className="subheading" dangerouslySetInnerHTML={{ __html: item.subtitle }} />
              {item.mediatype === 'vid' && (
                <iframe
                  src={item.link}
                  className="vidstyle"
                  loading="lazy"
                ></iframe>
              )}
              {item.mediatype === 'img' && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.pic} alt={item.picalt} style={{ marginTop: '20px', marginBottom: '20px' }} />
                </a>
              )}
              {item.mediatype === 'aud' && (
                
                <div className="audio-container">
                <br/>
                  <iframe
                    src={item.link}
                    className="audio-player"
                    width="100%"
                    height="200" // Adjust the height as necessary
                    allow="autoplay"
                    loading="lazy"
                  ></iframe>
                </div>
              )}
              {item.mediatype === 'txt' && (
                <>
                  <div className="content" dangerouslySetInnerHTML={{ __html: item.content }} />
                  <span className="content" style={{color: 'blue', textDecoration: 'underline'}}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">Read more</a>
                    <br /><br />
                  </span>
                </>
              )}
              <span className="date">{item.date}</span>
            </div>
          </>
        ))}
      </div>
    );
  }
  
  export default MediaDisplay;