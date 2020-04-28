import React from 'react';

import './projects.styles.scss';

import PROJECT_DATA from '../../pages/homepage/projects.data';
import ProjectCollection from '../project-collection/project-collection.component';

class Projects extends React.Component {
    constructor (){
        super();
        this.state = {
            projects_data: PROJECT_DATA
        }
    }
    render () {
        return (
            <div className='project_items'>
                {
                    this.state.projects_data.map(({id, ...otherProjectProps}) => (
                        <div className='col-sm-12 col-md-6 col-xl-4' key={id} >
                            <ProjectCollection {...otherProjectProps} />
                        </div>
                    ))
                }
            </div>
        )
    }
};

export default Projects;