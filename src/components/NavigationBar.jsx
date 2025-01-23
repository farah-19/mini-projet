import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user?.admin;
  const notAdmin = !isAdmin;


  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'center',
      background: '#f4f4f4',
      padding: '10px',
    },
    link: {
      margin: '0 15px',
      textDecoration: 'none',
      color: '#333',
    },
  };

  return (
    <nav style={styles.nav}>
      <NavLink
        to=""
        style={styles.link}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Accueil
      </NavLink>
      <NavLink
        to="profile"
        style={styles.link}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Voir Mon Profile
      </NavLink>
      <NavLink
        to="modify-color"
        style={styles.link}
        className={({ isActive }) => (isActive ? 'active' : '')}
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
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Liste Utilisateurs
          </NavLink>
          <NavLink
            to="add-user"
            style={styles.link}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Ajouter Utilisateur
          </NavLink>
          <NavLink
              to="admin-request"
              style={styles.link}
              activeStyle={styles.activeLink}>
              Les Demandes
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
