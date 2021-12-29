import React, { useEffect, useState } from 'react';
import './Colors.css'
import './App.css';

function App() {
  const projects = [
    {
      title: "Ontro Bot",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex velit dignissimos voluptas ab fugiat sit?",
    },
    {
      title: "Ontro Bot",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex velit dignissimos voluptas ab fugiat sit?",
    },
    {
      title: "Ontro Bot",
      description: "Lorem, ipsum dolor sit fjkasdkfjadsh lkjsadlfkjalsdfkjlaskdjflaskjdflaskdjf lkjasdflkjasdflkjasdlfkjas lkjfsdalkjflsadkjflsakdjf lksajdflkjasdf lkjsad lfkjasdamet consectetur adipisicing elit. Ex velit dignissimos voluptas ab fugiat sit?",
    },
    {
      title: "Ontro Bot",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex velit dignissimos voluptas ab fugiat sit?",
    },
    {
      title: "Ontro Bot",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex velit dignissimos voluptas ab fugiat sit?",
    },
    {
      title: "Ontro Bot",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex velit dignissimos voluptas ab fugiat sit?",
    },
  ]
  const [projectDivs, setProjectDivs] = useState<JSX.Element[]>([])
  const [visibleProjectNum, setVisibleProjectNum] = useState(0)
  //Pridavej do projectDivs postupne a rendruj to
  useEffect(() => {
    projects.forEach((project, index) => {
      setTimeout(() => {
        setVisibleProjectNum(index + 1)
      }, index * 1000)
      appendToProjectDivs(
        <div className={`project`} key={index}>
          <div className="project-title">{project.title}</div>
          <div className="project-description">{project.description}</div>
          <div className="project-button">SHOW MORE</div>
        </div>
      )
    })
  }, [])

  console.log(projectDivs)
  function appendToProjectDivs(appendix: JSX.Element) {
    var tempProjectDivs = projectDivs
    tempProjectDivs.push(
      appendix
    )
    setProjectDivs(tempProjectDivs)
  }

  console.log(visibleProjectNum)
  return (
    <div className="App">
      <div className="Header">
        <h1>Ontro</h1>
      </div>
      <div className="projects">
        {
          projects.map((project, index) => {
            // setTimeout(() => {
            return (
              <div className={`project ${index < visibleProjectNum ? 'project-visible' : ''}`} key={index}>
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.description}</div>
                <div className="project-button">SHOW MORE</div>
              </div>
            )
            // }, index * 1000)
          })
        }
      </div>
    </div >
  );
}

export default App;
