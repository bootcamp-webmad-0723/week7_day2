import './ProjectsList.css'
import { projectsArray } from '../../fakeAPI'
import { useState } from 'react'

const ProjectsList = () => {

    const [projects, setProjects] = useState(projectsArray)

    return (
        <div className="ProjectsList">
            {
                projects.map(elm => {
                    return (
                        <article key={elm._id}>
                            <h3>{elm.name}</h3>
                            <p>{elm.techStack}</p>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default ProjectsList