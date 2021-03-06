import React from 'react'

const ProjectSummary = ({project}) => {
        return(

    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <h6 className="card-title">{project.title}</h6>
                <p>{project.content}</p>
                <p className="grey-text">July 21st 2020</p>
            </div>
    </div>
    )
}

export default ProjectSummary;