import React from 'react'
import SliderSection from './SliderSection/SliderSection'
import AllClasses from './ClassesSection/AllClasses'
import AllInstructor from './InstructorSection/AllInstructor'
import useTitle from '../../../Hooks/useTitle'


const Home = () => {
  useTitle('Home')
  return (
    <div>
      <SliderSection></SliderSection>
      <AllClasses></AllClasses> 
      <AllInstructor></AllInstructor>   
    </div>
  )
}

export default Home