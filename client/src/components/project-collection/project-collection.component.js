import React from 'react';

import './project-collection.styles.scss';

const ProjectCollection = ({title, img, gitLink, history}) => (
    <div className='project-collection' onClick={() => history.push(`${gitLink}`)}>                
        <div className='background-image' style={{backgroundImage: `url(${img})`}} /> 
        <div className='content'>
            <h3 className='title'>{title}</h3>
            <a src={gitLink} className='source_code'>Source code: {gitLink}</a>
        </div>              
    </div>
);

export default ProjectCollection;