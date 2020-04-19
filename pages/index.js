import Head from 'next/head';
import Link from 'next/link';
import Header from './components/Header';
import Layout from "./components/Layout";

import "./components/index.scss";


// index component loads the about page as the home page
const Index = () => (
    <Layout>
        <br />
        <Link href="/About">
            <a> Load about page</a>
        </Link>
    </Layout>
);

export default Index;