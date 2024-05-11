import React, { useState } from "react";
import { Card, CardBody, CardHeader, Row, Col, Button } from "reactstrap";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionMinor } from "../../slices/selection.slice";
import { removeGuardian, updateSelectedGuardians } from "../../slices/KycMinor.slice";

export default function Guardian() {
  const dispatch = useDispatch();
  const selectedGuardians = useSelector((state) => state.KycMinor.selectedGuardians);

  const relationshipOptions = [
    {
      value: "father",
      label: "Father",
    },
    { value: "mother", label: "Mother" },
    { value: "aunt", label: "Aunt" },
    { value: "uncle", label: "Uncle" },
  ];

  const availableGuardiansData = [
    {
      id: 0,
      name: "Guardian 1",
      citizenship: "941-444-78",
      accountType: "Savings",
      fatherName: "Father's Name",
    },
    {
      id: 1,
      name: "Guardian 2",
      citizenship: "941-555-78",
      accountType: "Current",
      fatherName: "John John",
    },
    {
      id: 2,
      name: "Guardian 3",
      citizenship: "941-555-78",
      accountType: "Current",
      fatherName: "John John",
    },
  ]


  const divStyle = {
    background:
      "radial-gradient(239.25% 1295.12% at 79.24% 61.63%, rgba(30, 81, 211, 0.129) 14.93%, rgba(30, 135, 211, 0.15) 33.33%, rgba(22, 177, 95, 0.1305) 67.16%, rgba(28, 208, 100, 0.15) 89.66%)",
    padding: 0,
    lineHeight: "1",
  };

  const [availableGuardians, setAvailableGuardians] = useState(availableGuardiansData)
  const [selectedRelationships, setSelectedRelationships] = useState([])

  const handleSelectChange = (relationship, id) => {
    // Check if an object with the same ID exists in the state array
    const existingIndex = selectedRelationships.findIndex((obj) => obj.id === id);

    if (existingIndex !== -1) {
      // Modify the existing object if found
      setSelectedRelationships((prevData) => {
        const updatedData = [...prevData];
        updatedData[existingIndex] = { id, relationship };
        return updatedData;
      });
    } else {
      // Add a new object if it doesn't exist
      const newRelationshipObj = { id, relationship };
      setSelectedRelationships((prevData) => [...prevData, newRelationshipObj]);
    }
  };

  const handleSetGuardian = (id) => {
    // Find the relationship object for the specified ID
    const relationshipObj = selectedRelationships.find((obj) => obj.id === id);

    if (relationshipObj) {
      // Find the guardian in availableGuardians by ID
      const selectedGuardian = availableGuardians.find((guardian) => guardian.id === id);
      // Add the relationship property from selectedRelationships to the guardian
      const modifiedGuardian = {
        ...selectedGuardian,
        relationship: relationshipObj.relationship,
      };

      const exists = selectedGuardians.some((guardian) => guardian.id === id);

      if (!exists) {
        dispatch(updateSelectedGuardians(modifiedGuardian));
        setAvailableGuardians((prevGuardians) =>
          prevGuardians.filter((guardian) => guardian.id !== id)
        );
      } else {
        console.log('Guardian with ID', id, 'already exists in selectedGuardians');
      }
    } else {
      console.error('No relationship found for the specified ID');
    }
  };

  const handleRemoveGuardian = (id) => {
    const removedGuardian = selectedGuardians.find((guardian) => guardian.id === id);

    dispatch(removeGuardian(removedGuardian));

    setAvailableGuardians((prevAvailableGuardians) => [
      ...prevAvailableGuardians,
      removedGuardian,
    ]);
  };

  return (
    <>
      <Card>
        <CardHeader className="fw-medium">Guardian Details</CardHeader>
        <p className="text-muted mt-4">Selected Guardians</p>

        {selectedGuardians.map((guardian) => (
          <Row
            key={guardian.id}
            style={divStyle}
            className="align-items-center mt-3 ms-3 me-3"
          >
            <Col md={12} className="d-flex mt-3 align-items-center">
              <Col xs="3" className="d-flex flex-column">
                <div className="d-flex">
                  <div>
                    <img
                      src="https://ylpapp.isb.edu/user/Passport_photo_samples/Sample-3---wrong.jpg"
                      alt="User Photo"
                      style={{
                        maxWidth: "70px", // Adjust the size as needed
                        maxHeight: "70px", // Adjust the size as needed
                      }}
                    />
                  </div>
                  <div className="ms-3">
                    <p>{guardian.name}</p>
                    <p className="text-muted">CIF: 2039290322</p>
                  </div>
                </div>
                <p className="mt-2">Kathmandu-4, Kathmandu, Nepal</p>
              </Col>

              <Col xs="3">
                <p>
                  <span className="text-muted">Citizenship:</span>{" "}
                  {guardian.citizenship}
                </p>
                <p>
                  <span className="text-muted">Account Type:</span>{" "}
                  {guardian.accountType}
                </p>
                <p>
                  <span className="text-muted">Father Name:</span>{" "}
                  {guardian.fatherName}
                </p>
              </Col>

              <Col xs="2">
                <p>
                  Phone: <span className="text-muted">79744564664</span>
                </p>
                <p>
                  Email: <span className="text-muted">abc@gmail.com</span>
                </p>
                <p>
                  Role: <span className="text-muted">Manager</span>
                </p>
              </Col>

              <Col xs="2" className="d-flex justify-content-between">
                <p>
                  Marital Status: <span className="text-muted">Single</span>
                </p>
              </Col>
              <Col xs="2" className="  text-center ">
                <Select
                  className="p-2 ps-5 pe-5"
                  isDisabled
                  value={{ label: guardian.relationship }}
                />

                <Button
                  color="danger"
                  className="mb-3 mt-2"
                  onClick={() => handleRemoveGuardian(guardian.id)}
                >
                  Remove
                </Button>
              </Col>
            </Col>
          </Row>
        ))}

        <p className="text-muted mt-4">Select a Guardian</p>

        {availableGuardians.map((guardian) => (
          <Row
            key={guardian.id}
            className="align-items-center ms-3 me-3 mb-3"
            style={{ border: "1px solid #ccc", lineHeight: "1" }}
          >
            <Col md={12} className="d-flex mt-3 align-items-center">
              <Col xs="3" className="d-flex flex-column">
                <div className="d-flex">
                  <div>
                    <img
                      src="https://ylpapp.isb.edu/user/Passport_photo_samples/Sample-3---wrong.jpg"
                      alt="User Photo"
                      style={{
                        maxWidth: "70px", // Adjust the size as needed
                        maxHeight: "70px", // Adjust the size as needed
                      }}
                    />
                  </div>
                  <div className="ms-3">
                    <p>{guardian.name}</p>
                    <p className="text-muted">CIF: 2039290322</p>
                  </div>
                </div>
                <p className="mt-2">Kathmandu-4, Kathmandu, Nepal</p>
              </Col>

              <Col xs="3">
                <p>
                  <span className="text-muted">Citizenship:</span>{" "}
                  {guardian.citizenship}
                </p>
                <p>
                  <span className="text-muted">Account Type:</span>{" "}
                  {guardian.accountType}
                </p>
                <p>
                  <span className="text-muted">Father Name:</span>{" "}
                  {guardian.fatherName}
                </p>
              </Col>

              <Col xs="2">
                <p>
                  Phone: <span className="text-muted">79744564664</span>
                </p>
                <p>
                  Email: <span className="text-muted">abc@gmail.com</span>
                </p>
                <p>
                  Role: <span className="text-muted">Manager</span>
                </p>
              </Col>

              <Col xs={2}>
                <p>
                  Marital Status: <span className="text-muted">Single</span>
                </p>
              </Col>

              <Col xs={2} className="  text-center p-4">
                <Select
                  options={relationshipOptions}
                  className="mb-2 m-4"
                  onChange={(selectedRelationship) => handleSelectChange(selectedRelationship.label, guardian.id)}
                />

                <Button
                  color="success"
                  type="submit"
                  className="mb-3"
                  onClick={() => handleSetGuardian(guardian.id)}
                >
                  Set Guardian
                </Button>
              </Col>
            </Col>
          </Row>
        ))}
        <div className="d-flex justify-content-between mt-4 mb-4">
          <Button
            color="light"
            onClick={() => dispatch(setKycSelectionMinor("ContactMinor"))}
          >
            Back
          </Button>
          <Button
            color="primary"
            type="submit"
            onClick={() =>
              dispatch(setKycSelectionMinor("IdentificationMinor"))
            }
          >
            Next
          </Button>
        </div>
      </Card>
    </>
  );
}
