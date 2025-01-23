import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);

  const styles = {
    content: {
      display: 'flex',
      alignItems: 'center',
      padding: '30px', 
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      minHeight: '300px', 
    },
    avatar: {
      borderRadius: '50%',
      width: '150px',
      height: '150px',
      marginRight: '30px', 
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around', 
      gap: '20px', 
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#349a60',
      marginBottom: '15px',
    },
    field: {
      fontSize: '20px',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={styles.content}>
      <img src={user.photo} alt="User Avatar" style={styles.avatar} />
      <div style={styles.info}>
        <div style={styles.title}>Mon Profil</div>
        <div style={styles.field}>Nom : {user.prenom} {user.nom}</div>
        <div style={styles.field}>Âge : {user.age}</div>
        <div style={styles.field}>Email : {user.email}</div>
        <div style={styles.field}>Pays : {user.Pays}</div>
        <div style={styles.field}>Couleur Préférée : {user.couleur}</div>
      </div>
    </div>
  );
};

export default UserProfile;
