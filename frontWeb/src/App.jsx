import { useState, useEffect} from 'react'


function App() {

  //const [name,setName] = useState()
  const [name,setName] = useState()
  const [price,setPrice] = useState()
  const [ingredients,setIngredients] = useState()
  
  const [data,setData] = useState([])

  //Get using ID
  //findItemById/651a0776dd20690d6d98555b/
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:3000/api/findItemById/65428664b0489c136bddc156/")
  //       try {
  //         const responseJson = await response.json()
  //         console.log(responseJson)
  //         setName(responseJson.user.name)
  //         setPrice(responseJson.user.price)
  //         setIngredients(responseJson.user.ingredients)
  //         setData(responseJson);
  //       }
  //       catch (error) {
  //         console.log(error)
  //       }
  //   }
  //     fetchData();
  // }, []);


  //Get using ID
  //findAllItems
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/findAllItems/")
        try {
          const responseJson = await response.json()
          console.log(responseJson.items)
          console.log(responseJson.items.length)
          //setName(responseJson.user.name)
          //setPrice(responseJson.user.price)
          //setIngredients(responseJson.user.ingredients)
          setData(responseJson.items);
        }
        catch (error) {
          console.log(error)
        }
    }
      fetchData();
  }, []);


  return (
    <div className='datas_container'>
      <h1>Teste de API</h1>
        <h2>Item 6512e1ed8d84c4bd0803826c:</h2>
        <p>Nome: {name}</p>
        <p>Preco: {price}</p>
        <p>Ingredientes: {ingredients}</p>
    </div>
  )
}

export default App