import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      setUserId(user.id);
    } else {
      alert("Utilisateur non connecté !");
    }
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire');
      const userRequests = response.data.filter((request) => request.utilisateurId === userId);
      setRequests(userRequests);
    } catch (error) {
      alert('Impossible de récupérer les demandes.');
    }
  };

  useEffect(() => {
    if (userId) fetchRequests();
  }, [userId]);

  return (
    <div style={styles.requestList}>
      <h2>Mes Demandes</h2>
      {requests.length === 0 ? (
        <p>Aucune demande trouvée.</p>
      ) : (
        <ul style={styles.requestItems}>
          {requests.map((request) => (
            <li key={request.id} style={styles.requestItem}>
              <h3>{request.titre}</h3>
              <p>{request.description}</p>
              <p><strong>Statut :</strong> {request.statut}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  requestList: {
    padding: '20px',
  },
  requestItems: {
    listStyleType: 'none',
    padding: '0',
  },
  requestItem: {
    border: '1px solid #ddd',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default RequestList;
