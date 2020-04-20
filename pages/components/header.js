// components/Header.js
import Link from "next/link";


// export header object
const Header = props => (
    <Link href="/">
        <div className="Header">{props.appTitle}</div>
    </Link>
);

export default Header;