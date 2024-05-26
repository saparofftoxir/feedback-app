import React, { useEffect, useState } from 'react'
import Aside from '../../components/Aside'
import Main from '../../components/Main'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
function Home() {
    const categories = useSelector(state => state.category.categories)
    const [categoriesFiltered, setCategoriesFiltered] = useState(categories)
    const [chosenId, setChosenId] = useState('All')
    const [active, setActive] = useState(false)

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
    const [votes, setVotes] = useState([
        {
            title: "Most Upvotes",
            id: nanoid(2),
            selected: true
        },
        {
            title: "Least Upvotes",
            id: nanoid(2),
            selected: false
        },
        {
            title: "Most Comments",
            id: nanoid(2),
            selected: false

        },
        {
            title: "Least Comments",
            id: nanoid(2),
            selected: false
        },

    ])
    const [selectedItem, setSelectedItem] = useState(votes[0]);
    
    const sortBtn = () => {
        setActive(prev => !prev)
    }

    const chosenCategory = categorys.find(item => item.title === chosenId);
    const filterBtn = (title) => {
        let filtered;
        if (title === "All") {
            filtered = categories;
        } else {
            filtered = categories.filter(item => item.category.title === title);
        }
        setCategoriesFiltered(filtered);
        setChosenId(title)
    }

    useEffect(() => {
        sortCategories();
    }, [votes]);

    const sortCategories = () => {
        const selectedVote = votes.find(vote => vote.selected);
        let sortedCategories;

        switch (selectedVote.title) {
            case "Least Comments":
                sortedCategories = [...categories].sort((a, b) => b.comment.length - a.comment.length);
                console.log(sortedCategories)
                break;
            case "Most Comments":
                sortedCategories = [...categories].sort((a, b) => a.comment.length - b.comment.length);
                break;
            default:
                sortedCategories = categories;
                break;
        }
        setCategoriesFiltered(sortedCategories);

    };
    const handleSelectAndSort = (item) => {
        setVotes(votes.map(vote => ({
            ...vote,
            selected: vote.id === item.id
        })));
        setSelectedItem(item); 
        setActive(false);
    };
    return (
        <div className='w-full min-h-screen pt-7 flex items-start justify-center gap-x-7 px-'>
            <Aside
                filterBtn={filterBtn}
                chosenId={chosenId} />
            <Main
                categoriesFiltered={categoriesFiltered}
                selectedItem={selectedItem}
                active={active}
                sortBtn={sortBtn}
                handleSelectAndSort={handleSelectAndSort}
                votes={votes} />
        </div>
    )
}

export default Home