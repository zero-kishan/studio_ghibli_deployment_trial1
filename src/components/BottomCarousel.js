import React from 'react';
import './BottomCarousel.css'


const BottomCarousel = (props) => {
    return (
        <React.Fragment>
            <div className="bottom_carousel main" style={{ backgroundColor: 'black', padding: '20px' }}>
                <div className="row">

                    <div className="col-sm">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
                            <div className="carousel-inner">
                                <div className="carousel-item bottomCar active " data-interval="1000">

                                    <img className="d-block w-100" src="https://i.pinimg.com/originals/a6/d9/73/a6d973482a0867c3bb9881bbd46e4bf1.png" alt="First slide" />
                                </div>
                                <div className="carousel-item bottomCar" data-interval="2000">
                                    <img className="d-block w-100" src="https://i.pinimg.com/originals/d6/b1/5a/d6b15a2981bbd69c1796bc0bea0740ff.png" alt="Second slide" />
                                </div>
                                <div className="carousel-item  bottomCar" data-interval="2000">
                                    <img className="d-block w-100" src="https://i.pinimg.com/originals/c0/9d/86/c09d86117e66e37fbfaf38d5c99dcf59.jpg" alt="Third slide" />
                                </div>
                                <div className="carousel-item  bottomCar" data-interval="1500">
                                    <img className="d-block w-100" src="https://i.pinimg.com/originals/5e/4f/4d/5e4f4da17a19c4ceae4f4c7fdd64d543.png" alt="Forth slide" />
                                </div>
                                <div className="carousel-item  bottomCar" data-interval="2000">
                                    <img className="d-block w-100" src="https://wallpaperaccess.com/full/400691.png" alt="Fifth slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
                            <div className="carousel-inner">
                                <div className="carousel-item bottomCar active " data-interval="1000">

                                    <img className="d-block w-100" src="https://cdn.wallpapersafari.com/27/2/KShJ5d.jpg" alt="First slide" />
                                </div>
                                <div className="carousel-item bottomCar" data-interval="1500">
                                    <img className="d-block w-100" src="https://www.itl.cat/pngfile/big/43-432941_studio-ghibli-castle-in-the-sky-simple.png" alt="Second slide" />
                                </div>
                                <div className="carousel-item  bottomCar" data-interval="2000">
                                    <img className="d-block w-100" src="https://s.itl.cat/pngfile/s/43-431729_princess-mononoke-wallpaper-hd-la-princesa-mononoke.jpg" alt="Third slide" />
                                </div>
                                <div className="carousel-item  bottomCar" data-interval="2000">
                                    <img className="d-block w-100" src="https://i.pinimg.com/originals/74/5b/6d/745b6d5747ffeb877acbde41581f1795.png" alt="Forth slide" />
                                </div>
                                <div className="carousel-item  bottomCar" data-interval="2000">
                                    <img className="d-block w-100" src="https://wallpaperaccess.com/full/903019.png" alt="Fifth slide" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
                            <div className="carousel-inner">
                                <div className="carousel-item bottomCar active " data-interval="1000">

                                    <img className="d-block w-100" src="https://www.teahub.io/photos/full/229-2298504_studio-ghibli-pixel-art.png" alt="First slide" />
                                </div>
                                <div className="carousel-item bottomCar" data-interval="1500">
                                    <img className="d-block w-100" src="https://i.pinimg.com/originals/45/5a/1a/455a1a5858bc0d2ca9002d1ef06852e0.png" alt="Second slide" />
                                </div>
                                <div className="carousel-item  bottomCar" data-interval="2000">
                                    <img className="d-block w-100" src="https://i.imgur.com/XZFgCTc.png" alt="Third slide" />
                                </div>
                                <div className="carousel-item  bottomCar" data-interval="2000">
                                    <img className="d-block w-100" src="https://i.pinimg.com/originals/43/e3/4b/43e34b27ccb4f3d6039ab130312e4772.jpg" alt="Forth slide" />
                                </div>
                                <div className="carousel-item  bottomCar" data-interval="2000">
                                    <img className="d-block w-100" src="https://wallpaperaccess.com/full/903027.jpg" alt="Fifth slide" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </React.Fragment>
    )
}
export default BottomCarousel;