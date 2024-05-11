import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactSelect from 'react-select';
import { Row, Col, Label, Input, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { fetchDesignationList } from '../../../slices/CentralizedKYC/Dropdowns/thunk';

const selectedPersons = [
    {
        name: "Bibisha Bhattarai",
        cif: "8955555",
        phone: "98418955555",
        role: "Manager",
        image: "https://xsgames.co/randomusers/avatar.php?g=female"
    },
    {
        name: "Sample User 2",
        cif: "123456",
        phone: "9876543210",
        role: "Employee",
        image: "https://xsgames.co/randomusers/avatar.php?g=male"
    },
]
const allPersons = [
    {
        name: "Bibisha Bhattarai",
        cif: "8955555",
        phone: "98418955555",
        role: "Manager",
        image: "https://xsgames.co/randomusers/avatar.php?g=female"
    },
    {
        name: "Sample User 8",
        cif: "123456",
        phone: "9876543210",
        role: "Employee",
        image: "https://xsgames.co/randomusers/avatar.php?g=female"
    },
    {
        name: "John Doe",
        cif: "987654",
        phone: "1234567890",
        role: "Analyst",
        image: "https://xsgames.co/randomusers/avatar.php?g=male"
    },
    {
        name: "Jane Smith",
        cif: "555555",
        phone: "5555555555",
        role: "Supervisor",
        image: "https://xsgames.co/randomusers/avatar.php?g=female"
    },
    {
        name: "Michael Johnson",
        cif: "987123",
        phone: "9876543210",
        role: "Executive",
        image: "https://xsgames.co/randomusers/avatar.php?g=male"
    }
]


export default function AccountOperators() {
   const dispatch = useDispatch();

    const [availableShareholders, setAvailableShareholders] = useState(allPersons);


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        designation: 'Select designation', // Set an initial value
        accountNumber: '',
    });

  // Getting Dropdown Data
  const DesignationList = useSelector((state) => state.Dropdown?.Designation);

  useEffect(() => {
    dispatch(fetchDesignationList());
   

  }, []);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAddOperator = () => {
        const newOperator = {
            name: `${formData.firstName} ${formData.lastName}`,
            cif: formData.accountNumber,
            phone: 'Unavailable',
            role: formData.designation,
            image: 'https://xsgames.co/randomusers/avatar.php?g=male', // Update with an appropriate image
        };

        setAvailableShareholders(prevShareholders => [...prevShareholders, newOperator]); // Add the new operator to availableShareholders
    
        setFormData({
            firstName: '',
            lastName: '',
            designation: 'Select designation',
            accountNumber: '',
        });
    }
    
    const Designation =  DesignationList?.map((item) => ({
        value: item.title,
        label: item.title,
      }));



    return <>
        <p className='text-muted'>Add Operator Manually</p>
        <Row>
            <Col md={4} className='mt-4'>
                <Label>First Name</Label>
                <Input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
            </Col>

            <Col md={4} className="mt-4">
                <Label>Last Name</Label>
                <Input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
            </Col>

            <Col lg={4} className="mt-4">
                <Label>Designation</Label>
                <ReactSelect
                  id="designation"
                  name="designation"
                  placeholder={"Choose your account type"}
                  options={Designation}
                  value={Designation?.find(
                    (option) => option.value === formData.designation
                  )}
                  onChange={(value) => {
                    handleSelect("designation", value);
                  }}
                //   onBlur={() => {
                //     formik.setFieldTouched("designation", true);
                //   }}
                />
                {/* {formik.touched.designation &&
                  selectTouched.designation === false && (
                    <p className="text-danger">{formik.errors.designation}</p>
                  )} */}
            </Col>
        </Row>
        <Row className='justify-content-between'>
            <Col md={4} className='mt-4'>
                <Label>Account Number</Label>
                <Input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} />
            </Col>
            <Col md={2} className='mt-5 d-flex justify-content-end'>
                <Button color="primary" onClick={handleAddOperator}>Add Operator</Button>
            </Col>
        </Row>
        <p className='text-muted mt-5'>Selected Persons</p>
        <Row className=''>
            {selectedPersons.map((person, index) => <Col key={index} xl={3} md={4} sm={6}>
                <Card style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', }} className='d-flex flex-row'>
                    <img src={person.image}
                        style={{ height: '90px', width: '90px' }}
                        className='mt-3 mb-3 ms-3'
                    />
                    <div className='ms-4 mt-3' style={{ lineHeight: '0.8' }}>
                        <p>{person.name}</p>
                        <p className='text-muted'>{person.cif}</p>
                        <p className='text-muted'>{person.phone}</p>
                        <p className='text-muted'>{person.role}</p>
                    </div>
                </Card>
            </Col>
            )}

        </Row>
        <p className='text-muted mt-5'>Select a Shareholder</p>
        <Row className=''>
            {availableShareholders.map((person, index) => <Col key={index} xl={3} md={4} sm={6}>
                <Card style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', }} className='d-flex flex-row'>
                    <img src={person.image}
                        style={{ height: '90px', width: '90px' }}
                        className='mt-3 mb-3 ms-3'
                    />
                    <div className='ms-4 mt-3' style={{ lineHeight: '0.8' }}>
                        <p>{person.name}</p>
                        <p className='text-muted'>{person.cif}</p>
                        <p className='text-muted'>{person.phone}</p>
                        <p className='text-muted'>{person.role}</p>
                    </div>
                </Card>
            </Col>
            )}

        </Row>
    </>
}