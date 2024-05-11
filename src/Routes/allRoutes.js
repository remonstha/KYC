import React from "react";
import { Navigate } from "react-router-dom";

//Tables

import ReactTable from "../pages/Tables/ReactTables";

import Dashboard from "../primary-setup/pages/Dashboard";
import KycForIndividual from "../primary-setup/pages/KycForIndividual";
import KycForMinor from "../primary-setup/pages/KycForMinor";
import KycForCorporate from "../primary-setup/pages/KycForCorporate";
import ConfirmSubmit from "../primary-setup/pages/ConfirmSubmit";
import Maker from '../primary-setup/pages/Maker'
import Compliance from "../primary-setup/pages/Compliance";
import Workflow from "../primary-setup/pages/Workflow";
import MisReport from "../primary-setup/pages/MisReport";
import NegativeListEntry from "../primary-setup/pages/NegativeListEntry";


//AuthenticationInner pages
import BasicSignIn from '../pages/AuthenticationInner/Login/BasicSignIn';
import CoverSignIn from '../pages/AuthenticationInner/Login/CoverSignIn';

//pages
import Starter from '../pages/Pages/Starter/Starter';
import SimplePage from '../pages/Pages/Profile/SimplePage/SimplePage';
import Settings from '../pages/Pages/Profile/Settings/Settings';
import Timeline from '../pages/Pages/Timeline/Timeline';

import SiteMap from '../pages/Pages/SiteMap/SiteMap';
import SearchResults from '../pages/Pages/SearchResults/SearchResults';
import BasicLogout from '../pages/AuthenticationInner/Logout/BasicLogout';
import CoverLogout from '../pages/AuthenticationInner/Logout/CoverLogout';
import Basic404 from '../pages/AuthenticationInner/Errors/Basic404';
import Cover404 from '../pages/AuthenticationInner/Errors/Cover404';
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';
import Error500 from '../pages/AuthenticationInner/Errors/Error500';
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ApiKey from '../pages/APIKey/index';

// User Profile
import UserProfile from "../pages/Authentication/user-profile";
import SubmitCompliance from "../primary-setup/pages/SubmitCompliance";
import FormVerification from "../primary-setup/components/ConfirmSubmit/FormVerification";
import DocumentsRepository from "../primary-setup/pages/DocumentsRepository";
import ComplianceFormVerification from "../primary-setup/components/ConfirmSubmit/ComplianceFormVerfication";

const authProtectedRoutes = [

  {path : '/', component: <Dashboard /> },
  {path : '/kycindividual', component: <KycForIndividual /> },
  {path : '/kycminor', component: <KycForMinor /> },
  {path : '/kyccorporate', component: <KycForCorporate /> },
  {path : '/confirmsubmit', component: <FormVerification /> },
  {path: '/maker', component: <Maker />},
  {path: '/compliance', component: <Compliance />},
  {path: '/workflow', component: <Workflow />},
  {path: '/misreport', component: <MisReport />},
  {path: '/negativelistentry', component: <NegativeListEntry />},
  {path : '/submit', component: <ComplianceFormVerification /> },
  {path : '/documents-repository', component: <DocumentsRepository /> },



  //Tables
  { path: "/tables-react", component: <ReactTable /> },



  //centralized-Account-Opening

  // {path: "/Centralized-Account-Opening", component: <Home />},




  //Pages
  { path: "/pages-starter", component: <Starter /> },
  { path: "/pages-profile", component: <SimplePage /> },
  { path: "/pages-profile-settings", component: <Settings /> },
  { path: "/pages-timeline", component: <Timeline /> },



  { path: "/pages-sitemap", component: <SiteMap /> },
  { path: "/pages-search-results", component: <SearchResults /> },




  //APIkey
  { path: "/apps-api-key", component: <ApiKey /> },

  //User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/auth-404-cover" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },

  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: <BasicSignIn /> },
  { path: "/auth-signin-cover", component: <CoverSignIn /> },
  { path: "/auth-logout-basic", component: <BasicLogout /> },
  { path: "/auth-logout-cover", component: <CoverLogout /> },
  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },
  { path: "/auth-offline", component: <Offlinepage /> },


];

export { authProtectedRoutes, publicRoutes };