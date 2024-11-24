import React from 'react'

function StarButton({ GlowTxt, LinkGlow, customWidth = "300px" }) {
    return (
        <a target={LinkGlow.startsWith('/') ? '_self' : '_blank'} href={LinkGlow} onClick={() => window.sa_event('Sample')}>
            <button class="btnn" type="button" style={{ width: customWidth }} >
                <strong>{GlowTxt}</strong>
                <div id="">
                    <div id=""></div>
                </div>
                <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </button>
        </a>
    )
}

export default StarButton;