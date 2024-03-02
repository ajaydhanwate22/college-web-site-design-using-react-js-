import React, { useState, useEffect } from 'react'




function Images() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        AllImages()
    }, []);

    const AllImages = () => {
        const images10 = [
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3">
                        <rect fill="#55595c">
                            <img style={{ width: "100%" }} src="https://learapress.netlify.app/img/event/g1.jpg" alt="" />
                        </rect>
                    </div>
                    <div className="col-3">
                        <rect fill="#55595c">
                            <img style={{ width: "100%" }} src="https://learapress.netlify.app/img/event/g2.jpg" alt="" />
                        </rect>
                    </div>
                    <div className="col-3">
                        <rect fill="#55595c">
                            <img style={{ width: "100%" }} src="https://learapress.netlify.app/img/event/g3.jpg" alt="" />
                        </rect>
                    </div>
                    <div className="col-3">
                        <rect fill="#55595c">
                            <img style={{ width: "100%" }} src="https://learapress.netlify.app/img/event/g4.jpg" alt="" />
                        </rect>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3">
                        <rect fill="#55595c">
                            <img style={{ width: "100%" }} src="https://learapress.netlify.app/img/event/g5.jpg" alt="" />
                        </rect>
                    </div>
                    <div className="col-3">
                        <rect fill="#55595c">
                            <img style={{ width: "100%" }} src="https://learapress.netlify.app/img/event/g6.jpg" alt="" />
                        </rect>
                    </div>
                    <div className="col-3">
                        <rect fill="#55595c">
                            <img style={{ width: "100%" }} src="https://learapress.netlify.app/img/event/g7.jpg" alt="" />
                        </rect>
                    </div>
                    <div className="col-3">
                        <rect fill="#55595c">
                            <img style={{ width: "100%" }} src="https://learapress.netlify.app/img/event/g8.jpg" alt="" />
                        </rect>
                    </div>
                    <div className='text-center mt-4'>
                        <button type="button" class="btn btn-warning">Load More →</button>
                    </div>

                </div>
            </div>,
        ]
        setImages(images10)
        setTimeout(function () { console.log("All Images", images) }, 2000);
    }
    const fiveImages = () => {
        const images5 = [
            <div className="container"  >
                <div className="row">
                    <div className="col-3">
                        <rect fill="#55595c">
                            <img style={{ width: "100%" }} src="https://learapress.netlify.app/img/event/g1.jpg" alt="" />
                        </rect>
                    </div>
                    <div className="col-3">
                        <rect fill="#55595c">
                            <img style={{ width: "100%" }} src="https://learapress.netlify.app/img/event/g3.jpg" alt="" />
                        </rect>
                    </div>
                    <div className="col-3">
                        <rect fill="#55595c">
                            <img style={{ width: "100%" }} src="https://learapress.netlify.app/img/event/g5.jpg" alt="" />
                        </rect>
                    </div>

                </div>
            </div>
        ]
        setImages([])
        setImages(images5)
        setTimeout(function () { console.log("5 Images", images) }, 2000);
    }

    return (
        <>
        <div className="container text-center" style={{marginTop:"40px"}}>
            <button style={{margin:"10px"}} type="button" class="btn btn-dark" onClick={AllImages}>All Images</button>
            <button style={{margin:"10px"}} type="button" class="btn btn-dark" onClick={fiveImages}>Institute</button>
        </div>
            {images}
        </>
    )
}

export default Images