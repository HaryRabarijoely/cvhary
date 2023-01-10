import React from 'react';
import "./index.scss";
import Skill from '../Skill';
import Interests from '../Interests';


const Skills = () => {
  return (
   <>
        <div className="skills">
            <h2 className="h2">Compétences</h2>
            <Skill title="HTML" rating="5"/>
            <Skill title="CSS" rating="4"/>
            <Skill title="JAVASCRIPT" rating="4"/>
            <Skill title="RUBY" rating="4"/>
            <Skill title="RUBY-ON-RAILS" rating="4"/>
            <Skill title="REACTJS" rating="4"/>
            <Skill title="NEXTJS" rating="3"/>
            <Skill title="NODEJS" rating="4"/>
            <Skill title="ANGULAR" rating="3"/>
            <Skill title="GIT" rating="4"/>
            <Skill title="POSTGRESQL" rating="3"/>  
            <Skill title="MONGODB" rating="3"/> 
            <Skill title="LINUX" rating="3"/>         
        </div>
        
        <div className="skills">
            <h2 className="h2">langues</h2>
            <Skill title="FRANCAIS" rating="5"/>
            <Skill title="ANGLAIS" rating="3"/>
            <Skill title="ALLEMAND" rating="1"/>
        </div>
        <Interests />
    </>
  )
};

export default Skills;