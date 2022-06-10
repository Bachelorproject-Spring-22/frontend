import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import SEO from '../../SEO/SEO';
import PickStudyplan from './PickStudyplan/PickStudyplan';

function MainManage(props) {
    const history = useNavigate();
    const { data, handleOpen } = props;

    return (
        <section className='main-manage'>
            <SEO title='Manage' />
            <header><h1>Manage</h1></header>

            <article>
                <h2>Quizzes</h2>
                <div>
                    <Button onClick={() => handleOpen('uploadPop')} label='Upload New Quiz Results' icon={<Icon iconId='file_upload' />} />
                    <Button onClick={() => history('/manage/courses')} label='Delete Existing Quiz Results' icon={<Icon iconId='delete' />} />
                </div>
            </article>
            <article>
                <h2>Users</h2>
                <h3>Students</h3>
                <div>
                    <Button onClick={() => handleOpen('addStudent')} label='Add New Student(s) To Studyplan' icon={<Icon iconId='group_add' />} />
                    <Button label='Remove Student(s)' icon={<Icon iconId='group_remove' />} />
                </div>

                {data.user.role === 'superAdmin' ?
                    (
                        <>
                            <h3>Teachers</h3>
                            <div>
                                <Button onClick={() => handleOpen('addTeacher')} label='Add New Teacher To System' icon={<Icon iconId='group_add' />} />
                                <Button label='Remove Teacher(s)' icon={<Icon iconId='group_remove' />} />
                            </div>
                        </>
                    ) : null
                }

                <PickStudyplan {...props} />
            </article>
        </section>
    );
}

export default MainManage;