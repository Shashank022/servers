import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>This tutorial covers what variables are, how to declare and name them, and also take a closer look at the difference between var, let, and const. It also goes over the effects of hoisting and the significance of global and local scope to a variable’s behavio</p>
                </div>
                <div className="card-action gret lighten-4 grey-text"></div>
            </div>
        </div>
    )
}

export default ProjectDetails;
