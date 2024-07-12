import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import strel from "../assets/tstrel.svg"
import strell from "../assets/strell.svg"
import commentSvg from "../assets/comment.svg"
import moss from "../assets/images/moss.png"
import { addComment } from '../features/categorySlice'
function AddComment() {
    const { id } = useParams()
    const categories = useSelector(state => state.category.categories)
    const comments = useSelector(state => state.category.comments)
    const category = categories.find(category => category.id === id);
    const [reply, setReply] = useState(false)
    const [comment, setComment] = useState('')
    const [textArea, setTextArea] = useState()
    const [actComment, setActComment] = useState([])
    const [comm, setComm] = useState('')
    const [againComm, setAgainComm] = useState([])
    const [activeReply, setActiveReply] = useState(false)
    const [againReplyy, setAgainReplyy] = useState(false)
    const [againComment, setAgainComment] = useState(false)
    const [commentt, setCommentt] = useState('')
    const maxLength = 250;
    const [charactersLeft, setCharactersLeft] = useState(maxLength);
    const [war, setWar] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goBackBtn = () => {
        navigate('/')
    }
    const editFeedBack = () => {
        navigate(`/editFeedback/${id}`)
    }
    const replyBtn = () => {
        setReply(true)
    }
    const postReplyBtn = () => {
        alert(`${textArea}`)
        setReply(false)
    }

    const handleChange = (e) => {
        const inputText = e.target.value;
        const remainingCharacters = maxLength - inputText.length;
        if (remainingCharacters >= 0) {
            setCommentt(inputText);
            setCharactersLeft(remainingCharacters);
        }
    };
    const isDisabled = charactersLeft === 0

    const handleReplyChange = (e) => {
        const inputText = e.target.value;
        setComment(inputText);
    };


    const postComment = () => {
        setActComment(comment)
        setReply(false)
        setActiveReply(true)
    }
    const againReply = () => {
        setAgainReplyy(true)
    }
    const handleAgainReplyChange = (e) => {
        const inputTextt = e.target.value;
        setComm(inputTextt);
    };
    const againReplyBtn = () => {
        setAgainComm(comm)
        setAgainReplyy(false)
        setAgainComment(true)
    }

    const addCommentClick = () => {
        let addComm = { commentt };
        dispatch(addComment({ id: category.id, addComm }));
    }
    console.log(categories);
    console.log(category);


    return (
        <div className='w-[730px] mx-auto flex flex-col p-12 gap-y-5'>
            <div className='w-full flex items-center justify-between'>
                <div className='w-full flex items-center gap-x-2'>
                    <img src={strell} alt="" />
                    <button onClick={goBackBtn} className='text-14 font-semibold text-gray2 hover:underline ease-linear duration-75'>Go Back</button>
                </div>
                <button onClick={editFeedBack} className='w-[145px] p-1.5 rounded-lg bg-bluee text-14 hover:bg-h_bluee ease-linear duration-75 font-medium text-white'>Edit Feedback</button>
            </div>

            <div className='w-full min-h-[151px] rounded-xl flex items-center bg-white p-7'>
                <div className='w-full flex items-start gap-x-7'>
                    <div className='w-[40px] h-[54px] rounded-lg flex flex-col items-center justify-center gap-y-1 bg-gry hover:bg-gray3 ease-linear duration-75'>
                        <img className='w-4 h-4' src={strel} alt="" />
                        <span className='text-14 text-gray font-semibold'>
                            1
                        </span>

                    </div>
                    <div className='block flex-col gap-y-3' >
                        <div className='flex flex-col pb-3 gap-y-1'>
                            <h3 className='font-bold text-18'>{category.title}</h3>
                            <h4>{category.textArea}</h4>
                        </div>
                        <button className='bg-gry  block px-4 font-bold text-bluee rounded-lg  p-1'>{category?.category?.title}</button>
                    </div>
                </div>
                <div className='flex items-center gap-x-2'>
                    <img className='cursor-pointer' src={commentSvg} alt="" />
                    <span className='text-gray cursor-pointer font-bold text-16'>
                        {category?.comment?.length}
                    </span>
                </div>

            </div>
            <div className='w-full bg-white rounded-xl flex flex-col gap-y-4 p-6'>
                <div className='w-full flex items-start gap-x-2'>

                    <span className='text-gray text-18 font-bold'>
                        {category?.comment?.length}

                    </span>

                    <span className='text-gray text-18 font-bold'>
                        Comments</span>
                </div>
                {
                    category?.comment.length > 0 ?
                        <div className='w-full flex items-start justify-start bg-cyan-'>



                            <div className='flex w-full ml-7 flex-col gap-y-3'>
                                <div className='w-full flex items-center justify-between'>
                                    <div className='flex flex-col gap-y-1'>
                                        {category?.comment?.map((item, index) => (
                                            <h2 className='text-15 text-gray2' key={index}>{item.commentt}</h2>
                                        ))}
                                    </div>

                                    <button onClick={replyBtn} className='text-bluee text-16 hover:underline ease-linear duration-150 font-semibold'>Reply</button>
                                </div>
                                <div className='w-full flex flex-col gap-y-1'>
                                    {
                                        activeReply ?

                                            <div className='w-full flex pl-10 items-center justify-between'>
                                                <h2 className='text-16 text-gray2 font-semibold'>{actComment}</h2>
                                                <button onClick={againReply} className='text-bluee text-16 hover:underline ease-linear duration-150 font-semibold'>Reply</button>
                                            </div> : ""}
                                    {
                                        againComment ?
                                            <div className='ml-20 flex items-center justify-between font-semibold text-gray2'>
                                                <h2>{againComm && againComm}</h2>
                                                <button className='text-bluee text-16 hover:underline ease-linear duration-150 font-semibold'>Reply</button>
                                            </div> : ""}

                                </div>
                                {
                                    reply ?

                                        <div className='w-full h-20 flex items-start justify-between gap-x-5'>
                                            <textarea onChange={handleReplyChange} value={comment} className='w-full p-3 h-full bg-comment_bg focus:outline focus:outline-2 focus:outline-blue-500 rounded-lg' placeholder='write something' name="" id="" cols="30" rows="10">

                                            </textarea>

                                            <button onClick={postComment} className='p-1.5 font-semibold rounded-lg text-14 text-gry bg-purple hover:bg-h_purple ease-linear duration-75 w-[117px]'>
                                                Post Reply
                                            </button>

                                        </div>
                                        : ""
                                }
                                {
                                    againReplyy ? <div className='w-full h-20 flex mt- pl-10 items-start justify-between gap-x-5'>
                                        <textarea onChange={handleAgainReplyChange} className='w-full p-3 h-full bg-comment_bg focus:outline focus:outline-2 focus:outline-blue-500 rounded-lg' placeholder='Always install through verified sources only' name="" id="" cols="30" rows="10">

                                        </textarea>
                                        <button onClick={againReplyBtn} className='p-1.5 font-semibold rounded-lg text-14 text-gry bg-purple hover:bg-h_purple ease-linear duration-75 w-[117px]'>
                                            Post Reply
                                        </button>

                                    </div> : ""
                                }
                            </div>

                        </div> : ""}

            </div>
            <div className='w-full h-236 rounded-xl flex flex-col justify-between bg-white p-7'>
                <h2 className='text-18 text-gray font-bold'>Add Comment</h2>

                <textarea
                    onChange={handleChange}
                    className='w-full p-5 h-80 bg-comment_bg cursor-pointer rounded-xl focus:outline focus:outline-2 focus:outline-blue-500'
                    placeholder='Type your comment here'
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="10"
                    disabled={isDisabled}
                ></textarea>
                <div className='w-full flex items-center justify-between'>
                    <h2 className='text-gray2 text-15'>{Math.max(0, charactersLeft)} Characters left</h2>
                    <button onClick={addCommentClick} disabled={isDisabled} className='text-gry font-semibold p-1.5 px-3 text-14 rounded-lg bg-purple hover:bg-h_purple ease-linear duration-75'>Post Comment</button>
                </div>
            </div>
        </div>
    )
}

export default AddComment