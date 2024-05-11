import { Link } from "react-router-dom"
import { Card, CardHeader, Row, Col, CardBody } from "reactstrap"
import AddNewDocument from "../components/DocumentsRepository/AddNewDocument"
import DocumentsListPage from "../components/DocumentsRepository/DocumentsListPage"
import { useState } from "react"

export default function DocumentsRepository() {
    const [activeTab, setActiveTab] = useState('addNewDocument')

    return (
        <div className="page-content">
            <Card className="border-0 shadow-sm">
                <CardHeader>
                    <Row className='text-primary mb-4'>
                        <Col md={6}>
                            <Link
                                onClick={() => { setActiveTab('addNewDocument') }}
                                style={{
                                    borderBottom: activeTab === 'addNewDocument' ? '2px solid blue' : 'none',
                                    paddingBottom: '5px',
                                    marginRight: '20px',
                                    cursor: 'pointer',
                                    color: activeTab === 'addNewDocument' ? 'blue' : 'inherit',
                                }}
                                className="text-primary"
                            >
                                Add New Document
                            </Link>
                            <Link
                                onClick={() => { setActiveTab('documentsListPage') }}
                                style={{
                                    borderBottom: activeTab === 'documentsListPage' ? '2px solid blue' : 'none',
                                    paddingBottom: '5px',
                                    marginRight: '20px',
                                    cursor: 'pointer',
                                    color: activeTab === 'documentsListPage' ? 'blue' : 'inherit',
                                }}
                                className="text-primary"
                            >
                                Documents List Page
                            </Link>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    {activeTab === 'addNewDocument' && <AddNewDocument />}
                    {activeTab === 'documentsListPage' && <DocumentsListPage />}
                </CardBody>
            </Card>
        </div>
    );
}