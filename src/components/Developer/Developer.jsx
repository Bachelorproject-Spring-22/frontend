import { Link } from "react-router-dom";

import SEO from "../SEO/SEO";

function Developer () {
    return (
        <>
        <SEO title="Developer" />
            <header>
                <nav>
                    <Link to="/" className='breadcrumbItem'>Home</Link>
                    &#8250;
                    <Link to="/developer" className='breadcrumbItem' >Developer</Link>
                </nav>
    
                <h1>For developers 🧑‍💻</h1>
            </header>
            <p>Once we are done with our part of the project, we want you to contribute to it! The project is publicly available on <a href="https://github.com/Bachelorproject-Spring-22" target='_blank' rel="noreferrer">our GitHub page.</a></p>
        </>
    );
}

export default Developer;