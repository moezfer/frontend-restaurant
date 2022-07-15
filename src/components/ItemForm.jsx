import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createItem } from '../features/items/itemSlice'

function ItemForm() {
  const [text, setText] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState(0)
  

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    const formData=new FormData();
    formData.append("text",text);
    formData.append("desc",desc);
    
    formData.append("price",price);
    dispatch(createItem({text,desc,price}))
    setText('')
    setDesc('')
    setPrice(0)
  }

  return (
    <section className='form' >
      <form onSubmit={onSubmit} >
        <div className='form-group'>
          <label htmlFor='text'>title</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='desc'>category</label>
          <input
            type='text'
            name='desc'
            id='desc'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>price</label>
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
            Add Item
          </button>
        </div>
      </form>
    </section>
  )
}

export default ItemForm
