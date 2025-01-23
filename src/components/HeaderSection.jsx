import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';

const HeaderSection = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userPhoto = user && user.photo ? user.photo : 'default-photo-url';

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const styles = {
    header: {
      background: '#333',
      color: '#fff',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    userInfo: { 
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      marginRight: '10px',
    },
    button: {
      padding: '5px 10px',
      cursor: 'pointer',
      background: 'red',
      color: '#fff',
      border: 'none',
      borderRadius : '50px',
    },
  };

  return (
    <header style={styles.header}>
        <>
          <div style={styles.userInfo}>
            {userPhoto && <img src={userPhoto} alt="User Avatar" style={styles.avatar} />}
            <span>{user.prenom} {user.nom}</span>
          </div>
          <button onClick={handleLogout} style={styles.button}>
            Logout
          </button>
        </>
    </header>
  );
};

export default HeaderSection;
