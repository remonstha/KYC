import React from 'react';
import { CardBody, CardHeader, Card, Label, Input, Row, Col, Button, Form } from 'reactstrap';
import TableContainer from '../../../Components/Common/TableContainerReactTable';
import { useMemo } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionCorporate } from "../../slices/selection.slice";
import { useFormik } from 'formik';
import { updateBranch } from '../../slices/kycCorporate.slice';
import AddBranchModal from '../../modal/AddBranchModal';
import { useState } from 'react';


export default function Branch() {

    const [addModal, setAddModal] = useState(false);
    const dispatch = useDispatch();

    const toggleModal = () => {
        setAddModal(!addModal);
    }

    const totalBranchesNepal = useSelector((state) => state.KycCorporate.branch.totalBranchesNepal);
    const totalBranchesAbroad = useSelector((state) => state.KycCorporate.branch.totalBranchesAbroad);
    const initialValues = {
        totalBranchesNepal,
        totalBranchesAbroad
    }
    const data = useSelector((state) => state.KycCorporate.branch.data)

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log('these are formik values', values);
            dispatch(updateBranch(values))
              dispatch(setKycSelectionCorporate('accountOperatorInfo'))
        }
    })

    // const data = [
    //     {
    //         name: "Company A",
    //         location: "New York",
    //         sales: 500000,
    //         totalAnnualIncome: 1000000,
    //     },
    //     {
    //         name: "Company B",
    //         location: "Los Angeles",
    //         sales: 750000,
    //         totalAnnualIncome: 1500000,
    //     },
    //     {
    //         name: "Company C",
    //         location: "Chicago",
    //         sales: 600000,
    //         totalAnnualIncome: 1200000,
    //     },
    //     {
    //         name: "Company D",
    //         location: "San Francisco",
    //         sales: 800000,
    //         totalAnnualIncome: 1600000,
    //     },
    // ];

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Location',
                accessor: 'location',
            },
            {
                Header: 'Sales',
                accessor: 'sales',
            },
            {
                Header: 'Total Annual Income',
                accessor: 'totalAnnualIncome',
            },
        ]
    )


    return <>
    <AddBranchModal isOpen={addModal} toggleModal={toggleModal}/>
    <Card className="p-0">
        <CardHeader className="px-4">
          <div className="">
            <h5 className="m-0">Branch Details</h5>
          </div>
        </CardHeader>
        <CardBody className="px-4">
                <Form onSubmit={formik.handleSubmit} className='row mb-5'>
                    <Col lg={6} className="mt-4">
                        <Label>Total Number of Branches in Nepal</Label>
                        <Input type="text" name="totalBranchesNepal" value={formik.values.totalBranchesNepal}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange} />
                    </Col>
                    <Col lg={6} className="mt-4">
                        <Label>No of branches in abroad (if any)</Label>
                        <Input type="text" name="totalBranchesAbroad" value={formik.values.totalBranchesAbroad}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange} />
                    </Col>

                <div className="d-flex justify-content-end">
                    <Button color="primary" className="ml-auto mb-1 mt-5" onClick={toggleModal}>Add Branches</Button>
                </div>

                <div>

                    <TableContainer
                        columns={columns}
                        data={data}
                        customPageSize={8}
                        theadStyle={{
                            // display: 'flex',
                            padding: '10px',
                            alignItems: 'center',
                            gap: '10px',
                            alignSelf: 'stretch',
                            background: "rgba(29, 207, 101, 1) ",
                            color: '#FFF', border: '1px solid #BDBAE4',

                        }}
                        tableClass="tablecss"
                    />
                </div>

                <div className="d-flex justify-content-between mt-4">
                    <Button color="light" onClick={() => dispatch(setKycSelectionCorporate('addressInformation'))}>Back</Button>
                    <Button color="primary" type="submit">
                        Next
                    </Button>
                </div>

                </Form>
            </CardBody>
        </Card>
    </>
}