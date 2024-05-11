import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setKycSelectionCorporate,
  setKycSelectionIndividual,
  setKycSelectionMinor,
} from "../../slices/selection.slice";
import UserDetailsCard from "./UserDetailsCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { locationSchema as validationSchema } from "../../validationSchema";
import { updateLocation } from "../../slices/kycDetails.slice";
import Select from "react-select";
import { updateLocationMinor } from "../../slices/KycMinor.slice";
import { updateLocationCorporate } from "../../slices/kycCorporate.slice";
import { fetchAccountTypeList } from "../../../slices/CentralizedKYC/Dropdowns/thunk";
import { useEffect } from "react";
import L from 'leaflet';
import mapMarker from "../../assets/icons/mapMarker.png"
import { saveLocationInfo } from "../../../slices/CentralizedKYC/IndividualKYC/thunk";

const ACCESS_TOKEN = "pk.4e87f380ffe048e236c30e961fe5e3df";

export default function Location() {
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state.KycDetails.location);

  const videoKYC = useSelector(state => state.IndKyc?.videoKYC)
  const locationId = useSelector(state => state.IndKyc?.location);

  console.log('hi this is initial', initialValues)

  const [mapPosition, setMapPosition] = useState([27.7172, 85.324]);
  const [address, setAddress] = useState("");

  const [selectTouched, setSelectTouched] = useState({
    nearestBranch: false,
  });

  const location = useLocation();

  const customIcon = L.icon({
    iconUrl: 'https://i.ibb.co/sqQRZ8c/map-Marker.png',
    iconSize: [28, 28], // Set the size of the icon
    iconAnchor: [16, 32], // Set the anchor point of the icon
    popupAnchor: [0, -32], // Set the anchor point for the popup
  });

  // Getting Dropdown Data
  const BranchList = useSelector((state) => state.Dropdown?.BranchList);

  useEffect(() => {
    dispatch(fetchAccountTypeList());


  }, []);
  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      console.log("these are formik values", values);
      if (location.pathname === "/kycindividual") {
        dispatch(updateLocation(values));
        dispatch(setKycSelectionIndividual("Declaration"));
      }
      if (location.pathname === "/kycminor") {
        dispatch(updateLocationMinor(values));
        dispatch(setKycSelectionMinor("DeclarationMinor"));
      }
      if (location.pathname === "/kyccorporate") {
        dispatch(updateLocationCorporate(values));
        dispatch(setKycSelectionCorporate("recommender"));
      }
      const valueToSave = {
        ...values,
        videoKycId: videoKYC?.id,
        id: locationId?.id,
      }
      dispatch(saveLocationInfo(valueToSave));
    },
  });
  const nearestBranchSelect = BranchList?.map((item) => ({
    value: item.bra01title,
    label: item.bra01title,
  }));
  const handleSelect = (fieldName) => {
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  return (
    <>
      {/* <UserDetailsCard /> */}
      <Card className="p-0">
        <CardHeader className="px-4">
          <div className="">
            <h5 className="m-0">Location</h5>
          </div>
        </CardHeader>

        <CardBody className="px-4">
          <Row>
            <Col md={8} className="p-2 ">
              <MapContainer
                center={mapPosition}
                zoom={13}
                style={{ width: "100%", height: "500px", zIndex: "1" }}
                className="rounded"
                scrollWheelZoom={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={mapPosition} icon={customIcon}>
                  <Popup>A sample marker with a popup.</Popup>
                </Marker>
                <DetectClick setMapPosition={setMapPosition} formik={formik} />
              </MapContainer>
            </Col>

            <Col md={4} className="p-2">
              <Form
                className="border rounded p-4"
                onSubmit={formik.handleSubmit}
              >
                <FormGroup>
                  <h5 className="text-center">Selected Location</h5>
                  <Label className="mt-2">Latitude</Label>
                  <Input
                    type="text"
                    placeholder="23.0782"
                    name="latitude"
                    value={formik.values.latitude || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.latitude && formik.touched.latitude && (
                    <p className="text-danger"> {formik.errors.latitude} </p>
                  )}

                  <Label className="mt-4">Longitude</Label>
                  <Input
                    type="text"
                    placeholder="108.182"
                    name="longitude"
                    value={formik.values.longitude}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.longitude && formik.touched.longitude && (
                    <p className="text-danger"> {formik.errors.longitude} </p>
                  )}
                  <Label className="mt-4">Nearest Landmark</Label>
                  <Input
                    type="text"
                    placeholder="Nabil Bank, balaju"
                    name="nearestLandmark"
                    value={formik.values.nearestLandmark}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.nearestLandmark && formik.touched.nearestLandmark && (
                    <p className="text-danger"> {formik.errors.nearestLandmark} </p>
                  )}
                  <Label className="mt-4">Nearest Branch</Label>
                  <Select
                    id="nearestBranch"
                    name="nearestBranch"
                    options={nearestBranchSelect}
                    value={nearestBranchSelect?.find(
                      (option) => option.value === formik.values.nearestBranch
                    )}
                    onChange={(selectedOption) => {
                      formik.setFieldValue(
                        "nearestBranch",
                        selectedOption.value
                      );
                      handleSelect("nearestBranch");
                    }}
                    onBlur={() => {
                      formik.setFieldTouched("nearestBranch", true);
                    }}
                  />
                  {formik.touched.nearestBranch &&
                    selectTouched.nearestBranch === false && (
                      <p className="text-danger">
                        {formik.errors.nearestBranch}
                      </p>
                    )}
                  <div className="d-flex justify-content-between mt-4">
                    <Button
                      color="light"
                      onClick={() =>
                        location.pathname === "/kycindividual" ? dispatch(setKycSelectionIndividual("FamilyDetails")) : location.pathname === "/kycminor" ? dispatch(setKycSelectionMinor('IdentificationMinor')) : dispatch(setKycSelectionCorporate('services'))
                      }
                    >
                      Back
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                    // onClick={() => dispatch(setKycSelectionIndividual('Declaration'))}
                    >
                      Next
                    </Button>
                  </div>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}

function DetectClick({ setMapPosition, formik }) {
  useMapEvents({
    click: async (e) => {
      // console.log('clicked', e);
      setMapPosition([e.latlng.lat, e.latlng.lng]);

      // Update latitude and longitude fields in Formik
      formik.setFieldValue("latitude", e.latlng.lat);
      formik.setFieldValue("longitude", e.latlng.lng);

      // Fetch data based on latitude and longitude
      const apiUrl = `https://us1.locationiq.com/v1/reverse?key=${ACCESS_TOKEN}&lat=${e.latlng.lat}&lon=${e.latlng.lng}&format=json`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("this is api data", data);

        // Update nearestLandmark field in Formik with fetched data
        formik.setFieldValue("nearestLandmark", data.display_name);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  });

  return null;
}
