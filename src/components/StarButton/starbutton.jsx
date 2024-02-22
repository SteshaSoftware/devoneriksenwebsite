import React from 'react'

function StarButton({ GlowTxt, LinkGlow}) {
    return (
            <a target='_blank' href={LinkGlow} onClick={() => window.sa_event('Sample')}>
                <button class="btnn" type="button" style={{ width: "300px" }} >
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

export default StarButton