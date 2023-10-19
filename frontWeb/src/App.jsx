import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"


function App() {

  const [name,setName] = useState()
  const [price,setPrice] = useState()
  const [ingredients,setIngredients] = useState()

  const postFunction = (e) => {
    e.preventDefault()
    
    axios.post('http://localhost:3000/api/createItem', {
      name: name, 
      price: price,
      ingredients: {ingredients}
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className='btn btn-sucess w-100 rounded-0'>
      <h1>Adicionar</h1>

      <form onSubmit={postFunction}>
      <input 
        type='text' 
        placeholder='Enter name' 
        autoComplete='off' 
        name='email'
        className='form-control rounded-0 w-30'
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type='text' 
        placeholder='Enter ingridients' 
        autoComplete='off' 
        name='email'
        className='form-control rounded-0 w-30'
        onChange={(e) => setIngredients(e.target.value)}
      />
      <input 
        type='float' 
        placeholder='Enter price' 
        autoComplete='off' 
        name='email'
        className='form-control rounded-0 w-30'
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit" className='btn btn-sucess w-100 rounded-0'>
          Register
      </button>
      </form>
    </div>
  )
}

export default App