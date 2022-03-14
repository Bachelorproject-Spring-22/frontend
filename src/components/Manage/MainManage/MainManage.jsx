import React from 'react';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';

function MainManage({ data, handleOpen }) {
    return (
        <section className='main-manage'>
            <h1>Manage</h1>

            <article>
                <h2>Quizes</h2>
                <Button onClick={() => handleOpen('uploadPop')} label='Upload New Quiz Results' icon={<Icon iconId='file_upload' />} />
                <Button label='Delete Existing Quiz Results' icon={<Icon iconId='delete' />} />
            </article>
            <article>
                <h2>Users</h2>
                <h3>Students</h3>
                <Button onClick={() => handleOpen('addStudent')} label='Add New Student(s) To Studyplan' icon={<Icon iconId='group_add' />} />
                <Button label='Manage Student(s)' icon={<Icon iconId='group_remove' />} />

                {data.user.role === 'superAdmin' ?
                    (
                        <>
                            <h3>Teachers</h3>
                            <Button onClick={() => handleOpen('addTeacher')} label='Add New Teacher To System' icon={<Icon iconId='group_add' />}/>
                            <Button label='Manage Teacher(s)' icon={<Icon iconId='group_add' />}/>
                        </>
                    ) : null
                }

                {data.user.role === 'teacher' ?
                    (
                        <>
                            <fieldset>
                                <label className='large-label' htmlFor='courses'>Pick your course for this semester</label>
                                <input placeholder='search...'/>
                                <textarea name='courses' id='courses' placeholder='IDG2100' wrap='off'></textarea>
    
                                <Button type='submit' label='Save course choices' icon={<Icon iconId='save' />} />
                            </fieldset>
                        </>
                    ) : null
                }
            </article>
        </section>
    );
}

export default MainManage;