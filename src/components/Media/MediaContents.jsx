import React from 'react'
import './MediaContents.css'

function MediaContent({ title, subtitle, content, link, date, mediatype }) {
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
                {mediatype === 'aud' && (
                    {/* Render audio content */ }
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
