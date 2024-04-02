import React from 'react'
import { useEffect } from 'react';
import paper from "../../../Assets/images/paperpresentation.jpg"
const Paper_persentation = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
            <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={paper}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">PAPER PRESENTATION
            </h1>
            <p class="mb-8 leading-relaxed">Paper Presentation
   Paper presentation is an individual competition where each participant is required to make a paper about a given topic or area, and then present it in front of the juries.</p>
            <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register Now</button> 
            </div>
            </div>
        </div>


        <div className='justify-center mx-4'>
            <table className=' text-center mx-auto '>
            <thead >
                <tr>
                <th className='text-center mx-6'>DEPARTMENT</th>
                <th className='text-center'>TOPICS</th>
                </tr>
            </thead>
            <tbody >
                <tr>
                <td className='text-center' >CSE</td>
                <td  >    • ETHICAL HACKING <br/>
                • CLOUD COMPUTING <br/>
                • IOT & ITS APPLICATIONS <br/>
                • WEB DEVELOPMENT <br/>
                • FRONT END TECHNOLOGES<br/>
                </td>
              
                </tr>
                <tr>
                <td className='text-center' >ECE</td>
                <td  >    • SIGNAL & IMAGE PROCESSING<br/>
    • COMMUNICATION SYSTEMS<br/>
    • EMBEDDED SYSTEMS<br/>
    • VLSI<br/>
    • SENSOR NETWORKING<br/></td>
        
                </tr>
                <tr>
                <td className='text-center' >MECH</td>
                <td  >    • RECENT TRENDS IN MECHANICAL ENGINEERING<br/>
    • ENCHANCEMENT OF HEAT TRANSFER TECHNIQUES<br/>
    • ROBOTICS, CAD/CAM&FEA<br/>
    • NANO-COMPOSITES<br/>
    • ADDITIVE AND SUSTAINABLE MANUFACTURING TECHNOLOGIES<br/></td>
                
                </tr>
                <tr>
                <td className='text-center' >CIVIL</td>
                <td  >    • STRUCTURAL ENGINEERING<br/>
    • GEO-TECHNICAL ENGINEERING<br/>
    • TRANSPORTATION ENGINEERING<br/>
    • WATER RESOURCE ENGINEERING<br/>
    • ENVIRONMENTAL ENGINEERING<br/></td>
                
                </tr>
                <tr>
                <td className='text-center' >EEE</td>
                <td  >    • SMART GRIDS<br/>
    • RENEWABLE POWER CONVERSION TECHNOLOGIES<br/>
    • POWER QUALITY IMPROVEMENT TECHNIQUES<br/>
    • POWER SYSTEM STABILITY<br/>
    • SOFT COMPUTING TECHNIQUES<br/></td>
                
                </tr>

                <tr>
                <td className='text-center'>S&H</td>
                <td  >     • NANO MATERIALS<br/>
    • TRANSFORM TECHNIQUES<br/>
    • POLYMERS<br/>
    • APPLICATIONS OF OPTICAL FIBERS & LASERS<br/>
    • ADVANCED ENGINNERING MATERIALS<br/></td>
                
                </tr>

                <tr>
                <td className='text-center' >CSA & IT</td>
                <td  >       • MACHINE LEARNING<br/>
    • DEEP LEARNING<br/>
    • BIG DATA<br/>
    • CYBER SECURITY<br/>
    • DATA ANALYTICS<br/></td>
                
                </tr>
            </tbody>
            </table>

            </div>
        
            </section>
                <div class="bg-white py-4 sm:py-4 lg:py-6">
                <div class="mx-auto max-w-screen-md px-4 md:px-8">

                    <p>
                    <h4 className='text-red-500'>Instructions to Candidates :</h4><br/>
                            1. Open for all Students.<br/>
                            2. A Paper can have maximum of two authors.<br/>
                            3. Papers must be in IEEE Format.<br/>
                            4. Papers should be sent through E-mail only.<br/>
                            5. No accommodation will be provided.<br/><br/>
                              <strong> • Registration Fee and mode of payment</strong><br/>
                            Registration Fee has to be paid in online
                            payment after confirmation. Account details
                            are available in the website.<br/><br/>
                              <strong> • Last date for Registration :</strong>  25th February, 2023
                            Intimation of Confirmation: 26th February, 2023 <br/><br/>
                            <strong>Registration Fee and mode of payment:</strong> <br/>
                            Registration Fee has to be paid in online
                            payment after confirmation. Account details
                            are available in the website.<br /><br/>
                            <strong>Send your papers to</strong> <br/>
                            • CE : ample.ce@svcolleges.edu.in<br/>
                            • EEE : ample.eee@svcolleges.edu.in<br/>
                            • ME : ample.me@svcolleges.edu.in<br/>
                            • ECE : ample.ece@svcolleges.edu.in<br/>
                            • CSE : ample.cse@svcolleges.edu.in <br/>
                            • CSA : ample.csa@svcolleges.edu.in<br/>
                            • HS :ample.sh@svcolleges.edu.in<br/>
                            • IT/CSM/CSD/CSC: ample.it@svcolleges.edu.in<br/>

                    </p>
              
                  <h2 class="my-2 mt-4 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                          <h4 className='text-black-800'> Purpose:</h4> <br/>
                            • To enhance participant’s ability in Writing or making papers in English as well as to present it, and also to broaden the mind of the participants.<br/>
                            <strong className='text-red-300'>➤ Team Formation: </strong><br/>
                            • 1. Team can have maximum of 2 participants from B.Tech/B. E/ Diploma.<br/>
                        2. No participants can be part of more than one team.<br/>
                        3. It is not necessary that the participants forming a team should be from the same college.<br/>
                        4. There is no restriction on the number of teams from the same college.<br/>
                        <strong className='text-red-300'>➤ Presentation Rules: </strong><br/>
                            • 1. The paper submitted will have to be presented during the event.<br/>
                        2. Hard copies of the same are to be submitted before presentation to Judges.<br/>
                        3. The Teams will get 8 minutes to present their paper. And 2 minutes will be for questioning by judges.<br/>
                        4. The participants will have to present their papers in MS-Power Point (ppt) format only.<br/>
                        5. Violation of any rule can result in rejection of paper.<br/>
                        6. The organizers reserve the right to change/update the rules of the contest at any point of time and will do their best to inform to participants of the same. However, it is ultimately the responsibility of the teams to keep themselves updated.<br/>
                           <strong className='text-red-300'>➤ Paper Format Rules:</strong><br/>
                            • The paper should be in IEEE format.<br/>
                        1. Abstract may not exceed the limit of two Pages.<br/>
                        2. The front page should have title of paper on the top and the details of the team members at the bottom. (As mentioned in abstract)<br/>
                        3. It should have abstract attached.<br/>
                        4. Font style for text: Times New Roman.<br/>
                        5. Font size for text: 12 points.<br/>
                        6. Font size for headings: 16 points.<br/>
                        7. Font size for sub-headings: 14 points.<br/>
                        8. Margin of 1 inches from all sides.<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGSITRATION FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4><strong>• 100/- Per Team.</strong></h4><br/>
                    </p>
                    <div class="flex justify-center">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSf0BpGl0pBSYvy5GLp-m0f1dWBq_kZjwzR30JGZZaoX_QF6kQ/viewform?usp=sf_link'><button  class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register Now</button> </a> 
            </div>
            
                </div>
              </div>
    
    
    
    </>
  )
}

export default Paper_persentation