import React from 'react'
import Ebox from './Ebox'
import './Eventsinfo.css'

function Eventsinfo() {
  return (
    <div className='einfo-container'>
        <div className="einfo-parent">
            <h2 className="events">Events</h2>
            <Ebox
            heading = "Box Office"
            para = "Cinema Club IITR, in collaboration with Thomso, proudly hosted Box Office – the ultimate movie quiz celebrating cinema in all its forms. From timeless classics to modern blockbusters, participants put their film knowledge to the test in an exciting and competitive atmosphere."
            image="./images/boxoff.jpg"
            />
            <Ebox
            heading="Beyond the Lens"
            para="Cinema Club proudly hosted Beyond the Lens —a creative competition that celebrated the art of storytelling through engaging write-ups and innovative video editing. Participants explored unique cinematic perspectives, showcasing their originality, imagination, and editing skills."
            image="./images/btlens.jpg"
            />
            <Ebox
            heading="False Script Reel Competition"
            para="Cinema Club proudly hosted the False Script Reel Competition — a quirky challenge where participants reimagined iconic movie scenes with humorous twists, dramatic dialogues, and over-the-top creativity. From genre remixes to filmy masala, the event showcased originality, wit, and a fresh take on cinema."
            image="./images/FalseScript.jpeg"
            />
        </div>
      
    </div>
  )
}

export default Eventsinfo
