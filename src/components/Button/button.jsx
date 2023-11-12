import React from 'react'
import "./Button.css"
import amazonimg from "../../images/amazon-dot-com-white.png"
import kindleimg from "../../images/Amazon-Kindle-logo-white.png"
import BandNimg from "../../images/BandN white.png"
import generalimg from "../../images/buy-general.png"

const Button = () => {
  return (
    <>
    <a target='_blank' href={"https://www.amazon.com/Theft-Fire-Orbital-Space-1/dp/1962514021/?tag=devoneriksen-20"}>
        <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={amazonimg} alt="Purchase on Amazon" style={{width: '80%'}}/>
          </div>
        </button>
      </a>

      <a target='_blank' href={"https://www.barnesandnoble.com/w/theft-of-fire-devon-eriksen/1144335979?ean=2940179192145"}>
        <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={BandNimg } alt="Purchas at Barnes and Nobel" style={{width: '80%'}}/>
          </div>
        </button>
      </a>

      <a target='_blank' href={"https://books2read.com/Theft-of-Fire"}>
      <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Other Buying Options
            {/* <img src={generalimg} alt="Purchase Theft of Fire" style={{width: '60%'}}/> */}
          </div>
        </button>
      </a>
    </>
  )
}

export default Button