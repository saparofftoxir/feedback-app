import React, { useState } from 'react'
import strel from "../assets/strell.svg"
import edit from "../assets/edit.svg"
import t_strel from "../assets/top_strel.svg"
import b_strel from "../assets/bottom_strel.svg"
import { useNavigate, useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import { editCategory } from '../features/categorySlice'
function EditFeedback() {
    const { id } = useParams()
    const categories = useSelector(state => state.category.categories)
    const EditCategory = categories.find(item => item.id === id);
    const [title, setTitle] = useState(EditCategory?.title || '');
    const [textArea, setTextArea] = useState(EditCategory?.textArea || '');
    const [status,setStatus]=useState(EditCategory?.status.title || '');
    const [category, setCategory] = useState(EditCategory?.category?.title || '')

    const [active, setActive] = useState(false)
    const [activeStatus, setActiveStatus] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(EditCategory)
    const categoriess = [
        {
            title: "Feature",
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

    ]
    const updateStatus = [
        {
            title: "Suggestion",
            id: nanoid(2)
        },
        {
            title: "Planned",
            id: nanoid(2)
        },
        {
            title: "In-progress",
            id: nanoid(2)
        },
        {
            title: "Live",
            id: nanoid(2)
        },

    ]

    const goBack = () => {
        navigate(`/addComment/${id}`)
    }
    const showList = () => {
        setActive(true)
    }

    const handleItemClick = (item) => {
        setSelectedItem(item)
        setCategory(item)
        setActive(false)
    }
    const handleItemStatus = (item) => {
        setStatus(item)
        setActiveStatus(false)
    }
    const itemToDisplay = selectedItem || categoriess[1];
    const itemStatus = selectedStatus || updateStatus[2];
    const showStatus = () => {
        setActiveStatus(true)
    }
    const cancelClick = () => {
        setActive(false)
        setActiveStatus(false)
    }
    const saveCategory = () => {
        let updatedCategory = { title, category, textArea,status };
        dispatch(editCategory({ id: EditCategory.id, updatedCategory }))
    }
    console.log(categories)
    
    
    return (
        <div className='w-full p-4'>
            <div className='w-[430px] relative min-h-[510px] rounded-xl mx-auto'>
                <div className='flex items-center gap-x-3 '>
                    <img src={strel} alt="" />
                    <button onClick={goBack} className='text-14 font-semibold hover:underline ease-linear duration-75 text-light_gray'>Go Back</button>
                </div>
                <div className='w-full absolute flex  pt-4 pl-10'>
                    <img src={edit} alt="" />
                </div>
                <div className='w-full bg-white pt-8 p-8 mt-12 rounded-lg '>
                    <h2 className='font-bold text-24 text-gray'>Editing `{EditCategory?.title}`</h2>
                    <form className='w-full flex flex-col pt-5 gap-y-3'>
                        <div className='h-106  flex flex-col justify-between rounded-lg '>
                            <div className='flex flex-col'>
                                <h3 className='text-14 text-gray font-semibold'>Feedback Title</h3>
                                <h4 className='text-14 text-gray2'>Add a short, descriptive headline</h4>

                            </div>
                            <input value={title} required onChange={e => setTitle(e.target.value)} className='w-full cursor-pointer h-[48px] bg-input_background px-5 rounded outline-none' />

                        </div>
                        <div className='h-106 bg- flex flex-col justify-between rounded-lg '>
                            <div className='flex flex-col'>
                                <h3 className='text-14 text-gray font-semibold'>Category</h3>
                                <h4 className='text-14 text-gray2'>Choose a category for your feedback</h4>

                            </div>

                            <div onClick={showList} className='flex items-center cursor-pointer justify-between h-[48px] bg-input_background px-5 rounded outline-none' placeholder='Feature'>
                                <h2>{EditCategory?.category.title}</h2>
                                {
                                    active ? <img src={t_strel} alt="" /> : <img src={b_strel} alt="" />
                                }

                            </div>
                            {
                                active && (
                                    <div className='w-[368px] z-1 absolute mt-28 cursor-pointer  bg-white shadow-2xl flex flex-col justify-between rounded-lg'>
                                        {categoriess.map((item, index) => (
                                            <div key={item.id} className='w-full '>
                                                <button onClick={() => handleItemClick(item)} className='text-gray2 w-full flex items-start ease-linear duration-100 p-2 px-5 hover:text-purple'>{item.title}</button>
                                                {index !== categoriess.length - 1 && <hr className='border-gray2' />}
                                            </div>
                                        ))}
                                    </div>
                                )
                            }

                        </div>
                        <div className='h-106 bg- flex flex-col justify-between rounded-lg '>
                            <div className='flex flex-col'>
                                <h3 className='text-14 text-gray font-semibold'>Update Status</h3>
                                <h4 className='text-14 text-gray2'>Change feature state</h4>

                            </div>

                            <div onClick={showStatus} className='flex items-center cursor-pointer justify-between h-[48px] bg-input_background px-5 rounded outline-none' placeholder='Feature'>
                                <h2>{itemStatus?.title}</h2>
                                {
                                    activeStatus ? <img src={t_strel} alt="" /> : <img src={b_strel} alt="" />
                                }
                            </div>
                            {
                                activeStatus && (
                                    <div className='w-[368px] z-1 absolute mt-28 cursor-pointer  bg-white shadow-2xl flex flex-col justify-between rounded-lg'>
                                        {updateStatus.map((item, index) => (
                                            <div key={item.id} className='w-full '>
                                                <button onClick={() => handleItemStatus(item)} className='text-gray2 w-full flex items-start ease-linear duration-100 p-2 px-5 hover:text-purple'>{item.title}</button>
                                                {index !== updateStatus.length - 1 && <hr className='border-gray2' />}
                                            </div>
                                        ))}
                                    </div>
                                )
                            }

                        </div>
                        <div className='w-full min-h-106 flex flex-col gap-y-5  justify-between rounded-lg '>

                            <div className='flex flex-col'>
                                <h3 className='text-14 text-gray font-semibold'>Feedback Detail</h3>
                                <h4 className='text-[11.5px] text-gray2'>Include any specific comments on what should be improved, added, etc.</h4>

                            </div>
                            <textarea onChange={e => setTextArea(e.target.value)} value={textArea} required className='w-full flex items-center justify-between h-20 bg-input_background p-2 rounded outline-none'>

                            </textarea>

                        </div>
                        <div className='w-full flex items-center pt-3 justify-between '>
                            <button className='w-20 text-14 text-gry bg-light_red hover:bg-h_red ease-linear duration-75 rounded p-2'>Delete</button>
                            <div className='flex items-center gap-x-3'>
                                <button onClick={cancelClick} className='w-20 text-14 text-gry bg-gray hover:bg-h_bgColor ease-linear duration-75 rounded p-2'>Cancel</button>
                                <button onClick={saveCategory} className='text-14 text-gry rounded p-2 hover:bg-h_purple ease-linear duration-75 bg-gradient px-3'>Save Changes</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditFeedback