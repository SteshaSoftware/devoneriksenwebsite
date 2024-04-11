import React from 'react'
import './MediaContents.css'

function MediaContent({ title, subtitle, content, pic, picalt, link, date, mediatype }) {
    const subtitleHTML = { __html: subtitle };
    const contentHTML = { __html: content };

    return (
        <div className="media-container">
            <span className="heading">{title}</span>
            <div className="content-container">
                <div className="subheading" dangerouslySetInnerHTML={subtitleHTML} />
                {mediatype === 'vid' && (
                    <iframe
                        src={link}
                        className="vidstyle"
                        loading="lazy"
                    ></iframe>
                )}
                {mediatype === 'img' && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={pic} alt={picalt} style={{ marginTop: '20px', marginBottom: '20px' }} />
                    </a>
                )}
                {mediatype === 'aud' && (
                          <div className="audio-container">
                          <br/>
                          <iframe
                              src={link}
                              className="audio-player"
                              width="100%"
                              height="200" // Adjust the height as necessary
                              allow="autoplay"
                              loading="lazy"
                          ></iframe>
                      </div>
                  
                )}
                {mediatype === 'txt' && (
                    <>
                        <div className="content" dangerouslySetInnerHTML={contentHTML} />
                        <span className="content" style={{color: 'blue', textDecoration: 'underline'}}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a><br /><br />
                        </span>
                    </>
                )}
                <span className="date">{date}</span>
            </div>
        </div>
    );
}

export default MediaContent;
