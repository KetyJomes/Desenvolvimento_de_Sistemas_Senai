import { useEffect, useState } from 'react'
import '../App.css'
import './List'
import { useNavigate, useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from "axios";

function UpdateProduct() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [category, setCategory] = useState("")

  const navigate = useNavigate()

  const {id} = useParams()

    const fetchProductData = async (id) => {
        const response = await axios.get(`http://localhost:8080/api/product/get/${id}`)
        console.log(response.data)
        setName(response.data.product.name)
        setDescription(response.data.product.description)
        setPrice(response.data.product.price)
        setStock(response.data.product.stock)
        setCategory(response.data.product.category)
    }

    const update = async () => {
        Swal.fire({
            title: "Confirmar atualização?",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar"
          }).then(async (result) => {
            if (result.isConfirmed) {
                try{
                    await axios.put(`http://localhost:8080/api/product/update/${id}`, {
                        name,
                        description,
                        category,
                        stock,
                        price
                    })
                    Swal.fire("Atualizado com sucesso", "", "success");
                    navigate("/list")
                }
                catch{
                    Swal.fire("Erro!", "", "error");
                }
            }
          });
}

    useEffect(() => {
        fetchProductData(id)
    }, [])

  return (
    <>
      <div style={{ height: '100vh', width: '100vw', backgroundColor: '#A3B18C', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ backgroundColor: '#F1F4E6', height: '450px', width: '350px', borderRadius: '15px', padding: '20px' }}>
          <h1 style={{ color: '#6A743E', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '28px' }}>
          Atualizar Produto
         </h1>
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontWeight: 'bold' }}>Nome: </span><br />
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Digite o nome:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
            <span style={{ fontWeight: 'bold' }}>Descrição: </span><br />
            <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Digite a descrição:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
            <span style={{ fontWeight: 'bold' }}>Preço: </span><br />
            <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Digite o preço em reais:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
            <span style={{ fontWeight: 'bold' }}>Estoque: </span><br />
            <input value={stock} onChange={(e) => setStock(e.target.value)} placeholder='Digite a quantidade em estoque:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
            <span style={{ fontWeight: 'bold' }}>Categoria: </span><br />
            <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Digite a categoria:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <button onClick={update} style={buttonStyleUpdate}>
            Atualizar
          </button>
          </div>
        </div>
      </div>
    </>
  )
}

const buttonStyleUpdate = {
    height: '50px',
    width: '70px', 
    backgroundColor: '#5A6B35' ,
    color: 'white',
    borderRadius: '10px',
    border: 0
  }

export default UpdateProduct