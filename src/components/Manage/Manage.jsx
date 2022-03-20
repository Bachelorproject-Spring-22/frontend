import React from 'react';
import './manage.css';
import IndividualCourseQuizzes from './MainManage/IndividualCourseQuizzes/IndividualCourseQuizzes'
import MainManage from './MainManage/MainManage';
import ManageQuizzes from './MainManage/ManageQuizzes/ManageQuizzes'
import { Link, Route, Routes } from 'react-router-dom';

function Manage(props) {
    return (
        <>
            <nav>
                <Link to="/manage" className='breadcrumb-item'>Manage</Link>
                <Routes>
                    <Route exact path='/quizzes' element={<>&#8250; <Link to="/manage/quizzes" className='breadcrumb-item' >quizzes</Link></>} />
                    <Route exact path='/idg2100/quiz1' element={<>&#8250; <Link to="/manage/idg2100" className='breadcrumb-item' >IDG2100</Link> &#8250; <Link to="/manage/idg2100/quiz1" className='breadcrumb-item' >Quiz 1</Link></>} />
                </Routes>
            </nav>

            <Routes>
                <Route exact path='/' element={<MainManage data={props.data} {...props} />} />
                <Route exact path='/quizzes' element={<ManageQuizzes/>} />
                <Route exact path='/quizzes/idg2100' element={<IndividualCourseQuizzes/>} /> {/* Denne må seff endres til noe fornuftig */}
                
            </Routes>
        </>
    );
}

export default Manage;