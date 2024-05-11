import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import flagIcon from "../../assets/icons/flagIcon.png";
import setAsFavIcon from "../../assets/icons/setAsFavIcon.png";
import shareIcon from "../../assets/icons/shareIcon.png";
import {
  TabContent,
  Container,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Overview from "./Overview";
import Documents from "./Documents";
import Activities from "./Activities";
import Team from "./Team";
import branchName from "../../assets/icons/branchName.png";
import locationIcon from "../../assets/icons/locationIcon.png";
import classnames from 'classnames';


export default function HomePage() {
  const [activeTab, setActiveTab] = useState("overview"); // Default to the first tab

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const divStyle = {
    background: ` linear-gradient(100deg, rgba(28, 209, 100, 0.12) 37.99%, rgba(32, 133, 211, 0.12) 63.57%, rgba(60, 104, 216, 0.12) 75.64%, rgba(33, 143, 195, 0.12) 100.37%)`,
    /* Any other styling or properties for your div */
  };

  return (
    <>
      <div className="page-content px-0 pt-5">
        <div style={divStyle}>
          <Container fluid>
            <Row className="justify-content-between px-0">
              <Col md={12} className="mt-3 px-0">
                <Row>
                  <Col md={9} className="d-flex">
                    <div className="d-flex gap-4">
                      <img
                        src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                        }}
                      />
                      <div className="py-3">
                        <h3 className="fw-bold">Name's - Account Type</h3>
                        <div className="d-flex mt-2 gap-2">
                          <div className="pe-2" style={{ borderRight: '1px solid #A9B9B7' }}>
                            <img
                              src={branchName}
                              className="me-1 mb-1"
                              width="14px"
                              height="14px"
                            />
                            <span className="">Branch Name</span>{" "}
                          </div>
                          <div className="pe-2" style={{ borderRight: '1px solid #A9B9B7' }}>Create Date: 15 Sep, 2021</div>
                          <div className="pe-2" style={{ borderRight: '1px solid #A9B9B7' }}>Due Date: 29 Dec, 2021</div>
                          <span
                            className=""
                            style={{
                              backgroundColor: "#29BADB",
                              display: "inline",
                              color: "white",
                              padding: "0 10px",
                              borderRadius: "10px",
                            }}
                          >
                            New
                          </span>
                          <span className="ms-2">
                            Priority:{" "}
                            <span
                              style={{
                                backgroundColor: "#F17171",
                                display: "inline",
                                color: "white",
                                padding: "0 10px",
                                borderRadius: "10px",
                              }}
                            >
                              High
                            </span>
                          </span>
                        </div>
                        <div className="mt-2">
                          <img
                            src={locationIcon}
                            className="me-1 mb-1"
                            style={{ width: "14px", height: "14px" }}
                          />
                          Kathmandu-14, Kathmandu, Nepal
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} className="d-flex justify-content-end mt-4">
                    <img
                      src={setAsFavIcon}
                      className="me-5"
                      style={{ width: "15px", height: "15px" }}
                    />
                    <img
                      src={shareIcon}
                      className="me-5"
                      style={{ width: "15px", height: "15px" }}
                    />
                    <img
                      src={flagIcon}
                      className="me-5"
                      style={{ width: "15px", height: "15px" }}
                    />
                  </Col>
                </Row>

                <Row>
                  {/* Existing content goes here */}
                  <Col md={12} className="mt-3">
                    {/* <Nav tabs className="text-secondary">
                      <NavItem className="text-secondary">
                        <NavLink
                          className={`${activeTab === "overview" ? "active border-bottom" : ""} text-secondary` }
                          onClick={() => toggleTab("overview")}
                          style={{ cursor: "pointer" }}
                        >
                          Overview
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={`${activeTab === "documents" ? "active" : ""} text-secondary` }
                          onClick={() => toggleTab("documents")}
                          style={{ cursor: "pointer" }}
                        >
                          Documents
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={`${activeTab === "activities" ? "active" : ""} text-secondary` }
                          onClick={() => toggleTab("activities")}
                          style={{ cursor: "pointer" }}
                        >
                          Activities
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={`${activeTab === "team" ? "active" : ""} text-secondary` }
                          onClick={() => toggleTab("team")}
                          style={{ cursor: "pointer" }}
                        >
                          Team
                        </NavLink>
                      </NavItem>
                    </Nav> */}
                    <Nav className="nav-tabs-custom border-bottom-0" role="tablist">
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === 'overview' }, "")}
                          onClick={() => { toggleTab('overview'); }}
                          href="#">
                          Overview
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === 'documents' }, "")}
                          onClick={() => { toggleTab('documents'); }}
                          href="#">
                          Documents
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === 'activities' }, "")}
                          onClick={() => { toggleTab('activities'); }}
                          href="#">
                          Activities
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === 'team' }, "")}
                          onClick={() => { toggleTab('team'); }}
                          href="#">
                          Team
                        </NavLink>
                      </NavItem>
                    </Nav>
                    {/* <TabContent activeTab={activeTab}>
                      <TabPane tabId="overview"><Overview/></TabPane>
                      <TabPane tabId="documents"><Documents/></TabPane>
                      <TabPane tabId="activities"><Activities/></TabPane>
                      <TabPane tabId="team"><Team/></TabPane>
                    </TabContent> */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid>
          {activeTab === "overview" && <Overview />}
          {activeTab === "documents" && <Documents />}
          {activeTab === "activities" && <Activities />}
          {activeTab === "team" && <Team />}
        </Container>
      </div>
    </>
  );
}
