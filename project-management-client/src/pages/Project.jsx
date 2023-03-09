import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Project() {
    const {projectId} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:5005/api/projects/${projectId}`)
        .then(project=>{
            console.log(project.data)
        })
    },[])
  return (
    <div>Project
        {projectId}
    </div>
  )
}

export default Project