import React, { useState } from 'react'
import vector from "../assets/Vector.svg"
import strel from "../assets/strel.svg"
import t_strel from "../assets/top_strell.svg"
import bird from "../assets/images/group.png"
import check from "../assets/check.svg"
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import CategoryCard from './CategoryCard'
function Main({ categoriesFiltered, votes, sortBtn, selectedItem, active, handleSelectAndSort }) {
    const categories = useSelector(state => state.category.categories)

    const navigate = useNavigate()
    const addCategoryBtn = () => {
        navigate('/addCategory')
    }
    const itemToDisplay = votes.find(item => item.id === selectedItem) || votes[0];

    return (
        <div className='flex flex-col gap-23'>
            <nav className='w-full flex items-center h-16 bg-grayy rounded-xl'>
                <ul className='w-full flex items-center justify-between gap-x-10 px-3'>
                    <div className='flex items-center pl-3 gap-x-10'>
                        <li className='flex items-center gap-x-3'>
                            <img src={vector} alt="" />
                            <div className='flex items-center gap-x-1'>
                                <span className='text-white text-18 font-bold'>
                                    {categories?.length}
                                </span>
                                <h3 className='text-white text-18 font-bold'>
                                    Suggestions
                                </h3>
                            </div>
                        </li>
                        <li className='flex text-white items-center gap-x-1'>
                            <button onClick={sortBtn} className='text-14 text-gry '>Sort by </button>
                            <span>:</span>
                            <div className='flex items-center gap-x-2'>
                                <span className='font-bold'>{selectedItem?.title}</span>
                                {
                                    active ? <img src={t_strel} alt="" /> : <img src={strel} alt="" />
                                }
                            </div>
                        </li>
                    </div>
                    <li>
                        <button onClick={addCategoryBtn} className='text-14 bg-purple hover:bg-h_purple ease-linear duration-75  rounded-lg p-2 cursor-pointer font-semibold px-5 text-white'>+ Add Feedback</button>
                    </li>
                </ul>
            </nav>
            {
                active && (
                    <div className='w-[255px] z-1 absolute mt-20 cursor-pointer bg-white shadow-2xl flex flex-col justify-between rounded-lg ml-52'>
                        {votes.map((item, index) => (
                            <div key={item.id} className='w-full font-medium hover:text-purple ease-linear duration-100'>
                                <button
                                    onClick={() => handleSelectAndSort(item)}
                                    className='w-full font-medium flex items-center justify-between hover:text-purple ease-linear duration-100 p-2 px-5'
                                >
                                    {item.title}
                                    {item.selected && <img src={check} alt="Checkmark" />}
                                </button>
                                {index !== votes.length - 1 && <hr />}
                            </div>
                        ))}
                    </div>
                )
            }
            <div className='w-825 bg-background rounded-xl flex justify-start items-start h-600'>
                {
                    categories.length == 0 ?
                        <div className='w-full h-600 bg-white flex items-center justify-center rounded-xl'>

                            <div className='w-410 bg-gray-800 mx-auto my-auto items-center flex flex-col justify-between h-379'>
                                <img className='w-129 h-136 bg-center bg-cover' src={bird} alt="" />
                                <div className='w-410 h-189 flex flex-col gap-y-3  text-center items-center bg-gray-100'>
                                    <h2 className='text-24 text-gray font-bold'>There is no feedback yet.</h2>
                                    <p className='text-gray2'>
                                        Got a suggestion? Found a bug that needs to be squashed? <br /> We love hearing about new ideas to improve our app.
                                    </p>
                                    <button onClick={addCategoryBtn} className='text-14 bg-purple hover:bg-h_purple ease-linear duration-75 mt-5 rounded-lg p-2 cursor-pointer font-semibold px-5 text-white'>+ Add Feedback</button>

                                </div>
                            </div>
                        </div> :
                        <div className='w-full flex flex-col gap-y-5'>
                            {categoriesFiltered.length > 0 ? (
                                categoriesFiltered.slice().reverse().map((item, index) => {
                                    const reversedIndex = categoriesFiltered.length - index - 1;
                                    return <CategoryCard key={item.id} index={reversedIndex} item={item} />;
                                })
                            ) : (
                                <div className='w-full h-600 bg-white flex items-center justify-center rounded-xl'>

                                    <div className='w-410 bg-gray-800 mx-auto my-auto items-center flex flex-col justify-between h-379'>
                                        <img className='w-129 h-136 bg-center bg-cover' src={bird} alt="" />
                                        <div className='w-410 h-189 flex flex-col gap-y-3  text-center items-center bg-gray-100'>
                                            <h2 className='text-24 text-gray font-bold'>There is no feedback yet.</h2>
                                            <p className='text-gray2'>
                                                Got a suggestion? Found a bug that needs to be squashed? <br /> We love hearing about new ideas to improve our app.
                                            </p>
                                            <button onClick={addCategoryBtn} className='text-14 bg-purple hover:bg-h_purple ease-linear duration-75 mt-5 rounded-lg p-2 cursor-pointer font-semibold px-5 text-white'>+ Add Feedback</button>

                                        </div>



                                    </div>
                                </div>
                            )}
                        </div>
                }
            </div>
        </div>
    )
}

export default Main;