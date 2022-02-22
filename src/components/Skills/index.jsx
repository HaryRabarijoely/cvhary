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
            <Skill title="JAVASCRIPT" rating="3"/>
            <Skill title="RUBY" rating="3"/>
            <Skill title="RUBY-ON-RAILS" rating="3"/>
            <Skill title="REACT" rating="3"/>
            <Skill title="NODE" rating="3"/>
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