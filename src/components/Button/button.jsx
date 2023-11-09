import React from 'react'
import "./Button.css"
import amazonimg from "../../images/amazon-dot-com-white.png"
import kindleimg from "../../images/Amazon-Kindle-logo-white.png"
import BandNimg from "../../images/BandN white.png"
import generalimg from "../../images/buy-general.png"

const Button = () => {
  return (
    <>
      <a target='_blank' href={"https://www.amazon.com/gp/product/B0CJHQ4LZN?&_encoding=UTF8&tag=devoneriksen-20&linkCode=ur2&linkId=74ef5550692d1508106cb7701185c24b&camp=1789&creative=9325"}>
        <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={kindleimg} alt="Pre-Order for Amazon Kindle" style={{width: '80%'}}/>
          </div>
        </button>
      </a>

      <a target='_blank' href={"https://www.amazon.com/Theft-Fire-Orbital-Space-1/dp/1962514021/?tag=devoneriksen-20"}>
        <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={amazonimg} alt="Pre-Order for Amazon Kindle" style={{width: '80%'}}/>
          </div>
        </button>
      </a>

      <a target='_blank' href={"https://subscribepage.io/TheftOfFirePrint"}>
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