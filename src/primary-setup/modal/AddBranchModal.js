import { useFormik } from 'formik';
import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
import { addBranch } from '../slices/kycCorporate.slice';
import { useDispatch } from 'react-redux';

const AddBranchModal = ({ isOpen, toggleModal }) => {

    const dispatch = useDispatch();
    const initialValues = {
        name: '',
        location: '',
        sales: '',
        totalAnnualIncome: '',
    }
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            const newBranch = {
                name: values.name,
                location: values.location,
                sales: values.sales,
                totalAnnualIncome: values.totalAnnualIncome,
            }
            dispatch(addBranch(newBranch))
            toggleModal();
            formik.resetForm();
        }
    })
    return (
        <Modal isOpen={isOpen} toggle={toggleModal}>
            <Form onSubmit={formik.handleSubmit}>
                <ModalHeader toggle={toggleModal}>Add Branch</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="branchName">Name</Label>
                            <Input type="text" name="name" id="branchName" value={formik.values.name}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="branchLocation">Location</Label>
                            <Input type="text" name="location" id="branchLocation" value={formik.values.location}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="sales">Sales</Label>
                            <Input type="text" name="sales" id="sales" value={formik.values.sales}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="branchAnnualIncome">Total Annual Income</Label>
                            <Input type="text" name="totalAnnualIncome" id="branchAnnualIncome" value={formik.values.totalAnnualIncome}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" type='submit'>Add</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Form>
        </Modal>
    );
};

export default AddBranchModal;
