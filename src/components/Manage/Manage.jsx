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

    return (
        <>
            <nav>
                <Routes>
                    <Route exact path='/courses' element={<><Link to='/manage' className='breadcrumb-item'>Manage</Link> &#8250; <Link to="/manage/courses" className='breadcrumb-item' >Courses</Link></>} />
                    <Route exact path={`/courses/${url[1]}`} element={<><Link to='/manage' className='breadcrumb-item'>Manage</Link> &#8250; <Link to="/manage/courses" className='breadcrumb-item' >Courses</Link> &#8250; <Link to={`/manage/courses/${url[1]}`} className='breadcrumb-item' >{url[1]}</Link></>} />
                </Routes>
            </nav>

            <Routes>
                <Route exact path='/' element={<MainManage data={props.data} {...props} />} />
                <Route exact path='/courses' element={<ManageQuizzes {...props} />} />
                <Route exact path={`/courses/${url[1]}`} element={<IndividualCourseQuizzes courseId={url[1]} {...props} />} />
            </Routes>
        </>
    );
}

export default Manage;