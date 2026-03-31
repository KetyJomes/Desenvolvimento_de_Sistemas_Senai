import { useState } from 'react'
import '../App.css'
import './List'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from "axios";

function App() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [category, setCategory] = useState("")

  const navigate = useNavigate()

  const handleNavigateList = () => {
    navigate('/List')
  }

  const handleNavigateLogin = () => {
    navigate('/Login')
  }

  const handleRegisterProduct = async () => {
    try{
      await axios.post('http://localhost:8080/api/product/cadastro', {name,description,price,stock,category})
      return Swal.fire({
        title: "Sucesso!",
        text: "Produto cadastrado com sucesso!",
        icon: "success"
      });
    }
    catch{
      Swal.fire({
        title: "Erro!",
        text: "Não foi possível regstrar o produto!",
        icon: "error"
      });

    }
    setName("")
    setDescription("")
    setPrice("")
    setStock("")
    setCategory("")

  }

  return (
    <>
      <div style={{ height: '100vh', width: '100vw', backgroundColor: '#A3B18C', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ backgroundColor: '#F1F4E6', height: '450px', width: '350px', borderRadius: '15px', padding: '20px' }}>
          <h1 style={{ color: '#6A743E', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '28px' }}>
          Cadastro Produto
         </h1>
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontWeight: 'bold' }}>Nome: </span><br />
            <input onChange={(e) => setName(e.target.value)} placeholder='Digite o nome:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
            <span style={{ fontWeight: 'bold' }}>Descrição: </span><br />
            <input onChange={(e) => setDescription(e.target.value)} placeholder='Digite a descrição:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
            <span style={{ fontWeight: 'bold' }}>Preço: </span><br />
            <input onChange={(e) => setPrice(e.target.value)} placeholder='Digite o preço em reais:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
            <span style={{ fontWeight: 'bold' }}>Estoque: </span><br />
            <input onChange={(e) => setStock(e.target.value)} placeholder='Digite a quantidade em estoque:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
            <span style={{ fontWeight: 'bold' }}>Categoria: </span><br />
            <input onChange={(e) => setCategory(e.target.value)} placeholder='Digite a categoria:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: "10px" }}>
            <button onClick={handleRegisterProduct} style={{ height: '50px', width: '48%', backgroundColor: '#6A743E', color: 'white', borderRadius: '10px', border: 0 }}>
              Cadastrar produto
            </button>
            <button onClick={handleNavigateList} style={{ height: '50px', width: '48%', backgroundColor: '#6A743E', color: 'white', borderRadius: '10px', border: 0 }}>
              Listar produtos
            </button>
            <button onClick={handleNavigateLogin} style={{ height: '50px', width: '48%', backgroundColor: '#6A743E', color: 'white', borderRadius: '10px', border: 0 }}>
              Voltar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App