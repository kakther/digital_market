import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div class="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className='position-absolute cross img-fluid'
                                />
                                <div className="wishlist-card-image">
                                    <img
                                        src="images/watch.jpg"
                                        className='img-fluis w-100'
                                        alt="watch"
                                    />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Honor TI 7.0 1 GB RAM 8 GB ROH 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className='price'>$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img
                                src="images/cross.svg"
                                alt="cross"
                                className='position-absolute cross img-fluid'
                            />
                            <div className="wishlist-card-image">
                                <img
                                    src="images/watch.jpg"
                                    className='img-fluis w-100'
                                    alt="watch"
                                />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className='title'>
                                    Honor TI 7.0 1 GB RAM 8 GB ROH 7 Inch With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className='price'>$ 100</h6>
                            </div>
                        </div>
                        </div>
                        <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img
                                src="images/cross.svg"
                                alt="cross"
                                className='position-absolute cross img-fluid'
                            />
                            <div className="wishlist-card-image">
                                <img
                                    src="images/watch.jpg"
                                    className='img-fluis w-100'
                                    alt="watch"
                                />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className='title'>
                                    Honor TI 7.0 1 GB RAM 8 GB ROH 7 Inch With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className='price'>$ 100</h6>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist
