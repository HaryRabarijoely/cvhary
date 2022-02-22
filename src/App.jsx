import React from 'react';
import './App.scss';
import DarkMode from './components/DarkMode';
import FormationsExperiences from './components/FormationsExperiences';
import Profil from './components/Profil';
import Skills from './components/Skills';
import User from './components/User';
import { Preview, print } from 'react-html2pdf';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';


const App = () => {
  const handleGenerateCv = () => {
    let cvTemplate = document.getElementById("cv-print")
    cvTemplate.setAttribute("style", "width:210mm !important")
    cvTemplate.classList.add("cv-print");
    document.body.classList.remove("dark");
    setTimeout(() => {
      print("cv", "cv-print")
      cvTemplate.setAttribute("style", "width:100% !important")
      cvTemplate.classList.remove("cv-print")
    }, 300)
  }

  return (      
    <Preview id={'cv-print'} class="cv-print" >
      <div className="App">
        <div className="grid__container">
          <div className="sidebar">
            <div className="actions">
              <DarkMode />              
              <button onClick={handleGenerateCv} >PDF<PictureAsPdfOutlinedIcon /></button>
            </div>            
            <User />
            <Skills />
          </div>
          <div className="main">
            <Profil />
            <FormationsExperiences />
          </div>

        </div>
        
      </div>
    </Preview>
  );
}

export default App;
