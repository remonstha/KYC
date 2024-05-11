import React from 'react';
import { Row, Col } from 'reactstrap';
import searchIcon from '../../assets/icons/searchIcon.png';
import starOutlineIcon from '../../assets/icons/starOutlineIcon.png';
import threeDotIcon from '../../assets/icons/threeDotIcon.png';

export default function Team() {
    const cardStyle = {
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        padding: '0',
        backgroundColor: 'white',
    };

    const topImageStyle = {
        width: '100%',
        height: '111px',
        objectFit: 'cover',
        margin: '0',
    };

    const circularPhotoStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'lightcoral',
        color: 'white',
        border: '4px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        bottom: '60%',
        transform: 'translate(-50%, 0)',
    };

    const imageUrl =
        'https://img.freepik.com/free-vector/abstract-fluid-neon-color-3d-effect-business-background-banner-design-multipurpose_1340-16790.jpg';

    return (
        <>
            <div className='d-flex justify-content-between mt-4' style={{ background: 'white', padding: '0 15px', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '40%', border: '1px solid grey', display: 'flex', alignItems: 'center', padding: '15px', borderRadius: '20px' }}>
                    <img src={searchIcon} alt='Search Icon' style={{ width: '20px', height: '20px' }} />
                    <input
                        className='ms-3'
                        type='text'
                        placeholder='Search from all way'
                        style={{
                            border: 'none',
                            outline: 'none',
                            width: '100%',
                        }}
                    />
                </div>
                <p className='fw-bold'
                    style={{
                        backgroundColor: 'skyblue',
                        color: 'blue',
                        padding: '15px 20px',
                        borderRadius: '10px',
                        display: 'inline-block',
                        cursor: 'pointer',
                        marginTop: '15px',
                        fontSize: '115%',   
                    }}
                >
                    + Add Members
                </p>
            </div>
            <Row>
                <Col xl={3} lg={4} md={4} sm={6} className='mt-3'>
                    <div style={cardStyle}>
                        <img src={starOutlineIcon} alt="Star Icon" style={{ position: 'absolute', top: '15px', left: '25px', width: '25px', height: '25px' }} />
                        <img src={threeDotIcon} alt="Three Dot Icon" style={{ position: 'absolute', top: '10px', right: '25px', width: '35px', height: '35px' }} />
                        <img src={imageUrl} alt="Top Image" style={topImageStyle} />
                        <div style={circularPhotoStyle}>
                            <div style={{ textAlign: 'center', fontSize: '22px' }}>SS</div>
                        </div>
                        <div className="text-center" style={{ lineHeight: '1', marginTop: '70px' }}>
                            <h5>Samir Shrestha</h5>
                            <p className="text-muted">CEO</p>
                            <p className="text-muted">ANts Pvt Ltd</p>
                        </div>
                        <Row className="mt-5 ms-5 mb-3">
                            <Col>
                                <p>197</p>
                                <p className="text-muted">Pending</p>
                            </Col>
                            <Col>
                                <p>454</p>
                                <p className="text-muted">Forwarded</p>
                            </Col>
                            <Col>
                                <p>125</p>
                                <p className="text-muted">Rejected</p>
                            </Col>
                        </Row>
                    </div>

                </Col>
                <Col xl={3} lg={4} md={4} sm={6} className='mt-3'>
                    <div style={cardStyle}>
                        <img src={starOutlineIcon} alt="Star Icon" style={{ position: 'absolute', top: '15px', left: '25px', width: '25px', height: '25px' }} />
                        <img src={threeDotIcon} alt="Three Dot Icon" style={{ position: 'absolute', top: '10px', right: '25px', width: '35px', height: '35px' }} />
                        <img src={imageUrl} alt="Top Image" style={topImageStyle} />
                        <div style={circularPhotoStyle}>
                            <div style={{ textAlign: 'center', fontSize: '22px' }}>AS</div>
                        </div>
                        <div className="text-center" style={{ lineHeight: '1', marginTop: '70px' }}>
                            <h5>Amir Shrestha</h5>
                            <p className="text-muted">Manager</p>
                            <p className="text-muted">ANts Pvt Ltd</p>
                        </div>
                        <Row className="mt-5 ms-5 mb-3">
                            <Col>
                                <p>485</p>
                                <p className="text-muted">Pending</p>
                            </Col>
                            <Col>
                                <p>111</p>
                                <p className="text-muted">Forwarded</p>
                            </Col>
                            <Col>
                                <p>100</p>
                                <p className="text-muted">Rejected</p>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col xl={3} lg={4} md={4} sm={6} className='mt-3'>
                    <div style={cardStyle}>
                        <img src={starOutlineIcon} alt="Star Icon" style={{ position: 'absolute', top: '15px', left: '25px', width: '25px', height: '25px' }} />
                        <img src={threeDotIcon} alt="Three Dot Icon" style={{ position: 'absolute', top: '10px', right: '25px', width: '35px', height: '35px' }} />
                        <img src={imageUrl} alt="Top Image" style={topImageStyle} />
                        <div style={circularPhotoStyle}>
                            <div style={{ textAlign: 'center', fontSize: '22px' }}>JS</div>
                        </div>
                        <div className="text-center" style={{ lineHeight: '1', marginTop: '70px' }}>
                            <h5>Jane Smith</h5>
                            <p className="text-muted">Marketing Director</p>
                            <p className="text-muted">ABC Marketing Agency</p>
                        </div>
                        <Row className="mt-5 ms-5 mb-3">
                            <Col>
                                <p>84</p>
                                <p className="text-muted">Pending</p>
                            </Col>
                            <Col>
                                <p>312</p>
                                <p className="text-muted">Forwarded</p>
                            </Col>
                            <Col>
                                <p>57</p>
                                <p className="text-muted">Rejected</p>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col xl={3} lg={4} md={4} sm={6} className='mt-3'>
                    <div style={cardStyle}>
                        <img src={starOutlineIcon} alt="Star Icon" style={{ position: 'absolute', top: '15px', left: '25px', width: '25px', height: '25px' }} />
                        <img src={threeDotIcon} alt="Three Dot Icon" style={{ position: 'absolute', top: '10px', right: '25px', width: '35px', height: '35px' }} />
                        <img src={imageUrl} alt="Top Image" style={topImageStyle} />
                        <div style={circularPhotoStyle}>
                            <div style={{ textAlign: 'center', fontSize: '22px' }}>JS</div>
                        </div>
                        <div className="text-center" style={{ lineHeight: '1', marginTop: '70px' }}>
                            <h5>John Smith</h5>
                            <p className="text-muted">COO</p>
                            <p className="text-muted">XYZ Corporation</p>
                        </div>
                        <Row className="mt-5 ms-5 mb-3">
                            <Col>
                                <p>150</p>
                                <p className="text-muted">Pending</p>
                            </Col>
                            <Col>
                                <p>380</p>
                                <p className="text-muted">Forwarded</p>
                            </Col>
                            <Col>
                                <p>90</p>
                                <p className="text-muted">Rejected</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3} className='mt-3'>
                    <div style={cardStyle}>
                        <img src={starOutlineIcon} alt="Star Icon" style={{ position: 'absolute', top: '15px', left: '25px', width: '25px', height: '25px' }} />
                        <img src={threeDotIcon} alt="Three Dot Icon" style={{ position: 'absolute', top: '10px', right: '25px', width: '35px', height: '35px' }} />
                        <img src={imageUrl} alt="Top Image" style={topImageStyle} />
                        <div style={circularPhotoStyle}>
                            <div style={{ textAlign: 'center', fontSize: '22px' }}>AH</div>
                        </div>
                        <div className="text-center" style={{ lineHeight: '1', marginTop: '70px' }}>
                            <h5>Alice Johnson</h5>
                            <p className="text-muted">CTO</p>
                            <p className="text-muted">Tech Solutions Inc.</p>
                        </div>
                        <Row className="mt-5 ms-5 mb-3">
                            <Col>
                                <p>220</p>
                                <p className="text-muted">Pending</p>
                            </Col>
                            <Col>
                                <p>580</p>
                                <p className="text-muted">Forwarded</p>
                            </Col>
                            <Col>
                                <p>110</p>
                                <p className="text-muted">Rejected</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3} className='mt-3'>
                    <div style={cardStyle}>
                        <img src={starOutlineIcon} alt="Star Icon" style={{ position: 'absolute', top: '15px', left: '25px', width: '25px', height: '25px' }} />
                        <img src={threeDotIcon} alt="Three Dot Icon" style={{ position: 'absolute', top: '10px', right: '25px', width: '35px', height: '35px' }} />
                        <img src={imageUrl} alt="Top Image" style={topImageStyle} />
                        <div style={circularPhotoStyle}>
                            <div style={{ textAlign: 'center', fontSize: '22px' }}>JP</div>
                        </div>
                        <div className="text-center" style={{ lineHeight: '1', marginTop: '70px' }}>
                            <h5>John Parker</h5>
                            <p className="text-muted">CFO</p>
                            <p className="text-muted">Finance Corp.</p>
                        </div>
                        <Row className="mt-5 ms-5 mb-3">
                            <Col>
                                <p>150</p>
                                <p className="text-muted">Pending</p>
                            </Col>
                            <Col>
                                <p>420</p>
                                <p className="text-muted">Forwarded</p>
                            </Col>
                            <Col>
                                <p>90</p>
                                <p className="text-muted">Rejected</p>
                            </Col>
                        </Row>
                    </div>
                </Col>

            </Row>
        </>
    );
}
