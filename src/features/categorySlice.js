import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: JSON.parse(localStorage.getItem("categories")) || [],
};

const categorieslice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const { comment, ...categoryData } = action.payload;
      const newCategory = {
        ...categoryData,
        status: { title: "Planned" },
        comment: comment ? [{ title: comment.title }] : [],
      };
      state.categories.push(newCategory);
    },
    
    editCategory: (state, action) => {
      const { id, updatedCategory } = action.payload;
      const index = state.categories.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.categories[index] = {
          ...state.categories[index],
          ...updatedCategory,
        };
      }
    },
    addComment: (state, action) => {
      const { id, addComm } = action.payload;
      const index = state.categories.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedCategory = {
          ...state.categories[index],
          comment: [
            ...(state.categories[index].comment || []), // Preserve existing comments if any
            addComm,
          ],
        };
        state.categories[index] = updatedCategory;
      }
    },
    
    
  },
});

export const { addCategory, addRoadMap, editCategory, addComment } =
  categorieslice.actions;
export default categorieslice.reducer;
