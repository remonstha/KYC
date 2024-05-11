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
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionMinor } from "../../slices/selection.slice";
import UserDetailsCard from "./UserDetailsCard";


export default function Location() {
  const dispatch = useDispatch();

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [mapPosition, setMapPosition] = useState([27.7172, 85.324]);

  const handleMapClick = (e) => {
    // const { lat, lng } = e.latlng;
    console.log("latlng ");
    // setLatitude(lat);
    // setLongitude(lng);
    // console.log("i ran");
  };

  return (
    <>
    <UserDetailsCard/>
      <Card className="p-0" >
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
                style={{ width: "100%", height: "500px", zIndex: '1' }}
                className="rounded"
                scrollWheelZoom={false}
                onClick={(e) => console.log("i'm clicked")}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={mapPosition}>
                  <Popup>A sample marker with a popup.</Popup>
                </Marker>
              </MapContainer>

            </Col>

            <Col md={4} className="p-2">
              <Form className="border rounded p-4">
                <FormGroup>
                  <h5 className="text-center">Selected Location</h5>
                  <Label className="mt-2">Latitude</Label>
                  <Input
                    type="text"
                    placeholder="23.0782"
                    name="latitude"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                  />
                  <Label className="mt-4">Longitude</Label>
                  <Input
                    type="text"
                    placeholder="108.182"
                    value={longitude}
                    name="longitude"
                    onChange={(e) => setLongitude(e.target.value)}
                  />
                  <Label className="mt-4">Nearest Landmark</Label>
                  <Input type="text" placeholder="Nabil Bank, balaju" />
                  <Label className="mt-4">Nearest Branch</Label>
                  <Input type="text" placeholder="Balaju" />

                  <div className="d-flex justify-content-between mt-4">
                  <Button color="light" onClick={() => dispatch(setKycSelectionMinor('IdentificationMinor'))}>Back</Button>
                    <Button color="primary" onClick={() => dispatch(setKycSelectionMinor('DeclarationMinor'))}>
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
