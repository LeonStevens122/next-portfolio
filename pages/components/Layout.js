// components/Layout.js
// import components
//import Header from "./Header";
import NavBar from "./NavBar";
import Head from "next/head";
import navButtons from '../../config/buttons';
import Link from "next/link";
import { initGA, logPageView } from '../../utils/analytics';

const Header = props => (
    <Link href="/">
        <div className="Header">{props.appTitle}</div>
    </Link>
);
const appTitle = 'Leon Stevens Next.JS Profile';

// export Layoit component

export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()
    }
    render() {
    return (
        <div className="Layout">
            <Head>
                <title>Leon Stevens - Profile</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>


            <Header appTitle={appTitle} />
            <div className="Content">{props.children}</div>
            <NavBar navButtons={navButtons}  />
        </div>
    )
    }
};

export default Layout;
