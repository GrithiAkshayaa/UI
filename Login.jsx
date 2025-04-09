import { useLocation, useNavigate } from 'react-router-dom'

function LoginPage() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/device-details', { state: { deviceName: 'Amplifier' } })
  }

  return (
    <div>
      <h2>Login Page</h2>
      <p>IP Address: {state?.ip}</p>
      <p>Username: {state?.username}</p>
      <p>Password: {state?.password}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
