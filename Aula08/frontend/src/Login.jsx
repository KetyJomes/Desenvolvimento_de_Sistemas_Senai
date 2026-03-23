import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function Login() {
  const [login, setLogin] = useState([])

  const navigate = useNavigate()

  const fetchLogin = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/product/products')
      setLogin(response.data.response)
    } catch (error) {
      console.error("Erro ao buscar dados:", error)
    }
  }

  useEffect(() => {
    fetchLogin()
  }, [])

  const handleNavigateHome = () => {
    navigate('/')
  }

  const handleNavigateProduct = () => {
    navigate('/Product')
  }

  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#A3B18C', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      <div style={{ backgroundColor: '#F1F4E6', height: '450px', width: '350px', borderRadius: '15px', padding: '20px' }}>
        
        <h1 style={{ color: '#6A743E', textAlign: 'center'}}>Login</h1>

        <div style={{ marginBottom: '20px' }}>
          <span><b>Email:</b></span><br />
          <input placeholder='Digite seu email:' style={inputStyle} /><br /><br />

          <span><b>Senha:</b></span><br />
          <input type="password" placeholder='Digite sua senha:' style={inputStyle} /><br /><br />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          
          <button onClick={handleNavigateProduct} style={buttonStyle}>
            Entrar
          </button>

          <button onClick={handleNavigateHome} style={buttonStyle}>
            Cadastro
          </button>

        </div>

      </div>
    </div>
  )
}

const inputStyle = {
  height: '30px',
  width: '100%',
  borderRadius: '5px',
  border: 0,
  backgroundColor: '#D1D9B6'
}

const buttonStyle = {
  height: '50px',
  width: '48%',
  backgroundColor: '#6A743E',
  color: 'white',
  borderRadius: '10px',
  border: 0
}

export default Login