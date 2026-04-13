import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

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

  const deleteProduct = async (id) => {
    Swal.fire({
      title: "Deseja deletar?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`
    }).then(async (result) => {
      if (result.isConfirmed) {
        try{
          await axios.delete(`http://localhost:8080/api/product/delete/${id}`)
          Swal.fire("Deletado com sucesso!","", "success");
        }
        catch{
          Swal.fire("Erro!","", "error");
        }
      }
    });

    
    fetchProducts()
  }

  const updateProduct = async (id) => {
    navigate(`/update/${id}`)
  }

  return (
    <>
<div style={{ height: '100vh', width: '100vw', backgroundColor: '#A3B18C', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
  <h1 style={{ color: '#6A743E', textAlign: 'center', fontFamily: 'Verdana, Geneva, sans-serif', marginBottom: '20px', fontSize: '2rem' }}>
    Lista de Produtos
  </h1>

  {
    produts.map((produt) => {
      return (
        <div key={produt._id} style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px', width: '50%', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>

            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ fontWeight: 'bold', color: '#6A743E' }}>Produto:</div>
              <div style={{ fontWeight: 'normal', color: '#333', marginLeft: '5px' }}>{produt.name}</div>
            </div>

            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ fontWeight: 'bold', color: '#6A743E' }}>Descrição:</div>
              <div style={{ fontWeight: 'normal', color: '#333', marginLeft: '5px' }}>{produt.description}</div>
            </div>

            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ fontWeight: 'bold', color: '#6A743E' }}>Estoque:</div>
              <div style={{ fontWeight: 'normal', color: '#333', marginLeft: '5px' }}>{produt.stock}</div>
            </div>

            <div style={{ display: 'flex', marginBottom: '15px' }}>
              <div style={{ fontWeight: 'bold', color: '#6A743E' }}>Preço:</div>
              <div style={{ fontWeight: 'normal', color: '#333', marginLeft: '5px' }}>R${produt.price}</div>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-start' }}>
              <button onClick={() => deleteProduct(produt._id)} style={buttonStyleDelete}>Deletar</button>
              <button onClick={() => updateProduct(produt._id)} style={buttonStyleUpdate}>Alterar</button>
            </div>
          </div>
        </div>
      )
    })
  }

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

const buttonStyleDelete = {
  height: '50px',
  width: '70px', 
  backgroundColor: '#C0392B' ,
  color: 'white',
  borderRadius: '10px',
  border: 0,
}

const buttonStyleUpdate = {
  height: '50px',
  width: '70px', 
  backgroundColor: '#5A6B35' ,
  color: 'white',
  borderRadius: '10px',
  border: 0
}

export default List
