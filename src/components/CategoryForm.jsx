import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCategory } from '../features/category/categorySlice'

function CategoryForm() {
  const [text, setText] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState(0)

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createCategory({ text,desc,price }))
    setText('')
    setDesc('')
    setPrice(0)
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Category</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='desc'>Category</label>
          <input
            type='text'
            name='desc'
            id='desc'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Category</label>
          <input
            type='number'
            name='price'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Category
          </button>
        </div>
      </form>
    </section>
  )
}

export default CategoryForm
