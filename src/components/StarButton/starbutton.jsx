import React from 'react'

const StarButton = () => {
    return (
            <a target='_blank' href={"https://read.bookfunnel.com/read/h6gjdipcpw"}>
                <button class="btnn" type="button" style={{ marginTop: 25, width: "300px" }} >
                    <strong>Read 3-Chapter Preview</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
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