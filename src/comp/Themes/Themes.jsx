import { Card } from '@mui/material'
import React from 'react'
import Card1 from '../Utility/Card1'
import Card2 from '../Utility/Card1'

import { useParallax } from 'react-scroll-parallax';
import Game from '../../assets/svg/gamesvg.svg';
import Brain from '../../assets/svg/brainsvg.svg';
import Mobile from '../../assets/svg/mobilesvg.svg';
// import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import Theme4 from './../../assets/themes_new_6.png'
import Theme2 from './../../assets/themes_new_4.png'
import Theme3 from './../../assets/themes_new_3.png'
import Theme1 from './../../assets/themes_new_5.png'
import Theme5 from './../../assets/themes_new_2.png'
import Theme6 from './../../assets/themes_new_1.png'


import './../Utility/card.css'


const Themes = ({ themesRef }) => {
    const head = useParallax({
        translateX: [-60, 20],
    });
    return (
        <div className=''>
            < div className="col-md-12 text-center " ref={head.ref} >
                <h3 className="animate-character">THEMES</h3>
            </div >
            <div className='flex flex-row flex-wrap container gradie gradie1 gap-14 pt-9 pb-14 justify-center' ref={themesRef}>
                <div>
                    <Card1 Images={Theme1} text={"DIGITAL EMPOWERMENT FOR RURAL COMMUNITIES"} content={"RuralDigiPower's hackathon empowers rural communities through technology. Tackle real-world challenges, with prizes from supportive partners. Simple registration and assistance available. Stay updated on our progress and reach out for support. RuralDigiPower: Technology for rural transformation."} prize = {"5K"} />
                </div>
                <div>
                    <Card1 Images={Theme2} text={"URBAN MOBILITY AND TRAFFIC MANAGEMENT"} content={"Urban Mobility & Traffic Management: Join our hackathon to tackle urban congestion, transportation efficiency, and sustainability. Solve real challenges, win theme-aligned prizes, register with ease, and access support. Stay updated on progress in the urban mobility field. Urban Mobility & Traffic Management"} prize ={"1K"} />
                </div>
                <div>
                    <Card1 Images={Theme3} text={"AGRICULTURE AND FOOD TECHNOLOGY"} content={"Agriculture & Food Technology: Join our hackathon to innovate in agriculture, food production, and sustainability. Tackle real challenges, win theme-aligned prizes, register easily, and access support. Stay updated on progress in agriculture and food tech. Agriculture & Food Technology: Transforming the future of farming and food."} prize ={"2K"}/>
                </div>
                <div>
                    <Card2 Images={Theme4}  text={"HERITAGE AND CULTURE"} content={"Heritage & Culture: Join our hackathon to celebrate and preserve cultural heritage. Tackle real challenges, win theme-aligned prizes, register effortlessly, and access support. Stay updated on progress in heritage and culture preservation. Heritage & Culture: Shaping the future by preserving our past and information."} prize ={"4K"} />
                </div>
                <div>
                    <Card1 Images={Theme5} text={"WASTE MANAGEMENT AND RECYCLING"}  content={"Waste Management & Recycling: Join our hackathon to innovate in waste reduction and recycling. Tackle real challenges, win theme-aligned prizes, register with ease, and access support. Stay updated on progress in waste management and recycling tech. Waste Management & Recycling."} prize = {"3K"}/>
                </div>
                <div>
                    <Card1 Images={Theme6} text={"RENEWABLE/SUSTAINABLE ENERGY SOLUTIONS"}  content={"Renewable/Sustainable Energy Solutions: Join our hackathon to advance clean energy innovation. Tackle real challenges, win theme-aligned prizes, register effortlessly, and access support. Stay updated on progress in renewable/sustainable energy tech. Renewable/Sustainable Energy Solutions."} prize ={"6K"}/>
                </div>
            </div>
        </div>
    )
}

export default Themes

