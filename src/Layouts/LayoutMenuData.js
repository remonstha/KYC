import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data

  const [isHome, setIsHome] = useState(false);


  const [iscurrentState, setIscurrentState] = useState("Home");


  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");

    // if (iscurrentState === 'Project') {
    //     history("/project");
    //     setIsProject(false);
    // }
  }, [
    history,
    iscurrentState,
  ]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },

    {
      id: "Home",
      label: "Home",
      icon: "ri-bubble-chart-line",
      link: "/",
      click: function (e) {
        e.preventDefault();
        // setIsHome(!isHome);
        setIscurrentState("Home");
      },
    },
    {
      id: "Maker",
      label: "Maker",
      icon: "ri-bubble-chart-line",
      link: "/maker",
      click: function (e) {
        e.preventDefault();
        // setIsMaker(!isMaker);
        setIscurrentState("maker");
      },
    },
    {
      id: "Compliance",
      label: "Compliance",
      icon: "ri-bubble-chart-line",
      link: "/compliance",
      click: function (e) {
        e.preventDefault();
        // setIsCompliance(!isCompliance);
        setIscurrentState("compliance");
      },
    },
    {
      id: "Workflow",
      label: "Workflow",
      icon: "ri-bubble-chart-line",
      link: "/workflow",
      click: function (e) {
        e.preventDefault();
        // setIsCompliance(!isCompliance);
        setIscurrentState("workflow");
      },
    },
    {
      id: "misreport",
      label: "MIS Report",
      icon: "ri-bubble-chart-line",
      link: "/misreport",
      click: function (e) {
        e.preventDefault();
        // setIsCompliance(!isCompliance);
        setIscurrentState("misreport");
      },
    },
    {
      id: "negativelistentry",
      label: "Negative List Entry",
      icon: "ri-bubble-chart-line",
      link: "/negativelistentry",
      click: function (e) {
        e.preventDefault();
        // setIsCompliance(!isCompliance);
        setIscurrentState("negativelistentry");
      },
    },
  ];

  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
