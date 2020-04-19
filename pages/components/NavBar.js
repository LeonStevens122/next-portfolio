// import navbuttons and styling
import "./NavBar.scss";
import NavButton from "./NavButton";

// export navbar component 
// props mapped to populate the component
const NavBar = props => (
    <div className="NavBar">
        {props.navButtons.map(button => (
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