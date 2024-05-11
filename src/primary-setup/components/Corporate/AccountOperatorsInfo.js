import React from 'react';
import { useState } from 'react';
import ShareHolders from './ShareHolders';
import AccountOperators from './AccountOperators';
import { Card, CardBody, CardHeader, Row, Col, Button } from 'reactstrap';

import { useDispatch } from 'react-redux';
import { setKycSelectionCorporate } from '../../slices/selection.slice';

export default function AccountOperatorsInfo() {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('shareHolders')

    return <>
        <Card>
            <CardHeader>Share Holders</CardHeader>
            <CardBody>
                <Row className='text-primary mb-5'>
                    <Col md={2} onClick={() => { setActiveTab('shareHolders') }}
                        style={{ borderBottom: activeTab === 'shareHolders' ? '2px solid blue' : 'none', paddingBottom: '10px', }}>
                        Share Holders
                    </Col>
                    <Col md={2} onClick={() => { setActiveTab('accountOperators') }}
                        style={{ borderBottom: activeTab === 'accountOperators' ? '2px solid blue' : 'none', paddingBottom: '10px', }}>
                        Account Operators
                    </Col>
                </Row>
                {activeTab === 'shareHolders' && <ShareHolders />}
                {activeTab === 'accountOperators' && <AccountOperators />}

                <div className="d-flex justify-content-between mt-4">
                    <Button color="light" onClick={() => dispatch(setKycSelectionCorporate('branch'))}>Back</Button>
                    <Button color="primary" type="submit" onClick={() => dispatch(setKycSelectionCorporate('services'))}>
                        Next
                    </Button>
                </div>
            </CardBody>
        </Card>
    </>
}