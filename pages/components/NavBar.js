// import navbuttons and styling

import NavButton from "./NavButton";


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCompass,
    faMapMarkerAlt,
    faUser,
    faProjectDiagram,

} from "@fortawesome/free-solid-svg-icons";


// Create list of Navbutton objects to be imported by the Navbuttons object
const navButtons = [
    {
        label: "About",
        path: "/About",
        icon: <FontAwesomeIcon icon={faCompass} />
    },
    {
        label: "Projects",
        path: "/Projects",
        icon: <FontAwesomeIcon icon={faProjectDiagram} />
    },
    {
        label: "Contact",
        path: "/Contact",
        icon: <FontAwesomeIcon icon={faUser} />
    }

];


// export navbar component 
// props mapped to populate the component
const NavBar = props => (
    <div className="NavBar">
        {navButtons.map(button => (
            <NavButton
                key={button.path}
                path={button.path}
                label={button.label}
                icon={button.icon}
            />
        ))}
    </div>
);

export default NavBar;