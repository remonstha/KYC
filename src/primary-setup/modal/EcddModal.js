import React, { useState } from "react";
import {
  Card,
  Input,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Label,
  Button,
  Modal,
  Form,
  ModalHeader,
  ModalBody,
  FormFeedback,
  FormGroup,
  CardTitle,
  CardFooter,
} from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import { createModalSchema } from "../validationSchema";
import EcddForm from "../components/Compliance/EcddForm";
import Consent from "../components/Compliance/Consent";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEcddForm } from "../slices/ecddForm.slice";
const EcddModal = ({ ecddModal, toggle }) => {
 const  dispatch = useDispatch();
  const [riskLevel, setRiskLevel] = useState("Normal");
  const [activeTab, setActiveTab] = useState('ecddForm');
  const initialValues = useSelector((state) => state.EcddForm.ecddForm);


  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(updateEcddForm(values));
      console.log('hi this is ecdd values', values)
    }
  })


  const getRiskLevelColor = () => {
    if (riskLevel === "High") {
      return "text-danger"; // Red text for "High"
    } else if (riskLevel === "Low") {
      return "text-success"; // Green text for "Low"
    } else {
      return "text-dark"; // Default text color for "Normal"
    }
  };

  const handleRiskLevelChange = () => {
    if (riskLevel === "Normal") {
      setRiskLevel("Low");
    } else if (riskLevel === "Low") {
      setRiskLevel("High");
    } else {
      setRiskLevel("Normal");
    }
  };
  const customModalStyle = {
    maxWidth: "80%",  // Adjust the width as needed
    maxHeight: "100vh", // Adjust the height as needed
  };
  const customModal = {
    maxWidth: "70%",  // Adjust the width as needed
    maxHeight: "100vh", // Adjust the height as needed
  };

  return (
    <>
      <Card>
        <Modal
          style={customModalStyle}
          size="md"
          isOpen={ecddModal}
          toggle={toggle}
        >
          <CardHeader toggle={toggle} className=" mt-4 fw-bold  " > <h4> ECDD Verification Form </h4></CardHeader>

          <Form role="form" onSubmit={formik.handleSubmit}>
            <ModalBody className="modal-body ">

              <div 
              className="overflow-y-auto p-5 ms-4 mt-2 me-4 mb-2"  style={{ maxHeight: '65vh' , border: '1px solid  rgba(169, 169, 169, 0.5)', borderRadius: "3px" }}
              >
                    <Row className='text-primary mb-5 pb-1  border-bottom'>
                      <Col md={2}>
                        <Link
                          onClick={() => { setActiveTab('ecddForm') }}
                          style={{
                            borderBottom: activeTab === 'ecddForm' ? '2px solid blue' : 'none',
                            paddingBottom: '5px',
                          }}
                          className=" bg-white text-primary"
                        >
                          ECDD Form
                        </Link>
                      </Col>
                      <Col md={2}>
                        <Link
                          onClick={() => { setActiveTab('consent') }}
                          style={{
                            borderBottom: activeTab === 'consent' ? '2px solid blue' : 'none',
                            paddingBottom: '5px',
                          }}
                          className=" bg-white text-primary"
                        >
                          Consent
                        </Link>
                      </Col>
                    </Row>
                    {/* </CardHeader> */}
                  
                    {activeTab === 'ecddForm' && <EcddForm formik={formik} />}
                    {activeTab === 'consent' && <Consent formik={formik} />}
                </div>
              {/* </CardBody> */}

            </ModalBody>

            <CardFooter className=" modal-footer  justify-content-end fixed" >

              <Col >
                <div className="text-end  ">
                  <p className=" fw-b">
                    Risk Catagory:
                    <Button
                      className={`  me-3 bg-white rounded-0 border-white ${getRiskLevelColor()}  fw-b `}
                      onClick={handleRiskLevelChange}
                    >
                      {riskLevel}
                    </Button>
                  </p>
                </div>
              </Col>
              <Col md={1} className="text-end ">
                <Button
                  className="btn btn-success  "
                  id="add-btn"
                  onClick={toggle}

                >
                  Close
                </Button>
              </Col>
              <Col md={1} className="text-start ">
                <Button
                  type="submit"
                  className="btn btn-success  "
                  id="add-btn"

                >
                  Submit
                </Button>
              </Col>
            </CardFooter>
          </Form>
        </Modal>
      </Card>
    </>
  )
};

export default EcddModal;