import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import IndividualQuizResults from './IndividualQuizResults/IndividualQuizResults';
import IndividualResults from './IndividualResults/IndividualResults';
import MainResults from './MainResults/MainResults';
import './my-results.css';


function MyResults(props) {
    const params = useParams();
    const location = params['*'];
    const url = location.split('/');

    return (
        <>
            <nav>
                <Routes>
                    <Route exact path='/' element={null} />
                    <Route exact path={`${url[0]}`} element={<><Link to="/home" className='breadcrumb-item'>Home</Link> &#8250; <Link to={`/home/${url[0]}`} className='breadcrumb-item' >{url[0]}</Link></>} />
                    <Route exact path={`${url[0]}/${url[1]}`} element={<><Link to="/home" className='breadcrumb-item'>Home</Link> &#8250; <Link to={`/home/${url[0]}`} className='breadcrumb-item' >{url[0]}</Link> &#8250; <Link to={`/home/${url[0]}/${url[1]}`} className='breadcrumb-item' >{url[1]}</Link></>} />
                </Routes>
            </nav>
            <Routes>
                <Route exact path='/' element={<MainResults {...props} />} />
                <Route exact path={`${url[0]}`} element={<IndividualResults {...props} />} />
                <Route exact path={`${url[0]}/${url[1]}`} element={<IndividualQuizResults {...props} />} />
            </Routes>
        </>
    );
}

export default MyResults;