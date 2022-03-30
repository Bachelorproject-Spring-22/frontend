import React, { useEffect } from 'react';
import Button from '../../../Button/Button';
import Icon from '../../../Icon/Icon';

function PickStudyplan({ getStudyplan, studyPlanCodes }) {
    console.log(studyPlanCodes);
    useEffect(() => {
        getStudyplan();
    }, [getStudyplan]);

    return (
        <fieldset>
            <label className='large-label' htmlFor='courses'>Choose studyplan(s) you want to follow</label>
            <div className='studyplan-selection'>
                {studyPlanCodes.map((data) => (
                    <label key={data.studyProgrammeCode} htmlFor={data.studyProgrammeCode}>{data.studyProgrammeCode}
                        <input type="checkbox" name={data.studyProgrammeCode} id={data.studyProgrammeCode} />
                        <span className="checkmark"></span>
                    </label>
                ))}
            </div>

            <Button type='submit' label='Save course choices' icon={<Icon iconId='save' />} />
        </fieldset>
    );
}

export default PickStudyplan;