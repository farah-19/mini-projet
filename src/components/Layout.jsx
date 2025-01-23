import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import HeaderSection from './HeaderSection';
import NavigationBar from './NavigationBar';
import Index from './Index';
import Footer from './Footer';

const styles = {
  layoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',  
  },
  contentWrapper: {
    display: 'flex',
    flex: 1, 
  },
  sidebar: {
    width: '25%',
    borderRight: '1px solid #ccc',
    padding: '1rem',
  },
  mainContent: {
    flex: 1,  
    padding: '1rem',
  },
};

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login'); 
    }
  }, [navigate]);

  if (!user) {
    return <div>Chargement...</div>;  
  }

  return (
    <div style={styles.layoutContainer}>
      <HeaderSection />
      <NavigationBar />
      <div style={styles.contentWrapper}>
        {/* Sidebar fixed with Index */}
        <aside style={styles.sidebar}>
          <Index />
        </aside>

        {/* Dynamic content for routes */}
        <main style={styles.mainContent}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
