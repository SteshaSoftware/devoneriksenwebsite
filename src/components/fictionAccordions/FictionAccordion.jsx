// import { Typography } from '@mui/material';
// import React, { useState } from 'react'

// const FictionAccordion = () => {
//     // const [acc1, setAcc1] = useState(false)
//     // const [acc2, setAcc2] = useState(false)
//     // const [acc3, setAcc3] = useState(false)
//     // const [acc4, setAcc4] = useState(false)
//     // const [acc5, setAcc5] = useState(false)

//     const fictionData = [
//         [
//             {
//                 description: "You're about to go to bed, when you find  a woman getting food out of your\nrefrigerator. It turns out, that 'cat' you picked up outside the grocery store, wasn't a cat at all.",
//                 //   description2: " description2 You're about to go to bed, when you\n\n\nfind  a woman getting food out of your\nrefrigerator. It turns out, that 'cat' you picked up outside the grocery store, wasn't a cat at all."
//             },
//             {
//                 description: "description 1-2 interesting story goes here. With multiple empty lines in between."
//             },
//             {
//                 description: "description 1-3 one more story description.This one also has multiple empty lines."
//             }
//         ],
//         [

//             {
//                 description: "You're about to go to bed, when youfind  a woman getting food out of your\nrefrigerator. It turns out, that 'cat' you picked up outside the grocery store, wasn't a cat at all.",
//                 //   description2: " description2 You're about to go to bed, when you\n\n\nfind  a woman getting food out of your\nrefrigerator. It turns out, that 'cat' you picked up outside the grocery store, wasn't a cat at all."
//             },
//             {
//                 description: "Another interesting story goes here.With multiple empty lines in between."
//             },
//             {
//                 description: "And one more story description.This one also has multiple empty lines."
//             }
//         ]
//     ];
//     return (
//         <div>
//         {fictionData.map((items, index) => (
//             <div key={index}>
//                 {items.map((peritem, i) => (
//                     <Typography key={i} variant='body1' color="white" className='mt-4' >{peritem.description}</Typography>
//                 ))}
//             </div>
//         ))}
//     </div>
//     );
// }

// export default FictionAccordion

import React, { useEffect, useState } from 'react'
import Accordion from '../Accordian/acc';
import CatInvader from '../../pages/CatInvader';
import CatInvaderAccordion from '../accordions/CatInvaderAccordion';
import AdoptedVampire from '../accordions/AdoptedVampireAccordion';
import BeatlesAccordion from '../accordions/BeatlesAccordion';
import EddwizardAccordion from '../accordions/EddwizardAccordion';
import AdoptedVampireAccordion from '../accordions/AdoptedVampireAccordion';
import SwordLessonAccordion from '../accordions/SwordLessonAccordion';


const FictionAccordion = () => {

    // const { articles , status} = useSelector((state) => state.products)


    // console.log(articles[0].Created_on);

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchAllArticless())
    // }, [])

    const fictionData = [
        [
            {
                title: "You're about to go to bed",
                description: " description2 You're about to go to bed, when you\n\n\nfind  a woman getting food out of your\nrefrigerator. It turns out, that 'cat' you picked up outside the grocery store, wasn't a cat at all."
            },
            {
                description: "You're about to go to bed, when you find  a woman getting food out of your\nrefrigerator. It turns out, that 'cat' you picked up outside the grocery store, wasn't a cat at all.",
                //   description2: " description2 You're about to go to bed, when you\n\n\nfind  a woman getting food out of your\nrefrigerator. It turns out, that 'cat' you picked up outside the grocery store, wasn't a cat at all."
            },
            {
                description: "description 1-2 interesting story goes here. With multiple empty lines in between."
            },
            {
                description: "description 1-3 one more story description.This one also has multiple empty lines."
            }
        ],
        [

            {
                description: "You're about to go to bed, when youfind  a woman getting food out of your\nrefrigerator. It turns out, that 'cat' you picked up outside the grocery store, wasn't a cat at all.",
                //   description2: " description2 You're about to go to bed, when you\n\n\nfind  a woman getting food out of your\nrefrigerator. It turns out, that 'cat' you picked up outside the grocery store, wasn't a cat at all."
            },
            {
                description: "Another interesting story goes here.With multiple empty lines in between."
            },
            {
                description: "And one more story description.This one also has multiple empty lines."
            }
        ]
    ];

    // const [accordions, setAccordions] = useState(articles.map(() => false));
    // console.log(accordions);
    //     const storedAccordions = JSON.parse(localStorage.getItem('accordions'));
    //     const initialAccordions = storedAccordions || Array.from({ length: articles.length }, () => false);

    //     const [accordions, setAccordions] = useState(initialAccordions);
    //   console.log(accordions);
    //     // Save the state to localStorage whenever it changes
    //     useEffect(() => {
    //       localStorage.setItem('accordions', JSON.stringify(accordions));
    //     }, [accordions]);

    // const storedAccordions = JSON.parse(localStorage.getItem('accordions'));
    // const initialAccordions = storedAccordions || Array.from({ length: fictionData.length }, () => false);

    // Use useState to manage the accordions state
    // const [accordions, setAccordions] = useState(initialAccordions);

    // Function to toggle the state of a specific accordion
    // const toggleAccordion = (index) => {
    //   const newAccordions = [...accordions];
    //   newAccordions[index] = !newAccordions[index];
    //   setAccordions(newAccordions);
    // };

    // Save the state to localStorage whenever it changes
    // useEffect(() => {
    //   localStorage.setItem('accordions', JSON.stringify(accordions));
    // }, [accordions]);


    return (
        <>
            <CatInvaderAccordion/>
            <AdoptedVampireAccordion/>
            <BeatlesAccordion/>
            <EddwizardAccordion/>
            <SwordLessonAccordion/>

        </>
    )
}

export default FictionAccordion