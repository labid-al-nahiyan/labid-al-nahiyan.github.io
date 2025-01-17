'use client'


import Top from "./Top/Top";
import Navbar from "./Navbar/Navbar";


import Education from "./Education/Education";
import Skill from "./Skill/Skill";
import Achievements from "./Achievements/Achievements";
import Project from "./Projects/Projects";
import AboutMe from "./AboutMe/AboutMe";
import { useEffect, useState } from "react";


export default function Home() {

  const [activeSection, setActiveSection] = useState('about')


  useEffect(() => {

      const about = document.getElementById('aboutme')
      const project = document.getElementById('project')
      const skill = document.getElementById('skill')
      const education = document.getElementById('education')
      const achievement = document.getElementById('achievement')


      const sections = [about, project, skill, education, achievement]

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: [0.5],
      };


    const observer = new IntersectionObserver(entries => {
  
      entries.forEach(entry => {
          if(entry.isIntersecting){
              if (entry.target.id == 'aboutme'){
                setActiveSection('aboutme')
               
              }
              if (entry.target.id == 'project'){
                setActiveSection('project')
              }
              if (entry.target.id == 'skill'){
                setActiveSection('skill')
              }
              if (entry.target.id == 'achievement'){
                setActiveSection('achievement')
              }
              if (entry.target.id == 'education'){
                setActiveSection('education')
              }
          }
      })
  }, observerOptions)
  
  sections?.forEach(section => {
    if (section) {
      observer.observe(section);
    } 
  })

  }, [])


  return (
    <div>

      <Navbar activeSection={activeSection}/>
      <Top></Top>
      <AboutMe></AboutMe>
      <Education></Education>
      <Skill></Skill>
      <Achievements></Achievements>
      <Project></Project>

      <footer className="footer footer-center bg-base-300 text-base-content p-4 mt-10">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Labid Al Nahiyan</p>
        </aside>
      </footer>
    </div>
  );
}
