import React from 'react'
import strel from "../assets/left_strel.svg"

import s_line from "../assets/second_line.svg"
import th_line from "../assets/th_line.svg"
import s_oval from "../assets/ovall.svg"
import th_oval from "../assets/Ovalll.svg"
import top_strel from "../assets/top_strell.svg"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import InProgressCard from './InProgressCard'
import PlannedCard from "../components/PlannedCard"
import LiveCard from './LiveCard'
function RoadMap() {
    const categories = useSelector(state => state.category.categories)

    const plannedItems = categories.filter(item => item.status?.title === "Planned");
    const inProgressItems = categories.filter(item => item.status?.title === "In-progress");
    const liveItems = categories.filter(item => item.status?.title === "Live");

    const navigate = useNavigate()
    const addCategoryBtn = () => {
        navigate('/addCategory')
    }
    const goBackBtn = () => {
        navigate('/')
    }
    const plannedCategories = categories.filter(category => category.status.title === "Planned");
    const numberOfPlannedCategories = plannedCategories.length;
    const inProgressCategories = categories.filter(elemm => elemm.status.title === "In-progress")
    const numberOfInProgressCategories = inProgressCategories.length
    const liveCategories = categories.filter(elem => elem.status.title === "Live")
    const numberOfLiveCategories = liveCategories.length
    return (

        <div className='w-full pt-14 mx-auto flex flex-col items-center '>
            <div className='w-1110 flex items-center justify-between p-5 h-20 bg-grayy rounded-xl'>
                <div className='flex flex-col'>
                    <button onClick={goBackBtn} className='flex hover:underline text-white text-14 font-semibold items-center gap-x-2'>
                        <img src={strel} alt="" />
                        Go Back
                    </button>
                    <h2 className='text-white text-20 font-bold'>Roadmap</h2>
                </div>
                <button onClick={addCategoryBtn} className='text-14 bg-purple hover:bg-h_purple ease-linear duration-100 rounded-lg h-44 cursor-pointer font-semibold px-5 text-white'>+ Add Feedback</button>
            </div>



            <div className='w-1110 min-h-screen flex justify-between mt-10'>
                {
                    plannedCategories?.length > 0 ?

                        <div className='w-350  h-80 flex flex-col gap-y-6'>
                            <div className='flex flex-col items-start gap-y-2'>
                                <span className=' text-13 text-gray font-bold'>Planned ({numberOfPlannedCategories})</span>
                                <h2 className='text-16 text-gray2'>Ideas prioritized for research</h2>
                            </div>

                            {
                                plannedItems?.map((item, index) => <PlannedCard key={item.id} index={index} item={item} />)
                            }
                        </div>
                        : ""}
                {
                    inProgressItems?.length > 0 ?


                        <div className='w-350 h-80 flex flex-col gap-y-6'>
                            <div className='flex flex-col items-start gap-y-2'>
                                <span className=' text-13 text-gray font-bold'>In-Progress ({numberOfInProgressCategories})</span>
                                <h2 className='text-16 text-gray2'>Currently being developed</h2>
                            </div>
                            {
                                inProgressItems?.map((item, index) => <InProgressCard key={item.id} index={index} item={item} />)
                            }

                        </div>
                        : ""}
                {
                    liveItems?.length > 0 ?


                        <div className='w-350 h-80 flex flex-col gap-y-6'>
                            <div className='flex flex-col items-start gap-y-2'>
                                <span className=' text-13 text-gray font-bold'>Live ({numberOfLiveCategories})</span>
                                <h2 className='text-16 text-gray2'>Released features</h2>
                            </div>
                            {
                                liveItems?.map((item, index) => <LiveCard key={item.id} index={index} item={item} />)
                            }
                        </div>
                        : " "}
            </div>

        </div>
    )
}
export default RoadMap;