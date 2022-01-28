import React, { useEffect, useState } from 'react';
import './Colors.css';
import './App.css';
//@ts-expect-error
import detectBrowserLanguage from 'detect-browser-language'
import { Lang, LanguageSelect } from './Utils'


interface Button {
  text: string[];
  redirect: string;
}

interface ProjectInterface {
  title: string[];
  description: string[];
  buttons: Button[];
}

interface ProjectParams {
  project: ProjectInterface;
  index: number;
  lang: number;
  visibleProjectNum: number;
}

function Project(params: ProjectParams) {
  const { project, index, lang, visibleProjectNum } = params
  return (
    <div className={`project ${index < visibleProjectNum ? 'project-visible' : ''}`} key={index}>
      <div className="project-title">{Lang(lang, project.title)}</div>
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
  var popupTimeout = 200

  //TODO: 1) clean up
  console.log(detectBrowserLanguage().substring(0, 2).toLowerCase() === 'cs' ? 0 : 1)

  const [visibleProjectNum, setVisibleProjectNum] = useState(0)
  const [lang, setLang] = useState(detectBrowserLanguage().substring(0, 2).toLowerCase() === 'cs' ? 1 : 0) //1 = czech; 0 = english

  const projects: ProjectInterface[] = [
    {
      title: ['OntroBot'],
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
    {
      title: ['Testing', 'Zkoušení'],
      description: ['Used for learning some school things', 'Stránka na učení'],
      buttons: [{
        text: ['View source code', 'Zobrazit zdrojový kód'],
        redirect: 'https://github.com/Ontros/zkouseni/tree/master',
      },
      {
        text: ['Take a look', 'Zobrazit stránku'],
        redirect: 'https://ontros.github.io/zkouseni'
      }]
    },
    {
      title: ['This page', 'Tahle stránka'],
      description: ['The site you see right now', 'Stránka, kterou právě vidíte'],
      buttons: [{
        text: ['View source code', 'Zobrazit zdrojový kód'],
        redirect: 'https://github.com/Ontros/projects/tree/master',
      }]
    },
    {
      title: ['Economy game', 'Ekonomická hra'],
      description: ['A monopoly like game, because my friends do not want to play Business Tour, because they think it is rigged',
        'Hra podobná monopoly, protože mojí kamarádi nechcou hrát Business Tour, protože si myslí, že je zmanipulované'],
      buttons: [{
        text: ['Coming soon', 'Dělám na tom'],
        redirect: 'https://ontros.github.io'
      }]
    }
  ]


  document.title = Lang(lang, ["Ontro - Projects", "Ontro - Projekty"])

  useEffect(() => {
    projects.forEach((project, index) => {
      setTimeout(() => {
        setVisibleProjectNum(index + 1)
      }, index * popupTimeout)
    })
  }, [])

  return (
    <div className="App">
      <div className="Header">
        <h1>Ontro</h1>
        <LanguageSelect lang={lang} setLang={setLang} />
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