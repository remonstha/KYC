import { useFormik, Field } from "formik";
import React, { useState, useEffect } from "react";
import {
    Card,
    Col,
    Container,
    Row,
    Form,
    Input,
    CardHeader,
    CardBody,
    FormGroup,
    Label,
    Button,
    Alert,
} from "reactstrap";
import DragAndDropIcon from "../../assets/img/dragAndDropIcon.png";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import {  setKycSelectionCorporate, setKycSelectionIndividual } from "../../slices/selection.slice";
import { useNavigate } from "react-router";


export default function UploadKycForm() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [dragAndDropKyc, setDragAndDropKyc] = useState([]);
    const [dragAndDropKycUrl, setDragAndDropKycUrl] = useState(null);

    // const handleDragAndDropKycChange = (e) => {
    //   const file = e.target.files[0];
    //   if (file) {
    //     setDragAndDropKyc(file);
    //     setDragAndDropKycUrl(URL.createObjectURL(file)); // Create a temporary URL for the uploaded file
    //   }
    // };
    const handleDragAndDropKycChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
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

    useEffect(() => {
        console.log("this is final file", dragAndDropKyc);
    }, [dragAndDropKyc]);

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDragAndDropKycDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            setDragAndDropKyc((prevFiles) => {
                return [...prevFiles, ...Array.from(files)];
            });
            setDragAndDropKycUrl(URL.createObjectURL(files[0]));
        }
    };
    const imagePreview = {
        width: "50px",
        height: "50px",
        objectFit: "cover",
        borderRadius: "5px",
      };

    const imageBoxStyle = {
        border: "2px dashed #E9EBEC",
        // padding: "20px",
        textAlign: "center",
        cursor: "pointer",
        width: "100%",
        minWidth: "150px",
        height: "20vh",
        overflow: "hidden",
        position: "relative",
    };

    const formik = useFormik({
        initialValues: {
            titleSelect: "",
            otherSelect: "",
            Name: "",
            accountNO: "",
        },
        // validationSchema,

        onSubmit: (values) => {
            console.log("values", values);
            dispatch(setSelection("BasicInfo"));
        },
    });

    const dismiss = (e) => {
        setVisiable(false);
    };

    const roundToOneDecimal = (size) => Math.round(size * 10) / 10;

    return (
        <Card className="mt-1">
            <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col className=" mt-3">
                            <h5 className="me-2 text-primary"> Upload KYC Form</h5>
                            <FormGroup
                                onDragOver={handleDragOver}
                                onDrop={handleDragAndDropKycDrop}
                                style={imageBoxStyle}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <input
                                    type="file"
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
                                        width: "100%",
                                        padding: "35%",
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



              {(dragAndDropKyc).length > 0 ? (
                <div>
                  <p className="mb-1 text-muted">Selected Files: </p>
                  {dragAndDropKyc.map((file, index) => (
                    <Col
                      lg={12}
                      key={index}
                      className="py-2 mt-0 px-3 border rounded-2 mb-2  align-items-center"
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-3 align-items-center">
                          <span className="serial-number">{index + 1}. </span>
                          <div className="d-flex gap-3 justify-content-between">
                            <img
                              src={URL.createObjectURL(file)}
                              style={imagePreview}
                              alt="File"
                            />

                            <div
                              className=" d-flex flex-column justify-content-center"
                            >
                              <span className="fs-14 mt-0 pt-0">
                                {file.name}{" "}
                              </span>
                              <span className="text-muted fs-12 mt-1 fw-semibold">
                                {roundToOneDecimal(file.size / 1024)} KB{" "}
                              </span>
                            </div>
                          </div>
                        </div>

                        <AiOutlineCloseCircle
                          style={{
                            cursor: "pointer",
                            fontSize: "1.5em",
                            color: "#e74c3c",
                          }}
                          onClick={() => handleFileDelete(index)} // Implement your file deletion logic
                        />
                      </div>
                    </Col>
                  ))}
                </div>
              ) : (
                <CardBody>No files selected</CardBody>
              )}
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-between mt-4">
                        <Button
                            color="light"
                            onClick={() =>
                                {
                                    navigate('/');
                                } }
                        >
                            Back
                        </Button>
                        <Button color="primary" type="submit" onClick={() => dispatch(setKycSelectionCorporate("basicInformation"))}>
                            Next
                        </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    );
}
