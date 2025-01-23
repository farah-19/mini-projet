import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateColor } from '../../redux/slices/userSlice';
import axios from 'axios'; 

const ModifyColor = () => {
  const [color, setColor] = useState('');
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();


  useEffect(() => {
    if (user) {
      setColor(user.couleur || '');
    }
  }, [user]);

  const handleColorChange = async () => {
    dispatch(updateColor(color));

    try {
      await axios.put(`https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${user.id}`, {
        couleur: color,
      });
      
      document.body.style.backgroundColor = color;

    } catch (error) {
      console.error('Error updating color:', error);
    }
  };

  const styles = {
    container: { textAlign: 'center', marginTop: '0' },
    select: { padding: '10px', margin: '10px 0' },
    button: { padding: '10px 20px', cursor: 'pointer' },
  };

  return (
    <div style={styles.container}>
      <select
        onChange={(e) => setColor(e.target.value)}
        value={color}
        style={styles.select}
      >
        <option value="">Select a color</option>
        <option value="white">white</option>
        <option value="#f64949">Red</option>
        <option value="#8dad76">Green</option>
        <option value="#f6aae3">Pink</option>
        <option value="#c4c4c4">Grey</option>
        <option value="#9ab8f8">blue</option>
      </select>
      <button onClick={handleColorChange} style={styles.button}>
        Change Color
      </button>
    </div>
  );
};

export default ModifyColor;
