import React from 'react'

function StarButton({ LinkSample }) {
    return (
            <a target='_blank' href={LinkSample} onClick={() => window.sa_event('Sample')}>
                <button class="btnn" type="button" style={{ marginTop: 25, width: "300px" }} >
                    <strong>Read 3-Chapter Preview</strong>
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