import React from 'react'
import SliderSection from './SliderSection/SliderSection'
import AllClasses from './ClassesSection/AllClasses'
import AllInstructor from './InstructorSection/AllInstructor'


const Home = () => {
  return (
    <div>
      <SliderSection></SliderSection>
      <AllClasses></AllClasses> 
      <AllInstructor></AllInstructor>   
    </div>
  )
}

export default Home