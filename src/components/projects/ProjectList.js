import React from 'react';

const ProjectList = () => {
    return(
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Project Title</span>
                        <p>Posted by Linux Team</p>
                        <p className="grey-text">January 21st 2019</p>
                </div>
            </div>

            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Project Title</span>
                        <p>Posted by Windows Team</p>
                        <p className="grey-text">January 21st 2019</p>
                </div>
            </div>

            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Project Title</span>
                        <p>Posted by Ubuntu Team</p>
                        <p className="grey-text">January 21st 2019</p>
                </div>
            </div>
        </div>

        
    )
}

export default ProjectList;