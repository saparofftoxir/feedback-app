import React from 'react'
import comment from "../assets/comment.svg"
import s_line from "../assets/second_line.svg"
import s_oval from "../assets/ovall.svg"
import t_strel from "../assets/tstrel.svg"
function InProgressCard({item,index}) {
  return (
    <div className='w-full h-272 bg-white rounded'>
                        <img src={s_line} alt="" />
                        <div className='w-full  p-5  flex-col gap-y-1'>
                            <div className='flex items-center gap-x-3'>
                                <img src={s_oval} alt="" />
                                <h2 className='text-16 text-gray2'>{item?.status?.title}</h2>
                            </div>
                            <div className='flex flex-col py-3'>
                                <h2 className='text-gray hover:text-bluee cursor-pointer ease-linear duration-75 font-bold text-18'>{item?.title}</h2>
                                <p className=' text-16 text-gray2'>{item?.textArea}</p>
                            </div>
                            <button className='p-1 rounded-xl font-semibold bg-gry px-3 text-bluee text-blue'>{item?.category?.title}</button>


                            <div className='w-full flex items-center justify-between h-10 mt-5'>
                                <div className='bg-gry hover:bg-gray3 ease-linear duration-75 cursor-pointer w-[69px] h-40 flex items-center gap-x-2 justify-center rounded-xl'>
                                    <img src={t_strel} alt="" />
                                    <span className='text-gray font-bold text-13'>{index + 1}</span>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <img src={comment} alt="" />
                                    <span className='font-bold text-gray'>{item?.comment?.length}</span>
                                </div>

                            </div>
                        </div>
                    </div>
  )
}

export default InProgressCard