import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import IndividualQuizResults from './IndividualQuizResults/IndividualQuizResults';
import IndividualResults from './IndividualResults/IndividualResults';
import MainResults from './MainResults/MainResults';
import './my-results.css';


class MyResults extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <nav>
                    <Link to="/home" className='breadcrumbItem'>Home</Link>
                    <Routes>
                        <Route exact path='/idg2100' element={<>&#8250; <Link to="/home/idg2100" className='breadcrumbItem' >IDG2100</Link></>} />
                        <Route exact path='/idg2100/quiz1' element={<>&#8250; <Link to="/home/idg2100" className='breadcrumbItem' >IDG2100</Link> &#8250; <Link to="/home/idg2100/quiz1" className='breadcrumbItem' >Quiz 1</Link></>} />
                    </Routes>
                </nav>
                <Routes>
                    <Route exact path='/' element={<MainResults />} />
                    <Route exact path='/idg2100' element={<IndividualResults />} />
                    <Route exact path='/idg2100/quiz1' element={<IndividualQuizResults />} />
                </Routes>
            </>
        );
    }
}

export default MyResults;