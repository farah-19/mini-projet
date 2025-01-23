import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginSuccess } from '../../redux/slices/authSlice'; 

const Login = () => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire');
      const user = response.data.find(
        (u) => u.pseudo === pseudo && u.MotDePasse === password
      );

      if (user) {
        dispatch(loginSuccess(user));
        localStorage.setItem('user', JSON.stringify(user));
        console.log('ID utilisateur récupéré :', user.id); 
        navigate('/Layout'); 
      } else {
        setError('Pseudo ou mot de passe incorrect');
      }
    } catch (err) {
      setError('Erreur lors de la connexion');
    }
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '150px',
      backgroundColor: '#f5f5f5', 
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: { color: '#333', marginBottom: '20px' },
    input: {
      display: 'block',
      margin: '10px auto',
      padding: '10px',
      width: '80%',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#fff',
      color: '#333',
    },
    inputFocus: { outline: 'none', borderColor: '#4caf50' },
    button: {
      padding: '10px 20px',
      cursor: 'pointer',
      marginTop: '10px',
      backgroundColor: '#333', 
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: { backgroundColor: '#4caf50' },
    error: { color: 'red', marginTop: '10px' },
    link: {
      marginTop: '20px',
      display: 'block',
      color: '#007bff',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    linkHover: { color: '#0056b3' },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <input
        type="text"
        placeholder="Pseudo"
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button
        onClick={handleLogin}
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Se Connecter
      </button>
      {error && <div style={styles.error}>{error}</div>}
      <a
        href="/create-account"
        style={styles.link}
        onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
        onMouseOut={(e) => (e.target.style.color = styles.link.color)}
      >
        Créer un compte
      </a>
    </div>
  );
};

export default Login;
