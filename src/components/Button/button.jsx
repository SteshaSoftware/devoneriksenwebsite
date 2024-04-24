import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Button.css"
import amazonimg from "../../images/amazon-dot-com-white.png"
import BandNimg from "../../images/BandN white.png"

function isValidPathSegment(pathSegment) {
  // Basic checks: non-null, non-empty, no spaces (add more as needed)
  return pathSegment && pathSegment.trim() !== "" && !/\s/.test(pathSegment);
}
function Button({ LinkAmz, LinkBN, LinkOther }) {

  return (
    <>
      {LinkAmz && (
        <a target='_blank' href={LinkAmz}  onClick={() => window.sa_event('Buy_Amz')}>
          <button class="buttn" style={{marginLeft: 15 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={amazonimg} alt="Purchase on Amazon" style={{ width: '80%' }} />
            </div>
          </button>
        </a>
      )}

      {LinkBN && (
        <a target='_blank' href={LinkBN} onClick={() => window.sa_event('Buy_BN')}>
          <button class="buttn" style={{ marginLeft: 15 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={BandNimg} alt="Purchase at Barnes and Noble" style={{ width: '80%' }} />
            </div>
          </button>
        </a>
      )}

      {LinkAmz  && (
        <a href={`/purchase/${LinkOther}`}> 
          <button class="buttn" style={{ marginLeft: 15 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Other Buying Options
            </div>
          </button>
        </a>
      )}
    </>
  )
}

export default Button