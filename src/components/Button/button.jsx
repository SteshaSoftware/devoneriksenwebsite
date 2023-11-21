import React from 'react'
import "./Button.css"
import amazonimg from "../../images/amazon-dot-com-white.png"
import kindleimg from "../../images/Amazon-Kindle-logo-white.png"
import BandNimg from "../../images/BandN white.png"
import generalimg from "../../images/buy-general.png"

function Button({ LinkAmz, LinkBN, LinkOther }) {
  return (
    <>
      {LinkAmz && (
        <a target='_blank' href={LinkAmz}>
          <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={amazonimg} alt="Purchase on Amazon" style={{ width: '80%' }} />
            </div>
          </button>
        </a>
      )}

      {LinkBN && (
        <a target='_blank' href={LinkBN}>
          <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={BandNimg} alt="Purchase at Barnes and Noble" style={{ width: '80%' }} />
            </div>
          </button>
        </a>
      )}

      {LinkOther && (
        <a target='_blank' href={LinkOther}>
          <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
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