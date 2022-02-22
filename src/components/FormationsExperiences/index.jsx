import React from 'react'
import "./index.scss";
import DataFormations from '../../datas/Formations';
import Formations from '../Formations';
import Experiences from '../Experiences';
import dataExperiences from '../../datas/Experiences';



const FormationsExperiences = () => {
   
  return <>
    
    <Formations datas={DataFormations}/>
    <Experiences datas={dataExperiences} />
    
    </>
  
}

export default FormationsExperiences;