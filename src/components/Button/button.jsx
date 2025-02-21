import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Button.css"
import amazonimg from "../../images/amazon-dot-com-white.png"
import BandNimg from "../../images/BandN white.png"
import DirWhiteimg from "../../images/direct white.png"

function isValidPathSegment(pathSegment) {
  // Basic checks: non-null, non-empty, no spaces (add more as needed)
  return pathSegment && pathSegment.trim() !== "" && !/\s/.test(pathSegment);
}
function Button({ LinkDir, LinkAmz, LinkOther }) {

  return (
    <>
     {LinkDir && (
        <a target='_blank' href={LinkDir} onClick={() => window.sa_event('Buy_BN')}>
          <button class="buttn" style={{ marginLeft: 15 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Buy E-book Direct
            </div>
          </button>
        </a>
      )}

      {LinkAmz && (
        <a target='_blank' href={LinkAmz}  onClick={() => window.sa_event('Buy_Amz')}>
          <button class="buttn" style={{marginLeft: 15 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={amazonimg} alt="Purchase on Amazon" style={{ width: '80%' }} />
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