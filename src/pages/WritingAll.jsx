import React from 'react'
import CatInvaderAccordion from '../components/accordions/CatInvaderAccordion'
import AdoptedVampireAccordion from '../components/accordions/AdoptedVampireAccordion'
import BeatlesAccordion from '../components/accordions/BeatlesAccordion'
import EddwizardAccordion from '../components/accordions/EddwizardAccordion'
import SwordLessonAccordion from '../components/accordions/SwordLessonAccordion'
import DarkLighthouse from '../components/accordions/DarkLighthouseAccordion'

const WritingAll= () => {
  return (
        <>
            <DarkLighthouse />
            <SwordLessonAccordion />
            <EddwizardAccordion />
            <AdoptedVampireAccordion />
            <BeatlesAccordion />
            <CatInvaderAccordion /> 
        </>
  )
}

export default WritingAll
