import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [formData, setFormData] = useState({
    pseudo: '',
    nom: '',
    prenom: '',
    email: '',
    MotDePasse: '',
    age: '',
    couleur: '',
    admin: false ,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.pseudo || !formData.nom || !formData.prenom || !formData.email || !formData.MotDePasse || !formData.age || !formData.couleur) {
        setError('Tous les champs sont obligatoires.');
        return;
      }

      await axios.post('https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire', formData);
      setSuccess(true);
      setError('');
      setFormData({
        pseudo: '',
        nom: '',
        prenom: '',
        email: '',
        MotDePasse: '',
        age: '',
        couleur: '',
        admin: false,
      });
    } catch (err) {
      setError('Erreur lors de l\'ajout de l\'utilisateur');
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>Ajouter un utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="pseudo" placeholder="Pseudo" value={formData.pseudo} onChange={handleChange} style={styles.input} />
        <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} style={styles.input} />
        <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} style={styles.input} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={styles.input} />
        <input type="text" name="password" placeholder="Mot de passe" value={formData.MotDePasse} onChange={handleChange} style={styles.input} />
        <input type="number" name="age" placeholder="Âge" value={formData.age} onChange={handleChange} style={styles.input} />
        <input type="text" name="couleur" placeholder="Couleur préférée" value={formData.couleur} onChange={handleChange} style={styles.input} />
        <button type="submit" style={styles.button}>Ajouter Utilisateur</button>
      </form>
      {error && <div style={styles.error}>{error}</div>}
      {success && <div style={styles.success}>Utilisateur ajouté avec succès !</div>}
    </div>
  );
};

const styles = {
  formContainer: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  input: {
    display: 'block',
    margin: '10px auto',
    padding: '10px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  success: {
    color: 'green',
    marginTop: '10px',
  },
};

export default AddUser;
