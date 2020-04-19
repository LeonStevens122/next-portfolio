// components/Header.js
import Link from "next/link";


// export header object
const Header = props => (
    <Link href="/About">
        <div className="Header">{props.appTitle}</div>
    </Link>
);

export default Header;