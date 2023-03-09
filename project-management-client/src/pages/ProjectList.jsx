import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function ProjectList() {
    const [projects,setProjects] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:5005/api/projects')
        .then(response=>{
            console.log(response.data)
            setTimeout(() => {
                setProjects(response.data)
            }, 2000);
        })
    },[])
  return (
    <div>
        {!projects && <h2>Loading...</h2>}
       
       
        {projects && projects.map(individualProject=>{
            return(
                <div key={individualProject._id}>
                    <h2>{individualProject.title}</h2>
                    <p>{individualProject.description}</p>
                    <Link to={`/projects/${individualProject._id}`}>Link to Project</Link>
                </div>
            )
        })}
    </div>
  )
}

export default ProjectList