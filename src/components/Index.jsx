import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Index = () => {
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user?.admin;
  const notAdmin = !isAdmin;

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '20px',
      background: '#f9f9f9',
      height: '100vh',
      width: '250px',
    },
    link: {
      margin: '10px 0',
      textDecoration: 'none',
      color: '#333',
    },
    activeLink: { fontWeight: 'bold', color: '#007BFF' },
  };

  return (
    <div style={styles.container}>
      <NavLink to="" style={styles.link} activeStyle={styles.activeLink}>
        Accueil
      </NavLink>
      <NavLink to="profile" style={styles.link} activeStyle={styles.activeLink}>
        Voir Mon Profile
      </NavLink>
      <NavLink
        to="modify-color"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Modifier Couleur
      </NavLink>
      {notAdmin &&(
            <>        
            <NavLink
            to="add-request"
            style={styles.link}
            className={({ isActive }) => (isActive ? 'active' : '')}
            >
            Ajouter une demande
          </NavLink>
          <NavLink
          to="request-list"
          style={styles.link}
          className={({ isActive }) => (isActive ? 'active' : '')}
          >
          Request list
          </NavLink>
          </>
        )}
      {isAdmin && (
        <>
          <NavLink
            to="user-list"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Liste Utilisateurs
          </NavLink>
          <NavLink
            to="add-user"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Ajouter Utilisateur
          </NavLink>
          <NavLink
            to="admin-request"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Les Demandes
          </NavLink>

        </>
      )}
    </div>
  );
};

export default Index;
