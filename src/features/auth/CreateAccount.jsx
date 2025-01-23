import React, { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {
  const [form, setForm] = useState({
    id:'',
    pseudo: '',
    prenom: '',
    nom: '',
    email:'',
    admin: false,
    MotDePasse: '',
    couleur: '',
    age: '',
  });
  const [error, setError] = useState('');


  const handleSubmit = async () => {
  
    if (form.pseudo === '' && form.prenom === ''  && form.nom === '' && form.email === '' && form.MotDePasse === '' && form.couleur === '' && form.age === '' ) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
  
    try {
      await axios.post('https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire', form);
      setError('');
      alert('Compte créé avec succès !');
    } catch (err) {
      setError('Erreur lors de la création du compte');
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '50px auto',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: { color: '#333', marginBottom: '20px' }, 
    input: {
      display: 'block',
      margin: '10px auto',
      padding: '10px',
      width: '90%',
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
    checkboxLabel: { textAlign: 'left', marginTop: '10px' },
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
      <h2 style={styles.title}>Créer un compte</h2>
      <input
        type="text"
        placeholder="Pseudo"
        value={form.pseudo}
        onChange={(e) => setForm({ ...form, pseudo: e.target.value })}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Nom"
        value={form.nom}
        onChange={(e) => setForm({ ...form, nom: e.target.value })}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Prenom"
        value={form.prenom}
        onChange={(e) => setForm({ ...form, prenom: e.target.value })}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Couleur"
        value={form.couleur}
        onChange={(e) => setForm({ ...form, couleur: e.target.value })}
        style={styles.input}
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        style={styles.input}
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={form.MotDePasse}
        onChange={(e) => setForm({ ...form, MotDePasse: e.target.value })}
        style={styles.input}
        required
      />
      <div style={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={form.admin}
          onChange={(e) => setForm({ ...form, admin: e.target.checked })}
        />
        <label>Est-ce un administrateur ?</label>
      </div>
      <button
        onClick={handleSubmit}
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Créer un compte
      </button>
      <a
        href="/"
        style={styles.link}
        onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
        onMouseOut={(e) => (e.target.style.color = styles.link.color)}
      >
        Vous avez deja un Compte 
      </a>
      {error && <div style={styles.error}>{error}</div>}
    </div>
  );
};

export default CreateAccount;
