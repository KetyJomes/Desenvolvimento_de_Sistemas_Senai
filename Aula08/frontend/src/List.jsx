import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function List() {

  const [produts, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/product/products')
    setProducts(response.data.response)
  }

  useEffect(() => {
    fetchProducts();
  },[])

  const navigate = useNavigate() 

  const handleNavigateHome = () => {
    navigate('/')
  }

  return (
    <>
    <div style={{height: '100vh', width: '100vw', backgroundColor: 'Lavender', justifyContent: 'center', alignItems: 'center'}}>
      <h1>Página Lista</h1>
      {
        produts.map((produt) => {
          return(
          <div key={produt._id}>
            <span style={{fontWeight: 'bold'}}>Produto: </span><span>{produt.name}</span><br></br>
            <span style={{fontWeight: 'bold'}}>Preço: </span><span>R${produt.price}</span>
          </div>
        )})
      }
      <br></br>
      <button onClick={handleNavigateHome} style={{height: '50px', width: '100px', backgroundColor: 'MediumOrchid', color: 'white', borderRadius: '10px', border: 0}}>Voltar</button>
    </div>
    </>
  )
}

export default List
