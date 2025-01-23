import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser, updateUser } from '../../utils/api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [editingUser, setEditingUser] = useState(null); // Utilisateur en cours de modification
  const [formData, setFormData] = useState({ pseudo: '', email: '' , nom : '' ,prenom : '', age : ''});

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (err) {
        setError('Failed to load users');
      }
    };

    getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError('Failed to delete user');
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user.id); // Définir l'ID de l'utilisateur à modifier
    setFormData({ pseudo: user.pseudo, email: user.email }); // Préremplir le formulaire
  };

  const handleSave = async () => {
    try {
      const updatedUser = await updateUser(editingUser, formData); // Mise à jour des données
      setUsers(users.map((user) => (user.id === editingUser ? updatedUser : user)));
      setEditingUser(null); // Quitter le mode édition
    } catch (err) {
      setError('Failed to update user');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const styles = {
    container: { padding: '20px', textAlign: 'center' },
    table: { width: '80%', margin: 'auto', borderCollapse: 'collapse' },
    th: { border: '1px solid #ddd', padding: '8px', background: '#f4f4f4' },
    td: { border: '1px solid #ddd', padding: '8px' },
    button: {
      padding: '5px 10px',
      margin: '5px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '3px',
    },
    deleteButton: { background: 'red', color: 'white' },
    editButton: { background: 'blue', color: 'white' },
  };

  return (
    <div style={styles.container}>
      <h2>User List</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {editingUser ? (
        <div>
          <h3>Edit User</h3>
          <input
            type="text"
            name="pseudo"
            value={formData.pseudo}
            style={styles.td}
            onChange={handleChange}
            placeholder="Pseudo"
          />
          <input
            type="text"
            name="nom"
            value={formData.nom}
            style={styles.td}
            onChange={handleChange}
            placeholder="Nom"
          />
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            style={styles.td}
            onChange={handleChange}
            placeholder="Prenom"
          />
          <input
            type="text"
            name="age"
            value={formData.age}
            style={styles.td}
            onChange={handleChange}
            placeholder="Age"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            style={styles.td}
            onChange={handleChange}
            placeholder="Email"
          />
          <button onClick={handleSave} style={styles.button}>Save</button>
          <button onClick={() => setEditingUser(null)} style={styles.button}>Cancel</button>
        </div>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Pseudo</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={styles.td}>{user.id}</td>
                <td style={styles.td}>{user.pseudo}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>
                  <button
                    style={{ ...styles.button, ...styles.editButton }}
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ ...styles.button, ...styles.deleteButton }}
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
