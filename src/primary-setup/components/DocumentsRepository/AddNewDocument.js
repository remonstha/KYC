import { useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Form, Label, FormGroup, Input, Button } from 'reactstrap';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from "react-select";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import DragAndDropIcon from "../../assets/img/dragAndDropIcon.png";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddNewDocument() {

    const [dragAndDropKyc, setDragAndDropKyc] = useState([]);
    const [dragAndDropKycUrl, setDragAndDropKycUrl] = useState(null);

    const initialValues = {
        department: '',
        documentTitle: '',
        documentType: '',
        documentDescription: '',
        uploadedPhoto: null,
    };
    const validationSchema = Yup.object().shape({
        department: Yup.string().required('Department is required'),
        documentTitle: Yup.string().required('Document Title is required'),
        documentType: Yup.string().required('Document Type is required'),
        documentDescription: Yup.string().required('Document Description is required'),
        uploadedPhoto: Yup.mixed()
            .test('fileRequired', 'Photo is required', (value) => {
                // You can define your validation logic here
                return value !== undefined && value !== null;
            })
    });
    

    const handleDragAndDropKycChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            formik.setFieldValue('uploadedPhoto', files[0]);
            setDragAndDropKyc((prevFiles) => {
                return [...prevFiles, ...Array.from(files)];
            });
            setDragAndDropKycUrl(URL.createObjectURL(files[0]));
        }
    };
    


    const handleFileDelete = (index) => {
        const updatedFiles = [...dragAndDropKyc];
        updatedFiles.splice(index, 1);
        setDragAndDropKyc(updatedFiles);
    };

    const imageBoxStyle = {
        border: "2px dashed #ccc",
        // padding: "20px",
        textAlign: "center",
        cursor: "pointer",
        width: "100%",
        minWidth: "150px",
        height: "20vh",
        overflow: "hidden",
        position: "relative",
    };

    const roundToOneDecimal = (size) => Math.round(size * 10) / 10;

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    
    const handleDragAndDropKycDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            formik.setFieldValue('uploadedPhoto', files[0]);
            setDragAndDropKyc((prevFiles) => {
                return [...prevFiles, ...Array.from(files)];
            });
            setDragAndDropKycUrl(URL.createObjectURL(files[0]));
        }
    };
    

    const departmentOptions = [
        { value: 'engineering', label: 'Engineering' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'finance', label: 'Finance' },
        // Add more department options as needed
    ];

    const documentTypeOptions = [
        { value: 'report', label: 'Report' },
        { value: 'presentation', label: 'Presentation' },
        { value: 'proposal', label: 'Proposal' },
        // Add more document type options as needed
    ];


    const formik = useFormik({
        initialValues,
        // validationSchema,
        onSubmit: (values) => {
            console.log('this are the formik values', values)
            // resetForm();
        }
    })

    return <Row>
        <Col lg={12}>
            <Card>
                <CardHeader className="align-items-center d-flex">
                    <h4 className="card-title mb-0">Add a New Document</h4>
                </CardHeader>
                <CardBody>
                    <Form className='row gx-5 gy-5' onSubmit={formik.handleSubmit}>
                    <Col md={4}>
                            <Label>Department</Label>
                            <Select
                                id='department'
                                name='department'
                                options={departmentOptions}
                                onChange={(selectedOption) => 
                                    // console.log('this is triggered')
                                    formik.setFieldValue('department', selectedOption.value)
                                }
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.department && formik.touched.department && (
                                <div className="text-danger">{formik.errors.department}</div>
                            )}
                        </Col>
                        <Col md={4}>
                            <Label>Document Title</Label>
                            <Input
                                id='documentTitle'
                                name='documentTitle'
                                onChange={formik.handleChange}
                                value={formik.values.documentTitle}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.documentTitle && formik.touched.documentTitle && (
                                <div className="text-danger">{formik.errors.documentTitle}</div>
                            )}
                        </Col>
                        <Col md={4}>
                            <Label>Document Type</Label>
                            <Select
                                id='documentType'
                                name='documentType'
                                options={documentTypeOptions}
                                onChange={(selectedOption) => formik.setFieldValue('documentType', selectedOption.value)}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.documentType && formik.touched.documentType && (
                                <div className="text-danger">{formik.errors.documentType}</div>
                            )}
                        </Col>
                        <Col>
                            <Label>Document Description</Label>
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Hello from CKEditor 5!</p>"
                                onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.

                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    // console.log({ event, editor, data });
                                    formik.setFieldValue('documentDescription', data)
                                }}
                            />
                        </Col>

                        <h6 className="py-3 fs-16 fw-semibold">Upload Documents</h6>
                        <Col className="ms-5 mt-3">
                            <FormGroup
                                onDragOver={handleDragOver}
                                onDrop={handleDragAndDropKycDrop}
                                style={imageBoxStyle}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <input
                                    type="file"
                                    name="dragAndDropKyc"
                                    id="dragAndDropKycFiles"
                                    accept="image/*"
                                    onChange={handleDragAndDropKycChange}
                                    hidden
                                />
                                <img
                                    src={DragAndDropIcon}
                                    alt="uploaded"
                                    style={{
                                        opacity: "0.7",
                                        objectFit: "cover",
                                        width: "40%",
                                        padding: "50px"
                                    }}
                                />

                                <Label
                                    htmlFor="dragAndDropKycFiles"
                                    className="text-light"
                                    style={{
                                        position: "absolute",
                                        fontSize: "3.8em",
                                        cursor: "pointer",
                                        letterSpacing: ".2em",
                                        opacity: "0",
                                    }}
                                >
                                    Change
                                </Label>
                            </FormGroup>

                            {dragAndDropKyc.length > 0 ? (
                                <div>
                                    {dragAndDropKyc.map((file, index) => (
                                        <CardBody key={index} style={{ marginBottom: '10px', marginRight: '111px', padding: '10px', borderRadius: '5px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <span className="serial-number">{index + 1}.  </span>
                                                <img src={URL.createObjectURL(file)} alt="File" style={{ width: '30px', height: '30px', marginRight: '10px', marginLeft: '10px' }} />
                                                <div>
                                                    <p style={{ marginBottom: '3px' }}>{file.name}</p>
                                                    <p className="text-info" style={{ marginBottom: '3px' }}>{roundToOneDecimal(file.size / 1024)} KB</p>
                                                </div>
                                            </div>
                                            <AiOutlineCloseCircle
                                                style={{ cursor: 'pointer', fontSize: '1.5em', color: '#e74c3c' }}
                                                onClick={() => handleFileDelete(index)} // Implement your file deletion logic
                                            />
                                        </CardBody>
                                    ))}
                                </div>
                            ) : (
                                <CardBody>No files selected</CardBody>
                            )}

                        </Col>
                        <div className="d-flex justify-content-end mt-4">
                            <Button color="primary" type="submit">
                                Next
                            </Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    </Row>
}