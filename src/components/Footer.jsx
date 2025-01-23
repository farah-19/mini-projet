import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      background: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '10px 20px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
    },
    links: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
    },
    link: {
      margin: '0 10px',
      color: '#fff',
      textDecoration: 'none',
    },
  };

  return (
    <footer style={styles.footer}>
      <div>© 2025 Farah's app</div>
      <div style={styles.links}>
        <a href="https://facebook.com" style={styles.link}>
          Facebook
        </a>
        <a href="https://instagram.com" style={styles.link}>
          Instagram
        </a>
        <a href="https://twitter.com" style={styles.link}>
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
