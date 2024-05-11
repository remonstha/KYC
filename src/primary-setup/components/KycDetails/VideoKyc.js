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
import { setKycSelectionIndividual } from "../../slices/selection.slice";
import { useNavigate } from "react-router";
import { updateVideoKyc } from "../../slices/kycDetails.slice";
import { postVideoKycData } from "../../../slices/CentralizedKYC/IndividualKYC/thunk";

export default function VideoKyc() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = useSelector(
    (state) => state.KycDetails.videoKYC
  );
  const videoKYC = useSelector((state) => state.IndKyc.videoKYC);

  const reduxKycImages = useSelector(state => state.KycDetails.videoKYC.kycImages);

  const [dragAndDropKyc, setDragAndDropKyc] = useState(reduxKycImages || []);

  const handleDragAndDropKycChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setDragAndDropKyc((prevFiles) => [...prevFiles, ...Array.from(files)]);

    }
  };

  const imagePreview = {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "5px",
  };

  const handleFileDelete = (index) => {
    const updatedFiles = [...dragAndDropKyc];
    updatedFiles.splice(index, 1);
    setDragAndDropKyc(updatedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragAndDropKycDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setDragAndDropKyc((prevFiles) => [...prevFiles, ...Array.from(files)]);

    }
  };

  const imageBoxStyle = {
    border: "1px dashed #ccc",
    // padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    width: "100%",
    height: "180px",
    overflow: "hidden",
    position: "relative",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const newValues = {
        ...values,
        kycImages: dragAndDropKyc,
      };

      dispatch(updateVideoKyc(newValues));
      dispatch(setKycSelectionIndividual("BasicInfo"));

      var formData = new FormData();
      newValues?.kycImages?.forEach((file) => {
        formData.append("Files", file, file.name);
      });
      formData.append(
        "IsRequestVideoKYC",
        values.hasVideoKyc === "Yes" ? "true" : "false"
      );
      formData.append("VideoKYCLink", values.videoKycLink);
      formData.append("FileType", "0");
      if(videoKYC?.id !== undefined){
        formData.append("id", videoKYC?.id);
      }

      console.log("formdata from video kyc", formData);
      dispatch(postVideoKycData(formData));
    },
  });

  useEffect(() => {
    formik.setFieldValue('kycImages', dragAndDropKyc);
  },[dragAndDropKyc])

  const roundToOneDecimal = (size) => Math.round(size * 10) / 10;

  return (
    <Card className="mt-1 pt-5 pb-2">
      <CardBody className="p-2 pt-3">
        <Form onSubmit={formik.handleSubmit}>
          <Row className="g-5">
            <Col lg={6}>
            <Label className="me-2 text-secondary fs-16">
                  {" "}
                  Do you want to provide Video KYC ?
                </Label>
              <div className="d-flex gap-3 mt-3">

                <div className="yes-checkbox">
                  <Input
                    id="Yes"
                    type="radio"
                    name="hasVideoKyc"
                    value="Yes"
                    checked={formik.values.hasVideoKyc === "Yes"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Label for="Yes" className="ms-2">Yes</Label>
                </div>

                <div className="No-checkbox">
                  <Input
                    id="No"
                    type="radio"
                    name="hasVideoKyc"
                    value="No"
                    checked={formik.values.hasVideoKyc === "No"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Label for="No" className="ms-2">
                    No
                  </Label>
                </div>
              </div>

              <Input
                type="textarea"
                className=" mt-3"
                placeholder="Provide the link here"
                name="videoKycLink"
                value={formik.values.videoKycLink}
                onChange={formik.handleChange}
                style={{ height: "133px" }}
                disabled={formik.values.hasVideoKyc !== "Yes"}
              />

              {formik.errors.hasVideoKyc && formik.touched.hasVideoKyc && (
                <p className="text-danger">{formik.errors.hasVideoKyc}</p>
              )}

              {formik.errors.videoKycLink && formik.touched.videoKycLink && (
                <p className="text-danger">{formik.errors.videoKycLink}</p>
              )}
            </Col>

            <Col lg={6}>
              <Label className="me-2 text-secondary fs-16"> Upload KYC Form</Label>
              <FormGroup
                onDragOver={handleDragOver}
                onDrop={handleDragAndDropKycDrop}
                style={imageBoxStyle}
                className="d-flex justify-content-center mt-3 align-items-center"
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
                    padding: "50px",
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
          <div className="d-flex justify-content-between mt-5">
            <Button
              color="light"
              onClick={() =>navigate('/')}
            >
              Back
            </Button>
            <Button color="primary" type="submit">
              Next
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
}
