import React from 'react'
import "./Button.css"
import amazonimg from "../../images/amazon-dot-com-white.png"
import kindleimg from "../../images/Amazon-Kindle-logo-white.png"
import BandNimg from "../../images/BandN white.png"

function Button({ LinkAmz, LinkBN, LinkOther }) {
  return (
    <>
      {LinkAmz && (
        <a target='_blank' href={LinkAmz}  onClick={() => window.sa_event('Amz_button')}>
          <button class="buttn" style={{marginLeft: 15 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={amazonimg} alt="Purchase on Amazon" style={{ width: '80%' }} />
            </div>
          </button>
        </a>
      )}

      {LinkBN && (
        <a target='_blank' href={LinkBN} onClick={() => window.sa_event('BN_button')}>
          <button class="buttn" style={{ marginLeft: 15 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={BandNimg} alt="Purchase at Barnes and Noble" style={{ width: '80%' }} />
            </div>
          </button>
        </a>
      )}

      {LinkOther && (
        <a target='_blank' href={LinkOther} onClick={() => window.sa_event('Other_button')}> 
          <button class="buttn" style={{ marginLeft: 15 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Other Buying Options
              {/* <img src={generalimg} alt="Purchase Theft of Fire" style={{ width: '60%' }} /> */}
            </div>
          </button>
        </a>
      )}
    </>
  )
}

export default Button