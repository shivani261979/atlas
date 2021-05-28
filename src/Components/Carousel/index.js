import React from 'react';
import "./style.css";
import Carousel from 'react-bootstrap/Carousel';

export default function () {
    return (
        <div className="carousel container pb-4 pt-4">
            <div className='container-fluid' >
                <div style={{ textAlign: "center" }}>
                    <h2> What Atlas can do for you ? </h2>
                </div>
            </div>
            <div className="container-fluid MyCarousel" fluid="true" style={{ textAlign: "center" }}>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img alt="" style={{ "height": "500px" }}
                                className="d-block w-100"
                                src={'assets/img/img1.jpg'} />
                            <Carousel.Caption>
                                <h3>Run API calls for you</h3>
                            </Carousel.Caption>
                        </Carousel.Item >
                        <Carousel.Item >
                            <img alt="" style={{ "height": "500px" }}
                                className="d-block w-100"
                                src={'assets/img/img2.jpg'} />
                            <Carousel.Caption>
                                <h3>Data Controls</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img alt="" style={{ "height": "500px" }}
                                className="d-block w-100"
                                src={'assets/img/img3.jpg'} />
                            <Carousel.Caption>
                                <h3>Operations Controls and Workflows </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img alt="" style={{ "height": "500px" }}
                                className="d-block w-100"
                                src={'assets/img/img4.jpeg'} />
                            <Carousel.Caption>
                                <h3>Consistency Checks</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img alt="" style={{ "height": "500px" }}
                                className="d-block w-100"
                                src={'assets/img/img5.jpeg'} />
                            <Carousel.Caption>
                                <h3>ATLS Workflow Configuration</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img alt="" style={{ "height": "500px" }}
                                className="d-block w-100"
                                src={'assets/img/img6.jpeg'} />
                            <Carousel.Caption>
                                <h3>End to End Time Workflow</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}


