import React, { useState } from "react";
import { Card, CardBody, CardHeader, Row, Col, Button } from "reactstrap";

export default function ShareHolders() {

    const availableShareholdersData = [
        {
            id: 1,
            name: "Shareholder 1",
            citizenship: "941-444-78",
            accountType: "Savings",
            organization: "Bank's Name",
        },
        {
            id: 2,
            name: "Shareholder 2",
            citizenship: "941-555-78",
            accountType: "Current",
            organization: "Bank's Name",
        },
        // Add more shareholders as needed
    ];

    const divStyle = {
        background: 'radial-gradient(239.25% 1295.12% at 79.24% 61.63%, rgba(30, 81, 211, 0.129) 14.93%, rgba(30, 135, 211, 0.15) 33.33%, rgba(22, 177, 95, 0.1305) 67.16%, rgba(28, 208, 100, 0.15) 89.66%)',
        padding: 0,
        lineHeight: '1',
    };

    const [selectedShareHolders, setSelectedShareHolders] = useState([]);
    const [availableShareholders, setAvailableShareholders] = useState(availableShareholdersData);

    const handleSetShareHolder = (shareholder) => {
        setAvailableShareholders((prevShareHolders) =>
        prevShareHolders.filter((sh) => sh.id !== shareholder.id)
        )
        setSelectedShareHolders((prevSelected) => [...prevSelected, shareholder])
    }

    const handleRemoveShareHolder = (shareholder) => {
        console.log('this is shareholder');
        setSelectedShareHolders((prevSelected) => prevSelected.filter((sh) => sh.id !== shareholder.id))
        setAvailableShareholders((prevSelected) => [...prevSelected,shareholder])
    }

    return <>
        <p className="text-muted">Selected Persons</p>
        {selectedShareHolders.map((shareholder) => <Row key={shareholder.id} style={divStyle} className="align-items-center mt-3">
            <Col md={12} className="d-flex mt-3 align-items-center">
                <Col xs="3" className="d-flex flex-column">
                    <div className="d-flex">
                        <div>
                            <img
                                src="https://ylpapp.isb.edu/user/Passport_photo_samples/Sample-3---wrong.jpg"
                                alt="User Photo"
                                style={{
                                    maxWidth: '70px', // Adjust the size as needed
                                    maxHeight: '70px', // Adjust the size as needed
                                }}
                            />
                        </div>
                        <div className="ms-3">
                            <p>{shareholder.name}</p>
                            <p className="text-muted">CIF: 2039290322</p>
                        </div>
                    </div>
                    <p className="mt-2">Kathmandu-4, Kathmandu, Nepal</p>
                </Col>

                <Col xs="3">
                    <p>
                        <span className="text-muted">Citizenship:</span> {shareholder.citizenship}
                    </p>
                    <p>
                        <span className="text-muted">Account Type:</span> {shareholder.accountType}
                    </p>
                    <p>
                        <span className="text-muted">Organization:</span> {shareholder.organization}
                    </p>
                </Col>

                <Col xs="3">
                    <p>Phone: <span className="text-muted">79744564664</span></p>
                    <p>Email: <span className="text-muted">abc@gmail.com</span></p>
                    <p>Role: <span className="text-muted">Manager</span></p>
                </Col>

                <Col xs="3" className="d-flex justify-content-between">
                    <p>Marital Status: <span className="text-muted">Single</span></p>
                    <Button color="danger" className="mb-3" onClick={() => handleRemoveShareHolder(shareholder)}>Remove</Button>
                </Col>
            </Col>
        </Row>
        )}

        <p className="text-muted mt-4">Select a shareholder</p>

        {availableShareholders.map((shareholder) => <Row key={shareholder.id} className="align-items-center mt-3" style={{ border: '1px solid #ccc', lineHeight: "1", }}>
            <Col md={12} className="d-flex mt-3 align-items-center">
                <Col xs="3" className="d-flex flex-column">
                    <div className="d-flex">
                        <div>
                            <img
                                src="https://ylpapp.isb.edu/user/Passport_photo_samples/Sample-3---wrong.jpg"
                                alt="User Photo"
                                style={{
                                    maxWidth: '70px', // Adjust the size as needed
                                    maxHeight: '70px', // Adjust the size as needed
                                }}
                            />
                        </div>
                        <div className="ms-3">
                            <p>{shareholder.name}</p>
                            <p className="text-muted">CIF: 2039290322</p>
                        </div>
                    </div>
                    <p className="mt-2">Kathmandu-4, Kathmandu, Nepal</p>
                </Col>

                <Col xs="3">
                <p>
                  <span className="text-muted">Citizenship:</span> {shareholder.citizenship}
                </p>
                <p>
                  <span className="text-muted">Account Type:</span> {shareholder.accountType}
                </p>
                <p>
                  <span className="text-muted">Organization:</span> {shareholder.organization}
                </p>
                </Col>

                <Col xs="3">
                    <p>Phone: <span className="text-muted">79744564664</span></p>
                    <p>Email: <span className="text-muted">abc@gmail.com</span></p>
                    <p>Role: <span className="text-muted">Manager</span></p>
                </Col>

                <Col xs={3} className="d-flex justify-content-between">
                    <p>Marital Status: <span className="text-muted">Single</span></p>
                    <Button color="success" className="mb-3" onClick={() => handleSetShareHolder(shareholder)}>Set Shareholder</Button>
                </Col>

            </Col>
        </Row>
        )}
    </>
}