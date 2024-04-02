import React from 'react'
import { useEffect } from 'react';
import movieQuiz from "../../../Assets/images/movieQuiz.jpeg"
const Movie_quiz = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
            <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={movieQuiz}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MOVIE QUIZ
            </h1>
            <p class="mb-8 leading-relaxed">Gully Cricket: Refers to a casual form of cricket played in streets, parks, or any open space, rather than in a formal cricket ground. It's popular in many cricket-loving countries, particularly in India. Gully cricket often involves improvised rules, such as fewer players, smaller playing areas, and variations in equipment. It's a fun and accessible way for people to enjoy the sport in a more informal setting.</p>
            <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register Now</button> 
            </div>
            </div>
        </div>
    </section>
                <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • Team Contains 5 Members.<br/>
                    • Gully cricket emphasises fair play and sportsmanship. Players are expected to abide by the rules, respect their opponents, and play in the spirit of the game.<br/>
                    • There can be variations in the rules regarding boundaries, such as hitting the ball over a certain height or distance being declared as six, or the ball bouncing off a wall counting as runs, etc.<br/>
                    • Depending on the locality and the preferences of the players, additional rules or modifications to existing rules may be introduced to suit the conditions or enhance the enjoyment of the game.<br/>
                    </p>
                    

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">ENTRY FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4>200/- per Team</h4><br/>
                    </p>
            
                </div>
              </div>
    
    
    </>
  )
}

export default Movie_quiz