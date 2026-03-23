import './App.css'
import './List'
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()

  const handleNavigateList = () => {
    navigate('/List')
  }

  return (
    <>
      <div style={{ height: '100vh', width: '100vw', backgroundColor: '#A3B18C', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ backgroundColor: '#F1F4E6', height: '450px', width: '350px', borderRadius: '15px', padding: '20px' }}>
          <h1 style={{ color: '#6A743E', textAlign: 'center'}}>Cadastro de Produtos</h1>
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontWeight: 'bold' }}>Nome: </span><br />
            <input placeholder='Digite o nome:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
            <span style={{ fontWeight: 'bold' }}>Descrição: </span><br />
            <input placeholder='Digite a descrição:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
            <span style={{ fontWeight: 'bold' }}>Preço: </span><br />
            <input placeholder='Digite o preço em reais:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
            <span style={{ fontWeight: 'bold' }}>Estoque: </span><br />
            <input placeholder='Digite a quantidade em estoque:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
            <span style={{ fontWeight: 'bold' }}>Categoria: </span><br />
            <input placeholder='Digite a categoria:' style={{ height: '30px', width: '100%', borderRadius: '5px', border: 0, backgroundColor: '#D1D9B6' }} /><br /><br />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={handleNavigateList} style={{ height: '50px', width: '48%', backgroundColor: '#6A743E', color: 'white', borderRadius: '10px', border: 0 }}>
              Cadastrar produto
            </button>
            <button onClick={handleNavigateList} style={{ height: '50px', width: '48%', backgroundColor: '#6A743E', color: 'white', borderRadius: '10px', border: 0 }}>
              Listar produtos
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App