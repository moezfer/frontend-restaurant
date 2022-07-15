import { useDispatch } from 'react-redux'
import { deleteCategory } from '../features/category/categorySlice'

function CategoryCategory({ category }) {
  const dispatch = useDispatch()

  return (
    <div className='category'>
      <div>{new Date(category.createdAt).toLocaleString('en-US')}</div>
      <h2>{category.text}</h2>
      <h2>{category.desc}</h2>
      <button onClick={() => dispatch(deleteCategory(category._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default CategoryCategory
