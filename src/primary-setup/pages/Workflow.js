import React from "react";
import { useDispatch } from "react-redux";
import { setKycSelectionIndividual } from "../slices/selection.slice";
import { Container, Row } from "reactstrap";
import HomePage from "../components/Workflow/HomePage";

export default function Workflow() {

  return (
    <>
      <HomePage />
    </>
  );
}
