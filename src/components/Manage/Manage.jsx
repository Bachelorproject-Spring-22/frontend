import React from 'react';
import './manage.css';
import IndividualCourseQuizzes from './MainManage/IndividualCourseQuizzes/IndividualCourseQuizzes'
import MainManage from './MainManage/MainManage';
import ManageQuizzes from './MainManage/ManageQuizzes/ManageQuizzes'
import { Link, Route, Routes, useParams } from 'react-router-dom';

function Manage(props) {
    const params = useParams();
    const location = params['*'];
    const url = location.split('/');
    console.log(url);

    return (
        <>
            <nav>
                <Routes>
                    <Route exact path='/courses' element={<><Link to='/manage' className='breadcrumb-item'>Manage</Link> &#8250; <Link to="/manage/courses" className='breadcrumb-item' >Courses</Link></>} />
                    <Route exact path='/courses/idg2100' element={<><Link to='/manage' className='breadcrumb-item'>Manage</Link> &#8250; <Link to="/manage/courses" className='breadcrumb-item' >Courses</Link> &#8250; <Link to="/manage/courses/" className='breadcrumb-item' >IDG2100</Link></>} />
                </Routes>
            </nav>

            <Routes>
                <Route exact path='/' element={<MainManage data={props.data} {...props} />} />
                <Route exact path='/courses' element={<ManageQuizzes/>} />
                <Route exact path='/courses/idg2100' element={<IndividualCourseQuizzes/>} /> {/* Denne må seff endres til noe fornuftig */}
            </Routes>
        </>
    );
}

export default Manage;