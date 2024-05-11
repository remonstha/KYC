import React, { useState } from 'react';
import { Input, Label, Table } from 'reactstrap';

const Consent = ({formik}) => {
  const tableContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: "90%",
    maxHeight: "100vh",
    gap: '10px',
  };

  const tableHeaderStyle = {
    background: '#3E69D9',
    color: 'white',
  };

  const cellStyle = {
    border: 'none', // Remove border
  };

  const cell = {
    maxWidth: "90%",
    maxHeight: "90%",
  };

  const biggerConsentCellStyle = {
    ...cellStyle,
    height: '80px',
    borderRight: 'none', // Remove border
  };

  const values = {
    declaration3: true, // Example value, replace with your actual value
  };

  const [isChecked, setIsChecked] = useState([true, true, true, true]);

  const handleCheckboxChange = (index) => {
    const updatedIsChecked = [...isChecked];
    updatedIsChecked[index] = !updatedIsChecked[index];
    setIsChecked(updatedIsChecked);
  };

  return (
    <div style={tableContainerStyle} className='m-4'>
      <Table className='justify-content-center'>
        <thead>
          <tr>
            <th className='p-2 border-1' style={{ ...tableHeaderStyle }}>S.N</th>
            <th className="p-2 border-1" style={{ ...tableHeaderStyle }}>Consents</th>
            <th className="p-2 border-1" style={{ ...tableHeaderStyle }}>Status</th>
            <th className="p-2 border-1" style={{ ...tableHeaderStyle }}>Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>1</td>
            <td style={biggerConsentCellStyle}>
              Are following documents collected and verified with KYC information provided in KYC form?<br/>
              i. Identification document :<br/>
              ii. Passport Size Photograph :<br/>
              iii. Identification document of Nominee/Mandate (If applicable) :<br/>
              iv. Photograph of Mandate (If applicable) :<br/>
              In case of joint account, are all the above documents of all the joint holders obtained?
            </td>
            <td style={cellStyle}>
              <div className="form-check form-switch text-center ms-5 mb-3 ">
                <Label className="form-check-label" for="SwitchCheck1">
                  {formik.values.consent1 ? "Yes" : "No"}
                </Label>
                <Input
                  className="form-check-input box-shadow-0"
                  type="checkbox"
                  name="consent1"
                  role="switch"
                  id="SwitchCheck1"
                  checked={formik.values.consent1}
                  onChange={formik.handleChange}
                  style={{
                    backgroundColor: formik.values.consent1 ? "green" : "red",
                    backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,

                  }}
                />
              </div>
            </td>
            <td style={cellStyle} ><Input type="textarea" name='consent1remarks'
            value={formik.values.consent1remarks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/></td>
          </tr>
          <tr>
            <td style={cellStyle}>2</td>
            <td style={biggerConsentCellStyle}>
              If any information required in KYC form (Such as house number, telephone number, mobile number, e-mail address, passport, profession/occupation, pan number etc.) are not available, is self-declaration from customer obtained that these information are not available?
            </td>
            <td style={cellStyle}>
              <div className="form-check form-switch text-center ms-5 mb-3 ">
                <Label className="form-check-label" for="SwitchCheck2">
                  {formik.values.consent2 ? "Yes" : "No"}
                </Label>
                <Input
                  className="form-check-input box-shadow-0"
                  type="checkbox"
                  name="consent2"
                  role="switch"
                  id="SwitchCheck2"
                  checked={formik.values.consent2}
                  onChange={formik.handleChange}
                  style={{
                    backgroundColor: formik.values.consent2 ? "green" : "red",
                    backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,

                  }}
                />
              </div>
            </td>
            <td style={cellStyle}><Input style={cell} type="textarea" name='consent2remarks'
            value={formik.values.consent2remarks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/></td>
          </tr>
          <tr>
            <td style={cellStyle}>3</td>
            <td style={biggerConsentCellStyle}>
              Is all the information required in AOF and KYC form completely filled and verified (signed by concerned staff)?<br/>
              Please mention the KYC date (YYYY/MM/DD) in remarks column.
            </td>
            <td style={cellStyle}>
              <div className="form-check form-switch text-center ms-5 mb-3 ">
                <Label className="form-check-label" for="SwitchCheck3">
                  {formik.values.consent3 ? "Yes" : "No"}
                </Label>
                <Input
                  className="form-check-input box-shadow-0"
                  type="checkbox"
                  name="consent3"
                  role="switch"
                  id="SwitchCheck3"
                  checked={formik.values.consent3}
                  onChange={formik.handleChange}
                  style={{
                    backgroundColor: formik.values.consent3 ? "green" : "red",
                    backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,

                  }}
                />
              </div>
            </td>
            <td style={cellStyle}><Input type="textarea" name='consent3remarks'
            value={formik.values.consent3remarks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/></td>
          </tr>
          <tr>
            <td style={cellStyle}>4</td>
            <td style={biggerConsentCellStyle}>
              Is all the copy of required documents obtained?
              If no, what are the pending documents to be obtained?
            </td>
            <td style={cellStyle}>
              <div className="form-check form-switch text-center ms-5 mb-3 ">
                <Label className="form-check-label" for="SwitchCheck4">
                  {formik.values.consent4 ? "Yes" : "No"}
                </Label>
                <Input
                  className="form-check-input box-shadow-0"
                  type="checkbox"
                  name="consent4"
                  role="switch"
                  id="SwitchCheck4"
                  checked={formik.values.consent4}
                  onChange={formik.handleChange}
                  style={{
                    backgroundColor: formik.values.consent4 ? "green" : "red",
                    backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,

                  }}
                />
              </div>
            </td>
            <td style={cellStyle}><Input type="textarea" name='consent4remarks'
            value={formik.values.consent4remarks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/></td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
};

export default Consent;
