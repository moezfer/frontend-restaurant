import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import categoryService from './categoryService'

const initialState = {
  categorys: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new category
export const createCategory = createAsyncThunk(
  'categorys/create',
  async (categoryData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await categoryService.createCategory(categoryData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user categorys
export const getCategorys = createAsyncThunk(
  'categorys/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await categoryService.getCategorys(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user category
export const deleteCategory = createAsyncThunk(
  'categorys/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await categoryService.deleteCategory(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categorys.push(action.payload)
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getCategorys.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCategorys.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categorys = action.payload
      })
      .addCase(getCategorys.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categorys = state.categorys.filter(
          (category) => category._id !== action.payload.id
        )
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = categorySlice.actions
export default categorySlice.reducer
