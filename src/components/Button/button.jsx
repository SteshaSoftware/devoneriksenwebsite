import React from 'react'
import "./Button.css"
// import amazonimg from "../../images/amz white.png"
import amazonimg from "../../images/Amazon-Kindle-logo-white.png"
import BandNimg from "../../images/BandN white.png"
import generalimg from "../../images/buy-general.png"

const Button = () => {
  return (
    <>
      <a target='_blank' href={"https://www.amazon.com/gp/product/B0CJHQ4LZN"}>
        <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={amazonimg} alt="AMAZON" style={{width: '80%'}}/>
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