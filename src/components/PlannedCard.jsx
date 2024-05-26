import React from 'react'
import line from "../assets/linee.svg"
import oval from "../assets/Oval.svg"
import t_strel from "../assets/t_strell.svg"
import comment from "../assets/comment.svg"
import { useNavigate } from 'react-router-dom'
function RoadMapCard({ item,index }) {
    const navigate=useNavigate()
    const viewComments=()=>{
        navigate(`/addComment/${item.id}`)
    }
    return (
        <div className='w-full h-272 bg-white rounded'>
            <img src={line} alt="" />
            <div className='w-full  p-5  flex-col gap-y-1'>
                <div className='flex items-center gap-x-3'>
                    <img src={oval} alt="" />
                    <h2 className='text-16 text-gray2'>{item.status?.title}</h2>
                </div>
                <div className='w-full flex flex-col py-3'>
                    <h2 className='text-gray font-bold block cursor-pointer hover:text-bluee ease-linear duration-75 text-18'>{item.title}</h2>
                    <p className=' text-16 text-gray2'>{item.textArea}</p>
                </div>
                <button className='p-1 rounded-xl font-semibold bg-gry px-3 text-bluee text-blue'>{item.category.title}</button>

                <div className='w-full flex items-center justify-between h-10 mt-5'>
                    <div className='bg-gry hover:bg-gray3 ease-linear duration-75 cursor-pointer w-[69px] h-40 flex items-center gap-x-2 justify-center rounded-xl'>
                        <img src={t_strel} alt="" />
                        <span className='text-gray font-bold text-13'>{index + 1}</span>
                    </div>
                    <div onClick={viewComments} className='flex items-center cursor-pointer gap-x-2'>
                        <img src={comment} alt="" />
                        <span className='font-bold text-gray'>
                            {item.comment?.length}
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RoadMapCard