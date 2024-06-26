import React from 'react'
import { useEffect } from 'react';
import tug_of_war from "../../../Assets/images/tug_of_war1.jpg"
import RegisterButton from '../../Registerbutton';
const ThugOfWar = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={tug_of_war}/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">TUG OF WAR
            </h1>
            <p className="mb-8 leading-relaxed text-justify">Tug Of War: is a sport that pits two teams against each other in a test of strength. The teams, which can vary in size but typically have eight members each, stand at opposite ends of a rope and try to pull the other team across a designated line or marker. The team that manages to pull the opposing team past the marker wins.</p>
            <div className="flex justify-center">
              <a href='https://forms.gle/JJtknkthJH7pgf766'>
                <RegisterButton/>
                </a>
            </div>
            </div>
        </div>
    </section>
                <div className="bg-white py-4 sm:py-4 lg:py-6">
                <div className="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES :</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong>➤ Team Contains 5 Members.</strong><br/>
                    ➤ A level playing surface, free from obstacles, with the center line marked clearly. It's often on grass or another soft surface to minimize injuries.<br/>
                    ➤ Teams line up evenly on either side of the center line, with each member gripping the rope firmly.<br/>
                    ➤ A neutral official signals the start of the match, often with a whistle or command.<br/>
                    ➤ Players pull the rope, trying to drag the opposing team across the center line or into their own designated winning zone.<br/>
                    ➤ The team that successfully pulls their opponents across the center line or into their winning zone is declared the winner.<br/>
                    </p>
                    
                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">STUDENT COORDINATORS :</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • C.R. Kiran Kumar - 9491563520<br/>
                    </p>

                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4><strong className='text-red-600'>• 200/- Per Team.</strong></h4><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default ThugOfWar