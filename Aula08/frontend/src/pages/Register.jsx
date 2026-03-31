import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleNavigateLogin = () => {
    navigate('/login')
  }

  const handleRegister = async () => {
    try{
      await axios.post('http://localhost:8080/api/auth/register', {name,email,password})
      return Swal.fire({
        title: "Sucesso!",
        text: "Usuário cadastrado com sucesso!",
        icon: "Success"
      });
    }
    catch{
      Swal.fire({
        title: "Erro!",
        text: "Não foi possível registrar o usuário!",
        icon: "Success"
      });

    }
    setName("")
    setEmail("")
    setPassword("")

  }

  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#A3B18C', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#F1F4E6', height: '450px', width: '350px', borderRadius: '15px', padding: '20px' }}>
        
        <h1 style={{ color: '#6A743E', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '28px' }}>
          Cadastro
        </h1>

        <div style={{ marginBottom: '20px' }}>
          <span><b>Nome:</b></span><br />
          <input onChange={(e) => setName(e.target.value)} placeholder='Digite seu nome:' style={inputStyle} /><br /><br />

          <span><b>Email:</b></span><br />
          <input onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu email:' style={inputStyle} /><br /><br />

          <span><b>Senha:</b></span><br />
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Digite sua senha:' style={inputStyle} /><br /><br />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleRegister} style={buttonStyle}>
            Cadastrar
          </button>

          <button onClick={handleNavigateLogin} style={buttonStyle}>
            Voltar
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

export default Register