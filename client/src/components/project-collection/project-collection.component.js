import React from 'react';

import './project-collection.styles.scss';

const ProjectCollection = ({title, img, gitLink}) => (
    <a href={`${gitLink}`}>        
        {/* <div className='project-collection' onClick={() => window.location.href = `${gitLink}`}>                 */}
        <div className='project-collection'>                
            <div className='background-image' style={{backgroundImage: `url(${img})`}} /> 
            <div className='content'>
                <h3 className='title'>{title}</h3>
                <span className='source_code'>Source code: {gitLink}</span>
            </div>              
        </div>
    </a>
);

export default ProjectCollection;