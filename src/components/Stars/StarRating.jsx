import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  // Calculate the number of full stars
  const fullStars = Math.floor(rating);

  // Calculate the fractional part of the rating
  const fractionalPart = rating - fullStars;

  return (
    <div className="star-rating">
      <div className="stars">
        <div className="gray-stars">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="gray-star">
              &#9733; {/* Unicode character for a solid gray star */}
            </span>
          ))}
        </div>
        <div className="gold-stars">
          {[...Array(fullStars)].map((_, index) => (
            <span key={index} className="star">
              &#9733; {/* Unicode character for a solid gold star */}
            </span>
          ))}
          {fractionalPart > 0 && (
            <span className="half-star" style={{ width: `${fractionalPart * 45}px` }}>
              &#9733; {/* Unicode character for a solid gold star */}
            </span>
          )}
          <span className = "score">
         
          </span>
        </div>
      </div>
    </div>
  );
};

export default StarRating;