import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MainManage from './MainManage/MainManage';
import './manage.css';

function Manage({ data }) {
    return (
        <>
            <nav>
                <Link to="/manage" className='breadcrumbItem'>Manage</Link>
                <Routes>
                    <Route exact path='/quizzes' element={<>&#8250; <Link to="/manage/idg2100" className='breadcrumbItem' >IDG2100</Link></>} />
                    <Route exact path='/idg2100/quiz1' element={<>&#8250; <Link to="/manage/idg2100" className='breadcrumbItem' >IDG2100</Link> &#8250; <Link to="/manage/idg2100/quiz1" className='breadcrumbItem' >Quiz 1</Link></>} />
                </Routes>
            </nav>

            <Routes>
                <Route exact path='/' element={<MainManage data={data} />} />
                <Route exact path='/quizzes' element={<p>Lmao2</p>} />
            </Routes>
        </>
    );
}

export default Manage;