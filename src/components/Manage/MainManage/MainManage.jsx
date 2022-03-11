import React, { useState } from 'react';
import Button from '../../Button/Button';

function MainManage({ data }) {
    return (
        <section className='main-manage'>
            <h1>Manage</h1>

            <article>
                <h2>Quizes</h2>
                <Button label='Upload New Quiz Results'  />
                <Button label='Delete Existing Quiz Results' />
            </article>
            <article>
                <h2>Users</h2>
                <h3>Students</h3>
                <Button label='Add New Student(s) To Studyplan'  />
                <Button label='Manage Student(s)'  />

                {data.user.role === 'superAdmin' ?
                    (
                        <>
                            <h3>Teachers</h3>
                            <Button label='Add New Teacher To System'  />
                            <Button label='Manage Teacher(s)'  />
                        </>
                    ) : null
                }
            </article>
        </section>
    );
}

export default MainManage;