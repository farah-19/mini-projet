import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminRequest() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = () => {
    axios.get('https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire')
      .then(res => {
        setRequests(res.data);
      })
      .catch(err => console.error(err));
  };

  const changeStatus = (id, newStatus) => {
    axios.put(`https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${id}`, {
      status: newStatus
    }).then(() => fetchRequests())
      .catch(err => console.error(err));
  };

  const renderActions = (request) => (
    <div>
      <button style={styles.approveButton} onClick={() => changeStatus(request.id, 'Approuvée')}>Approuver</button>
      <button style={styles.rejectButton} onClick={() => changeStatus(request.id, 'Rejetée')}>Rejeter</button>
      <button style={styles.pendingButton} onClick={() => changeStatus(request.id, 'En attente')}>Remettre en attente</button>
    </div>
  );

  const renderRequest = (request) => (
    <li key={request.id} style={styles.requestItem}>
      <p><strong>{request.nom} {request.prenom}</strong> ({request.Pays})</p>
      <img src={request.photo} alt="User Avatar" style={styles.avatar} />
      <p><strong>Titre:</strong> {request.titre}</p>
      <p><strong>Description:</strong> {request.description}</p>
      <p><strong>Statut:</strong> {request.status}</p>
      <p><strong>Date de début:</strong> {request.startDate}</p>
      <p><strong>Date de fin:</strong> {request.endDate}</p>
      {renderActions(request)}
    </li>
  );

  // Filter requests to show only users who have a "demande" (non-empty titre or description)
  const filteredRequests = requests.filter(request => request.titre || request.description);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Demandes</h2>
      <ul style={styles.requestList}>
        {filteredRequests.map(renderRequest)}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333'
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px'
  },
  requestList: {
    listStyleType: 'none',
    padding: 0
  },
  requestItem: {
    marginBottom: '1rem',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  avatar: {
    width: '50px',
    borderRadius: '50%'
  },
  approveButton: {
    margin: '5px',
    padding: '5px 10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  rejectButton: {
    margin: '5px',
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  pendingButton: {
    margin: '5px',
    padding: '5px 10px',
    backgroundColor: '#ffc107',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default AdminRequest;
