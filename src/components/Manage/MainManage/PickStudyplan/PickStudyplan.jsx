import React, { Component } from 'react';
import Button from '../../../Button/Button';
import Icon from '../../../Icon/Icon';

class PickStudyplan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    async componentDidMount() {
        await this.props.getStudyplan();
    }

    handleInputChange = e => {
        const target = e.target;
        const checked = target.checked;
        const name = target.name;
        this.setState({
            [name]: checked
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let checked = [];
        let data = {};
        if (Object.keys(this.state).length === 0 && this.state.constructor === Object) {
            this.setState({
                error: true
            })
        } else {
            for (const property in this.state) {
                if (this.state[property] === true) {
                    if (property !== 'error')
                        checked.push(property);
                }
            }
            if (checked.length !== 0) {
                data.studyProgrammeCode = checked;
                this.props.pickStudyplan(data);
            } else {
                this.setState({
                    error: true
                });
            }
        }
    }

    render() {
        return (
            <fieldset>
                <form onSubmit={this.handleSubmit}>
                    <label className='large-label' htmlFor='courses'>Choose studyplan(s) you want to follow</label>
                    <div className='studyplan-selection'>
                        {this.props.studyPlanCodes.map((data) => (
                            <label key={data.studyProgrammeCode} htmlFor={data.studyProgrammeCode}>{data.studyProgrammeCode}
                                <input onChange={this.handleInputChange} type="checkbox" name={data.studyProgrammeCode} id={data.studyProgrammeCode} />
                                <span className="checkmark"></span>
                            </label>
                        ))}
                    </div>

                    {this.state.error && <p className='danger'>Nothing was selected!</p>}
                    <Button type='submit' label='Save course choices' icon={<Icon iconId='save' />} />
                </form>
            </fieldset>
        );
    }
}

export default PickStudyplan;