import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert, Spinner } from 'reactstrap';
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import withRouter from "../../Components/Common/withRouter";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import { resetLoginFlag } from "../../slices/thunks";
import {login} from "../../slices/CentralizedKYC/authentication/thunk"

import logoLight from "../../assets/ProjectAssets/AntsQualityLightLogo.png";
import { createSelector } from 'reselect';
import { getLoggedInUser } from '../../helpers/fakebackend_helper';

const Login = (props) => {

    const authuser = getLoggedInUser();
    console.log("authuser",authuser);
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);

    const dispatch = useDispatch();
    const selectLayoutState = (state) => state;
    const loginpageData = createSelector(
        selectLayoutState,
        (state) => ({
            user: state.Account.user,
            error: state.Login.error,
            loading: state.Login.loading,
            errorMsg: state.Login.errorMsg,
        })
    );
    // Inside your component
    const {
        user, error, loading, errorMsg
    } = useSelector(loginpageData);

    const [userLogin, setUserLogin] = useState([]);
    const [passwordShow, setPasswordShow] = useState(false);


    useEffect(() => {
        if (user && user) {
            const updatedUserData = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? user.multiFactor.user.email : user.user.email;
            const updatedUserPassword = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? "" : user.user.confirm_password;
            setUserLogin({
                email: updatedUserData,
                password: updatedUserPassword
            });
        }
    }, [user]);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: "superadmin@gmail.com",
            password: "Admin@123",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            dispatch(login(values, props.router.navigate));
            if (isAuthenticated && (authuser.associatedRoles.includes('SuperAdmin' || authuser.associatedRoles.includes('SystemAdmin')))  ){
                navigate("/");
            }
            else if(isAuthenticated && (authuser.associatedRoles.includes('SystemUser'))  ) {
                navigate("/project");
            }
        }
    });



    useEffect(() => {
        if (errorMsg) {
            setTimeout(() => {
                dispatch(resetLoginFlag());
            }, 3000);
        }
    }, [dispatch, errorMsg]);

    document.title = "Antsware - Quality Login";
    return (
        <React.Fragment>
            <ParticlesAuth>
                <div className="auth-page-content">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <Link to="/" className="d-inline-block auth-logo">
                                            <img src={logoLight} alt="" height="40" />
                                        </Link>
                                    </div>
                                    <p className="mt-3 fs-15 fw-medium">Quality Test Assurance Management System</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4">
                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Welcome Back !</h5>
                                            <p className="text-muted">Sign in to continue to Ants Quality.</p>
                                        </div>
                                        {errorMsg && errorMsg ? (<Alert color="danger"> {errorMsg} </Alert>) : null}
                                        <div className="p-2 mt-4">
                                            <Form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    validation.handleSubmit();
                                                    return false;
                                                }}
                                                action="#">

                                                <div className="mb-3">
                                                    <Label htmlFor="email" className="form-label">Email</Label>
                                                    <Input
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Enter email"
                                                        type="email"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.email || ""}
                                                        invalid={
                                                            validation.touched.email && validation.errors.email ? true : false
                                                        }
                                                    />
                                                    {validation.touched.email && validation.errors.email ? (
                                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                    ) : null}
                                                </div>

                                                <div className="mb-3">
                                                    <div className="float-end">
                                                        <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
                                                    </div>
                                                    <Label className="form-label" htmlFor="password-input">Password</Label>
                                                    <div className="position-relative auth-pass-inputgroup mb-3">
                                                        <Input
                                                            name="password"
                                                            value={validation.values.password || ""}
                                                            type={passwordShow ? "text" : "password"}
                                                            className="form-control pe-5"
                                                            placeholder="Enter Password"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            invalid={
                                                                validation.touched.password && validation.errors.password ? true : false
                                                            }
                                                        />
                                                        {validation.touched.password && validation.errors.password ? (
                                                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                        ) : null}
                                                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}><i className="ri-eye-fill align-middle"></i></button>
                                                    </div>
                                                </div>

                                                <div className="form-check">
                                                    <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                    <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label>
                                                </div>
                                                <div className="mt-4 mb-5">
                                                    <Button disabled={error ? null : loading ? true : false}  color="success" className="btn btn-success w-100" type="submit">
                                                    {loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                                        Sign In
                                                    </Button>
                                                </div>

                                                {/* <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="btn btn-primary btn-icon me-1"
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                socialResponse("facebook");
                                                            }}
                                                            >
                                                            <i className="ri-facebook-fill fs-16" />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="btn btn-danger btn-icon me-1"
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                socialResponse("google");
                                                            }}
                                                            >
                                                            <i className="ri-google-fill fs-16" />
                                                        </Link>
                                                        <Button color="dark" className="btn-icon"><i className="ri-github-fill fs-16"></i></Button>{" "}
                                                        <Button color="info" className="btn-icon"><i className="ri-twitter-fill fs-16"></i></Button>
                                                    </div>
                                                </div> */}
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>


                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

export default withRouter(Login);