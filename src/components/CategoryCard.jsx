import React from 'react'
import strel from "../assets/tstrel.svg"
import comment from "../assets/comment.svg"
import { useNavigate } from 'react-router-dom'
function CategoryCard({ item, index }) {
    const navigate = useNavigate()
    const addComment = () => {
        navigate(`/addComment/${item.id}`)
    }
    console.log(item);
    return (
        <div onClick={addComment} className='w-full h-[151px] cursor-pointer rounded-xl flex items-center bg-white p-7'>
            <div className='w-full flex items-start gap-x-7'>
                <div className='w-[40px] h-[54px] rounded-lg flex flex-col items-center justify-center gap-y-1 bg-gry hover:bg-gray3 ease-linear duration-75'>
                    <img className='w-4 h-4' src={strel} alt="" />
                    <span className='text-14 text-gray font-semibold'>{index + 1}</span>
                </div>
                <div className='block flex-col gap-y-3' >
                    <div className='flex flex-col pb-3 gap-y-1'>
                        <h3 className='font-bold text-18'>{item.title}</h3>
                        <h4>{item.textArea}</h4>
                    </div>
                    <button className='bg-gry  block px-4 font-bold text-bluee rounded-lg  p-1'>{item.category?.title}</button>
                </div>
            </div>
            <div className={`flex items-center gap-x-2 ${item.comment.length === 0 ? ' opacity-75' : ''}`}>
                <img className='cursor-pointer' src={comment} alt="" />
                <span className='text-gray cursor-pointer font-bold text-16'>
                    {item?.comment?.length}
                </span>
            </div>

        </div>
    )
}

export default CategoryCard;