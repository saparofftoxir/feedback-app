/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid'
import React from 'react'
import oval from "../assets/Oval.svg"
import ovall from "../assets/ovall.svg"
import ovalll from "../assets/Ovalll.svg"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Aside({ filterBtn, chosenId }) {
    const navigate = useNavigate()
    const categories = useSelector(state => state.category.categories)
    const categorys = [
        {
            title: "All",
            id: nanoid(2)
        },
        {
            title: "UI",
            id: nanoid(2)
        },
        {
            title: "UX",
            id: nanoid(2)
        },
        {
            title: "Enhancement",
            id: nanoid(2)
        },
        {
            title: "Bug",
            id: nanoid(2)
        },
        {
            title: "Feature",
            id: nanoid(2)
        },

    ]
    const viewsBtn = () => {
        navigate('/roadMap')
    }

    const plannedCategories = categories.filter(category => category.status.title === "Planned");
    const numberOfPlannedCategories = plannedCategories.length;
    const inProgressCategories = categories.filter(elemm => elemm.status.title === "In-progress")
    const numberOfInProgressCategories = inProgressCategories.length
    const liveCategories = categories.filter(elem => elem.status.title === "Live")
    const numberOfLiveCategories = liveCategories.length
    return (
        <aside className='w-255 flex flex-col gap-y-6 100 h-529'>
            <div className='gradient w-255 h-137 bg-my-image bg-cover bg-center flex flex-col items-start  justify-end text-white p-6 bg-gradient rounded-2xl'>
                <h2 className='text-20 font-bold'>Frontend Mentor</h2>
                <h3 className=' text-gray-300'>Feedback Board</h3>
            </div>
            <div className='w-255 h-166 flex truncate flex-wrap p-6 gap-3 bg-white rounded-2xl'>
                {categorys.map(item => (
                    <button
                        onClick={() => filterBtn(item.title)}
                        className={`${chosenId === item.title ? "bg-bluee text-white" : "bg-gry hover:bg-gray3 ease-linear duration-75"} p-1 rounded-lg text-13 font-bold text-bluee hover:bg-gray-300 ease-linear duration-75 px-4`}
                        key={item.id}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            <div>

            </div>
            <div className='w-255 h-178 bg-white p-6 flex flex-col rounded-2xl'>
                <div className='w-full flex items-center justify-between'>
                    <h2 className='text-18 font-bold'>Roadmap</h2>
                    <button onClick={viewsBtn} className='underline text-13 font-semibold hover:text-view_blue ease-linear duration-150 hover:underline text-slate-400'>Views</button>
                </div>
                <div className='w-full flex flex-col py-4 text-16 gap-y-1'>
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-x-3'>
                            <img src={oval} alt="" />
                            <h3>Planned</h3>
                        </div>
                        <span className='font-bold text-slate-500'>
                            {numberOfPlannedCategories}
                        </span>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-x-3'>
                            <img src={ovall} alt="" />
                            <h3>In-Progress</h3>
                        </div>
                        <span className='font-bold text-slate-500'>
                            {numberOfInProgressCategories}
                        </span>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-x-3'>
                            <img src={ovalll} alt="" />
                            <h3>Live</h3>
                        </div>
                        <span className='font-bold text-slate-500'>
                            {numberOfLiveCategories}
                        </span>
                    </div>
                </div>

            </div>

        </aside>
    )
}

export default Aside 