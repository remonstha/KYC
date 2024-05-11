import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Alert } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import individualPic from "../assets/img/individual.jpg"
import corporatePic from "../assets/img/corporate.jpg"
import minorPic from "../assets/img/minor.jpg"
import documentRepository from "../assets/img/document repository.png"

const cardStyle = {
  width: "20vw",
  minWidth: "305px",
  height: "25vh",
  minHeight: "326px",
  borderRadius: "20px",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const cardInfoStyle = {
  position: "absolute",
  bottom: "0",
  // border: '1px solid red',
  height: "40%",
  width: "100%",
  padding: "1.3em",

  background: "rgba(255, 255, 255, 0.27)",
  borderRadius: "0 0 20px 20px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(11.5px)",
  // -webkit-backdrop-filter: blur(11.5px);
  // border: '1px solid rgba(255, 255, 255, 0.3)'
};


export default function Dashboard() {


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h5 className="mt-4 fw-bold">Centralized KYC Accounts</h5>
          <div className="d-flex flex-wrap gap-5 mt-4">
            <Link to="/kycindividual">
              <Card style={{...cardStyle, backgroundImage: `url(${individualPic})`}} className="kycCard" >
                <div style={cardInfoStyle}>
                  <h5 style={{ color: "white" }}>
                    BANK'S KYC Account for
                    <br />
                    Individual
                  </h5>
                  <div className="d-flex justify-content-between mt-4">
                    <Link
                      to="#"
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      Learn More
                    </Link>
                    <Link to="#" style={{ color: "white" }}>
                      Apply Now
                    </Link>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/kycminor">
              <Card style={{...cardStyle, backgroundImage: `url(${minorPic})`}} className="kycCard">
                <div style={cardInfoStyle}>
                  <h5 style={{ color: "white" }}>
                    BANK'S KYC Account for
                    <br />
                    Minor
                  </h5>
                  <div className="d-flex justify-content-between mt-4">
                    <Link
                      to="#"
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      Learn More
                    </Link>
                    <Link to="#" style={{ color: "white" }}>
                      Apply Now
                    </Link>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="kyccorporate">
              <Card style={{...cardStyle, backgroundImage: `url(${corporatePic})`}} className="kycCard">
                <div style={cardInfoStyle}>
                  <h5 style={{ color: "white" }}>
                    BANK'S KYC Account for
                    <br />
                    Corporate
                  </h5>
                  <div className="d-flex justify-content-between mt-4">
                    <Link
                      to="#"
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      Learn More
                    </Link>
                    <Link to="#" style={{ color: "white" }}>
                      Apply Now
                    </Link>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
          <h5 className="mt-4 fw-bold">Documents Repository</h5>
          <div className="mt-4">
            <Link to='/documents-repository' style={{display: 'inline-block'}}>
              <Card style={{
                ...cardStyle,
                backgroundImage: `url('${documentRepository}')`,
                minHeight: "15vh",
              }}
                className="kycCard"
              >
                <div style={{...cardInfoStyle, height: '35%'}}>
                  <h5 style={{ color: "white" }}>View All Documents</h5>
                </div>
              </Card>
            </Link>
          </div>

        </Container>
      </div>
    </React.Fragment>
  );
}
