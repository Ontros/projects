import React, { useEffect, useState } from 'react';
import './Colors.css'
import './App.css';

function Lang(lang: number, array: string | string[]) {
  if (array.length === 1) {
    return array
  }
  var ans = array[lang]
  if (ans) {
    console.log(array)
    return ans
  }
  return "Language error"
}
interface Button {
  text: string[];
  redirect: string;
}

interface Project {
  title: string;
  description: string[];
  buttons: Button[];
}

interface ProjectParams {
  project: Project;
  index: number;
  lang: number;
  visibleProjectNum: number;
}

function Project(params: ProjectParams) {
  const { project, index, lang, visibleProjectNum } = params
  return (
    <div className={`project ${index < visibleProjectNum ? 'project-visible' : ''}`} key={index}>
      <div className="project-title">{project.title}</div>
      <div className="project-description">{Lang(lang, project.description)}</div>
      {project.buttons.map((button) => {
        return <a href={button.redirect}><div className="project-button"
        >{Lang(lang, button.text)}</div></a>
      })
      }
    </div>
  )
}

function App() {
  var popupTimeout = 2000

  //TODO: 1) CSS vice tlacitek 2) switchovani Langu 3) odebrat double kod na zobrazovani projektu

  const [projectDivs, setProjectDivs] = useState<JSX.Element[]>([])
  const [visibleProjectNum, setVisibleProjectNum] = useState(0)
  const [lang, setLang] = useState(0) //0 = czech; 1 = english
  const projects: Project[] = [
    {
      title: 'OntroBot',
      description: ['My personal discord bot (currently offline)', 'Můj osobní discord bot (aktuálně offline)'],
      buttons: [{
        text: ['View source code', 'Zobrazit zdrojový kód'],
        redirect: 'https://github.com/Ontros/OntroBot',
      },
      {
        text: ['Invite to your server', 'Pozvat na server'],
        redirect: 'https://discordapp.com/oauth2/authorize?client_id=610830662353682464&scope=bot&permissions=8'
      }]
    },
  ]

  useEffect(() => {
    projects.forEach((project, index) => {
      setTimeout(() => {
        setVisibleProjectNum(index + 1)
      }, index * popupTimeout)
      appendToProjectDivs(
        <Project project={project} index={index} visibleProjectNum={visibleProjectNum} lang={lang} />
      )
    })
  }, [])

  function appendToProjectDivs(appendix: JSX.Element) {
    var tempProjectDivs = projectDivs
    tempProjectDivs.push(
      appendix
    )
    setProjectDivs(tempProjectDivs)
  }

  return (
    <div className="App">
      <div className="Header">
        <h1>Ontro</h1>
      </div>
      <hr />
      <div className="projects">
        {
          projects.map((project, index) => {
            return (
              <Project project={project} index={index} visibleProjectNum={visibleProjectNum} lang={lang} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
// <div className={`project`} key={index}>
//   <div className="project-title">{project.title}</div>
//   <div className="project-description">{Lang(lang, project.description)}</div>
//   {project.buttons.map((button) => {
//     return <div className="project-button" onClick={() => {
//       window.location.href = button.redirect
//     }}>{Lang(lang, button.text)}</div>
//   })/* <div className="project-button" onClick={() => {
//     window.location.href = project.redirect
//   }}>{Lang(lang, project.buttonText)}</div> */}
// </div>

//     <div className={`project ${index < visibleProjectNum ? 'project-visible' : ''}`} key={index}>
//       <div className="project-title">{project.title}</div>
//       <div className="project-description">{Lang(lang, project.description)}</div>
//       {project.buttons.map((button) => {
  //         return <a href={button.redirect}><div className="project-button"
  //         // onClick={() => {
    //         //   window.location.href = button.redirect
    //         // }}
    //         >{Lang(lang, button.text)}</div></a>
    //       })/* <div className="project-button" onClick={() => {
      //   window.location.href = project.redirect
    // }}>{Lang(lang, project.buttonText)}</div> */}
    //     </div>