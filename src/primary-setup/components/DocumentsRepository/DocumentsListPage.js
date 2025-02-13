import { Button, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, Table, UncontrolledDropdown } from "reactstrap";
import { Link } from 'react-router-dom';
import Select from 'react-select';

export default function DocumentsListPage() {

    const branchOptions = [
        { value: 'branch1', label: 'Branch 1' },
        { value: 'branch2', label: 'Branch 2' },
        // Add more options as needed
    ];

    const departmentOptions = [
        { value: 'dept1', label: 'Department 1' },
        { value: 'dept2', label: 'Department 2' },
        // Add more options as needed
    ];

    const docTypeOptions = [
        { value: 'doc1', label: 'Document Type 1' },
        { value: 'doc2', label: 'Document Type 2' },
        // Add more options as needed
    ];

    const personOptions = [
        { value: 'person1', label: 'Person 1' },
        { value: 'person2', label: 'Person 2' },
        // Add more options as needed
    ];

    return <>
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-3">
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" className="form-control" id="startDate" />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" className="form-control" id="endDate" />
                </div>
            </div>
        </div>


        <div className="row align-items-center mt-3">
            <p className="col-md-1">Apply Filters</p>
            <div className="col-md-10 d-flex">
                <Select className="col-md-3 p-1" options={branchOptions} placeholder="Select Branch" />
                <Select className="col-md-3 p-1" options={departmentOptions} placeholder="Select Department" />
                <Select className="col-md-3 p-1" options={docTypeOptions} placeholder="Select Document Type" />
                <Select className="col-md-3 p-1" options={personOptions} placeholder="Select Person" />
            </div>
            <div className="col-md-1 text-right">
                <Button color="success" className="w-100">Filter</Button>
            </div>
        </div>

        <Card>
            <CardBody>
                <div className="d-flex align-items-center mb-4">
                    <h5 className="card-title flex-grow-1">Documents</h5>
                </div>
                <Row>
                    <Col lg={12}>
                        <div className="table-responsive table-card">
                            <Table className="table-borderless align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">File Name</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Upload Date</th>
                                        <th scope="col" style={{ width: "120px" }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title bg-light text-secondary rounded fs-24">
                                                        <i className="ri-folder-zip-line"></i>
                                                    </div>
                                                </div>
                                                <div className="ms-3 flex-grow-1">
                                                    <h5 className="fs-14 mb-0"><Link to="#" className="text-dark">Artboard-documents.zip</Link></h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Zip File</td>
                                        <td>4.57 MB</td>
                                        <td>12 Dec 2021</td>
                                        <td>
                                            <UncontrolledDropdown>
                                                <DropdownToggle tag="a" href="#" className="btn btn-soft-secondary btn-sm btn-icon">
                                                    <i className="ri-more-fill"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <li><DropdownItem><i className="ri-eye-fill me-2 align-bottom text-muted"></i>View</DropdownItem></li>
                                                    <li><DropdownItem><i className="ri-download-2-fill me-2 align-bottom text-muted"></i>Download</DropdownItem></li>
                                                    <li className="dropdown-divider"></li>
                                                    <li><DropdownItem><i className="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>Delete</DropdownItem></li>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title bg-light text-danger rounded fs-24">
                                                        <i className="ri-file-pdf-fill"></i>
                                                    </div>
                                                </div>
                                                <div className="ms-3 flex-grow-1">
                                                    <h5 className="fs-14 mb-0"><Link to="#" className="text-dark">Bank Management System</Link></h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td>PDF File</td>
                                        <td>8.89 MB</td>
                                        <td>24 Nov 2021</td>
                                        <td>
                                            <UncontrolledDropdown>
                                                <DropdownToggle tag="a" href="#" className="btn btn-soft-secondary btn-sm btn-icon">
                                                    <i className="ri-more-fill"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <li><DropdownItem><i className="ri-eye-fill me-2 align-bottom text-muted"></i>View</DropdownItem></li>
                                                    <li><DropdownItem><i className="ri-download-2-fill me-2 align-bottom text-muted"></i>Download</DropdownItem></li>
                                                    <li className="dropdown-divider"></li>
                                                    <li><DropdownItem><i className="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>Delete</DropdownItem></li>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title bg-light text-secondary rounded fs-24">
                                                        <i className="ri-video-line"></i>
                                                    </div>
                                                </div>
                                                <div className="ms-3 flex-grow-1">
                                                    <h5 className="fs-14 mb-0"><Link to="#" className="text-dark">Tour-video.mp4</Link></h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td>MP4 File</td>
                                        <td>14.62 MB</td>
                                        <td>19 Nov 2021</td>
                                        <td>
                                            <UncontrolledDropdown>
                                                <DropdownToggle tag="a" href="#" className="btn btn-soft-secondary btn-sm btn-icon">
                                                    <i className="ri-more-fill"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <li><DropdownItem><i className="ri-eye-fill me-2 align-bottom text-muted"></i>View</DropdownItem></li>
                                                    <li><DropdownItem><i className="ri-download-2-fill me-2 align-bottom text-muted"></i>Download</DropdownItem></li>
                                                    <li className="dropdown-divider"></li>
                                                    <li><DropdownItem><i className="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>Delete</DropdownItem></li>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title bg-light text-success rounded fs-24">
                                                        <i className="ri-file-excel-fill"></i>
                                                    </div>
                                                </div>
                                                <div className="ms-3 flex-grow-1">
                                                    <h5 className="fs-14 mb-0"><Link to="#" className="text-dark">Account-statement.xsl</Link></h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td>XSL File</td>
                                        <td>2.38 KB</td>
                                        <td>14 Nov 2021</td>
                                        <td>
                                            <UncontrolledDropdown>
                                                <DropdownToggle tag="a" href="#" className="btn btn-soft-secondary btn-sm btn-icon">
                                                    <i className="ri-more-fill"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <li><DropdownItem><i className="ri-eye-fill me-2 align-bottom text-muted"></i>View</DropdownItem></li>
                                                    <li><DropdownItem><i className="ri-download-2-fill me-2 align-bottom text-muted"></i>Download</DropdownItem></li>
                                                    <li className="dropdown-divider"></li>
                                                    <li><DropdownItem><i className="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>Delete</DropdownItem></li>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title bg-light text-warning rounded fs-24">
                                                        <i className="ri-folder-fill"></i>
                                                    </div>
                                                </div>
                                                <div className="ms-3 flex-grow-1">
                                                    <h5 className="fs-14 mb-0"><Link to="#" className="text-dark">Project Screenshots Collection</Link></h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Floder File</td>
                                        <td>87.24 MB</td>
                                        <td>08 Nov 2021</td>
                                        <td>
                                            <UncontrolledDropdown>
                                                <DropdownToggle tag="a" href="#" className="btn btn-soft-secondary btn-sm btn-icon">
                                                    <i className="ri-more-fill"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <li><DropdownItem><i className="ri-eye-fill me-2 align-bottom text-muted"></i>View</DropdownItem></li>
                                                    <li><DropdownItem><i className="ri-download-2-fill me-2 align-bottom text-muted"></i>Download</DropdownItem></li>
                                                    <li className="dropdown-divider"></li>
                                                    <li><DropdownItem><i className="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>Delete</DropdownItem></li>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title bg-light text-danger rounded fs-24">
                                                        <i className="ri-image-2-fill"></i>
                                                    </div>
                                                </div>
                                                <div className="ms-3 flex-grow-1">
                                                    <h5 className="fs-14 mb-0"><Link to="#" className="text-dark">Velzon-logo.png</Link></h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td>PNG File</td>
                                        <td>879 KB</td>
                                        <td>02 Nov 2021</td>
                                        <td>
                                            <UncontrolledDropdown>
                                                <DropdownToggle tag="a" href="#" className="btn btn-soft-secondary btn-sm btn-icon">
                                                    <i className="ri-more-fill"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <li><DropdownItem><i className="ri-eye-fill me-2 align-bottom text-muted"></i>View</DropdownItem></li>
                                                    <li><DropdownItem><i className="ri-download-2-fill me-2 align-bottom text-muted"></i>Download</DropdownItem></li>
                                                    <li className="dropdown-divider"></li>
                                                    <li><DropdownItem><i className="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>Delete</DropdownItem></li>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="text-center mt-3">
                            <Link to="#" className="text-success "><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load more </Link>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </>
}