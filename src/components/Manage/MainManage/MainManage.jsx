import React, { useState } from 'react';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import Button from '../../Button/Button';

function MainManage({ data }) {
    return (
        <section className='main-manage'>
            <h1>Manage</h1>

            <article>
                <h2>Quizes</h2>
                <Button label='Upload New Quiz Results' icon={<FileUploadRoundedIcon />} />
                <Button label='Delete Existing Quiz Results' icon={<DeleteRoundedIcon />} />
            </article>
            <article>
                <h2>Users</h2>
                <h3>Students</h3>
                <Button label='Add New Student(s) To Studyplan' icon={<GroupAddRoundedIcon />} />
                <Button label='Manage Student(s)' icon={<GroupAddRoundedIcon />} />

                {data.user.role === 'superAdmin' ?
                    (
                        <>
                            <h3>Teachers</h3>
                            <Button label='Add New Teacher To System' icon={<GroupAddRoundedIcon />} />
                            <Button label='Manage Teacher(s)' icon={<GroupAddRoundedIcon />} />
                        </>
                    ) : null
                }
            </article>
        </section>
    );
}

export default MainManage;