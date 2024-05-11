import React, { useState, useEffect, useRef } from "react";
import { Card, Row, Col, CardBody, CardHeader, Button } from "reactstrap";
import fileIcon from "../../assets/icons/fileIcon.png";
import downloadIcon from "../../assets/icons/downloadIcon.png";
import threeDotIcon from "../../assets/icons/threeDotIcon.png";
import replyIcon from "../../assets/icons/replyIcon.png";
import uploadAttachmentsIcon from "../../assets/icons/uploadAttachmentsIcon.png";
import openLinkIcon from "../../assets/icons/openLinkIcon.png";
import uploadIcon from "../../assets/icons/uploadIcon.png";

function ScrollableContent({
  children,
  activeSection,
  setActiveSection,
  activeByClick,
}) {
  const scrollbarStyles = {
    maxHeight: "444px",
    overflowY: "auto",
  };

  const contentRef = useRef();
  const isClickRef = useRef(false);

  useEffect(() => {
    isClickRef.current = true;

    const timeout = setTimeout(() => {
      isClickRef.current = false;
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, [activeByClick]);

  useEffect(() => {
    const contentElement = contentRef.current;

    // Calculate the scroll position
    const personalInfoSection = document.querySelector(
      '[data-section="Personal Info"]'
    );
    const accountInfoSection = document.querySelector(
      '[data-section="Account Info"]'
    );
    const familyInfoSection = document.querySelector(
      '[data-section="Family Info"]'
    );
    const occupationSection = document.querySelector(
      '[data-section="Occupation"]'
    );
    const transactionInfoSection = document.querySelector(
      '[data-section="Transaction Info"]'
    );
    const servicesSection = document.querySelector('[data-section="Services"]');
    const identificationSection = document.querySelector(
      '[data-section="Identification"]'
    );
    const recommenderSection = document.querySelector(
      '[data-section="Recommender"]'
    );

    const personalInfoSectionAtTop = personalInfoSection.offsetTop;
    const accountInfoSectionAtTop = accountInfoSection.offsetTop;
    const familyInfoSectionAtTop = familyInfoSection.offsetTop;
    const occupationSectionAtTop = occupationSection.offsetTop;
    const transactionInfoSectionAtTop = transactionInfoSection.offsetTop;
    const servicesSectionAtTop = servicesSection.offsetTop;
    const identificationSectionAtTop = identificationSection.offsetTop;
    const recommenderSectionAtTop = recommenderSection.offsetTop;

    const handleScroll = () => {
      console.log("scrolled");
      if (isClickRef.current) return;
      console.log("nooo");

      const currentPosition = contentElement.scrollTop;

      if (0 <= currentPosition && currentPosition < accountInfoSectionAtTop) {
        setActiveSection("Personal Info");
      } else if (
        accountInfoSectionAtTop < currentPosition &&
        currentPosition < familyInfoSectionAtTop
      ) {
        setActiveSection("Account Info");
      } else if (
        familyInfoSectionAtTop < currentPosition &&
        currentPosition < occupationSectionAtTop
      ) {
        setActiveSection("Family Info");
      } else if (
        occupationSectionAtTop < currentPosition &&
        currentPosition < transactionInfoSectionAtTop
      ) {
        setActiveSection("Occupation");
      } else if (
        transactionInfoSectionAtTop < currentPosition &&
        currentPosition < servicesSectionAtTop
      ) {
        setActiveSection("Transaction Info");
      } else if (
        servicesSectionAtTop < currentPosition &&
        currentPosition < identificationSectionAtTop
      ) {
        setActiveSection("Services");
      } else if (
        identificationSectionAtTop < currentPosition &&
        currentPosition < recommenderSectionAtTop
      ) {
        setActiveSection("Identification");
      } else if (recommenderSectionAtTop < currentPosition) {
        setActiveSection("Recommender");
      }
    };

    contentElement.addEventListener("scroll", handleScroll);
    return () => {
      contentElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const contentElement = contentRef.current;

    // Calculate the scroll position for the "Account Info" section
    const personalInfoSection = document.querySelector(
      '[data-section="Personal Info"]'
    );
    const accountInfoSection = document.querySelector(
      '[data-section="Account Info"]'
    );
    const familyInfoSection = document.querySelector(
      '[data-section="Family Info"]'
    );
    const occupationSection = document.querySelector(
      '[data-section="Occupation"]'
    );
    const transactionInfoSection = document.querySelector(
      '[data-section="Transaction Info"]'
    );
    const servicesSection = document.querySelector('[data-section="Services"]');
    const identificationSection = document.querySelector(
      '[data-section="Identification"]'
    );
    const recommenderSection = document.querySelector(
      '[data-section="Recommender"]'
    );

    const personalInfoSectionAtTop = personalInfoSection.offsetTop;
    const accountInfoSectionAtTop = accountInfoSection.offsetTop;
    const familyInfoSectionAtTop = familyInfoSection.offsetTop;
    const occupationSectionAtTop = occupationSection.offsetTop;
    const transactionInfoSectionAtTop = transactionInfoSection.offsetTop;
    const servicesSectionAtTop = servicesSection.offsetTop;
    const identificationSectionAtTop = identificationSection.offsetTop;
    const recommenderSectionAtTop = recommenderSection.offsetTop;

    const scrollToSection = (section) => {
      setActiveSection(section);
      switch (section) {
        case "Personal Info":
          contentElement.scrollTo({ top: 0, behavior: "smooth" });
          break;
        case "Account Info":
          contentElement.scrollTo({
            top: accountInfoSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Family Info":
          contentElement.scrollTo({
            top: familyInfoSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Occupation":
          contentElement.scrollTo({
            top: occupationSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Transaction Info":
          contentElement.scrollTo({
            top: transactionInfoSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Services":
          contentElement.scrollTo({
            top: servicesSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Identification":
          contentElement.scrollTo({
            top: identificationSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Recommender":
          contentElement.scrollTo({
            top: recommenderSectionAtTop,
            behavior: "smooth",
          });
          break;
        default:
          break;
      }
    };

    scrollToSection(activeByClick);
  }, [activeByClick]);

  return (
    <div className="col-md-10 pe-0 border rounded-3">
      <div
        ref={contentRef}
        className="scrollable-content"
        style={scrollbarStyles}
      >
        {children}
      </div>
    </div>
  );
}

export default function Overview() {
  const [activeSection, setActiveSection] = useState("Personal Info");
  const [activeByClick, setActiveByClick] = useState("Personal Info");
  return (
    <>
      <Row>
        <Col md={9} className="mt-4">
          <Card className="p-0">
            <CardHeader className="px-4">
              <div className="">
                <h5 className="m-0">SUMMARY</h5>
              </div>
            </CardHeader>

            <CardBody className="px-4 ">
              <Row>
                <Col md={2}>
                  <div className=" border rounded-2 fs-13 px-2 py-4">
                    <p
                      className={`${
                        activeSection === "Personal Info"
                          ? "fw-semibold border-bottom text-end"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Personal Info")}
                    >
                      -Personal Info
                    </p>
                    <p
                      className={`${
                        activeSection === "Account Info"
                          ? "fw-semibold border-bottom text-end"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Account Info")}
                    >
                      -Account Info
                    </p>
                    <p
                      className={`${
                        activeSection === "Family Info"
                          ? "fw-semibold border-bottom text-end"
                          : "text-muted"
                      }`}
                      onClick={() => {
                        setActiveByClick("Family Info");
                      }}
                    >
                      -Family Info
                    </p>
                    <p
                      className={`${
                        activeSection === "Occupation"
                          ? "fw-semibold border-bottom text-end"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Occupation")}
                    >
                      -Occupation
                    </p>
                    <p
                      className={`${
                        activeSection === "Transaction Info"
                          ? "fw-semibold border-bottom text-end"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Transaction Info")}
                    >
                      -Transaction Info
                    </p>
                    <p
                      className={`${
                        activeSection === "Services"
                          ? "fw-semibold  border-bottom text-end"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Services")}
                    >
                      -Services
                    </p>
                    <p
                      className={`${
                        activeSection === "Identification"
                          ? "fw-semibold border-bottom text-end"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Identification")}
                    >
                      -Identification
                    </p>
                    <p
                      className={`${
                        activeSection === "Recommender"
                          ? "fw-semibold border-bottom text-end"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Recommender")}
                    >
                      -Recommender
                    </p>
                  </div>
                </Col>

                <ScrollableContent
                  clasName="pe-0 pb-5"
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                  activeByClick={activeByClick}
                >
                  <Col md={12} className="p-3 gy-5 pb-5 scrollable-section">
                    {/* Personal Info */}
                    <div className="row " data-section="Personal Info">
                      <h5 className="fw-semibold text-muted mt-5 mb-5">
                        Personal Info
                      </h5>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Name</p>
                            <p>Nationality</p>
                            <p>Marital Status</p>
                            <p>Gender</p>
                            <p>Date of Birth</p>
                            <p>Education</p>
                            <p>Family Size</p>
                          </Col>
                          <Col md={6}>
                            <p>Anish Aryal</p>
                            <p>Father</p>
                            <p>Anish Aryal</p>
                            <p>Anish Aryal</p>
                            <p>2020-05-05</p>
                            <p>Bachelors</p>
                            <p>10</p>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={6}>
                        <Row className="rightside">
                          <Col md={6} className="fw-semibold">
                            <p>Guardian's Name</p>
                            <p>Guardian's Relationship</p>
                            <p>Father's Name</p>
                            <p>Mother's Name</p>
                            <p>Grandfather's Name</p>
                            <p>Grandmother's Name</p>
                            <p>Husband/Wife</p>
                          </Col>
                          <Col md={6}>
                            <p>Manish Aryal</p>
                            <p>Father</p>
                            <p>Anish Aryal</p>
                            <p>Anish Aryal</p>
                            <p>2020-05-05</p>
                            <p>Bachelors</p>
                            <p>10</p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Account Info */}
                    <div className="row " data-section="Account Info">
                      <h5 className="fw-semibold text-muted mt-5 mb-5">
                        Account Information
                      </h5>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Account Type</p>
                            <p>Branch Name</p>
                            <p>Account Number</p>
                            <p>Purpose of Account Opening</p>
                          </Col>
                          <Col md={6}>
                            <p>Saving</p>
                            <p>Saving</p>
                            <p>Kalanki</p>
                            <p>1515454516654ANPR</p>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={6}>
                        <Row className="rightside">
                          <Col md={6} className="fw-semibold">
                            <p>Sources of Fund</p>
                            <p>Currency</p>
                          </Col>
                          <Col md={6}>
                            <p>Business</p>
                            <p>NPR</p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Family Info */}
                    <div className="row " data-section="Family Info">
                      <h5 className="fw-semibold  mt-5 mb-5 text-muted">
                        Family Information
                      </h5>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Name</p>
                            <p>Relationship</p>
                            <p>Citizenship/ID Number</p>
                            <p>date of Birth</p>
                            <p>Issued Place</p>
                          </Col>
                          <Col md={6}>
                            <p>Anish Aryal</p>
                            <p>Father</p>
                            <p>23-23-232332</p>
                            <p>2020-05-05</p>
                            <p>Kathmandu</p>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={6}>
                        <Row className="rightside">
                          <Col md={6} className="fw-semibold">
                            <p>Issued Date</p>
                            <p>Bank Account Number</p>
                            <p>Contact Number</p>
                            <p>Is Alive</p>
                          </Col>
                          <Col md={6}>
                            <p>2020-05-05</p>
                            <p>23423423422S</p>
                            <p>9861388523</p>
                            <p>yes</p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Occupation */}
                    <div className="row " data-section="Occupation">
                      <h5 className="fw-semibold  mt-5 mb-5 text-muted">
                        Occupation Information
                      </h5>

                      <Col md={6}>
                        <h6 className="fw-semibold  mt-1 mb-3 text-muted">
                          Salaried/ Others
                        </h6>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Institution Name </p>
                            <p>Designation Name</p>
                            <p>Occupation Type</p>
                            <p>Estimated Annual Income</p>
                          </Col>
                          <Col md={6}>
                            <p>Ants Pvt Ltd</p>
                            <p>Developer</p>
                            <p>Profession</p>
                            <p>2000000</p>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={6}>
                        <h6 className="fw-semibold  mt-3 mb-3 text-muted">
                          Additional Occupation
                        </h6>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Institution Name </p>
                            <p>Designation</p>
                            <p>Occupation Type</p>
                            <p>Estimated Annual Income</p>
                          </Col>
                          <Col md={6}>
                            <p>Traders Co-operatives</p>
                            <p>CEO</p>
                            <p>Busines</p>
                            <p>20000032</p>
                          </Col>
                        </Row>
                      </Col>

                      <h6 className="fw-semibold  mt-1 mb-3 text-muted">
                        Self Employed
                      </h6>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Institution Name </p>
                            <p>Institution PAN Number</p>
                            <p>Occupation Type</p>
                            <p>Nature of Busines</p>
                            <p>Annual Turn Over </p>
                            <p>Estimated Annual Income</p>
                          </Col>
                          <Col md={6}>
                            <p>Dipendra Pvt Ltd</p>
                            <p>420420420</p>
                            <p>Business</p>
                            <p>Private</p>
                            <p>200000000</p>
                            <p>420</p>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={6}>
                        <Row className="rightside">
                          <Col md={6} className="fw-semibold">
                            <p>Lisence/Registration Renewal Date </p>
                            <p>Constitution</p>
                            <p>Total Employee</p>
                            <p>Total N.O of branch</p>
                          </Col>
                          <Col md={6}>
                            <p>2020-05-05l</p>
                            <p>Legal</p>
                            <p>1</p>
                            <p>420</p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Transaction Info */}
                    <div className="row " data-section="Transaction Info">
                      <h5 className="fw-semibold  mt-5 mb-5 text-muted">
                        Transaction Information
                      </h5>
                      <h6 className="fw-semibold  mt-1 mb-4 text-muted">
                        Maximum Transaction in Single Transaction{" "}
                      </h6>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Deposit</p>
                            <p>Withdrawal</p>
                          </Col>
                          <Col md={6}>
                            <p>234234234</p>
                            <p>2342423</p>
                          </Col>
                        </Row>
                      </Col>
                      <h6 className="fw-semibold  mt-2 mb-4 text-muted">
                        Maximum Number of Transaction in Single Day
                      </h6>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Deposit</p>
                            <p>Withdrawal</p>
                          </Col>
                          <Col md={6}>
                            <p>23</p>
                            <p>23</p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Services */}
                    <div className="row" data-section="Services">
                      <h5 className="fw-semibold  mt-5 mb-5 text-muted">
                        Services You Selected
                      </h5>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Frequency Statement</p>
                            <p>Mode of Delivery Statement</p>
                            <p>Statement Print</p>
                            <p>Debit Card Service</p>
                            <p>Debit Card Type*</p>
                            <p>Phone Pay</p>
                            <p>Transaction Alert</p>
                            <p> Merchant QR </p>
                          </Col>
                          <Col md={6}>
                            <p>Daily</p>
                            <p>Special</p>
                            <p>Nepali Calendar</p>
                            <p>Yes</p>
                            <p>Visa</p>
                            <p>Yes</p>
                            <p>Yes</p>
                            <p>Yes</p>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={6}>
                        <Row className="rightside">
                          <Col md={6} className="fw-semibold">
                            <p>Online Banking</p>
                            <p>Mobile Banking</p>
                            <p>SMS Banking</p>
                            <p>Phone Pay</p>
                          </Col>
                          <Col md={6}>
                            <p>Yesl</p>
                            <p>No</p>
                            <p>Yes</p>
                            <p>Yes</p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Identification */}
                    <div className="row" data-section="Identification">
                      <h5 className="fw-semibold text-muted  mt-5 mb-5">
                        Identification
                      </h5>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Identification Type</p>
                            <p>ID Number</p>
                            <p>Issued Place</p>
                            <p>Issued By</p>
                          </Col>
                          <Col md={6}>
                            <p>Citizenship</p>
                            <p>23-23-23232</p>
                            <p>Kathmandu</p>
                            <p>Person Thapa</p>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={6}>
                        <Row className="rightside">
                          <Col md={6} className="fw-semibold">
                            <p>Issued Date</p>
                            <p>Expiry Date</p>
                            <p>PAN Number</p>
                          </Col>
                          <Col md={6}>
                            <p>12-12-2012</p>
                            <p>12-12-2012</p>
                            <p>2342342234</p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Recommender */}
                    <div className="row pb-5 mb-5" data-section="Recommender">
                      <h5 className="fw-semibold text-muted  mt-5 mb-5">
                        Recommender
                      </h5>
                      <Col md={6} className="pb-5 mb-5">
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Title</p>
                            <p>Name</p>
                            <p>Account Numbe</p>
                          </Col>
                          <Col md={6}>
                            <p>Mr.</p>
                            <p>zoro</p>
                            <p>0N3P1363</p>
                          </Col>
                        </Row>
                      </Col>
                    </div>
                  </Col>
                </ScrollableContent>
              </Row>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="py-4 px-0">
              <Row>
                <Col className="d-flex align-items-center justify-content-center fw-semibold">
                  AML
                </Col>

                <Col className="">
                  <p className="text-muted">CHECKED</p>
                  <p>15 Sep, 2021</p>
                </Col>
                <Col className="">
                  <p className="text-muted">CHECKED BY:</p>
                  <p>Samir Maharjan</p>
                </Col>
                <Col className="">
                  <p className="text-muted">STATUS:</p>
                  <span class="badge badge-label bg-success">
                    <i class="mdi mdi-circle-medium"></i> Pass
                  </span>
                </Col>
                <Col className="">
                  <p className="text-muted">LINK</p>
                  <p
                    style={{
                      background: "#3D78E3",
                      color: "white",
                      display: "inline",
                      padding: "7px",
                      borderRadius: "25px", // Add border-radius for a more blunt edge
                    }}
                  >
                    Open
                    <img
                      className="ms-2"
                      src={openLinkIcon}
                      style={{ width: "15px", height: "15px" }}
                    />
                  </p>
                </Col>
              </Row>
              <hr style={{ borderTop: "1px dashed #000" }} />
              <Row>
                <Col className="d-flex align-items-center justify-content-center fw-semibold">
                  CIB
                </Col>

                <Col className="">
                  <p className="text-muted">CHECKED</p>
                  <p>15 Sep, 2021</p>
                </Col>
                <Col className="">
                  <p className="text-muted">CHECKED BY:</p>
                  <p>Samir Maharjan</p>
                </Col>
                <Col className="">
                  <p className="text-muted">STATUS:</p>
                  <span class="badge badge-label bg-danger">
                    <i class="mdi mdi-circle-medium"></i> Fail
                  </span>
                </Col>
                <Col className="">
                  <p className="text-muted">LINK</p>
                  <p
                    style={{
                      background: "#3D78E3",
                      color: "white",
                      display: "inline",
                      padding: "7px",
                      borderRadius: "25px", // Add border-radius for a more blunt edge
                    }}
                  >
                    Open
                    <img
                      className="ms-2"
                      src={openLinkIcon}
                      style={{ width: "15px", height: "15px" }}
                    />
                  </p>
                </Col>
              </Row>
              <hr style={{ borderTop: "1px dashed #000" }} />

              <Row>
                <Col className="d-flex align-items-center justify-content-center fw-semibold">
                  ECDD
                </Col>

                <Col className="">
                  <p className="text-muted">CHECKED</p>
                  <p>15 Sep, 2021</p>
                </Col>
                <Col className="">
                  <p className="text-muted">CHECKED BY:</p>
                  <p>Samir Maharjan</p>
                </Col>
                <Col className="">
                  <p className="text-danger">RISK GRADE:</p>

                  <span class="badge outline-pill text-bg-danger">High</span>
                </Col>
                <Col className="">
                  <p className="text-muted">LINK</p>
                  <p
                    className="fw-semibold"
                    style={{
                      background: "#3D78E3",
                      color: "white",
                      display: "inline",
                      padding: "7px",
                      borderRadius: "25px", // Add border-radius for a more blunt edge
                    }}
                  >
                    Open
                    <img
                      className="ms-2"
                      src={openLinkIcon}
                      style={{ width: "15px", height: "15px" }}
                    />
                  </p>
                </Col>
              </Row>
            </CardBody>
          </Card>

          <Card className="p-0">
            <h5 className="text-muted mt-4 px-3 ">RESOURCES</h5>
            <CardBody className="px-4">
              <Row className="gap-2">
                <Col
                  className="d-flex justify-content-between py-3 px-3 rounded-3"
                  style={{ border: "2px dotted #E3E3E3", borderRadius: "3px" }}
                >
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={39}
                      height={40}
                      viewBox="0 0 39 40"
                      fill="none"
                    >
                      <rect
                        width="38.9529"
                        height={40}
                        rx="3.33333"
                        fill="#F3F6F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.1888 12.5L19.8118 14.1667H26.7795C27.2277 14.1667 27.591 14.5398 27.591 15V26.6667C27.591 27.1269 27.2277 27.5 26.7795 27.5H12.1722C11.724 27.5 11.3607 27.1269 11.3607 26.6667V13.3333C11.3607 12.8731 11.724 12.5 12.1722 12.5H18.1888ZM24.3446 25H21.0986V22.5H22.7216V20.8333H21.0986V19.1667H22.7216V17.5H21.0986V15.8333H19.1396L17.5165 14.1667H12.9834V25.8333H25.9677V15.8333H22.7216V17.5H24.3446V19.1667H22.7216V20.8333H24.3446V25Z"
                        fill="#3D78E3"
                      />
                    </svg>

                    <div
                      className="d-flex ms-3 align-items-center"
                      style={{ lineHeight: "1" }}
                    >
                      <div>
                        <p className="mb-2">Hand Filled Form.pdf</p>
                        <p className="text-muted mb-0">2.5MB</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={21}
                      height={21}
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9104 9.09922H14.3188L10.2287 13.2992L6.13867 9.09922H9.54705V4.19922H10.9104V9.09922ZM4.77107 15.3985H15.6779V10.4985H17.0412V16.0985C17.0412 16.4851 16.736 16.7985 16.3596 16.7985H4.08939C3.71291 16.7985 3.40771 16.4851 3.40771 16.0985V10.4985H4.77107V15.3985Z"
                        fill="#9599AD"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={19}
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.10241 8C3.299 8 2.64167 8.675 2.64167 9.5C2.64167 10.325 3.299 11 4.10241 11C4.90581 11 5.56314 10.325 5.56314 9.5C5.56314 8.675 4.90581 8 4.10241 8ZM14.329 8C13.5256 8 12.8682 8.675 12.8682 9.5C12.8682 10.325 13.5256 11 14.329 11C15.1324 11 15.7897 10.325 15.7897 9.5C15.7897 8.675 15.1324 8 14.329 8ZM9.21569 8C8.41229 8 7.75496 8.675 7.75496 9.5C7.75496 10.325 8.41229 11 9.21569 11C10.0191 11 10.6764 10.325 10.6764 9.5C10.6764 8.675 10.0191 8 9.21569 8Z"
                        fill="#9599AD"
                      />
                    </svg>
                  </div>
                </Col>
                <Col
                  className="d-flex justify-content-between py-3 px-3 rounded-3"
                  style={{ border: "2px dotted #E3E3E3", borderRadius: "3px" }}
                >
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={39}
                      height={40}
                      viewBox="0 0 39 40"
                      fill="none"
                    >
                      <rect
                        width="38.9529"
                        height={40}
                        rx="3.33333"
                        fill="#F3F6F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.1888 12.5L19.8118 14.1667H26.7795C27.2277 14.1667 27.591 14.5398 27.591 15V26.6667C27.591 27.1269 27.2277 27.5 26.7795 27.5H12.1722C11.724 27.5 11.3607 27.1269 11.3607 26.6667V13.3333C11.3607 12.8731 11.724 12.5 12.1722 12.5H18.1888ZM24.3446 25H21.0986V22.5H22.7216V20.8333H21.0986V19.1667H22.7216V17.5H21.0986V15.8333H19.1396L17.5165 14.1667H12.9834V25.8333H25.9677V15.8333H22.7216V17.5H24.3446V19.1667H22.7216V20.8333H24.3446V25Z"
                        fill="#3D78E3"
                      />
                    </svg>

                    <div
                      className="d-flex ms-3 align-items-center"
                      style={{ lineHeight: "1" }}
                    >
                      <div>
                        <p className="mb-2">Hand Filled Form.pdf</p>
                        <p className="text-muted mb-0">2.5MB</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={21}
                      height={21}
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9104 9.09922H14.3188L10.2287 13.2992L6.13867 9.09922H9.54705V4.19922H10.9104V9.09922ZM4.77107 15.3985H15.6779V10.4985H17.0412V16.0985C17.0412 16.4851 16.736 16.7985 16.3596 16.7985H4.08939C3.71291 16.7985 3.40771 16.4851 3.40771 16.0985V10.4985H4.77107V15.3985Z"
                        fill="#9599AD"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={19}
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.10241 8C3.299 8 2.64167 8.675 2.64167 9.5C2.64167 10.325 3.299 11 4.10241 11C4.90581 11 5.56314 10.325 5.56314 9.5C5.56314 8.675 4.90581 8 4.10241 8ZM14.329 8C13.5256 8 12.8682 8.675 12.8682 9.5C12.8682 10.325 13.5256 11 14.329 11C15.1324 11 15.7897 10.325 15.7897 9.5C15.7897 8.675 15.1324 8 14.329 8ZM9.21569 8C8.41229 8 7.75496 8.675 7.75496 9.5C7.75496 10.325 8.41229 11 9.21569 11C10.0191 11 10.6764 10.325 10.6764 9.5C10.6764 8.675 10.0191 8 9.21569 8Z"
                        fill="#9599AD"
                      />
                    </svg>
                  </div>
                </Col>
                <Col
                  className="d-flex justify-content-between py-3 px-3 rounded-3"
                  style={{ border: "2px dotted #E3E3E3", borderRadius: "3px" }}
                >
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={39}
                      height={40}
                      viewBox="0 0 39 40"
                      fill="none"
                    >
                      <rect
                        width="38.9529"
                        height={40}
                        rx="3.33333"
                        fill="#F3F6F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.1888 12.5L19.8118 14.1667H26.7795C27.2277 14.1667 27.591 14.5398 27.591 15V26.6667C27.591 27.1269 27.2277 27.5 26.7795 27.5H12.1722C11.724 27.5 11.3607 27.1269 11.3607 26.6667V13.3333C11.3607 12.8731 11.724 12.5 12.1722 12.5H18.1888ZM24.3446 25H21.0986V22.5H22.7216V20.8333H21.0986V19.1667H22.7216V17.5H21.0986V15.8333H19.1396L17.5165 14.1667H12.9834V25.8333H25.9677V15.8333H22.7216V17.5H24.3446V19.1667H22.7216V20.8333H24.3446V25Z"
                        fill="#3D78E3"
                      />
                    </svg>

                    <div
                      className="d-flex ms-3 align-items-center"
                      style={{ lineHeight: "1" }}
                    >
                      <div>
                        <p className="mb-2">Hand Filled Form.pdf</p>
                        <p className="text-muted mb-0">2.5MB</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={21}
                      height={21}
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9104 9.09922H14.3188L10.2287 13.2992L6.13867 9.09922H9.54705V4.19922H10.9104V9.09922ZM4.77107 15.3985H15.6779V10.4985H17.0412V16.0985C17.0412 16.4851 16.736 16.7985 16.3596 16.7985H4.08939C3.71291 16.7985 3.40771 16.4851 3.40771 16.0985V10.4985H4.77107V15.3985Z"
                        fill="#9599AD"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={19}
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.10241 8C3.299 8 2.64167 8.675 2.64167 9.5C2.64167 10.325 3.299 11 4.10241 11C4.90581 11 5.56314 10.325 5.56314 9.5C5.56314 8.675 4.90581 8 4.10241 8ZM14.329 8C13.5256 8 12.8682 8.675 12.8682 9.5C12.8682 10.325 13.5256 11 14.329 11C15.1324 11 15.7897 10.325 15.7897 9.5C15.7897 8.675 15.1324 8 14.329 8ZM9.21569 8C8.41229 8 7.75496 8.675 7.75496 9.5C7.75496 10.325 8.41229 11 9.21569 11C10.0191 11 10.6764 10.325 10.6764 9.5C10.6764 8.675 10.0191 8 9.21569 8Z"
                        fill="#9599AD"
                      />
                    </svg>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="fw-bold">Comments</CardHeader>
            <CardBody>
              <div className="d-flex">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                  }}
                />
                <div style={{ lineHeight: "1" }}>
                  <div className="d-flex mt-1">
                    <p className="fw-bold ms-3">Manish Shrestha</p>
                    <p className="text-muted ms-2">20 Dec 2021 - 5:47AM</p>
                  </div>
                  <p className="ms-3 text-muted">
                    I am getting messages from customers that whent they place
                    order they always gets error message.
                  </p>
                  <p
                    className="text-muted ms-3"
                    style={{
                      backgroundColor: "#F3F6F9",
                      display: "inline",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={replyIcon}
                      className="me-1"
                      style={{
                        width: "10px",
                        height: "10px",
                      }}
                    ></img>
                    Reply
                  </p>
                </div>
              </div>
              <div className="d-flex mt-4">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                  }}
                />
                <div style={{ lineHeight: "1" }}>
                  <div className="d-flex mt-1">
                    <p className="fw-bold ms-3">Anish Aryal </p>
                    <p className="text-muted ms-2">20 Dec 2021 - 5:47AM</p>
                  </div>
                  <p className="ms-3 text-muted">
                    I am getting messages from customers that whent they place
                    order they always gets error message.
                  </p>
                  <p
                    className="text-muted ms-3"
                    style={{
                      backgroundColor: "#F3F6F9",
                      display: "inline",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={replyIcon}
                      className="me-1"
                      style={{
                        width: "10px",
                        height: "10px",
                      }}
                    ></img>
                    Reply
                  </p>
                </div>
              </div>
              <div>
                <p className="fw-bold mb-3 mt-4">Leave a Comment</p>
                <textarea
                  className="form-control mb-3"
                  style={{
                    height: "150px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                ></textarea>
                <div className="d-flex align-items-center justify-content-end">
                  <img
                    className="me-3"
                    src={uploadAttachmentsIcon}
                    style={{
                      width: "15px",
                      height: "15px",
                    }}
                    alt="Upload Attachments Icon"
                  />
                  <Button>Submit</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={3} className="mt-4">
          <Card>
            <h5 className="text-muted mt-4 ms-4">Recommenders</h5>

            <hr
              style={{
                border: "none",
                borderTop: "1px dashed #000",
                borderRadius: "0",
              }}
            />

            <CardBody className="d-flex align-items-center">
              <div
                className="fw-bold"
                style={{
                  background: "#CBC3E3",
                  color: "#0013BD",
                  display: "inline-block",
                  borderRadius: "50%",
                  padding: "10px",
                  margin: "0 10px", // Add margin for spacing
                }}
              >
                AA
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ flexGrow: 1 }}
              >
                <p className="pt-3">Anish Aryal</p>
                <p
                  className="fw-bold"
                  style={{
                    backgroundColor: "#F3F6F9",
                    display: "inline",
                    padding: "5px 10px",
                    margin: "0 10px",
                  }}
                >
                  Support
                </p>
              </div>
              <img
                src={threeDotIcon}
                style={{ width: "25px", height: "25px" }}
                alt="Three Dot Icon"
              ></img>
            </CardBody>
            <CardBody className="d-flex align-items-center">
              <div
                className="fw-bold"
                style={{
                  background: "#90EE90",
                  color: "#31BD00",
                  display: "inline-block",
                  borderRadius: "50%",
                  padding: "10px",
                  margin: "0 10px", // Add margin for spacing
                }}
              >
                KB
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ flexGrow: 1 }}
              >
                <p className="pt-3">Kabindra Bakey</p>
                <p
                  className="fw-bold"
                  style={{
                    backgroundColor: "#F3F6F9",
                    display: "inline",
                    padding: "5px 10px",
                    margin: "0 10px",
                  }}
                >
                  IT
                </p>
              </div>
              <img
                src={threeDotIcon}
                style={{ width: "25px", height: "25px" }}
                alt="Three Dot Icon"
              ></img>
            </CardBody>
            <CardBody className="d-flex align-items-center">
              <div
                className="fw-bold"
                style={{
                  background: "#D3B683",
                  color: "#BD7100",
                  display: "inline-block",
                  borderRadius: "50%",
                  padding: "10px",
                  margin: "0 10px", // Add margin for spacing
                }}
              >
                SA
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ flexGrow: 1 }}
              >
                <p className="pt-3">Samir Aryal</p>
                <p
                  className="fw-bold"
                  style={{
                    backgroundColor: "#F3F6F9",
                    display: "inline",
                    padding: "5px 10px",
                    margin: "0 10px",
                  }}
                >
                  Finance
                </p>
              </div>
              <img
                src={threeDotIcon}
                style={{ width: "25px", height: "25px" }}
                alt="Three Dot Icon"
              ></img>
            </CardBody>
            <CardBody className="d-flex align-items-center">
              <div
                className="fw-bold"
                style={{
                  background: "#CBC3E3",
                  color: "#0013BD",
                  display: "inline-block",
                  borderRadius: "50%",
                  padding: "10px",
                  margin: "0 10px", // Add margin for spacing
                }}
              >
                AA
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ flexGrow: 1 }}
              >
                <p className="pt-3">Anish Aryal</p>
                <p
                  className="fw-bold"
                  style={{
                    backgroundColor: "#F3F6F9",
                    display: "inline",
                    padding: "5px 10px",
                    margin: "0 10px",
                  }}
                >
                  Insurance
                </p>
              </div>
              <img
                src={threeDotIcon}
                style={{ width: "25px", height: "25px" }}
                alt="Three Dot Icon"
              ></img>
            </CardBody>
            <CardBody className="d-flex align-items-center">
              <div
                className="fw-bold"
                style={{
                  background: "skyblue",
                  color: "blue",
                  display: "inline-block",
                  borderRadius: "50%",
                  padding: "10px",
                  margin: "0 10px", // Add margin for spacing
                }}
              >
                KA
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ flexGrow: 1 }}
              >
                <p className="pt-3">Kabindra Aryal</p>
                <p
                  className="fw-bold"
                  style={{
                    backgroundColor: "#F3F6F9",
                    display: "inline",
                    padding: "5px 10px",
                    margin: "0 10px",
                  }}
                >
                  Service
                </p>
              </div>
              <img
                src={threeDotIcon}
                style={{ width: "25px", height: "25px" }}
                alt="Three Dot Icon"
              ></img>
            </CardBody>
          </Card>
          <Card>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="text-muted ms-4">Attachments</h5>
              <p
                style={{
                  backgroundColor: "#E9F8FB",
                  color: "#29BADB",
                  padding: "10px",
                  borderRadius: "10px",
                }}
                className="ml-auto mt-3 me-3"
              >
                <img
                  className="me-2"
                  src={uploadIcon}
                  style={{ width: "15px", height: "15px" }}
                ></img>
                Upload
              </p>
            </div>

            <hr
              style={{
                border: "none",
                borderTop: "1px dashed #000",
                borderRadius: "0",
              }}
            />

            <Col
              className="d-flex justify-content-between m-3 p-3"
              style={{ border: "3px dotted #E3E3E3", borderRadius: "3px" }}
            >
              <div className="d-flex">
                <img
                  src={fileIcon}
                  alt="File Icon"
                  style={{ width: "70px", height: "70px" }}
                />
                <div
                  className="d-flex ms-3 align-items-center"
                  style={{ lineHeight: "1" }}
                >
                  <div>
                    <p className="fw-bold">Hand Filled Form.pdf</p>
                    <p className="text-muted">2.5MB</p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={downloadIcon}
                  style={{ width: "25px", height: "25px" }}
                  className="me-3"
                />
                <img
                  src={threeDotIcon}
                  style={{ width: "25px", height: "25px" }}
                  className="me-2"
                />
              </div>
            </Col>
            <Col
              className="d-flex justify-content-between m-3 p-3"
              style={{ border: "3px dotted #E3E3E3", borderRadius: "3px" }}
            >
              <div className="d-flex">
                <img
                  src={fileIcon}
                  alt="File Icon"
                  style={{ width: "70px", height: "70px" }}
                />
                <div
                  className="d-flex ms-3 align-items-center"
                  style={{ lineHeight: "1" }}
                >
                  <div>
                    <p className="fw-bold">Government Docs.pdf</p>
                    <p className="text-muted">2.5MB</p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={downloadIcon}
                  style={{ width: "25px", height: "25px" }}
                  className="me-3"
                />
                <img
                  src={threeDotIcon}
                  style={{ width: "25px", height: "25px" }}
                  className="me-2"
                />
              </div>
            </Col>
            <Col
              className="d-flex justify-content-between m-3 p-3"
              style={{ border: "3px dotted #E3E3E3", borderRadius: "3px" }}
            >
              <div className="d-flex">
                <img
                  src={fileIcon}
                  alt="File Icon"
                  style={{ width: "70px", height: "70px" }}
                />
                <div
                  className="d-flex ms-3 align-items-center"
                  style={{ lineHeight: "1" }}
                >
                  <div>
                    <p className="fw-bold">Images.zip</p>
                    <p className="text-muted">2.5MB</p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={downloadIcon}
                  style={{ width: "25px", height: "25px" }}
                  className="me-3"
                />
                <img
                  src={threeDotIcon}
                  style={{ width: "25px", height: "25px" }}
                  className="me-2"
                />
              </div>
            </Col>
          </Card>
        </Col>
      </Row>
    </>
  );
}
