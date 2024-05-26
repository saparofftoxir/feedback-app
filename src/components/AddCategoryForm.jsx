import React, { act, useState } from 'react'
import strel from "../assets/strell.svg"
import plus from "../assets/plus.svg"
import t_strel from "../assets/top_strel.svg"
import b_strel from "../assets/bottom_strel.svg"
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { addCategory } from '../features/categorySlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddCategoryForm() {
    const [title, setTitle] = useState('')
    const [isTitle,setIsTitle]=useState(false)
    const [status, setStatus] = useState('Planned')
    const [category, setCategory] = useState('')
    const [textArea, setTextArea] = useState('')
    const [isTextAreaEmpty, setIsTextAreaEmpty] = useState(false);
    const dispatch = useDispatch()
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
    const [active, setActive] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }
    const showList = () => {
        setActive(prev => !prev)
    }
    const handleItemClick = (item) => {
        setSelectedItem(item)
        setActive(false)
        setCategory(item)
    }

    const itemToDisplay = selectedItem || categoriess[0];
    const addFeedback = (e) => {
        e.preventDefault();
        if (textArea.trim() === '') {
            setIsTextAreaEmpty(true);
        }
        
         else {
            // Proceed with adding the feedback
            setIsTextAreaEmpty(false); // Reset the empty state
            let newCategory = { title, category, status, textArea, id: nanoid(2) };
            dispatch(addCategory(newCategory));
            toast.success('Category added!');
            setTitle('')
            setTextArea('')
        }
    };
    return (
        <div className='w-full p-4'>
            <div className='w-[430px] relative min-h-[510px] rounded-xl mx-auto'>
                <div className='flex items-center gap-x-3 '>
                    <img src={strel} alt="" />
                    <button onClick={goBack} className='text-14 font-semibold text-light_gray'>Go Back</button>
                </div>
                <div className='w-full absolute flex  pt-4 pl-10'>
                    <img src={plus} alt="" />
                </div>
                <div className='w-full bg-white pt-8 p-8 mt-12 rounded-lg '>
                    <h2 className='font-bold text-24 text-gray'>Create New Feedback</h2>
                    <form onSubmit={addFeedback} className='w-full flex flex-col pt-5 gap-y-3'>
                        <div className='h-106  flex flex-col justify-between rounded-lg '>
                            <div className='flex flex-col'>
                                <h3 className='text-14 text-gray font-semibold'>Feedback Title</h3>
                                <h4 className='text-14 text-gray2'>Add a short, descriptive headline</h4>

                            </div>
                            <input required onChange={e => setTitle(e.target.value)} className={`w-full cursor-pointer focus:outline focus:outline-2 focus:outline-blue-500 h-[48px] bg-input_background px-5 rounded outline-none ${isTitle ? "outline outline-red-500" : ""} `} />
                        </div>
                        <div className='h-106 bg- flex flex-col justify-between rounded-lg '>
                            <div className='flex flex-col'>
                                <h3 className='text-14 text-gray font-semibold'>Category</h3>
                                <h4 className='text-14 text-gray2'>Choose a category for your feedback</h4>

                            </div>

                            <div onClick={showList} className='flex items-center focus:outline focus:outline-2 focus:outline-blue-500 cursor-pointer justify-between h-[48px] bg-input_background px-5 rounded outline-none' placeholder='Feature'>
                                <h2>{itemToDisplay?.title}</h2>
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
                        <div className='w-full min-h-106 flex flex-col gap-y-5 justify-between rounded-lg'>
                            <div className='flex flex-col'>
                                <h3 className='text-14 text-gray font-semibold'>Feedback Detail</h3>
                                <h4 className='text-[11.5px] text-gray2'>Include any specific comments on what should be improved, added, etc.</h4>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <textarea
                                    onChange={(e) => setTextArea(e.target.value)}
                                    required
                                    className={`w-full focus:outline focus:outline-2 focus:outline-blue-500 flex items-center justify-between h-20 bg-input_background p-2 ${isTextAreaEmpty ? "outline-red-500" : ""} rounded outline-none`}
                                ></textarea>
                                {isTextAreaEmpty && <p className='text-empty_red'>can't be empty</p>}
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-end gap-x-3'>
                            <button className='w-20 text-14 text-gry hover:bg-h_bgColor ease-linear duration-75 bg-gray rounded p-2'>Cancel</button>
                            <button onClick={addFeedback} className='text-14 text-gry rounded p-2 hover:bg-h_purple ease-linear duration-75 bg-gradient px-3'>Add Feedback</button>
                        </div>
                    </form>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition: Bounce
                    />
                </div>
            </div>
        </div>
    )
}

export default AddCategoryForm;