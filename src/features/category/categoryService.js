import axios from 'axios'

const API_URL = '/api/categorys/'

// Create new category
const createCategory = async (categoryData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, categoryData, config)

  return response.data
}

// Get user categorys
const getCategorys = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user category
const deleteCategory = async (categoryId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + categoryId, config)

  return response.data
}

const categoryService = {
  createCategory,
  getCategorys,
  deleteCategory,
}

export default categoryService
