import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddRequest = () => {
  const [requestTitle, setRequestTitle] = useState('');
  const [requestDescription, setRequestDescription] = useState('');
  const [userId, setUserId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      setUserId(user.id);
    } else {
      alert('Utilisateur non connecté !');
    }
  }, []);

  const handleAddRequest = async () => {
    if (!requestTitle || !requestDescription || !startDate || !endDate) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    if (!userId) {
      alert('Utilisateur non connecté !');
      return;
    }

    try {
      const response = await axios.post('https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire', {
        name: `User-${userId}`,
        titre: requestTitle,
        description: requestDescription,
        statut: 'En attente',
        startDate,
        endDate,
      });

      alert('Demande ajoutée avec succès !');
      setRequestTitle('');
      setRequestDescription('');
      setStartDate('');
      setEndDate('');
      console.log('Réponse API :', response.data);
    } catch (error) {
      console.error('Erreur lors de l’ajout de la demande :', error);
      alert('Échec de l’ajout de la demande.');
    }
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
    },
    form: {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
    input: {
      padding: '10px',
      margin: '5px',
      width: '300px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
    },
    textarea: {
      padding: '10px',
      margin: '5px',
      width: '300px',
      height: '100px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      cursor: 'pointer',
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ajouter une Demande</h2>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Titre de la demande"
          value={requestTitle}
          onChange={(e) => setRequestTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Description de la demande"
          value={requestDescription}
          onChange={(e) => setRequestDescription(e.target.value)}
          style={styles.textarea}
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddRequest} style={styles.button}>
          Ajouter la Demande
        </button>
      </div>
    </div>
  );
};

export default AddRequest;
