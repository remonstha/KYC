import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { addNomineeInformation } from '../slices/kycDetails.slice';

const UpdateNomineeModal = ({ modalOpen, toggleModal, onAddNominee }) => {

    const reduxState = useSelector(state => state.KycDetails.nomineeInformation)

    useEffect(()=> {
        console.log('this is redux state', reduxState)
    }, [reduxState])

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Nominee's name is required"),
        dateOfBirth: Yup.date().required("Nominee's date of birth is required"),
        idNumber: Yup.string().required("Identification number is required"),
        placeOfIssue: Yup.string().required("Place of issue is required"),
        dateOfIssue: Yup.date().required("Date of issue is required"),
        relationship: Yup.string().required("Nominee relationship is required"),
        grandfatherName: Yup.string().required("Grandfather's name is required"),
        fatherName: Yup.string().required("Father's name is required"),
        motherName: Yup.string().required("Mother's name is required"),
        permanentAddress: Yup.string().required("Permanent address is required"),
        temporaryAddress: Yup.string().required("Temporary address is required"),
        contactNumber: Yup.string().required("Contact number is required"),
    });
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            name: "",
            dateOfBirth: "",
            idNumber: "",
            placeOfIssue: "",
            dateOfIssue: "",
            relationship: "",
            grandfatherName: "",
            fatherName: "",
            motherName: "",
            permanentAddress: "",
            temporaryAddress: "",
            contactNumber: "",
        },

        validationSchema,
        onSubmit: (values) => {
            const newNomineeData = {
                name: values.name,
                dateOfBirth: values.dateOfBirth ,
                idNumber: values.idNumber,
                placeOfIssue: values.placeOfIssue,
                dateOfIssue: values.dateOfBirth,
                relationship: values.relationship,
                grandfatherName: values.grandfatherName,
                fatherName: values.fatherName,
                motherName: values.motherName,
                permanentAddress: values.permanentAddress,
                temporaryAddress: values.temporaryAddress,
                contactNumber: values.contactNumber,
            }
            // onAddNominee(values);
            dispatch(addNomineeInformation(newNomineeData));
            toggleModal();
            formik.resetForm();
        }
        

    });


    return (
        <Modal isOpen={modalOpen} toggle={toggleModal} size='xl'>
            <ModalHeader toggle={toggleModal}>Add Nominee</ModalHeader>
            <ModalBody>
                <form onSubmit={formik.handleSubmit}>
                    <Row className="mb-3">
                        <Col md={4}>
                            <label htmlFor="name">Nominee's Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && <p className="text-danger">{formik.errors.name}</p>}
                        </Col>
                        <Col md={4}>
                            <label htmlFor="relationship">Relationship with Nominee</label>
                            <input
                                type="text"
                                name="relationship"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.relationship}
                            />
                            {formik.touched.relationship && <p className="text-danger">{formik.errors.relationship}</p>}
                        </Col>

                        <Col md={4}>
                            <label className="d-block">Documents</label>
                            {/* <input
                                type="radio"
                                id="citizenship"
                                name="documentType"
                                value="citizenship"
                                checked={formik.values.documentType === 'citizenship'}
                                onChange={formik.handleChange}
                                className="me-1"
                            />
                            <label htmlFor="citizenship" className="form-check-label me-2">
                                Citizenship
                            </label>
                            <input
                                type="radio"
                                id="passport"
                                name="documentType"
                                value="passport"
                                checked={formik.values.documentType === 'passport'}
                                onChange={formik.handleChange}
                                className="me-1"
                            />
                            <label htmlFor="passport" className="form-check-label me-2">
                                Passport
                            </label>
                            <input
                                type="radio"
                                id="minorId"
                                name="documentType"
                                value="minorId"
                                checked={formik.values.documentType === 'minorId'}
                                onChange={formik.handleChange}
                                className="me-1"
                            />
                            <label htmlFor="minorId" className="form-check-label d-inline">
                                Minor Id
                            </label>

                            {(formik.values.documentType === 'citizenship' ||
                                formik.values.documentType === 'passport' ||
                                formik.values.documentType === 'minorId') && ( */}
                                    <input
                                        type="text"
                                        name="idNumber"
                                        className="text-center border-0 border-bottom"
                                        placeholder="ID No."
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.idNumber}
                                    />
                                {/* )} */}

                            {/* {<p className="text-danger">{formik.errors.documentType}</p>} */}
                            {(formik.touched.idNumber &&
                                <p className="text-danger">{formik.errors.idNumber}</p>
                            )}
                        </Col>
                    </Row>
            
                    <Row className="mt-4">
                        <Col md={4}>
                            <label htmlFor="dateOfBirth">Nominee's Date of Birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dateOfBirth}
                            />
                            {formik.touched.dateOfBirth && <p className="text-danger">{formik.errors.dateOfBirth}</p>}
                        </Col>
                        <Col md={4}>
                            <label htmlFor="dateOfIssue">ID Issued Date</label>
                            <input
                                type="date"
                                name="dateOfIssue"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dateOfIssue}
                            />
                            {formik.touched.dateOfIssue && <p className="text-danger">{formik.errors.dateOfIssue}</p>}
                        </Col>
                        <Col md={4}>
                            <label>ID Issued Place</label>
                            <input
                                type="text"
                                name="placeOfIssue"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.placeOfIssue}
                            />
                            {formik.touched.placeOfIssue && <p className="text-danger">{formik.errors.placeOfIssue}</p>}
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={4}>
                            <label htmlFor="fatherName">Father's Name</label>
                            <input
                                type="text"
                                name="fatherName"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fatherName}
                            />
                            {formik.touched.fatherName && <p className="text-danger">{formik.errors.fatherName}</p>}
                        </Col>
                        <Col md={4}>
                            <label htmlFor="motherName">Mother's Name</label>
                            <input
                                type="text"
                                name="motherName"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.motherName}
                            />
                            {formik.touched.motherName && <p className="text-danger">{formik.errors.motherName}</p>}
                        </Col>
                        <Col md={4}>
                            <label htmlFor="grandfatherName">Grandfather's Name</label>
                            <input
                                type="text"
                                name="grandfatherName"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.grandfatherName}
                            />
                            {formik.touched.grandfatherName && <p className="text-danger">{formik.errors.grandfatherName}</p>}
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col md={4}>
                            <label htmlFor="permanentAddress">Permanent Address</label>
                            <input
                                type="text"
                                name="permanentAddress"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.permanentAddress}
                            />
                            {formik.touched.permanentAddress && <p className="text-danger">{formik.errors.permanentAddress}</p>}
                        </Col>
                        <Col md={4}>
                            <label htmlFor="temporaryAddress">Temporary Address</label>
                            <input
                                type="text"
                                name="temporaryAddress"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.temporaryAddress}
                            />
                            {formik.touched.temporaryAddress && <p className="text-danger">{formik.errors.temporaryAddress}</p>}

                        </Col>
                        <Col md={4}>
                            <label htmlFor="contactNumber">Contact Number</label>
                            <input
                                type="number"
                                name="contactNumber"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.contactNumber}
                            />
                            {formik.touched.contactNumber && <p className="text-danger">{formik.errors.contactNumber}</p>}
                        </Col>
                    </Row>

                    {/* <Row className="mt-4">
                        <Col md={3}>
                            <label htmlFor="nomineePhoto">Nominee's Photo</label>
                            <input
                                type="file"
                                name="nomineePhoto"
                                placeholder="Upload nominee's photo"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.nomineePhoto}
                            />
                            {formik.touched.nomineePhoto && <p className="text-danger">{formik.errors.nomineePhoto}</p>}
                        </Col>
                        <Col md={3}>
                            <label htmlFor="signature">Nominee's Signature</label>
                            <input
                                type="file"
                                name="signature"
                                placeholder="Upload nominee's signature"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.signature}
                            />
                            {formik.touched.signature && <p className="text-danger">{formik.errors.signature}</p>}
                        </Col>
                        <Col md={3}>
                            <label htmlFor="thumbPrintRight">Thumbprint Right</label>
                            <input
                                type="file"
                                name="thumbPrintRight"
                                placeholder="Upload thumbprint (right)"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.thumbPrintRight}
                            />
                            {formik.touched.thumbPrintRight && <p className="text-danger">{formik.errors.thumbPrintRight}</p>}
                        </Col>
                        <Col md={3}>
                            <label htmlFor="thumbPrintLeft">Thumbprint Left</label>
                            <input
                                type="file"
                                name="thumbPrintLeft"
                                placeholder="Upload thumbprint (left)"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.thumbPrintLeft}
                            />
                            {formik.touched.thumbPrintLeft && <p className="text-danger">{formik.errors.thumbPrintLeft}</p>}
                        </Col>
                    </Row> */}
                    <div className="d-flex justify-content-between mt-4">
                        <Button color="light" onClick={() => toggleModal()}>Close</Button>
                        <Button color="primary" type='submit'>Save</Button>
                    </div>
                </form>
            </ModalBody>
        </Modal>
    );
};

export default UpdateNomineeModal;