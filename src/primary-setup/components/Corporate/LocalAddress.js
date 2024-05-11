import React, { useState } from 'react';
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
import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionCorporate } from "../../slices/selection.slice";
import { useFormik } from 'formik';
import { updateLocalAddress } from '../../slices/kycCorporate.slice';
import { fetchCountryList, fetchDistrictList, fetchStateList } from '../../../slices/CentralizedKYC/Dropdowns/thunk';
import { useEffect } from 'react';
import Select from "react-select";

export default function LocalAddress() {

    const initialValues = useSelector((state) => state.KycCorporate.localAddress);

    const dispatch = useDispatch();

      const CountryList = useSelector((state) => state.Dropdown?.CountryList);
      const DistrictList = useSelector((state) => state.Dropdown?.DistrictList);
      const StateList = useSelector((state) => state.Dropdown?.StateList);

      console.log("countries", CountryList);

      useEffect(() => {

        dispatch(fetchCountryList());
        dispatch(fetchDistrictList());
        dispatch(fetchStateList());
      }, []);

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log('these are formik values', values);
            dispatch(updateLocalAddress(values))
            dispatch(setKycSelectionCorporate('branch'))
        }
    })

    // Touched in Formik
    const [selectTouched, setSelectTouched] = useState({

        permCountry: false,
        permState: false,
        permDistrict: false,
        permMunicipality: false,
      });

      const handleSelect = (fieldName, value) => {
        formik.setFieldValue(fieldName, value.value);
        setSelectTouched((prev) => ({
          ...prev,
          [fieldName]: true,
        }));
      };



  //Dropdown datas

    const countries = CountryList?.map((item) => ({
        value: item.add01title,
        label: item.add01title,
      }));

      const states = StateList?.map((item) => ({
        value: item.add02title,
        label: item.add02title,
      }));
      const districts = DistrictList?.map((item) => ({
        value: item.add03title,
        label: item.add03title,
      }));

    return <>
         <Card className="p-0">
        <CardHeader className="px-4">
          <div className="">
            <h5 className="m-0">Local Address / Other Details</h5>
          </div>
        </CardHeader>
        <CardBody className="px-4">
                <Form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <h5 className='mt-3'>Coommunication/Local Address</h5>

                        <Row>
                            <Col lg={4} className="mt-4">
                                <Label>P.O. Box</Label>
                                <Input type="text" name="pobox"
                                    value={formik.values.pobox}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </Col>
                            <Col lg={4} className="mt-4">
                                <Label>City Name</Label>
                                <Input type="text" className="" name="cityName" value={formik.values.cityName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange} />
                            </Col>
                            <Col md={4} className="mt-4">
                                <Label>Phone Number 1</Label>
                                <Input type="text" name="phoneNumber1" value={formik.values.phoneNumber1}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange} />
                            </Col>


                        </Row>
                        <Row className='mt-4'>
                        <Col md={4}>
                <Label htmlFor="permCountry">
                  Country<span className="text-danger ">*</span>
                </Label>
                <Select
                  id="permCountry"
                  name="permCountry"
                  options={countries}
                  value={countries?.find(
                    (option) => option.value === formik.values.permCountry
                  )}
                  onChange={(value) => {
                    handleSelect("permCountry", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("permCountry", true);
                  }}
                />
                {formik.touched.permCountry &&
                  selectTouched.permCountry === false && (
                    <p className="text-danger">{formik.errors.permCountry}</p>
                  )}
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label htmlFor="permState">
                    State<span className="text-danger">*</span>
                  </Label>
                  <Select
                    id="permState"
                    name="permState"
                    options={states}
                    value={states?.find(
                      (option) => option.value === formik.values.permState
                    )}
                    onChange={(value) => {
                      handleSelect("permState", value);
                    }}
                    onBlur={() => {
                      formik.setFieldTouched("permState", true);
                    }}
                  />
                  {formik.touched.permState &&
                    selectTouched.permState === false && (
                      <p className="text-danger">{formik.errors.permState}</p>
                    )}
                </FormGroup>
              </Col>

              <Col md={4}>
                <FormGroup>
                  <Label htmlFor="permDistrict">
                    District<span className="text-danger">*</span>
                  </Label>
                  <Select
                    id="permDistrict"
                    name="permDistrict"
                    options={districts}
                    value={districts?.find(
                      (option) => option.value === formik.values.permDistrict
                    )}
                    onChange={(value) => {
                      handleSelect("permDistrict", value);
                    }}
                    onBlur={() => {
                      formik.setFieldTouched("permDistrict", true);
                    }}
                  />
                  {formik.touched.permDistrict &&
                    selectTouched.permDistrict === false && (
                      <p className="text-danger">
                        {formik.errors.permDistrict}
                      </p>
                    )}
                </FormGroup>
              </Col>
                        </Row>

                        <Row>
                            <Col md={4} className="mt-4">
                                <Label>Phone Number 2</Label>
                                <Input type="text" name="phoneNumber2" value={formik.values.phoneNumber2}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange} />
                            </Col>

                        </Row>

                        <h5 className="fw-semibold mt-5">Other Bank Details</h5>

                        <h6 className="d-flex mt-4"><b className="fw-regular me-5">Do you have accounts with other banks?</b>
                            <div className="form-check form-switch me-5">
                                <input className="form-check-input" type="checkbox" style={{
                                    boxShadow: 'none', backgroundColor: formik.values.otherBankAccounts ? 'green' : 'red', boxShadow: 'none',border:'none',
                                    backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                                }}
                                    role="switch" id="otherBankAccounts" name="otherBankAccounts" checked={formik.values.otherBankAccounts} onChange={formik.handleChange} />
                                <label className="form-check-label" for="otherBankAccounts">{formik.values.otherBankAccounts ? 'Yes' : 'No'}</label>
                            </div>
                        </h6>

                        {formik.values.otherBankAccounts &&
                            <Row>
                                <Col lg={4} className="mt-4">
                                    <Label className="me-5">Bank Name</Label>
                                    <Input
                                        type="text"
                                        name="bankName"
                                        value={formik.values.bankName}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                    />
                                </Col>

                                <Col md={4} className="mt-4">
                                    <Label className="me-5">Web Address</Label>
                                    <Input
                                        type="text"
                                        name="webAddress"
                                        value={formik.values.webAddress}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                    />
                                </Col>

                                <Col md={4} className="mt-4">
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                    />
                                </Col>
                            </Row>
                        }




                        <div className="d-flex justify-content-between mt-4">
                            <Button color="light" onClick={() => dispatch(setKycSelectionCorporate('basicInformation'))}>Back</Button>
                            <Button color="primary" type="submit">
                                Next
                            </Button>
                        </div>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    </>
}