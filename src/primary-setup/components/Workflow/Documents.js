import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import fileIcon from "../../assets/icons/fileIcon.png"

export default function Documents() {
    return <>
        <Card className='mt-4'>
            <h5 className="text-muted mt-4 ms-4 mb-4">Documents</h5>

            <CardBody style={{ padding: '0' }}>
                <Row
                    style={{ backgroundColor: '#E9EBEC', padding: '20px' }}>
                    <Col className='fw-bold'>File Name</Col>
                    <Col className='fw-bold'>Type</Col>
                    <Col className='fw-bold'>Size</Col>
                    <Col className='fw-bold'>Upload Date</Col>
                    <Col className='fw-bold'>Actions</Col>
                </Row>

                <div className='ms-3'>
                    <Row className='mt-3'>
                        <Col className='fw-bold'>
                            <div className="d-flex align-items-center">
                                <img src={fileIcon} alt="File Icon"
                                    style={{ width: '70px', height: '70px' }} />

                                <p className="fw-bold mt-2 ms-4">Hand Filled Form.pdf</p>
                            </div>
                        </Col>
                        <Col className='fw-bold text-muted d-flex align-items-center'>PDF File</Col>
                        <Col className='fw-bold d-flex align-items-center'>
                            <p className="text-muted">2.5MB</p></Col>
                        <Col className='fw-bold text-muted d-flex align-items-center'>12 Dec 2021</Col>
                        <Col className='fw-bold d-flex align-items-center'>
                            <p className='fw-bold'
                                style={{
                                    backgroundColor: '#EEF1F8',
                                    color: '#3D78E3',
                                    padding: '5px 10px', // Adjust padding as needed
                                    borderRadius: '5px', // Rounded corners
                                    margin: '0 5px', // Add margin for spacing
                                }}>...</p>
                        </Col>

                    </Row>
                    <Row className='mt-3'>
                        <Col className='fw-bold'>
                            <div className="d-flex align-items-center">
                                <img src={fileIcon} alt="File Icon"
                                    style={{ width: '70px', height: '70px' }} />

                                <p className="fw-bold mt-2 ms-4">Documents Proof.pdf</p>
                            </div>
                        </Col>
                        <Col className='fw-bold text-muted d-flex align-items-center'>PDF File</Col>
                        <Col className='fw-bold d-flex align-items-center'>
                            <p className="text-muted">2MB</p></Col>
                        <Col className='fw-bold text-muted d-flex align-items-center'>12 Dec 2021</Col>
                        <Col className='fw-bold d-flex align-items-center'>
                            <p className='fw-bold'
                                style={{
                                    backgroundColor: '#EEF1F8',
                                    color: '#3D78E3',
                                    padding: '5px 10px', // Adjust padding as needed
                                    borderRadius: '5px', // Rounded corners
                                    margin: '0 5px', // Add margin for spacing
                                }}>...</p>
                        </Col>

                    </Row>
                    <Row className='mt-3'>
                        <Col className='fw-bold'>
                            <div className="d-flex align-items-center">
                                <img src={fileIcon} alt="File Icon"
                                    style={{ width: '70px', height: '70px' }} />

                                <p className="fw-bold mt-2 ms-4">signature.svg</p>
                            </div>
                        </Col>
                        <Col className='fw-bold text-muted d-flex align-items-center'>SVG File</Col>
                        <Col className='fw-bold d-flex align-items-center'>
                            <p className="text-muted">0.5MB</p></Col>
                        <Col className='fw-bold text-muted d-flex align-items-center'>12 Dec 2021</Col>
                        <Col className='fw-bold d-flex align-items-center'>
                            <p className='fw-bold'
                                style={{
                                    backgroundColor: '#EEF1F8',
                                    color: '#3D78E3',
                                    padding: '5px 10px', // Adjust padding as needed
                                    borderRadius: '5px', // Rounded corners
                                    margin: '0 5px', // Add margin for spacing
                                }}>...</p>
                        </Col>

                    </Row>
                    <Row className='mt-3'>
                        <Col className='fw-bold'>
                            <div className="d-flex align-items-center">
                                <img src={fileIcon} alt="File Icon"
                                    style={{ width: '70px', height: '70px' }} />

                                <p className="fw-bold mt-2 ms-4">Other Documents.zip</p>
                            </div>
                        </Col>
                        <Col className='fw-bold text-muted d-flex align-items-center'>ZIP File</Col>
                        <Col className='fw-bold d-flex align-items-center'>
                            <p className="text-muted">2.5MB</p></Col>
                        <Col className='fw-bold text-muted d-flex align-items-center'>12 Dec 2021</Col>
                        <Col className='fw-bold d-flex align-items-center'>
                            <p className='fw-bold'
                                style={{
                                    backgroundColor: '#EEF1F8',
                                    color: '#3D78E3',
                                    padding: '5px 10px', // Adjust padding as needed
                                    borderRadius: '5px', // Rounded corners
                                    margin: '0 5px', // Add margin for spacing
                                }}>...</p>
                        </Col>

                    </Row>
                    <Row className='mt-3 mb-3'>
                        <Col className='fw-bold'>
                            <div className="d-flex align-items-center">
                                <img src={fileIcon} alt="File Icon"
                                    style={{ width: '70px', height: '70px' }} />

                                <p className="fw-bold mt-2 ms-4">Images.zip</p>
                            </div>
                        </Col>
                        <Col className='fw-bold text-muted d-flex align-items-center'>ZIP File</Col>
                        <Col className='fw-bold d-flex align-items-center'>
                            <p className="text-muted">2.5MB</p></Col>
                        <Col className='fw-bold text-muted d-flex align-items-center'>12 Dec 2021</Col>
                        <Col className='fw-bold d-flex align-items-center'>
                            <p className='fw-bold'
                                style={{
                                    backgroundColor: '#EEF1F8',
                                    color: '#3D78E3',
                                    padding: '5px 10px', // Adjust padding as needed
                                    borderRadius: '5px', // Rounded corners
                                    margin: '0 5px', // Add margin for spacing
                                }}>...</p>
                        </Col>

                    </Row>
                </div>
            </CardBody>

        </Card>
    </>
}