import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import AddCategoryForm from "./components/AddCategoryForm"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import AddComment from "./components/AddComment"
import EditFeedback from "./components/EditFeedback"
import RoadMap from "./components/RoadMap"

function App() {
  const categories = useSelector(state => state.category.categories)
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addCategory" element={<AddCategoryForm />} />
        <Route path="addComment/:id" element={<AddComment />} />
        <Route path="editFeedback/:id" element={<EditFeedback />} />
        <Route path="/roadMap" element={<RoadMap />} />
      </Routes>
    </div>
  )
}

export default App;
