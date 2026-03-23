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

  const handleNavigateProduct = () => {
    navigate('/Product')
  }

  return (
    <>
    <div style={{height: '100vh', width: '100vw', backgroundColor: '#A3B18C', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{ color: '#6A743E', textAlign: 'center'}}>Página Lista</h1>
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          
          <button onClick={handleNavigateProduct} style={buttonStyle}>
            Voltar
          </button>

        </div>
    </div>
    </>
  )
}

const buttonStyle = {
  height: '50px',
  width: '200px', 
  backgroundColor: '#6A743E',
  color: 'white',
  borderRadius: '10px',
  border: 0
}

export default List
