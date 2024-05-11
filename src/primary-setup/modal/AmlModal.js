import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, Modal, ModalBody, Row } from 'reactstrap';

const AmlModal = ({amlModal, toggle}) => {
    const customModalStyle = {
        maxWidth: "90%",  // Adjust the width as needed
        // maxHeight: "100", // Adjust the height as needed
    }
    const amlVerification=  {
        display: 'flex',
width: '375px',
height: '101px',
padding: '23px 114.5px 23px 113.5px',
justifycontent: 'center',
alignitems: 'center',
flexshrink: '0',
borderradius: '7px',
border: '1px solid rgba(149, 153, 173, 0.42)',
    }
  return (
    <>
    <Card>
    <Modal
      style={customModalStyle} 
      size="md"
      isOpen={amlModal}
      toggle={toggle}
    >

<CardHeader className='mt-3' >
                <h5>  Aml Verification Form  </h5>
            </CardHeader>
    <Form role="form"  > 
   

      <ModalBody className="modal-body "  style={{
    background: "radial-gradient(1317.03% 148.69% at 79.24% 61.63%, rgba(30, 81, 211, 0.13) 14.93%, rgba(30, 135, 211, 0.15) 33.33%, rgba(22, 177, 95, 0.13) 67.16%, rgba(28, 208, 100, 0.15) 89.66%)",
}} >
          
    
        
            

            <CardBody className='p-4 mt-4'>
                <Row className='text-center mt-4'>
                    <h3 style={{ textDecoration: 'underline', color: '#2E5AAA' }} >No API avialable for AML verification at the moment</h3>
                </Row>
                <Row className='text-center mt-4'>
                    <h6 style={{  color: '#802E9D' }} >Please verify it manually for now</h6>
                </Row>
                <Row className='justify-content-center mt-4 '>
                    <Col lg={4} 
                     >
                    <div style={amlVerification}>

                        <h6 > AMl Verification</h6>

                    </div>

                    </Col>
                </Row>
            </CardBody>
        

        
      </ModalBody>
      <Row className=" modal-footer justify-content-end mt-3" >
    
      <Col lg={2} className='d-flex justify-content-end'>
        <Button
          type="submit"
          className="btn btn-success justify-content-end "
          id="add-btn"
        
        >
         Save
        </Button>
        </Col>
      </Row>
    </Form>
    </Modal>
    </Card>
  </>
  )
};

export default AmlModal;