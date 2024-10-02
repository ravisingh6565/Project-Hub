import React, { useState } from 'react'
import style from './CreateProject.module.css'

// const [allProjectData, setAllProjectData] = useState({});

// let response = await fetch('http://localhost:5000/api/v1/add-project', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data)
// });

// response = await response.json();
// console.log(response)

const CreateProject = () => {
  return (
    <div>
      <h1 className={style.h1}>this is create project list</h1>
    </div>
  )
}

export default CreateProject
