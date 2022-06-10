import React, { useEffect } from "react";
import Card from "../../../Card/Card";

function ManageQuizzes({getCoursesManage, coursesManage}) {
    useEffect(() => {
        getCoursesManage();
    }, [getCoursesManage]);
    
    return (
        <>
            <header>
                <h1>quizzes</h1>
                <p className='subtitle'>manage</p>
            </header>
            <section>
                <p>Select a course to see quizzes for that course.</p> {/* rar setning? */}
                
                <h2>Current Semester</h2>
                <ul className='cards-grid-container'>
                    {coursesManage.map((data) => (
                        <Card key={data.courseId} link={`/manage/courses/${data.courseId}`} type='course' courseCode={data.code} fullCourseName={data.name} />
                    ))}
                </ul>

            </section>
        </>
    );
}

export default ManageQuizzes;